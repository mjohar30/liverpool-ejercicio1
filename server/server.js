const express = require('express')
const app = express()
const mongoose = require('mongoose')

const port = process.env.PORT || 3002
const item = require('./usecases/item')

require('dotenv').config()
app.use(express.json())
//Rutas
app.post('/items', async (req,res) => {
    try{
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

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, (err) => {
    if(err) return err
    console.log("Conectado a MongoDB")
    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
    })
  })

