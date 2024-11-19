import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://rajatranjan477:rajat1234@cluster0.tnytn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {}
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
