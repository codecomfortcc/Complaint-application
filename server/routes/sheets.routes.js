import {createSheet ,getSheets} from '../controllers/sheets.controller.js';
import {validateSheet} from '../middleware/validatesheet.middleware.js';
import express from 'express';
const router=express.Router()

router.get('/',getSheets)
router.post('/',validateSheet,createSheet)

export default router;
