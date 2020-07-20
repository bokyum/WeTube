import mongoos from "mongoose";

mongoos.connect("mongodb://localhost:/27017",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoos.connection;

const handleOpen = () => console.log("✅Connected to MongoDB");
const handleError = error => console.log(`❗️Error on MongoDB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);