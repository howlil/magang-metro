const response = require('express')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken')
const modelAdmin = require('../../models/admin')
const modelToken = require('../../models/token')

//createAdmin
const tambahAdmin = async (req,res) => {
    try { 
        const {username, password} = req.body
        if (!username || !password) {
            return res.status(400).json({success: false, message: 'Legkapi inputan data'})
        }
        const findAdmin = await modelAdmin.findOne({
            where: {
                username: username
            }
        })
        if (findAdmin) {
            return res.status(400).json({succes: false, message: 'Username admin sudah pernah ditambahkan'})
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hashedPass = bcrypt.hashSync(password, salt)
            const addAdmin = await modelAdmin.create({
                username: username,
                password: hashedPass
            })
            if (!addAdmin) {
                return res.status(400).json({success:false, message: 'Admin tidak berhasil ditambahkan'})
            }
            return res.status(200).json({success:true, message: 'Admin berhasil ditambahkan'})  
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//loginAdmin
const loginAdmin = async (req,res) => {
    try {
        const {username,password} = req.body
        if (!username || !password) {
            return res.status(400).json({success:false, message: 'Silahkan lengkapi data akun anda'})
        }
        const findAkun = await modelAdmin.findOne({
            where:{
                username: username
            }
        })
        if (!findAkun) {
            return res.status(400).json({success:false, message: 'Akun anda tidak ditemukan'})
        }
        bcrypt.compare(password, findAkun.password, async (err, results) => {
            if (err || !results) {
                return res.status(400).json({success:false, message: 'Password akun anda salah'})
            }
            const id_admin = findAkun.id_admin
            const token = jwt.sign(
                {
                    username, id_admin
                },
                process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '1w'
                }
            )
            await modelToken.create({
                token: token,
                id_admin: id_admin
            })
            res.status(200).json({success:true, message: 'Login Berhasil', token: token})
        })        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message: 'Kesalahan server'})
    }
}

//logoutAdmin
const logoutAdmin = async (req,res) => {
    try {
         const authHeader = req.get('Authorization');
        
         if (!authHeader) {
             return res.status(401).json({ succes: false, message: 'Tidak ada token atau sudah logout sebelumnya' });
         }
 
         const token = authHeader.split(' ')[1];
 
         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
             if (err) {
               return res.status(401).json({ succes: false, message: err });
             }
 
             const adaToken = await modelToken.findOne({where: {token}})
             if (!adaToken) {
                 return res.status(401).json({ succes: false, message: "Tidak ada token atau sudah logout sebelumnya" });
             }
             
             await modelToken.destroy({ where: {token}});
         
             res.status(200).json({ success: true, message: 'Logout berhasil' });
         });
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}


module.exports = {tambahAdmin, loginAdmin, logoutAdmin}