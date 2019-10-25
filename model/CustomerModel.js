var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    CustomerName: String,
    Email: String,
    CustomerDesignation: String,
    Password: String,
    CustomerSignupProvider: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('customer', CustomerSchema);