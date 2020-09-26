const Article = require('../models/article');

// @route GET /test
// @desc return a success response
// @access public
exports.test_route = async (req, res, next) => {
  let payload;
  try {
    payload = await Article.find();
    if (!payload.length) throw new Error('nothing found');
    console.log(typeof payload);
    res.status(200).json({ msg: 'success', payload });
  } catch (error) {
    payload = error;
    res.status(400).json({ msg: 'failure', payload });
  }
};

// @route POST /test
// @desc return a success response
// @access public
exports.post_test_route = (req, res, next) => {
  const { author, title, body } = req.body;
  const article = new Article({
    author,
    title,
    body,
  });
  article.save(() => console.log('article saved'));
  res.status(200).json({ msg: 'success' });
};

// @route GET /articles
// @desc return all published articles
// @access public
exports.get_articles = async (req, res, next) => {
  let payload;
  try {
    payload = await Article.find();
    if (!payload.length) throw new Error('nothing found');
    res.status(200).json({ msg: 'success', payload });
  } catch (error) {
    console.log(error);
    payload = error.message;
    res.status(400).json({ msg: 'failure', payload });
  }
};

// @route GET /article/:id
// @desc return a specific article
// @access public
exports.get_article_with_id = async (req, res, next) => {
  let payload;
  try {
    payload = await Article.findOne({ _id: req.params.id });
    setTimeout(() => res.status(200).json({ msg: 'success', payload }), 2000);
  } catch (error) {
    res.status(400).json({ msg: 'failure', payload: 'Article not found' });
  }
};

// @route POST /article
// @desc post a new article
// @access private
exports.post_article = (req, res, next) => {
  // mockdb.push(req.body);
  // const payload = mockdb;
  let payload;
  try {
    const { author, title, body } = req.body;
    if (!author || !title || !body) throw new Error('Missing data');
    const article = new Article({
      author,
      title,
      body,
    });
    article.save();
    payload = 'message saved';
    res.status(200).json({ msg: 'success', payload });
  } catch (error) {
    payload = error.message;
    res.status(404).json({ msg: 'failure', payload });
  }
};

// @route PUT /article/:id
// @desc update article with objectid of :id
// @access private
exports.put_article_with_id = (req, res, next) => {
  console.log(req.params.id);
  for (let i = 0; i < mockdb.length; i++) {
    if (mockdb[i].id === req.params.id) {
      mockdb[i] = req.body;
      console.log(mockdb[i]);
    }
  }
  console.log(mockdb);
  const payload = mockdb;
  res.json({ msg: 'success', payload });
};

// @route DELETE /article/:id
// @desc delete article with objectid of :id
// @access private
exports.delete_article_with_id = (req, res, next) => {
  mockdb = mockdb.filter((article) => article.id !== req.params.id);
  const payload = mockdb;
  res.json({
    msg: 'success',
    payload,
  });
};

// @route GET /article/:id/comments
// @desc get all comments from article with objectid :id
// @access public
exports.get_article_with_id_comments = (req, res, next) => {
  const [article] = mockdb.filter((article) => article.id === req.params.id);
  const payload = article.comments ? article.comments : 'No comments found';
  res.json({ msg: 'success', payload });
};

// @route POST /article/:id/comment
// @desc create a comment for article with objectid :id
// @access private
exports.post_article_with_id_comment = (req, res, next) => {
  for (let i = 0; i < mockdb.length; i++) {
    if (mockdb[i].id === req.params.id) {
      mockdb[i].comments = req.body.message;
    }
  }
  const payload = mockdb;
  res.json({ msg: 'success', payload });
};

// @route PUT /article/:id/comment
// @desc update a comment for article with objectid :id
// @acces private
exports.put_article_with_id_comment = (req, res, next) => {
  for (let i = 0; i < mockdb.length; i++) {
    if (mockdb[i].id === req.params.id) {
      mockdb[i].comments = req.body.message;
    }
  }
  const payload = mockdb;
  res.json({ msg: 'success', payload });
};

// @route DELETE /article/:id/comment
// @desc delete a comment for artilce with objectid :id
// @acces private
exports.delete_article_with_id_comment = (req, res, next) => {
  for (let i = 0; i < mockdb.length; i++) {
    if (mockdb[i].id === req.params.id) {
      mockdb[i].comments = '';
    }
  }
  const payload = mockdb;
  res.json({ msg: 'success', payload });
};

// implement some form of authentication
// do not use passport js nor jwt
// those will be implemented later
