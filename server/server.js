import express from "express";
import userRoutes from "./routes/users.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
const corsOptions = {
  // origin: "*",
  origin: "localhost:3000/login",
  credentials: true,
  // optionSuccessStatus: 200,
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors(corsOptions));
// it allows us to sent data to db
app.use(express.json());
app.use("/api/users", userRoutes);

// listening the port
app.listen(process.env.PORT || 8800, () => {
  console.log("connected");
});
