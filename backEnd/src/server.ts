import express from "express";

import { routes } from "./infra/routes/routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log("server is running!");
});
