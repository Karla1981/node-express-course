require('dotenv').config();

const express = require('express')
const app = express()

// routes
const mainRouter = require('./routes/main')

// middleware
app.use(express.json())
app.use('/api/v1', mainRouter)

// port were app listen
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
