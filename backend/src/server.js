const express = require('express');

const PORT = 3333;

// rotas
const userRoutes = require('./routes/user.routes')


const app = express();

app.use(express.json());


app.use(userRoutes);

app.listen(PORT, () => {
  console.log("Api is running");
})