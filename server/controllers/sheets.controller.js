import { google } from 'googleapis';

const { CLIENT_EMAIL, PRIVATE_KEY, SPREADSHEET_ID } = process.env;

const jwtClient = new google.auth.JWT(
  CLIENT_EMAIL,
  null,
  PRIVATE_KEY.replace(/\\n/g, '\n'),
  ['https://www.googleapis.com/auth/spreadsheets']
);

const sheets = google.sheets({ version: 'v4', auth: jwtClient });


export const  getSheets=(req,res)=>{

}

export const createSheet= async (req,res)=>{
  const {data} = req.body;
  if (!values) {
    return res.status(400).send('No data provided.');
  }
    try{
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A1', 
        valueInputOption: 'RAW',
        resource: {
          values,
        },
      });
  
      res.status(200).send(`Appended: ${response.data.updates.updatedCells} cells.`);
      
    }
    catch(e){
      res.status(500).json({message: e.message});
    }
  }

