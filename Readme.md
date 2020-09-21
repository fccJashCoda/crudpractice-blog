# Blog Skeleton

## Main Features

[] The blog must be a template, meaning that it could easily be transformed to be a blog about cars or house plants
[] The blog must rely on an api
[] The api must be protected by a key
[] The Content Management System can either be integrated in the blog or be separate

## Requirement

<!-- API - Articles -->

[] Basic Crud operations for blog articles

<!-- -- Reading -->

- [] Published Article can be read by anyone
- [] Unpublished articles can only be seen by the owner/admin of the blog
<!-- -- Create -->
- [] Only the owner/admin can create articles
<!-- -- Update -->
- [] Only the owner/admin can update articles
<!-- -- Delete -->
- [] Only the owner/admin can delete articles

[] Basic Crud operations for blog article comments

<!-- API - Article Comments -->

[] Basic Crud operations for blog comments

<!-- -- Reading -->

- [] Approved comments can be read by anyone (approved by default)

<!-- -- Create -->

- [] Users must leave a username to make a comment
<!-- -- Update -->
- [] Comments can only be edited by admins
<!-- -- Delete -->
- [] Only the admin can delete comments

<!-- -- Routes -->

- [] public GET articles
- [] public GET article/:id
- [] private GET unpublishedArticles
- [] private POST article
- [] private PUT article
- [] private DELETE article
- [] private GET article/:id/comments
- [] public POST article/:id/comment
- [] private PUT article/:id/comment
- [] private DELETE article/:id/comment
