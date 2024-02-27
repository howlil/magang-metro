const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const token = sequelize.define('token', {
    id_token:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    token:{
        type: DataTypes.STRING,
        allowNull:false
    },
    id_admin:{
        type: DataTypes.UUID,
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    expires_at:{
        type: DataTypes.DATE,
        defaultValue: () => new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000))
    }
}, {
    tableName:'token',
    timestamps: false
})

module.exports = token