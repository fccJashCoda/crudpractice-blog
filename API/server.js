const express = require('express');
const server = express();

const port = process.env.PORT || '7000';
const router = require('./routes/router');

// middleware
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
// server.use((req, res, next) => {
//   if (req.query.key) {
//     console.log('pasta');
//     return next();
//   }
//   res.status(400).json({ msg: 'forbidden' });
// });

// router
server.use('/v1', router.v1);
server.use((req, res) => {
  res.json({ msg: '404' });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
