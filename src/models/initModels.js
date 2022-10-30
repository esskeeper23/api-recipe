const Users = require('./users.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const Recipes = require('./recipes.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')

const initModels = () => {
    //? Users 1:M Recipes
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    //! Users 1:M UsersRecipes
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    //* Users 1:M UsersIngredients
    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    //* Ingredients 1:M UserIngredients
    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)

    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    //* Recipes 1:M instructions
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)

    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)
}


module.exports = initModels