const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiv1controller');
const { auth } = require('../auth/auth');

let mockdb = [
  {
    id: '1',
    author: 'Dude',
    article: 'Lorem Ipsum something something noneerryebusiness',
  },
  {
    id: '2',
    author: 'Dude',
    article: 'Lorem Ipsum something something noneerryebusiness',
  },
  {
    id: '3',
    author: 'Dude',
    article: 'Lorem Ipsum something something noneerryebusiness',
  },
  {
    id: '4',
    author: 'Dude',
    article: 'Lorem Ipsum something something noneerryebusiness',
  },
  {
    id: '5',
    author: 'Dude',
    article: 'Lorem Ipsum something something noneerryebusiness',
  },
];
// @route GET /test
// @desc return a success response
// @acces public
router.get('/test', auth, controller.test_route);

// @route GET /articles
// @desc return all published articles
// @acces public
router.get('/articles', auth, controller.get_articles);

// @route POST /article
// @desc post a new article
// @acces private
router.post('/article', auth, controller.post_article);

// @route PUT /article/:id
// @desc update article with objectid of :id
// @acces private
router.put('/article/:id', auth, controller.put_article_with_id);

// @route DELETE /article/:id
// @desc delete article with objectid of :id
// @acces private
router.delete('/article/:id', auth, controller.delete_article_with_id);

// @route GET /article/:id/comments
// @desc get all comments form artilce with objectid :id
// @acces public
router.get(
  '/article/:id/comments',
  auth,
  controller.get_article_with_id_comments
);

// @route POST /article/:id/comment
// @desc create a comment for artilce with objectid :id
// @acces private
router.post(
  '/article/:id/comment',
  auth,
  controller.post_article_with_id_comment
);

// @route PUT /article/:id/comment
// @desc update a comment for artilce with objectid :id
// @acces private
router.put(
  '/article/:id/comment',
  auth,
  controller.put_article_with_id_comment
);

// @route DELETE /article/:id/comment
// @desc delete a comment for artilce with objectid :id
// @acces private
router.delete(
  '/article/:id/comment',
  auth,
  controller.delete_article_with_id_comment
);

module.exports = router;
