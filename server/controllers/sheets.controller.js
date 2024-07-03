import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

export const  getSheets=(req,res)=>{

}

export const createSheet= async (req,res)=>{
  const {data} = req.body;
  console.log(data)
  if (!data) {
    return res.status(400).send('No data provided.');
  }
    try{
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'Sheet1!A2', 
        valueInputOption: 'RAW',
        resource: {
          data,
        },
      });
      res.status(200).send(`Appended: ${response.data.updates.updatedCells} cells.`);
      
    }
    catch(e){
      res.status(500).json({message: e.message});
    }
  }

