const express = require("express")
const noteModal = require("./models/note.model")

const app = express()



app.use(express.json())

app.post("/notes" ,  async (req, res) => {
const data = req.body
await noteModal.create({
    title : data.title,
    description : data.description
})
res.status(201).json({
    message : "note  created succefully"
})

})


app.get("/notes" , async(req, res) => {
  const notes =   await noteModal.find()

//   for findone
// findOne({})

    res.status(200).json({
        notes : notes ,
        message : "data fetched succefully"
    })
})



app.delete("/notes/:id" , async (req , res) => {
    const id = req.params.id
    await noteModal.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message : "id deleted succsfully"
    })

})


app.patch("/notes/:id" , async (req , res) => {
    const id = req.params.id
    const description = req.body.description
    await noteModal.findOneAndUpdate({_id : id
    } , {description : description})

    res.status(200).json({
        message  : "updated succufully"
    })
})







module.exports = app