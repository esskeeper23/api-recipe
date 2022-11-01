const router = require('express').Router()

const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const ingredientServices = require('./ingredients.services')


router.route('/')
    .get(ingredientServices.getAllIngredients)
    .post(
        passport.authenticate('jwt', {session: false}),
        ingredientServices.postIngredient
    )




router.route('/:id')
    .get(ingredientServices.getIngedrientById)
    .delete(
        passport.authenticate('jwt', {session: false}),
        ingredientServices.deleteIngredient
    )


module.exports = router