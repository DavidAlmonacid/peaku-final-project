import express from "express";
import { usersRouter } from "./routes/users.js";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`\nServer listening on http://localhost:${PORT}\n`);
});
