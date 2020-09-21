exports.auth = (req, res, next) => {
  if (req.query.key && req.query.key === '123') {
    console.log('authenticated');
    return next();
  }
  res.status(401).json({ msg: 'forbidden' });
};
