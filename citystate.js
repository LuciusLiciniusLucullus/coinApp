const mongoose = require("mongoose")

const city_state = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    city_name: { type: String, required: true },
    city_coin: { type: String, required: true },
    city_desc: String,
    coin_img: { type: String, required: true },
    coin_region: { type: String, required: true}
})

module.exports = mongoose.model('Citystate', city_state)