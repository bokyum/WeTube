import "core-js";
import morgan from "morgan";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";
// require node module을 어딘가에서 가져옴
const app = express();
app.use(helmet());
app.set('view engine', "pug")

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);
app.use(routes.users, userRouter);
//app.use(routes.home, videoRouter);



export default app;

//app.listen(PORT, handleListening);
// http://localhost:4000/
// port 4000를 listen함
// server가 생성됨