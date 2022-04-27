import express from 'express'
import router from './router.js'
import morgan from 'morgan'
import {engine} from "express-handlebars";
import mongoose from "mongoose";

//port number
const port = process.env.PORT || 9090
const app = express()

const uri = 'mongodb://localhost:27017/PhoneBook'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, options, () => {
    console.log(`database connection established`)
})


//two types [dynamic , static]
app.engine('hbs', engine({extname: 'hbs'}))
app.set('view engine', 'hbs')


app.use(express.static('views'))

app.use(morgan('dev'))
app.use(express.json())
app.use('/', router)

//CRUD operations on
app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})

//a middleware
///import {engine} from "express-handlebars"
// app.engine("hbs",
//     engine({
//         extname: "hbs",
//         defaultLayout: "main",
//         layoutsDir: "views/layouts/",
//     }));
//
// app.set('view engine','hbs');
// app.set('views', 'views');

