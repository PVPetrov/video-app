import express from "express";
import cors from "cors";
import router from "./router";
import errorHandler from "./utils/errorHandler";

const app = express();
const port = 3000;

app.use(cors());
app.use("/", router);

app.use(errorHandler);

app.listen(port, () => console.log(`Listening to port ${port}`));
