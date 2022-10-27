const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }    
}, {
    timestamps: false
})