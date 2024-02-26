const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const postingan = sequelize.define('postingan', {
    id_postingan: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUID
    },
    judul:{
        type: DataTypes.STRING,
        allowNull: false
    },
    slug:{
        type: DataTypes.STRING,
        allowNull: false
    },
    id_kategori: {
        type: DataTypes.UUID,
        allowNull: false
    },
    foto_postingan:{
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
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
    tableName: 'postingan',
    timestamps: true, 
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = postingan