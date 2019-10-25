
const CustomerModel = require('../model/CustomerModel');
var data = [
    { CustomerName: 'Customer A', Email: 'customer1@gmail.com', CustomerDesignation: 'Software Engineer', Password: '12345678', CustomerSignupProvider: '123456777' },
    { CustomerName: 'Customer B', Email: 'customer2@gmail.com', CustomerDesignation: 'Software Tester', Password: '123456789', CustomerSignupProvider: '12556777' },
    { CustomerName: 'Customer C', Email: 'customer3@gmail.com', CustomerDesignation: 'Web Developer', Password: '123456780', CustomerSignupProvider: '12345546777' },
    { CustomerName: 'Customer D', Email: 'customer4@gmail.com', CustomerDesignation: 'Web Designer', Password: '123456786', CustomerSignupProvider: '12345664777' },
];

exports.Run = () => {
    CustomerModel.estimatedDocumentCount({}, (err, count) => {
        if (count < 1) {
            CustomerModel.insertMany(data);
            console.log('CustomerModel Model is Seeded now');
        } else {
            console.log('Already Seeded  CustomerModel');
        }
    });
}