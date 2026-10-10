const express =  require("express")


// yesma express lai re use garan lai euta variable ma store gareko 
const app = express ()

// postman bat receive and send garan lai yo middlewear ko user gareko
app.use(express.json())


// user or fontend bat user le pathako data store yesma garne bhaner  euta aray of objects ko lagi banako
const notes = []


//  user le frontend bat kei data pathayo bhne server ma receive garanal lai
app.post("/notes" , (req,res) => {
    // aayeko data lai notes ko variable ma store gareko
    notes.push(req.body)
    // data receive garepaci front end ma user le yo message pathako data received bhner
    res.status(201).json({
        message : "if r u seeing this message then server is running correctly"
    })
})


// password mongodv
// x2q74h9N6vAMeMUa
// mongodb+srv://kumar:x2q74h9N6vAMeMUa@backend-learn.fdgoq8k.mongodb.net/

// ab notes ma store bhayeko data lai frontend ko user lai dekhauda 

app.get("/notes" ,  (req, res) => {
    res.status(200).json({
        message : "data fetched seccusfully" ,
        notes : notes
    })
})


// notes ma bhako data lai delete garada

app.delete("/notes/:index" , (req,res) => {
    const index = req.params.index;
    delete notes[index]
    res.status(200).json({
        message : `data on index ${index} is deleted`
    })

})



//  for update old data 
app.patch("/notes/:index" , (req,res) => {
    const index = req.params.index 
    const desc = req.body.description
const title = req.body.title;
    notes[index].description = desc;
    notes[index].title = title

    res.status(200).json({
        mmessage : `new description update on index ${index} as ${desc}`
    })
})


// server banayer ecport gareko
module.exports = app