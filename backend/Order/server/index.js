import express from "express";
import { PORT } from './config.js';

import indexRoutes from "./routes/index.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(orderRoutes);

app.listen(PORT);
console.log(`LISTENING ON PORT ${PORT}`);




