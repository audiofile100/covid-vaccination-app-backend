let mongoose = require("mongoose");

let uri = "mongodb://127.0.0.1:27017/covidvaccinationdb";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const schema = new mongoose.Schema({
    username: 'string',
    password: 'string',

    firstname: 'string',
    lastname: 'string',
    address: 'string',
    phone: 'string',
    email: 'string'
});

const UserModel = mongoose.model('UserModel', schema);

module.exports = UserModel;