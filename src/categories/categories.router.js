const router = require('express').Router()

const passport = require('passport')
const categoryServices = require('./categories.services')

//? /
//? /:id

router.route('/')
    .get(categoryServices.getAllCategories)
    .post(
        passport.authenticate('jwt', {session: false}),
        categoryServices.postCategory) //TODO hacerla protegida por el admin

router.route('/:id')
    .get(categoryServices.getCategoryById)
    .delete(categoryServices.deteleCategory) //TODO hacerla protegida por el admin

module.exports = router