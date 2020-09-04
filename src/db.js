const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://dunder_mifflin:paper@expense-tracker-db.pljzj.mongodb.net/expense-tracker-db?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true, 
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;