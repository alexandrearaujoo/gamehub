import "express-async-errors";
import "reflect-metadata";

import express from "express";
import cors from "cors";

import { appRoutes } from "./routes";
import errorHandling from "./middlewares/errorHandling.middleware";

const app = express();

app.use(cors());
app.use(express.json());

appRoutes(app);

app.use(errorHandling);

export default app;
