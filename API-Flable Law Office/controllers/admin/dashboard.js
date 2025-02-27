const response = require('express')
const modelPostingan = require('../../models/postingan')
const modelTim = require('../../models/tim')
const modelGaleri = require('../../models/galeri')
const modelPosisi = require('../../models/posisi')

//total jumlah postingan
const totalPostingan = async (req,res) => {
    try {
        const totalPostingan = await modelPostingan.count()
        if (totalPostingan > 0) {
            return res.status(200).json({success: true, message: 'Data postingan ditemukan', total: totalPostingan})              
        } else {
            return res.status(400).json({success: false, message: 'Data postingan belum tersedia'})
        }
          
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//total jumlah tim
const totalTim = async (req,res) => {
    try {
        const total = await modelTim.count()
        if (total > 0) {
            return res.status(200).json({success: true, message: 'Data tim ditemukan', total: total})
        } else {
            return res.status(400).json({success: false, message: 'Data tim belum tersedia'})
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message: 'Kesalahan server'})
    }
    
}

// total foto galeri
const totalGaleri = async (req,res) => {
    try {
        const total = await modelGaleri.count()
        return res.status(200).json({success: true, message: 'Data galeri ditemukan', total: total})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}


// total posisi
const totalPosisi = async (req,res) => {
    try {
        const total = await modelPosisi.count()
        return res.status(200).json({success: true, message: 'Data posisi ditemukan', total: total})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}
module.exports = {totalPostingan, totalTim, totalGaleri, totalPosisi}