const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/*
const uri = process.env.DATABASE_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
*/

const authMiddleware = require('./middlewares/auth');
const apiRoutes = require('./routes/api');

app.use('/api', authMiddleware, apiRoutes);

app.get("/", (req, res) => {
  // res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});