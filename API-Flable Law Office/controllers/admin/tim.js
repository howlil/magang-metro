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

const uploadFix = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            if (file.fieldname === 'file_tim') {
                cb(null, path.join(__dirname, '../', '../', 'public', 'images', 'tim'))
            } else if (file.fieldname === 'file_porto') {
                cb(null, path.join(__dirname, '../', '../', 'public', 'portofolio'))
            } else {
                cb(new Error('Invalid field name'), null);
            }
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname)
        }
    }),
    fileFilter: function(req, file, cb) {
        if (file.fieldname === 'file_tim') {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
            if (!allowedTypes.includes(file.mimetype)) {
                const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan');
                error.message = 'Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan'
                return cb(error, false);
            }
        } else if (file.fieldname === 'file_porto') {
            const allowedTypes = ['application/pdf']
            if (!allowedTypes.includes(file.mimetype)) {
                const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya PDF Di izinkan');
                error.message = 'Jenis File Tidak Di izinkan, Hanya PDF yg Di izinkan'
                return cb(error, false);
            }
        } else {
            cb(new Error('Invalid field name'), null);
        }
        cb(null, true);
    }
}).fields([
    {name: 'file_tim', maxCount:1},
    {name: 'file_porto', maxCount: 1}
]);


//tambah tim
const tambahTim = async (req,res) => {
    try {     
        const foto_tim = req.files['file_tim'][0]
        const portofolio = req.files['file_porto'][0]
        const {nama, spesialis, id_posisi, deskripsi, instagram, linkedln} = req.body
        if (!foto_tim || !portofolio || !nama || !spesialis || !id_posisi || !deskripsi || !instagram || !linkedln) {
            return res.status(400).json({success: false, message: 'Lengkapi data tim anda'})   
        }
        const addTim = await modelTim.create({
            nama: nama,
            spesialis: spesialis,
            id_posisi: id_posisi,
            deskripsi: deskripsi,
            instagram: instagram,
            linkedln: linkedln,
            foto_tim: foto_tim.originalname,
            portofolio: portofolio.originalname
     })
     if (!addTim) {
        return res.status(400).json({success: false, message: 'Data tim belum berhasil ditambahkan'})
     } 
     return res.status(200).json({success: true, message: 'Data tim berhasil ditambahkan'})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//edit tim
const editTim = async (req, res) => {
    try {
        const { id_team } = req.params;
        const findTim = await modelTim.findByPk(id_team);
        if (!findTim) {
            return res.status(400).json({ success: false, message: 'Data tim tidak ditemukan' });
        }
        const { nama, spesialis, id_posisi, deskripsi, instagram, linkedln } = req.body;

        let foto_tim = findTim.foto_tim;
        let portofolio = findTim.portofolio;

        if (req.files['file_tim']) {
            foto_tim = req.files['file_tim'][0].originalname;
        }
        if (req.files['file_porto']) {
            portofolio = req.files['file_porto'][0].originalname;
        }

        // Memperbarui data tim
        await modelTim.update({
            nama: nama || findTim.nama,
            spesialis: spesialis || findTim.spesialis,
            id_posisi: id_posisi || findTim.id_posisi,
            deskripsi: deskripsi || findTim.deskripsi,
            instagram: instagram || findTim.instagram,
            linkedln: linkedln || findTim.linkedln,
            foto_tim: foto_tim,
            portofolio: portofolio
        }, {
            where: {
                id_team: id_team
            }
        });

        return res.status(200).json({ success: true, message: 'Data tim berhasil diperbaharui' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: 'Kesalahan server' });
    }
}


//detail tim
const detailTim = async (req,res) => {
    const {id_team} = req.params
    const dataTeam = await modelTim.findByPk(id_team, {
        attributes: ['foto_tim', 'nama', 'spesialis', 'instagram', 'linkedln', 'portofolio', 'deskripsi'],
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

module.exports = {tampilTim, tambahTim, detailTim, hapusTim, uploadFix, editTim}