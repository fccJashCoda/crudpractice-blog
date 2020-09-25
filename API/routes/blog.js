const express = require('express');
const router = express.Router();
const controller = require('../controllers/apicontroller');
const { auth } = require('../auth/auth');

// @route GET /test
// @desc return a success response
// @access public
router.get('/test', auth, controller.test_route);
// @route POST /test
// @desc return a success response
// @access public
router.post('/test', auth, controller.post_test_route);

// @route GET /articles
// @desc return all published articles
// @access public
router.get('/articles', auth, controller.get_articles);

// @route GET /article/:id
// @desc return a specific article
// @access public
router.get('/article/:id', auth, controller.get_article_with_id);

// @route POST /article
// @desc post a new article
// @access private
router.post('/article', auth, controller.post_article);

// @route PUT /article/:id
// @desc update article with objectid of :id
// @access private
router.put('/article/:id', auth, controller.put_article_with_id);

// @route DELETE /article/:id
// @desc delete article with objectid of :id
// @access private
router.delete('/article/:id', auth, controller.delete_article_with_id);

// @route GET /article/:id/comments
// @desc get all comments form artilce with objectid :id
// @access public
router.get(
  '/article/:id/comments',
  auth,
  controller.get_article_with_id_comments
);

// @route POST /article/:id/comment
// @desc create a comment for artilce with objectid :id
// @access private
router.post(
  '/article/:id/comment',
  auth,
  controller.post_article_with_id_comment
);

// @route PUT /article/:id/comment
// @desc update a comment for artilce with objectid :id
// @access private
router.put(
  '/article/:id/comment',
  auth,
  controller.put_article_with_id_comment
);

// @route DELETE /article/:id/comment
// @desc delete a comment for artilce with objectid :id
// @access private
router.delete(
  '/article/:id/comment',
  auth,
  controller.delete_article_with_id_comment
);

module.exports = router;
