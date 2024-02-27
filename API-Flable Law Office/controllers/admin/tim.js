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

//tambah tim
const tambahTim = async (req,res) => {
    const foto_tim = req.file
    const {nama, spesialis, id_posisi, deskripsi, instagram, linkedln} = req.body
    const portofolio = req.file
    if (!foto_tim || !nama || !spesialis || !id_posisi || !deskripsi || !instagram || !linkedln || !portofolio) {
        return res.status(400).json({success: false, message: 'Lengkapi data tim anda'})
    }
    console.log('berhasil')
}
//edit tim
//detail tim
//hapus tim

module.exports = {tampilTim, tambahTim}