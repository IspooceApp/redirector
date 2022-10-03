import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    try {
        res.send(`<h1>Due to large file size of ISS model, we had to change our server to another platform. Please click <a href="http://206.81.1.111:5173">here</a> to view our project. It takes some time to load.</h1>`)
    } catch (error) {
        console.log(error);
        res.send("Internal server error.")
    }
})


app.listen(process.env.PORT || 8080, () => {
    console.log("server is up and running .")
})