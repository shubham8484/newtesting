const bodyParser = require('body-parser');
const express = require('express');
var DbConfig  = require('./config/DbConfig');
const CustomerModel = require('./model/CustomerModel');
const app = express()
const port = 4000


app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

DbConfig.StartConnection();

app.get("/", function (req, res) {   
    CustomerModel.find({}, function (err, allDetails) {
        console.log(allDetails);
        if (err) {
            console.log(err);
        } else {
            res.render("index", { details: allDetails })
        }
    })
})
