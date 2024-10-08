import express from 'express';
import multer from 'multer';
import mysql from 'mysql';
import path from 'path';

// Create a router
const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./backend/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save file with original name
  },
});

const upload = multer({ storage: storage });

// MySQL connection setup
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeems",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    process.exit(1); // Exit if the database connection fails
  }
  console.log("Connected to MySQL database!");
});

// Routes
router.post("/", upload.array("files[]"), async (req, res) => {
  console.log("Received POST request at /files");
  console.log("Received files:", req.files);
  const response = [];

  try {
    const files = req.files;

    await Promise.all(files.map((file) => {
      return new Promise((resolve, reject) => {
        const sql = "INSERT INTO files (filename, filetype, filesize) VALUES (?, ?, ?)";
        connection.query(sql, [file.originalname, file.mimetype, file.size], (err, result) => {
          if (err || result.affectedRows === 0) {
            console.error(`Failed to insert file: ${file.originalname}`, err);
            response.push({ error: `Failed to insert file: ${file.originalname}` });
            reject(err);
          } else {
            response.push({ success: true, filename: file.originalname });
            resolve();
          }
        });
      });
    }));

    res.json({ success: true, response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/files', (req, res) => {
  console.log("Received GET request at /files");
  const sql = 'SELECT * FROM files';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching files:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

export { router as filesRouter };
