//CONTRIBUTION OF LOGAN PASTERNAK START

import { createUSER, createPRODUCT, createCART, createTRACKING, createCOMPLETION } from "./database.js";
import { getUSERS, getUSER, getUSERNAME, getEMAIL, getPHONE, getADDRESS, getCODE } from "./database.js";
import { getPRODUCTS, getPRODUCT, getPRODUCT_NAME, getPRODUCT_DESCRIPTION, getPRODUCT_DISCOUNT, getPRODUCT_DISCOUNT_AMOUNT, getPRODUCT_PRICE } from "./database.js";
import { getCARTS, getCART, getCART_NUMPRODUCTS, getCART_TOTAL_PRICE } from "./database.js";
import { getTRACKINGS, getTRACKING, getTRACKING_ORDERSTATUS, getTRACKING_SHIPPINGSTATUS, getTRACKING_SHIPPINGPROVIDER } from "./database.js";
import { getCOMPLETES, getCOMPLETE, getCOMPLETE_COMPLETIONMESSAGE, getCOMPLETE_COMPLETIONCONFIRMATION, getCOMPLETE_OPINIONQUERY } from "./database.js";
import { deleteUSER, deletePRODUCT, deleteCART, deleteTRACKING, deleteCOMPLETION } from "./database.js";
import { updateUSER, updateUSERNAME, updateADDRESS, updateEMAIL, updatePHONE, updateCODE } from "./database.js";
import { updatePRODUCT, updatePRODUCT_DESCRIPTION, updatePRODUCT_NAME, updatePRODUCT_DISCOUNT, updatePRODUCT_DISCOUNT_AMOUNT, updatePRODUCT_PRICE } from "./database.js";
import { updateCART, updateCART_NUMPRODUCTS, updateCART_TOTALPRICE } from "./database.js";
import { updateTRACKING_ORDERSTATUS, updateTRACKING_SHIPPINGSTATUS, updateTRACKING_SHIPPINGPROVIDER } from "./database.js";
import { updateCOMPLETE, updateCOMPLETE_MESSAGE, updateCOMPLETE_CONFIRMATION, updateCOMPLETE_QUERY } from "./database.js";

//CONTRIBUTION OF LOGAN PASTERNAK ENDS

//CONTRIBUTION OF Rumaysa Adnan

import http from 'http';
import fs from 'fs';

const server = http.createServer( async (req, res) => {

  if (req.method === 'GET' && req.url === '/tracking/') {
    
    const temp = req.url.split('/').pop();
    const id = Number(temp);

    const x = await getTRACKING_ORDERSTATUS(id);
    const shipping = x.shippingStatus; 
   
    fs.readFile('shippingStatus_template.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        
        //data = data.replace('{{orderStatus}}', orderStatus);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
    

});

  
const port = 670;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'setup.html'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading setup.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else {
    // Handle other requests (if any)
    res.writeHead(404);
    res.end('Page not found!');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
*/