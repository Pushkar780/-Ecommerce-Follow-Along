const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB connected with server: ${connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process on connection failure
  }
};
module.exports = connectDatabase;
