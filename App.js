
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const syncContactRoutes = require('./routes/syncConRoutes');



const app = express();
app.use(bodyParser.urlencoded({extended: false}));


app.use(syncContactRoutes);

app.post('/hey', (req,res,next)=>{

res.send('Hello Task')
   
});


sequelize
// .sync({force: true})
.sync()
.then(()=>{
  
    app.listen(3000,()=>{
        console.log('Running on  port 3000')
    });
})
.catch((err)=>{
  
   console.log('Database connection error');
   throw new err
})

