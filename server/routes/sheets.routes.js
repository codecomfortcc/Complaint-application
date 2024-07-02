import { getSheets, createSheet } from '../controllers/sheets.controller.js';
import express from 'express';
export function sheetRouter(){
const router = express.Router();
router.get('/', getSheets);
router.post('/', createSheet);
}
