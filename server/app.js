// Packages
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

require('dotenv').config();

// Routes
import shopRouter from './routes/shop.routes.js'

const app = express();
const PORT = 1000;

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Use Routes
app.use(shopRouter)

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
  mongoose.connect('mongodb://localhost:27017/shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
})