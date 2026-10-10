const express = require("express")
const noteModel = require("./models/note.model.js")

const app = express()




// middle man 
app.use(express.json())

app.post("/user_details", async (req, res) => {


    const data = req.body;

    await noteModel.create({
        user_name: data.user_name,
        full_name: data.full_name,
        contact_number: data.contact_number
    });

    res.status(201).json({
        message: "data is fetched successfully"
    });
});


// to get all data from sever 
app.get("/user_details" , async (req , res) => {
    const userData = await noteModel.find()
    res.status(200).json({
        message : "data fetched succefully" ,
        data : userData
    })
})


// to delete 
app.delete("/user_details/:id" , async (req, res) => {
    const id = req.params.id
    await noteModel.findOneAndDelete({_id : id});
    res.status(200).json({
        message : "data deleted succufully"
    })
})

module.exports = app