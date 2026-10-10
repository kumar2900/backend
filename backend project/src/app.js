const express = require("express")
const multer = require("multer")


const app = express()


app.use(express.json())

// middle for text form

const upload = multer({
    storage : multer.memoryStorage()
})

app.get("/", (req, res) => {
    res.send("server is working");
});

app.post("/create-post", async (req, res) => {
    console.log(req.body);

    res.status(201).json({
        message: "post created"
    });
});
module.exports = app
