/*
     npm i express fs-extra morgan
 */
import express from 'express';
import morgan from 'morgan'
import router from './router.js'

const appLAB09II = express();
const port = process.env.PORT || 6000

//middleware
//combined
appLAB09II.use(express.static('public'))
appLAB09II.use(morgan('combined'))
appLAB09II.use(express.json())
appLAB09II.use('/api', router)

appLAB09II.listen(port, () => {
    console.log(`The server is listening on http://127.0.0.1:${port}`)
})

