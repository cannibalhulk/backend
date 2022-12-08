const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Hello, my  name is Shukur")
})


app.get('/worker',function(req,res){
    let workers=[
        'Shukur',
        'Ilyas',
        'Ahmed'
    ]

    fetch('http://localhost:3000/worker').then((res)=>res.json())
    .then((data=>{
        data.forEach(element => {
            document.writeln(element)
        });
    }))

    res.send(workers)
})




app.listen(3000, function(){
    console.log('Server :3000-de isleyir')
})