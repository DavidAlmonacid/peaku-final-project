import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { userRouter } from "./routes/users.js";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(corsMiddleware());

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`\nServer listening on http://localhost:${PORT}\n`);
});
