const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const { v1: uuidv1 } = require('uuid');

const PORT = process.env.PORT || 1919

const PublicPath = path.join(__dirname,'../build')


app.use(express.static(PublicPath))

app.use(bodyParser.json({limit:'1mb'}))

// app.use(cors())

const data = {}



app.post('/endpoint',(req,res)=>{
    const id = uuidv1()
    data[id] = req.body
    setTimeout(()=>{
        delete data[id]
    },3600000)
    res.send({id})
    
})

app.get('/endpoint/:id',(req,res)=>{

    res.send(data[req.params.id])
    
})

app.get('*', (req, res) => {
    
    res.sendFile(path.join(PublicPath, 'index.html'));
  });
app.listen(PORT,()=>{
    console.log('server Up on port ',PORT);
    
})