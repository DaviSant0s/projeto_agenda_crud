const express = require('express');

require('./config/database.js');

const { PORT } = require('./config/env.js');

// rotas
const userRoutes = require('./routes/user.routes');


const app = express();

app.use(express.json());


app.use(userRoutes);

app.listen(PORT, () => {
  console.log("Api is running");
})