//admin portfolio
const Portfolio = require('../models/portfolio')
const Blog = require('../models/blog');
const Club = require('../models/club');
const path = require('path');

exports.homePage = (req, res, next) =>{ 
    Portfolio.findAll().then(portfolios =>{
        res.render('homepage/home', {
            folio: portfolios,
            pageTitle: 'Home | Webizra Digital',
            path: '/'
        });
    }).catch(err =>{
        console.log(err);
    })   
}


exports.getAddPortfolio = (req, res, next) => {
    res.render('admin/edit__portfolio', {
        pageTitle: 'Add Portfolio',
        path: '/admin/addPortfolio',
        editing: false,
    });
};

exports.postAddPortfolio = (req, res, next) => {
    const title = req.body.title
    const image = req.file
    const description = req.body.description
    const client = req.body.client
    const service = req.body.service
    const year = req.body.year
    const link = req.body.link
    if (!image) {
        return res.status(422).render('admin/edit__portfolio', {
            pageTitle: 'Add Portfolio',
            path: '/admin/addPortfolio',
            editing: false,
            portfolio: {
                title: title,
                description: description,
                client: client,
                service: service,
                year: year,
                link: link,
            },
        })
    }
    const imageUrl = image.path
    Portfolio.create({
        title: title,
        image: imageUrl,
        description: description,
        client: client,
        service: service,
        year: year,
        link: link,
        // userId: req.user.id
    }).then(user => {
        console.log ('created Portfolio')
        res.redirect('/')
    }).catch(err => {
        console.log(err);
    });
};

exports.getEditPortfolio = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/')
    }
    const folioId = req.params.portfolioId;
    Portfolio.findByPk(folioId).then(portfolio => {
        if (!portfolio) {
            return res.redirect('/')
        }
        res.render('admin/edit__portfolio', {
            pageTitle: 'Edit Portfolio',
            path: '/admin/editPortfolio',
            editing: editMode,
            portfolio: portfolio
        });
    }).catch(err => {
        console.log (err)
    });
};

exports.postEditPortfolio = (req, res, next) => {
    const folioId = req.body.portfolioId
    const updatedTitle = req.body.title
    const updatedImage = req.file
    const updatedDescription = req.body.description
    const updatedClient = req.body.client
    const updatedService = req.body.service
    const updatedYear = req.body.year
    const updatedLink = req.body.link
    Portfolio.findByPk(folioId).then(portfolio => {
        portfolio.title = updatedTitle
        portfolio.image = updatedImage
        portfolio.description = updatedDescription
        portfolio.client = updatedClient
        portfolio.service = updatedService
        portfolio.year = updatedYear
        portfolio.link = updatedLink
        return portfolio.save();
    }).then(result => {
        console.log ('portfolio updated')
        res.redirect('/');
    }).catch(err => {
        console.log (err)
    });
};

exports.postDeletePortfolio = (req, res, next) => {
    const folioId = req.body.portfolioId;
    Portfolio.findByPk(folioId).then(portfolio => {
        return portfolio.destroy();
    }).then (result => {
        console.log('portfolio destroyed')
        res.redirect('/')
    }).catch(err => {
        console.log(err)
    });
};

// admin blog
exports.getAddBlog = (req, res, next) => {
    res.render('blog/edit__blog', {
        pageTitle: 'Add a Blog',
        path: '/admin/addBlog',
        editing: false,
    });
}

exports.postAddBlog = (req, res, next) => {
    const title = req.body.title
    const images = req.file
    const content = req.body.content
    const year = req.body.year
    const link = req.body.link
    if (!images) {
        return res.status(422).render('blog/edit__blog', {
            pageTitle: 'Add a Blog',
            path: '/admin/addBlog',
            editing: false,
            blog: {
                title: title,
                content: content,
                year: year,
                link: link,
            },
        })
    }
    const imgUrl = images.path
    Blog.create({
        title: title,
        image: imgUrl,
        content: content,
        year: year,
        link: link,
        // userId: req.user.id
    }).then(user => {
        console.log ('created blog')
        res.redirect('/')
    }).catch(err => {
        console.log(err);
    });
}

exports.getEditBlog = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/')
    }
    const myBlogId = req.params.blogId
    Blog.findByPk(myBlogId).then(blog => {
        if (!blog) {
            return res.redirect('/')
        }
        res.render('blog/edit__blog', {
            pageTitle: 'Edit Blog',
            path: '/admin/editBlog',
            editing: editMode,
            blog: blog
        });
    }).catch(err => {
        console.log (err)
    });
};

exports.postEditBlog = (req, res, next) => {
    const myBlogId = req.body.blogId
    const updatedTitle = req.body.title
    const updatedImage = req.file
    const updatedContent = req.body.content
    const updatedYear = req.body.year
    const updatedLink = req.body.link
    Blog.findByPk(myBlogId).then(blog => {
        blog.title = updatedTitle
        blog.image = updatedImage
        blog.content = updatedContent
        blog.year = updatedYear
        blog.link = updatedLink
        return blog.save();
    }).then(result => {
        console.log ('Blog updated')
        res.redirect('/');
    }).catch(err => {
        console.log (err)
    });
}

// admin gallery
exports.getAddPhoto = (req, res, next) => {
    res.render('club/edit__club', {
        pageTitle: 'Add a Photo',
        path: '/admin/addPhoto',
        editing: false,
    });
}

exports.postAddPhoto = (req, res, next) => {
    const title = req.body.title
    const images = req.file
    if (!images) {
        return res.status(422).render('club/edit__club', {
            pageTitle: 'Add a Photo',
            path: '/admin/addPhoto',
            editing: false,
            club: {
                title: title,
            },
        })
    }
    const imgUrl = images.path
    Club.create({
        title: title,
        image: imgUrl,
        // userId: req.user.id
    }).then(user => {
        console.log ('created club')
        res.redirect('/')
    }).catch(err => {
        console.log(err);
    });
}

exports.getEditPhoto = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/')
    }
    const myPhotoId = req.params.clubId
    Blog.findByPk(myPhotoId).then(club => {
        if (!club) {
            return res.redirect('/')
        }
        res.render('club/edit__club', {
            pageTitle: 'Edit Club',
            path: '/admin/editPhoto',
            editing: editMode,
            club: club
        });
    }).catch(err => {
        console.log (err)
    });
};

exports.postEditPhoto = (req, res, next) => {
    const myClubId = req.body.clubId
    const updatedTitle = req.body.title
    const updatedImage = req.file
    Club.findByPk(myClubId).then(club => {
        club.title = updatedTitle
        club.image = updatedImage
        return club.save();
    }).then(result => {
        console.log ('Club updated')
        res.redirect('/');
    }).catch(err => {
        console.log (err)
    });
}