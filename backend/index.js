import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import productsRoutes from './routes/products.routes.js';
import usersRoutes from './routes/users.routes.js';
import ordersRoutes from './routes/orders.routes.js';

const app = express();

app.use(express.json())

app.use(indexRoutes);
app.use(productsRoutes);
app.use(usersRoutes);
app.use(ordersRoutes);

app.listen(PORT);
console.log(`Server corriendo en puerto ${PORT}`);
