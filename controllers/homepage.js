const Portfolio = require('../models/portfolio');

exports.homePage = (req, res, next) =>{ 
    Portfolio.findAll().then(portfolios =>{
        res.render('homepage/home', {
            folio: portfolios,
            pageTitle: 'Home | Webizra Digital',
            path: '/',
        });
    }).catch(err =>{
        console.log(err);
    })   

}

exports.getPortfolio = (req, res, next) => {
    const folioId = req.params.portfolioId
    Portfolio.findByPk(folioId).then(portfolio => {
        res.render('homepage/portfolio__detail', {
            portfolio: portfolio,
            pageTitle: portfolio.title,
            path: '/'
        })
    }).catch(err => {
        console.log(err);
    })
}
