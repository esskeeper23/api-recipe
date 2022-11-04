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
    .patch(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        ingredientServices.patchIngredient
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        ingredientServices.deleteIngredient
    )
    

router.post('/:ingredient_id/add_to_user', 
    passport.authenticate('jwt', {session: false}),
    ingredientServices.postIngredientToUser
)



module.exports = router