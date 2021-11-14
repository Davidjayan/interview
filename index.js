const express = require('express');
const app = express();
app.use(express.json());
const db = require('./models');

const User = db.User;   

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3001'
}));


app.post('/check',(req,res)=>{
    res.send("David"+req.body.id)
})
app.post('/insert',(req,res)=>{
    User.create({
        Name:req.body.name,
        Mobile:req.body.mobile
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




app.post('/update',(req,res)=>{
    User.update({Mobile:req.body.Mobile,Name:req.body.Name},{where:{id:req.body.id}}).then((data)=>{
        data==1?res.send({"message":"Update Successfull"}):res.send({"message":"Unsuccessfull"})
    }).catch((err)=>{         
                console.log(err);    
        })
})

app.post('/delete',(req,res)=>{
    User.destroy({where:{id:req.body.id}}).then((data)=>{
        data==1?res.send({"message":"Successfully Deleted"}):res.send({"message":"Unsuccessfull"})
    })
})



db.sequelize.sync().then((req)=>{
    let port = process.env.PORT || 3000;

    app.listen(port,()=>{
        console.log("Server...");
    })
})
