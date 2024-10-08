import express from 'express';
import cors from 'cors';
import { adminRouter } from './Routes/AdminRoute.js';
import { EmployeeRouter } from './Routes/EmployeeRoute.js';
import { filesRouter } from "./Routes/FilesRoute.js"


const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use('/auth', adminRouter);
app.use('/employee', EmployeeRouter);
app.use('/files', filesRouter); // Use the filesRouter
app.use('/backend/uploads', express.static('backend/uploads'));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
