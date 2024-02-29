const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const tim = sequelize.define('tim', {
    id_team:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    nama: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    spesialis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_posisi:{
        type: DataTypes.UUID,
        allowNull: false
    },
    deskripsi:{
        type: DataTypes.STRING,
        allowNull: false
    },
    foto_tim: {
        type: DataTypes.STRING,
        allowNull: false
    },
    portofolio:{
        type: DataTypes.STRING,
        allowNull: false
    },
    instagram:{
        type: DataTypes.STRING(100),
        allowNull:false
    },
    linkedln:{
        type: DataTypes.STRING(100),
        allowNull:false
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
    tableName: 'tim',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})


module.exports = tim