const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()

app.listen(3000 , ()=>  {
    console.log("server will run on the port 3000")

})