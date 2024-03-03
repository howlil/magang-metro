const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')
const postingan = require('./postingan')

const admin = sequelize.define('admin', {
    id_admin: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.STRING(30), 
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at:{
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'admin',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

admin.hasMany(postingan, {foreignKey: 'id_admin', as: 'dataPostingan'})
postingan.belongsTo(admin, {foreignKey: 'id_admin', as: 'dataAdmin'})

module.exports = admin