const admin = require('./admin/admin')
const dashboard = require('./admin/dashboard')
const postingan =require('./admin/postingan')
const kategori = require('./admin/kategori')
const galeri = require('./admin/galeri')
const tim = require('./admin/tim')
const server = {}

server.admin = admin
server.dashboard = dashboard
server.postingan = postingan
server.kategori = kategori
server.galeri = galeri
server.tim = tim

module.exports = server