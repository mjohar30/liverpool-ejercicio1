const Item = require('../models/item')

function create({name, price, images}){
    return Item.create({name, price, images})
}

function getAll(){
    return Item.find({}).lean()
}

function deleteById(id){
    return Item.deleteOne({_id: id})
}

module.exports = {
    create,
    getAll,
    deleteById
}