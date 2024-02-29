const kategori = require('./kategori')
const postingan = require('./postingan')
const posisi = require('./posisi')
const tim = require('./tim')
const admin = require('./admin')
const token = require('./token')

// kategori.hasMany(postingan, {foreignKey: 'id_kategori', as: 'dataPostingan'})
// postingan.belongsTo(kategori, {foreignKey: 'id_kategori', as: 'dataKategori'})

// posisi.hasMany(tim, {foreignKey: 'id_posisi', as: 'dataTim'})
// tim.belongsTo(posisi, {foreignKey: 'id_tim', as: 'dataPosisi'})

admin.hasMany(token, {foreignKey: 'id_admin', as: 'dataToken'})
token.belongsTo(admin, {foreignKey: 'id_admin', as: 'dataAdmin'})