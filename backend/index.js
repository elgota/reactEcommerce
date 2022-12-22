import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.routes.js";
import productsRoutes from "./routes/products.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
import orderItemsRoutes from "./routes/order.item.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import imageRoutes from "./routes/image.routes.js";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.use(indexRoutes);
app.use(usersRoutes);
app.use(productsRoutes);
app.use(ordersRoutes);
app.use(orderItemsRoutes);
app.use(transactionRoutes);
app.use(imageRoutes);

app.listen(PORT);
console.log(`Server corriendo en puerto ${PORT}`);
