import mongoos from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoos.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoos.connection;

const handleOpen = () => console.log("✅Connected to MongoDB");
const handleError = error => console.log(`❗️Error on MongoDB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);