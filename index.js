import path from 'path';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
import staticRoute from './routes/staticRoute.js'; 
import cookieParser from 'cookie-parser'; 
import cors from 'cors';
import { authenticateToken } from './middlewares/auth.js';

// database connection
import connect from './config/db.js';  

import express from 'express';
const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

var corsOptions = {
    origin: 'http://localhost:3000',
    methods:'POST,GET,PATCH,DELETE,HEAD',
}

// middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());    
app.use(cors(corsOptions));

// routes
app.use('/api/products/',authenticateToken , productRoute);
app.use('/user', userRoute);
app.use('/',staticRoute);

const PORT = process.env.PORT || 5001;

// server running
app.listen(PORT, ()=>{
        console.log(`Server running at ${PORT}`);
    })

