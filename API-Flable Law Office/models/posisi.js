const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const posisi = sequelize.define('posisi', {
    id_posisi: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nama_posisi:{
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
    tableName: 'posisi',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
module.exports = posisi