const express = require('express');
const app = express();

const db = require('./models');

const User = db.User;   

app.get('/insert',(req,res)=>{
    User.create({
        Name:"Jayan",
        Mobile:"9952524268"
    }).then((data)=>{
        res.send(data);
    }).catch((err)=>{
            console.log(err);    
    })
    
})


app.get('/listall',(req,res)=>{
    User.findAll({})
    .then((data)=>
    res.send(data)
    ).catch((err)=>{
            console.log(err);
    })
})




app.get('/update',(req,res)=>{
    User.update({Mobile:"9551196822"},{where:{id:3}}).then((data)=>{
        data==1?res.send("Update Successfull"):res.send("Unsuccessfull")
    }).catch((err)=>{         
                console.log(err);    
        })
})

app.get('/delete',(req,res)=>{
    User.destroy({where:{id:10}}).then((data)=>{
        data==1?res.send('Successfully deleted'):res.send('Unsuccessfull')
    })
})



db.sequelize.sync().then((req)=>{
    app.listen(3000,()=>{
        console.log("Server...");
    })
})
