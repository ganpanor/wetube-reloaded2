import express from "express";
import morgan from "morgan"; // import <이름> 이름은 상관 없음
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import testRouter from "./routers/testRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middleware";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //   maxAge: 20000,
    // },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

// app.use((req, res, next) => {
//   req.sessionStore.all((error, sessions) => {
//     console.log(sessions);
//     next();
//   });
// });

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);
app.use("/test", testRouter);

export default app;
