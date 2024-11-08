const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const session = require("express-session");
// const redis = require("redis");
// // const { default: RedisStore } = require("connect-redis");

// let RedisStore = require("connect-redis").default;

const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, REDIS_URL, REDIS_PORT, SESSION_SECRET } = require("./config/config");

// let redisClient = redis.createClient({
//     host: REDIS_URL,
//     port: REDIS_PORT
// });

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose.
    connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connected to Mongo DB."))
    .catch((e) => console.log(e));

app.enable("trust proxy")

app.use(cors({}));

// app.use(session({
//     store: new RedisStore({
//         client: redisClient,
//         secret: "secret",
//         cookie: {
//             secure: false,
//             resave: false,
//             saveUninitialized: false,
//             httpOnly: true,
//             maxAge: 30000
//         }
//     })
// }));

app.use(express.json());

app.get("/api/v1", (req, res) => {
    console.log("Testing...");
    res.send("<h2>Hi There From Ulti @@@</h2>");
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));