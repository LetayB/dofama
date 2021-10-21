const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ItemSchema = new Schema({
  name: {
    type: String,
    index: true
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    unique : true,
  },
  price_1: {
    type: Number
  }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;