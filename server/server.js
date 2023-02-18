import express from "express";
import userRoutes from "./routes/users.js";
import restaurantRoutes from "./routes/restaurant.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3000/*",
  "http://localhost:3000/profile",
  "http://localhost:3000/app",
  "http://localhost:8800/api/restaurant/getDishes",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cookieParser());
app.use(bodyParser.json({ limit: "1200mb" }));
app.use(bodyParser.urlencoded({ limit: "1200mb", extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
// it allows us to sent data to db
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/restaurant", restaurantRoutes);
// app.use("/api/restaurant", restaurantRoutes);
// listening the port
app.listen(process.env.PORT || 8800, () => {
  console.log("connected");
});
