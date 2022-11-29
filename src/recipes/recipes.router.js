const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')

const recipeServices = require('./recipes.services')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(recipeServices.getAllRecipes)
    .post(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        recipeServices.createRecipe
    )


router.route('/:recipe_id')
    .get(recipeServices.getRecipeById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        recipeServices.patchRecipe
    )
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        recipeServices.deleteRecipe
    )


module.exports = router
