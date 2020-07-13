import "core-js";
import morgan from "morgan";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from  "./router";
// require node module을 어딘가에서 가져옴
const app = express();

const handleHome = (req, res) => res.send("Hello from Home haha!!");
const handleProfile = (req, res) => res.send("Your are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;

//app.listen(PORT, handleListening);
// http://localhost:4000/
// port 4000를 listen함
// server가 생성됨