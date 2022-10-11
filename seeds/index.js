const sequelize = require('../config/connection');
const User = require('../models/Users');
const userData = require('');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit();
}

seedDatabase();