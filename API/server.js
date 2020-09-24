const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const server = express();
const port = process.env.PORT || '7000';
const router = require('./routes/router');

// middleware
server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(morgan('short'));
// server.use((req, res, next) => {
//   if (req.query.key) {
//     console.log('pasta');
//     return next();
//   }
//   res.status(400).json({ msg: 'forbidden' });
// });

// router
server.use('/blog', router.blog);
server.use((req, res) => {
  res.json({ msg: '404' });
});

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
  )
  .catch((err) => console.log(err));
