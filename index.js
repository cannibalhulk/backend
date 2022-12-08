fetch('http://localhost:3000/worker').then((res)=>res.json())
.then((data=>{
    data.forEach(element => {
        document.writeln(element)
    });
}))
