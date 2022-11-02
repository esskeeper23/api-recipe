const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')

const ingredientServices = require('./ingredients.services')
require('../middlewares/auth.middleware')(passport)



router.route('/')
    .get(ingredientServices.getAllIngredients)
    .post(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        ingredientServices.postIngredient
    )




router.route('/:ingredient_id')
    .get(ingredientServices.getIngedrientById)
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        ingredientServices.deleteIngredient
    )


module.exports = router


adminValidate