
import express from "express";
import con from "../utils/db.js"; 
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';
import fs from 'fs';


const router = express.Router();

router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * from admin Where email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ loginStatus: false, Error: "Query error" });
    }
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email, id: result[0].id },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie('token', token)
      return res.json({ loginStatus: true });
    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});



router.get('/category', (req, res) => {
  const sql = "SELECT * FROM category";
  con.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ Status: false, Error: "Query Error" });
    }
    return res.json({ Status: true, Result: result });
  });
});

router.post('/add_category', (req, res) => {
  const sql = "INSERT INTO category (`name`) VALUES(?)";
  con.query(sql, [req.body.category], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ Status: false, Error: "Query Error" });
    }
    return res.json({ Status: true });
  });
});

// router.post('/add_employee', (req, res) => {
//   const { name, email, password, address, category_id } = req.body;

//   // Log the request body for debugging
//   console.log('Request body:', req.body);

//   // Validate all required fields
//   if (!name || !email || !password || !address || !category_id) {
//     return res.json({ Status: false, Error: "All fields are required: name, email, password, address, category_id" });
//   }

//   const checkCategorySql = "SELECT id FROM category WHERE id = ?";
//   con.query(checkCategorySql, [category_id], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.json({ Status: false, Error: "Query Error" });
//     }
//     if (result.length === 0) {
//       return res.json({ Status: false, Error: "Invalid category ID" });
//     }

//     bcrypt.hash(password, 10, (err, hash) => {
//       if (err) {
//         console.error(err);
//         return res.json({ Status: false, Error: "Hashing Error" });
//       }

//       const sql = `INSERT INTO employee 
//         (name, email, password, address, category_id) 
//         VALUES (?)`;

//       const values = [name, email, hash, address, category_id];

//       con.query(sql, [values], (err, result) => {
//         if (err) {
//           console.error(err);
//           return res.json({ Status: false, Error: err });
//         }
//         return res.json({ Status: true });
//       });
//     });
//   });
// });
router.post('/add_employee', (req, res) => {
  const { name, email, password, address, category_id } = req.body;

  // Log the request body for debugging
  console.log('Request body:', req.body);

  // Validate all required fields
  if (!name || !email || !password || !address || !category_id) {
    return res.json({ Status: false, Error: "All fields are required: name, email, password, address, category_id" });
  }

  const checkCategorySql = "SELECT id FROM category WHERE id = ?";
  con.query(checkCategorySql, [category_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.json({ Status: false, Error: "Query Error" });
    }
    if (result.length === 0) {
      return res.json({ Status: false, Error: "Invalid category ID" });
    }

    const sql = `INSERT INTO employee 
      (name, email, password, address, category_id) 
      VALUES (?, ?, ?, ?, ?)`;

    const values = [name, email, password, address, category_id]; // Use the original password

    con.query(sql, values, (err, result) => { // Pass values directly
      if (err) {
        console.error(err);
        return res.json({ Status: false, Error: err });
      }
      return res.json({ Status: true });
    });
  });
});


// router.get('/employee', (req, res) => {
//   const sql = "SELECT * FROM employee";
//   con.query(sql, (err, result) => {
//       if(err) return res.json({Status: false, Error: "Query Error"})
//       return res.json({Status: true, Result: result})
//   })
// })
router.get('/employee', (req, res) => {
  const sql = `
    SELECT employee.id, employee.name, employee.email, employee.address, category.name AS category_name 
    FROM employee 
    JOIN category ON employee.category_id = category.id
  `;
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});


router.get('/employee/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM employee WHERE id = ?";
  con.query(sql,[id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
})

router.put('/edit_employee/:id', (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE employee 
      set name = ?, email = ?,address = ?, category_id = ? 
      Where id = ?`
  const values = [
      req.body.name,
      req.body.email,
      req.body.address,
      req.body.category_id
  ]
  con.query(sql,[...values, id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

router.delete('/delete_employee/:id', (req, res) => {
  const id = req.params.id;
  const sql = "delete from employee where id = ?"
  con.query(sql,[id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})


router.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({Status: true})
})

export { router as adminRouter };
