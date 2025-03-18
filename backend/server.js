require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const cors = require("cors");

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors({ origin: "http://localhost:3001", credentials: true }));
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect('mongodb+srv://tushankrout:tushankrout@cluster0.6z6pu.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, // Ensure TLS is enabled
  tlsAllowInvalidCertificates: true 
})
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })