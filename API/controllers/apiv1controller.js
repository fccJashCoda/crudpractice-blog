// @route GET /test
// @desc return a success response
// @acces public
exports.test_route = (req, res, next) => {
  res.status(400).json({ msg: 'success' });
};

// @route GET /articles
// @desc return all published articles
// @acces public
exports.get_articles = (req, res, next) => {
  const payload = mockdb;
  res.json({ msg: 'success', payload });
};

// @route POST /article
// @desc post a new article
// @acces private
exports.post_article = (req, res, next) => {
  mockdb.push(req.body);
  const payload = mockdb;
  res.json({ msg: 'message posted', payload });
};

// @route PUT /article/:id
// @desc update article with objectid of :id
// @acces private
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
// @acces private
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
// @acces public
exports.get_article_with_id_comments = (req, res, next) => {
  const [article] = mockdb.filter((article) => article.id === req.params.id);
  const payload = article.comments ? article.comments : 'No comments found';
  res.json({ msg: 'success', payload });
};

// @route POST /article/:id/comment
// @desc create a comment for article with objectid :id
// @acces private
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
