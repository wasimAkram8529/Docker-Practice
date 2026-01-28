const express = require('express')
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send("Backend is Runnig!");
})


const connectDB = (URI) => {
    return mongoose.connect(URI)
}

const start = async () => {
  try {
    const URL = process.env.MONGO_URL
    await connectDB(URL);
    console.log('Successfully connected to database')
    app.listen(5000, () => {
      console.log('Server is listening on port 5000')
    })
  } catch (error) {
    console.log('Error', error)
  }
}


start()