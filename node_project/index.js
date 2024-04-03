const express = require('express');
const app = express()

app.get('/', (req,res) =>{
    res.send('hi there ,i am akash singh');
})

app.listen(8080,()=>{
    console.log('on port 8080')
})