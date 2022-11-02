const ingredientControllers = require('./ingredients.controllers')

const getAllIngredients = (req, res) => {
    ingredientControllers.getAllIngredients()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getIngedrientById = (req, res) => {
    const id = req.params.ingredient_id
    ingredientControllers.getIngredientById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            }else {
                res.status(400).json({message: `ID: ${id}, not exists`})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postIngredient = (req, res) => {
    const {name, typeId, urlImg} = req.body

    if(name && typeId){
        ingredientControllers.createIngredient({
            name, typeId, urlImg
        })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                name: 'string',
                typeId: 'number',
                urlImg: 'string'
            }
        })
    }
}

const patchIngredient = (req, res) => {
    const { name, typeId, urlImg } = req.body
    const id = req.params.ingredient_id
    ingredientControllers.updateIngredient(id, {name, typeId, urlImg})
        .then(data => {
            if(data[0]){
                res.status(200).json({message: `Ingredient with ID: ${id} edited succesfully`})
            } else {
                res.status(404).json({message: 'Invalid ID', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })  
}

const deleteIngredient = (req, res) => {
    const id = req.params.ingredient_id
    ingredientControllers.deleteIngredient(id)
        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    getAllIngredients,
    getIngedrientById,
    postIngredient,
    deleteIngredient,
    patchIngredient
}