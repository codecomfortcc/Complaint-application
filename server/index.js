import express from 'express';
import { fileURLToPath } from 'url';
import path from 'node:path';
import nodemon from 'nodemon';
import dotenv from 'dotenv';
import { sheetRouter } from './routes/sheets.routes.js';
const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '..','client')));
app.use(express.json());
app.use('/sheets', sheetRouter);

const PORT = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




