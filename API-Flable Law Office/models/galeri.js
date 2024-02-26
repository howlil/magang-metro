const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const galeri = sequelize.define('galeri', {
    id_galeri:{
        type: DataTypes.UUID,
        allowNull: false, 
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    foto_galeri:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'galeri',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
module.exports = galeri