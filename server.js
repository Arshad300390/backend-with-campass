import Express from "express";
import mongoose from "mongoose";
const app = Express();

import userRoutes from './routes/user.js';
app.use('/user', userRoutes)

const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/arshaddb');
app.listen(port, () => {
    console.log(`server is running on ${port}`)
});