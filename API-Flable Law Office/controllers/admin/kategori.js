const response = require('express')
const modelKategori = require('../../models/kategori')

//tampil kategori
const tampilKategori = async (req,res) => {
    try {
        const allKategori = await modelKategori.findAll({
            attributes: ['id_kategori', 'nama_kategori', 'slug']
        })
        if (allKategori.length > 0) {
            return res.status(200).json({success: true, message: 'Data kategori ditemukan', data: allKategori})
        } else {
            return res.status(400).json({success: false, message: 'Data kategori tidak ditemukan'})
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//tambah kategori
const tambahKategori = async (req,res) => {
    try {
        const {nama_kategori, slug} = req.body
        if (!nama_kategori || !slug) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi data kategori'})
        }
        const findKategori = await modelKategori.findOne({
            where: {
                nama_kategori: nama_kategori
            }
        })
        if (findKategori) {
            return res.status(400).json({success: false, message: 'Data kategori sudah tersedia sebelumnay'})
        } else {
            await modelKategori.create({
                nama_kategori: nama_kategori,
                slug: slug
            })
            return res.status(200).json({success: true, message: 'Data kategori berhasil ditambahkan'})
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//edit kategori
const editKategori = async (req,res) => {
    try {
        const {id_kategori} = req.params
        const {nama_kategori, slug} = req.body
        const findKategori = await modelKategori.findByPk(id_kategori)
        if (!findKategori) {
            return res.status(400).json({success: false, message: 'Data kategori tidak ditemukan'})
        }
        await modelKategori.update({
            nama_kategori: nama_kategori || findKategori.nama_kategori,
            slug: slug || findKategori.slug
        }, {
            where: {id_kategori: id_kategori}
        })
        return res.status(200).json({success: true, message: 'Data kategori berhasil diperbaharui'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//hapus kategori
const hapusKategori = async (req,res) => {
    try {
        const {id_kategori} = req.params
        const hapus = await modelKategori.destroy({
            where:{id_kategori: id_kategori}
        })
        if (!hapus) {
            return res.status(400).json({success: false, message: 'Data kategori tidak berhasil dihapus'})
        }
        return res.status(200).json({success: true, message: 'Data kategori berhasil dihapus'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

module.exports = {tampilKategori, tambahKategori, editKategori, hapusKategori}