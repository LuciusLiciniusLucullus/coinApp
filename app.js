const express = require("express")
const app = express()
const mongoose = require("mongoose")
const multer = require("multer")
const cors = require('cors')
const bodyParser = require('body-parser')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './s3bucket')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})
const Citystate = require("./citystate")

mongoose.connect('mongodb+srv://augustus:forfreedom20@romanempire-afapt.mongodb.net/test?retryWrites=true&w=majority')

mongoose.connection.on('connected', () => {
    console.log("mangoose is connected");
})

const admin = {
    "username": "admin",
    "password": "admin123"
}

app.use('/imgfeed', express.static('s3bucket'))

//use cors
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/home", (req, res) => {
    res.send(req.query)
    console.log("called")
})

app.post("/sendcity", upload.single('coinImage'), async (req, res, next) => {
    console.log(req.file.filename)
    const city_state = new Citystate({
        _id: new mongoose.Types.ObjectId(),
        city_name: req.query.name,
        city_coin: req.query.coin,
        city_desc: req.query.desc,
        coin_img: req.file.originalname,
        coin_region: req.query.region
    })

    city_state.save().then(msg => {
        res.status(200).json(msg)
    }).catch(err => {
        res.status(500).send(err)
    })
    
})

app.post("/login", (req, res) =>{
    console.log(req.body.user)
    if(req.body.user.username == admin.username && req.body.user.password == admin.password){
        res.send("login successful")
    }else{
        throw new Error('incorrect user')
    }
})

app.get("/find", cors(),  (req, res) => {
    const search_region = req.query.region
    Citystate.find({ coin_region: search_region }).then(data => {
        res.status(200).json(data)
    }).catch(err => {
        res.status(500).send(err)
    })
})


module.exports = app;