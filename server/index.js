import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { productsRouter } from "./routes/products.js";
import { userRouter } from "./routes/users.js";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(corsMiddleware());

app.use("/api/user", userRouter);
app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`\nServer listening on http://localhost:${PORT}\n`);
});
