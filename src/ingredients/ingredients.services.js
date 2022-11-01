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
    const { name } = req.body

    if (name) {
        ingredientControllers.createIngredient(name)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Invalid Data',
            fields: {
                name: 'string'
            }
        })
    }
}

const deleteIngredient = (req, res) => {
    const id = req.params.id
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
    deleteIngredient
}