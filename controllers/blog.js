const Blog = require('../models/blog');

exports.blog = (req, res, next) =>{ 
    Blog.findAll().then(blogs =>{
        res.render('blog/blog', {
            myBlog: blogs,
            pageTitle: 'Posts | Welcome to my Blog',
            path: '/blog/blog',
            editing: false,
        });
    }).catch(err =>{
        console.log(err);
    })   

}

exports.blogPost = (req, res, next) => {
    const myBlogId = req.params.blogId
    Blog.findByPk(myBlogId).then(blog => {
        res.render('blog/blog__post', {
            blog: blog,
            pageTitle: 'blog title',
            path: '/blog/blog',
            editing: false,
        })
    }).catch(err => {
        console.log(err);
    })
}




