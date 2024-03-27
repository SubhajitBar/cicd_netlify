import mongoose from "mongoose";

// Database Connection
export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is connected with ${connection.host}`);
    } catch (err) {
        console.log(err);
        setTimeout(connectDB, 5000);
    }
}
