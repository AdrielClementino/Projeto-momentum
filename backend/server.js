const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());

const usersRoutes = require('./routes/usersRoutes')

app.use('/users', usersRoutes);

app.get('/', (req, res) => {

    res.json({
        msg: "Ta Rolando nego!!"
    })

})

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.azm6yiw.mongodb.net/?retryWrites=true&w=majority&appName=APICluster`

).then(() => {
    console.log("Conectamos ao MongoDB");
    app.listen(8080);
})
    .catch(err => { console.log(err) });
