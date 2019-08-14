const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

const port = process.env.PORT || 3002
const item = require('./usecases/item')

require('dotenv').config()

app.use(express.json())
app.use(cors())

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
    });
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "demo",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });

const parser = multer({ storage: storage });
//Rutas
app.post('/items', async (req,res) => {
    try{
        // const images = {}
        // images.url = req.file.url
        // images.id = req.file.public_id


        const {name, price, images} = req.body

        const createdItem = await item.create({name, price, images})

        res.json({
            succes: true,
            message: 'Item creado',
            data: {
                item: createdItem
            }
        })
    } catch(error){
        res.status(400)
        res.json({
            success: false,
            error: error.message
        })
    }
})

app.get('/items', async (req,res) => {
    try{
        const allItems = await item.getAll()
        res.json({
            success: true,
            message: 'All items',
            data: {
                items: allItems
            }
        })

    } catch(error){
        res.status(400)
        res.json({
            success: false,
            error: error.message
        })
    }
})

app.post('/items/:id/update', async(req,res) =>{
    try {
    const {id} = req.params
    const {name, price} = req.body
    const updateItem = await item.updateById({id, name, price})
    res.json({
        success: true,
        message: 'Item updated',
        data: {
            items: updateItem
        }
    })
    } catch (error){
        res.status(400)
        res.json({
            succes: false,
            error: error.message
        })
    }
})

app.delete('/items/:id/delete', async(req,res) => {
    try{
        const {id} = req.params
        const deleteItem = await item.deleteById({id})
        res.json({
            success:true,
            message: 'Item deleted',
            data: {
                item: deleteItem
            }
        })
    } catch(error){
        res.status(400)
        res.json({
            success: false,
            error: error.message
        })
    }
})

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, (err) => {
    if(err) return err
    console.log("Conectado a MongoDB")
    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
    })
  })

