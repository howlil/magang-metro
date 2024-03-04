const response = require('express')
const modelPosisi = require('../../models/posisi')

//tampil posisi
const tampilPosisi = async (req,res) => {
    try {
        const allPosisi = await modelPosisi.findAll({
            attributes: ['id_posisi', 'nama_posisi']
        })
        if (allPosisi.length > 0) {
            return res.status(200).json({success: true, message: 'Data posisi ditemukan', data: allPosisi})
        } else {
            return res.status(400).json({success: false, message: 'Data posisi belum tersedia'})
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//tambah posisi
const tambahPosisi = async (req,res) => {
    try {
        const {nama_posisi} = req.body
        if (!nama_posisi) {
            return res.status(400).json({success: false, message: 'Silahkan isi nama posisi terlebih dahulu'})
        }
        await modelPosisi.create({
            nama_posisi: nama_posisi
        })
        return res.status(200).json({success: true, message:'Data posisi berhasil ditambahkan'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}


//edit posisi
const editPosisi = async(req,res) => {
    try {
        const {id_posisi} = req.params
        const {nama_posisi} = req.body
        const dataPosisi = await modelPosisi.findByPk(id_posisi)
        if (!dataPosisi) {
            return res.status(400).json({success: false, message:'Data posisi tidak ditemukan'})
        }
        const edit = await modelPosisi.update({
            nama_posisi: nama_posisi || dataPosisi.nama_posisi
        }, {
            where: {
                id_posisi: id_posisi
            }
        })
        if (!edit) {
            return res.status(400).json({success: false, message: 'Data posisi tidak berhasil diperbaharui'})
        }
        return res.status(200).json({success: true, message: 'Data posisi berhasil diperbaharui'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesahalan server'})
    }
    
}

//hapus posisi
const hapusPosisi = async (req,res) => {
    const {id_posisi} = req.params
    const hapus = await modelPosisi.destroy({
        where:{
            id_posisi: id_posisi
        }
    })
    if (!hapus) {
        return res.status(400).json({success: false, message: 'Data posisi tidak berhasil dihapus'})
    }
    return res.status(200).json({success: true, message: 'Data posisi berhasil dihapus'})
}

//detail posisi
const detailPosisi = async (req,res) => {
    try {
        const {id_posisi} = req.params
        const findPosisi = await modelPosisi.findByPk(id_posisi)
        if (!findPosisi) {
            return res.status(400).json({success: false, message: 'Data posisi tidak ditemukan'})
        }         
        return res.status(200).json({success: true, message: 'Data posisi ditemukan', data: findPosisi})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

module.exports = {tampilPosisi, tambahPosisi, editPosisi, hapusPosisi, detailPosisi}