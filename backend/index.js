const { default: mongoose } = require('mongoose');
const connectToMongo = require('./db');
const express = require('express');
mongoose.set('strictQuery',true);
connectToMongo();
  const app = express()
  const port = 5000
  var cors = require('cors')
  app.use(cors())
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.get('/api/v1/login', (req, res) => {
    res.send('Hello Login page Open!')
  })
  app.get('/api/v1/signUp', (req, res) => {
    res.send('Hello SignUp page Open!')
  })
  app.use(express.json()) ///middleware
  //Available routers  
  app.use("/api/auth",require('./routes/auth'));  
  app.use("/api/notes",require('./routes/notes')); 
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  // console.log("You are a Hero");
