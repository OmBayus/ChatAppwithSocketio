const express = require("express")
const socket = require("socket.io")

const app = express()

const PORT = process.env.PORT || 4000

const server = app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))


app.use(express.static("public"))


var io = socket(server)

io.on("connection",(socket)=>{
      console.log("made socket connection",socket.id)

      socket.on("chat",(data)=>{
            io.sockets.emit("chat",data)
      })

      socket.on("typing",(data)=>{
            socket.broadcast.emit("typing",data)
      })
})







