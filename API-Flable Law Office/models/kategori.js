const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const kategori = sequelize.define('kategori', {
    id_kategori: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nama_kategori: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    slug:{
        type: DataTypes.STRING(256),
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull:false
    },
    updated_at:{
        type: DataTypes.DATE,
        allowNull:false
    }
}, {
    tableName: 'kategori',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
module.exports = kategori