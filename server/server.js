const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const config = require('./dotenv');

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));



const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..", "client/public")));

app.use('/api/user', require("./controllers/User"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client/public/index.html"));
});

app.listen(5000, () => console.log("Server started on port 5000"));
