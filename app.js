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
app.use("/uploads", express.static("uploads"))
//주어진 directory에서 file을 전달해주는 middleware function
//이 경우엔 어떤 종류의 controller나 view 같은 것을 확인하지 않고 file만 확인

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