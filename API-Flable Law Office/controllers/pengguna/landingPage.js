const response = require('express')
const modelTim = require('../../models/tim')
const modelArtikel = require('../../models/postingan')
const nodemailer = require('nodemailer')


//tampilan tim
let totalKonsultasi = 0
const tampilTim = async (req,res) => {
    const dataTim = await modelTim.findAll({
        attributes: ['nama', 'spesialis', 'instagram', 'linkedln', 'portofolio']
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
        attributes: ['foto_postingan', 'judul', 'body', 'id_postingan']
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
    user: 'ypuremail@gmail', // Ganti dengan alamat email pengirim
    pass: 'yourpassword@gmail' // Ganti dengan kata sandi email pengirim
  }
});
//konsultasi gratis -> masuk ke email aku
const konsultasiGratis = async (req,res) => {
    const {nama, email, no_telp, deskripsi} = req.body
    if (!nama || !email || !no_telp || !deskripsi) {
        return res.status(400).json({success: false, message: 'Silahkan lengkapi data anda terlebih dahulu'})
    }

    const mailOptions = {
        from: `${email}`, // Ganti dengan alamat email pengirim
        to: 'nadiniannisabyant26@gmail.com', // Ganti dengan alamat email penerima
        subject: 'New Consultation Request',
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
          res.send('Error');
        } else {
          console.log('Email sent: ' + info.response);
          totalKonsultasi++
          res.send('Success');
        }
      });
    

}

//total konsultasi 
const tampilTotalKonsul = async (req,res) => {
    return res.status(200).json({success: true, message: 'Total konsultasi berhasil didapatkan', total: totalKonsultasi})
}

module.exports = {tampilTim, tampilArtikel, detailArtikel, konsultasiGratis, tampilTotalKonsul}
