const Item = require('../models/item')

function create({name, price, images}){
    return Item.create({name, price, images})
}

function getAll(){
    return Item.find({}).lean()
}

function deleteById({id}){
    return Item.findByIdAndDelete({_id: id})
}

function updateById({id, name, price}){
    Item.findById({_id: id})
    return Item.update({name, price})
}

module.exports = {
    create,
    getAll,
    updateById,
    deleteById
}