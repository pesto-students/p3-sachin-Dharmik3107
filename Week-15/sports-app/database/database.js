const mongoose = require('mongoose');

const connectDatabase = () => {
    return mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/sports-app', ()=>{
        console.log('Database connected successfully')
    })
}

module.exports = connectDatabase;