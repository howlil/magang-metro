const response = require('express')
const modelGaleri = require('../../models/galeri')
const path = require('path')
const multer = require('multer')

//tampil galeri
const tampilGaleri = async (req,res) => {
    try {
        const allGaleri = await modelGaleri.findAll({
            attributes: ['id_galeri', 'foto_galeri']
        })
        if (allGaleri.length > 0) {
            return res.status(200).json({success: true, message: 'Data galeri ditemukan', data: allGaleri})
        } else {
            return res.status(400).json({success: false, message: 'Data galeri belum tersedia'})
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    } 
}

//tambah galeri
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', '../', 'public', 'images', 'galeri'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})


const fileFilter = function (req, file, cb) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan');
        error.message = 'Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan'
        return cb(error, false);
    }
    cb(null, true);
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});
const uploadd = upload.single('file')

const tambahGaleri = async (req,res) => {
    try {
        const foto_galeri = req.file
        if (!foto_galeri) {
            return res.status(400).json({success: false, message: 'Silahkan tambahkan foto yang mau disimpan'})
        }
        await modelGaleri.create({
            foto_galeri: foto_galeri.originalname
        })
        return res.status(200).json({success: true, message: 'Data galeri berhasil ditambahkan'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }

}

//hapus galeri
const hapusGaleri = async (req,res) => {
    try {
        const {id_galeri} = req.params
        const hapusGaleri = await modelGaleri.destroy({
            where:{id_galeri: id_galeri}
        })
        if (!hapusGaleri) {
            return res.status(400).json({success: false, message: 'Data galeri tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Data galeri berhasil dihapus'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

module.exports = {tampilGaleri, uploadd, tambahGaleri, hapusGaleri}