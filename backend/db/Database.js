const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB connected with server: ${connection.connection.host}`);
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
};

module.exports = connectDatabase;