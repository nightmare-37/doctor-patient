const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://admin-utkarsh:Utkarsh%401@cluster0.go7sp.mongodb.net/hospitalDB`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Mongo DB connected`);
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
module.exports = connectDB;
