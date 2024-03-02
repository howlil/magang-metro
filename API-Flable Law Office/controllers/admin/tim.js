const response = require('express')
const modelTim = require('../../models/tim')
const modelPosisi = require('../../models/posisi')
const path = require('path')
const multer = require('multer')

//tampil tim
const tampilTim = async (req,res) => {
    try {
        const dataTim = await modelTim.findAll({
            attributes: ['id_team', 'nama'],
            include: [
                {
                    model: modelPosisi,
                    as: 'dataPosisi',
                    attributes: ['nama_posisi']
                }
            ]
        })
        if (dataTim.length > 0) {
            return res.status(200).json({success: true, message: 'Data tim tersedia', data: dataTim})
        } else {
            return res.status(400).json({success: false, message: 'Data tim belum tersedia'})
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }    
}

const storageFotoTim = multer.diskStorage({
    destination: function (req,file, cb) {
        cb(null, path.join(__dirname, '../', '../', 'public', 'images', 'tim'))
    },
    filename: function(req,file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const storagePortofolio = multer.diskStorage({
    destination: function (req,file, cb) {
        cb(null, path.join(__dirname, '../', '../', 'public', 'portofolio'))
    },
    filename: function(req,file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const fileFilterTim = function (req,file, cb) {
    const allowedTypes = ['image/jpeg', 'image/png']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan');
        error.message = 'Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan'
        return cb(error, false);
    }
    cb(null, true);
}

const fileFilterPortofilio = function (req,file, cb) {
    const allowedTypes = ['application/pdf']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya PDF Di izinkan');
        error.message = 'Jenis File Tidak Di izinkan, Hanya PDF yg Di izinkan'
        return cb(error, false);
    }
    cb(null, true);
}

const uploadFotoTim = multer({
    storage: storageFotoTim,
    fileFilter: fileFilterTim
}).single('file_tim');

const uploadPortofolio = multer({
    storage: storagePortofolio,
    fileFilter: fileFilterPortofilio
}).single('file_portofolio');


//tambah tim
const tambahTim = async (req,res) => {
    try {
        uploadFotoTim(req,res, async function (err) {
            if (err) {
                console.log(err)
                return res.status(400).json({success: false, message: 'Foto tim tidak berhasil ditambahkan'})
            }

            uploadPortofolio(req,res,async function (err) {
                if (err) {
                    console.log(err)
                    return res.status(400).json({success: false, message: 'Portofolio tidak berhasil ditambahkan'})
                }

                const foto_tim = req.file_tim
                const portofolio = req.file_portofolio
                const {nama, spesialis, id_posisi, deskripsi, instagram, linkedln} = req.body
                if (!foto_tim || !nama || !spesialis || !id_posisi || !deskripsi || !instagram || !linkedln || !portofolio) {
                    return res.status(400).json({success: false, message: 'Lengkapi data tim anda'})
                }

                await modelTim.create({
                    nama: nama,
                    spesialis: spesialis,
                    id_posisi: id_posisi,
                    deskripsi: deskripsi,
                    foto_tim: foto_tim.originalname,
                    portofolio: portofolio.originalname,
                    instagram: instagram,
                    linkedln: linkedln
                })
                return res.status(200).json({success: true, meesage: 'Data tim berhasil ditambahkan'})

            })
        })

        
     
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}
//edit tim

//detail tim
const detailTim = async (req,res) => {
    const {id_team} = req.params
    const dataTeam = await modelTim.findByPk(id_team, {
        attributes: ['foto_tim', 'nama', 'spesialis', 'instagram', 'linkedln', 'portofolio'],
        include: [
            {
                model: modelPosisi,
                as: 'dataPosisi',
                attributes: ['nama_posisi']
            }
        ]
    })
    if (!dataTeam) {
        return res.status(400).json({success: false, message: 'Data team tidak ditemukan'})
    }
    return res.status(200).json({success: true, message: 'Data tim ditemukan', data: dataTeam})
}

//hapus tim
const hapusTim =  async (req,res) => {
    const {id_team} = req.params
    const hapus = await modelTim.destroy({where:{id_team: id_team}})
    if (!hapus) {
        return res.status(400).json({success: false, message: 'Data tim tidak berhasil dihapus'})
    }
    return res.status(200).json({success: true, message: 'Data tim berhasil dihapus'})
}

module.exports = {tampilTim, tambahTim, detailTim, hapusTim}