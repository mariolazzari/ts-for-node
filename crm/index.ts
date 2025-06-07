import express, { Request, Response } from "express";
import mongoose from "mongoose";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT: number = 3000;
const appMsg = `Node and express server is running on port ${PORT}`;
const dbUrl: string = "mongodb://localhost/CRMdb";

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

// bodyparser setup
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

routes(app);

// serving static files
app.use(express.static("public"));

app.get("/", (_req: Request, res: Response): void => {
  res.send(appMsg);
});

app.listen(PORT, () => console.log(appMsg));
