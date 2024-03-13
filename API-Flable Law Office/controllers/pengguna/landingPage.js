const response = require('express')
const modelTim = require('../../models/tim')
const modelArtikel = require('../../models/postingan')
const modelAdmin = require('../../models/admin')
const modelGaleri = require('../../models/galeri')
const nodemailer = require('nodemailer')
require('dotenv').config()


//tampilan tim
const tampilTim = async (req,res) => {
    const dataTim = await modelTim.findAll({
        attributes: ['nama', 'foto_tim', 'spesialis', 'instagram', 'linkedln', 'portofolio']
    })
    if (dataTim.length > 0) {
        return res.status(200).json({success: true, message: 'Data tim ditemukan', data: dataTim})
    } else {
        return res.status(400).json({success: false, message: 'Data tim belum tersedia'})
    }
}

//tampil artikel 
const tampilArtikel = async (req,res) => {
    const dataArtikel = await modelArtikel.findAll({
        attributes: ['foto_postingan', 'judul', 'body', 'id_postingan'],
        include: [
            {
                model: modelAdmin,
                as:'dataAdmin',
                attributes: ['username']
            }
        ]
    })
    if (dataArtikel.length > 0) {
        return res.status(200).json({success: true, message: 'Data artikel ditemukan', data: dataArtikel})
    } else {
        return res.status(400).json({success: false, message: 'Data artikel tidak ditemukan'})
    }
}

//detail artikel
const detailArtikel = async (req,res) => {
    const {id_postingan} = req.params
    const detail = await modelArtikel.findByPk(id_postingan)
    if (!detail) {
        return res.status(400).json({success: false, message: 'Data artikel tidak ditemukan'})
    }
    return res.status(200).json({success: true, message: 'Data artikel ditemukan', data: detail})
}

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.email_owner, 
        pass: process.env.password_owner 
    },
    tls: {
        rejectUnauthorized: false
    }
});
//konsultasi gratis -> masuk ke email aku
let totalKonsultasi = 0
const konsultasiGratis = async (req,res) => {
    const {nama, email, no_telp, deskripsi} = req.body
    if (!nama || !email || !no_telp || !deskripsi) {
        return res.status(400).json({success: false, message: 'Silahkan lengkapi data anda terlebih dahulu'})
    }
    
    const mailOptions = {
        from: email,
        to: process.env.email_owner, 
        subject: 'Permintaan Konsultasi',
        text: `
          Name: ${nama}
          Email: ${email}
          Phone: ${no_telp}
          Description: ${deskripsi}
        `
    };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(400).json({success: false, message: 'Permintaan konsultasi anda tidak berhasil dikirim'})
        } else {
          console.log('Email sent: ' + info.response);
          totalKonsultasi++
          res.status(200).json({success: true, message: 'Permintaan konsultasi anda berhasil dikirim'})
        }
      });
    

}

//total konsultasi 
const tampilTotalKonsul = async (req,res) => {
    return res.status(200).json({success: true, message: 'Total konsultasi berhasil didapatkan', total: totalKonsultasi})
}

//tampil galeri
const tampilGaleri = async (req,res) => {
    try {
        const dataGaleri = await modelGaleri.findAll({
            attributes: ['foto_galeri']
        })
        if (dataGaleri) {
            return res.status(200).json({success: true, message: 'Data galeri ditemukan', data: dataGaleri})
        } else {
            return res.status(400).json({success: false, message: 'Data galeri tidak tersedia'})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}
module.exports = {tampilTim, tampilArtikel, detailArtikel, konsultasiGratis, tampilTotalKonsul, tampilGaleri}
