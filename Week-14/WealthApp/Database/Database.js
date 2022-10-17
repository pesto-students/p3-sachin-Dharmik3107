const mongoose = require('mongoose');

const connectDatabase = () => {
    return mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/wealthportfolio')
}

module.exports = connectDatabase;