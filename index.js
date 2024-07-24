import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connectDB from "./MongoDb/Connect.js";

import RProjectRouter from "./routes/releasedProject.routes.js";
import Queryrouter from './routes/Query.route.js';
import Upcomingrouter from './routes/Upcoming.routes.js';
import Futurerouter from './routes/Future.routes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ ma: "hey" });
});

app.use('/RProject',RProjectRouter);

app.use('/Query',Queryrouter)

app.use('/Upcoming',Upcomingrouter)

app.use('/Future',Futurerouter)

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8000, () => {
      console.log("ser");
    });
  } catch (error) {
    console.log(error);
  }
};


startServer();
