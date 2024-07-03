import express from "express";
import { fileURLToPath } from "url";
import path from "node:path";
import dotenv from "dotenv";
import { sheetRouter } from "./routes/sheets.routes.js";
import cors from "cors";
const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.json());
app.use("/api/sheets", sheetRouter);
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
