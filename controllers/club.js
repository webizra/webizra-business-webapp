const Club = require('../models/club');

exports.clubPage = (req, res, next) =>{ 
    Club.findAll().then(clubs =>{
        res.render('club/club', {
            myClub: clubs,
            pageTitle: 'Club | Welcome to our Coding Club',
            path: '/club/club',
            editing: false,
        });
    }).catch(err =>{
        console.log(err);
    })    
}

// exports.photoDumb = (req, res, next) => {
//     const myPhotoId = req.params.photoId
//     Club.findByPk(myPhotoId).then(photo => {
//         res.render('club/club', {
//             photo: photo,
//             pageTitle: 'Photo gallery',
//             path: '/club/club',
//             editing: false,
//         })
//     }).catch(err => {
//         console.log(err)
//     })
// }