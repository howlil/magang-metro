const response = require('express')
const modelPostingan = require('../../models/postingan')
const modelKategori = require('../../models/kategori')
const multer = require('multer')
const path = require('path')

//tampil postingan
const tampilPostingan = async (req,res) => {
    try {
        const allPostingan = await modelPostingan.findAll({
            include: [
                {
                    model: modelKategori,
                    as: 'dataKategori',
                    attributes: ['nama_kategori']
                }
            ],
            attributes: ['id_postingan', 'judul','slug']
        })
        if (allPostingan.length > 0) {
            return res.status(200).json({success:true, message: 'Data postingan ditemukan', data: allPostingan})
        } else {
            return res.status(400).json({success: false, message: 'Data postingan belum tersedia'})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//tambah postingan
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../', '../', 'public', 'images', 'postingan'))
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

const tambahPostingan = async (req,res) => {
    try {
        const {judul, slug, kategori, body} = req.body
        const foto = req.file
        if (!judul || !slug || !kategori || !body || !foto) {
            return res.status(400).json({success:false, message: 'Silahkan lengkapi data postingan anda'})
        }       
        const findJudul = await modelPostingan.findOne({
            where:{judul: judul}
        })
        if (findJudul) {
            return res.status(400).json({success: false, message: 'Data postingan sudah tersedia'})
        } else {
            await modelPostingan.create({
                judul: judul,
                slug: slug,
                id_kategori: kategori,
                foto_postingan: foto.originalname,
                body: body
            })
            return res.status(200).json({success:true, message: 'Postingan berhasil ditambahkan'})
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//edit postingan
const editPostingan = async (req,res) => {
    try {
        const {id_postingan} = req.params
        const findData = await modelPostingan.findByPk(id_postingan)
        if (!findData) {
            return res.status(400).json({success: false, message: 'Data postingan tidak ditemukan'})
        }
        const {judul, slug, kategori, body} = req.body
        const foto = req.file 
        if (foto) {
            await modelPostingan.update({
                judul: judul || findData.judul,
                slug: slug || findData.slug,
                id_kategori: kategori || findData.kategori,
                body: body || findData.body,
                foto_postingan: foto.originalname
            }, {
                where:{id_postingan: id_postingan}
            })
            return res.status(200).json({success:true, message: 'Data postingan berhasil diperbaharui'})
        } else {
            await modelPostingan.update({
                judul: judul || findData.judul,
                slug: slug || findData.slug,
                id_kategori: kategori || findData.kategori,
                body: body || findData.body,
            }, {
                where:{id_postingan: id_postingan}
            })
            return res.status(200).json({success:true, message: 'Data postingan berhasil diperbaharui'})
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//detail postingan
const detailPostingan = async (req,res) => {
    try {
        const {id_postingan} = req.params
        const findData = await modelPostingan.findByPk(id_postingan, {
            include: [
                {
                    model: modelKategori,
                    as: 'dataKategori',
                    attributes: ['nama_kategori']
                }
            ],
            attributes: ['judul', 'slug', 'foto_postingan', 'body', 'created_at']
        })
        if (!findData) {
            return res.status(400).json({success: false, message: 'Data postingan tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Data postingan ditemukan', data: findData})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }   
}

//hapus postingan
const hapusPostingan = async (req,res) => {
    const {id_postingan} = req.params
    const hapusPostingan = await modelPostingan.destroy({
        where:{
            id_postingan: id_postingan
        }
    })
    if (!hapusPostingan) {
        return res.status(400).json({success: false, message: 'Data postingan tidak berhasil dihapus'})
    }
    return res.status(200).json({success: true, message: 'Data postingan berhasil dihapus'})
}

module.exports = {tampilPostingan, uploadd, tambahPostingan, editPostingan, detailPostingan, hapusPostingan}