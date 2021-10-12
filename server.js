const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require('./controllers');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use('/', routes);

mongoose.connect('mongodb://localhost/workoutdb', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});