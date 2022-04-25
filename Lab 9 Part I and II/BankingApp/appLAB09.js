import express from 'express';
import router from "./route.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'))
app.use(express.json())
app.use('/api', router)

app.listen(port,() => {
    console.log(`The server is listening on http://127.0.0.1:${port}`);
})

