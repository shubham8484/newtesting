
const CustomerSeeder     = require('./CustomerSeeder');
var   DB                  = require('../config/DbConfig');
DB.StartConnection();
CustomerSeeder.Run();
