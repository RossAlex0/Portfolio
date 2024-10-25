import express, { Request, Response } from "express";

import router from "./router/router";

const app = express();

app.use(express.json());

app.use("/api", router);

export default app;
