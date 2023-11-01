//CONTRIBUTION OF LOGAN PASTERNAK START

import { createUSER, createPRODUCT, createCART, createTRACKING, createCOMPLETION } from "./database.js";
import { getUSERS, getUSER, getUSERNAME, getEMAIL, getPHONE, getADDRESS, getCODE } from "./database.js";
import { getPRODUCTS, getPRODUCT, getPRODUCTNAME, getPRODUCTDESCRIPTION, getPRODUCTDISCOUNT, getPRODUCTPRICE } from "./database.js";
import { getCARTS, getCART, getNUMPRODUCTS } from "./database.js";
import { getTRACKINGS, getTRACKING, getTRACKING_ORDERSTATUS, getTRACKING_SHIPPINGSTATUS, getTRACKING_SHIPPINGPROVIDER } from "./database.js";
import { getCOMPLETES, getCOMPLETE, getCOMPLETE_COMPLETIONMESSAGE, getCOMPLETE_COMPLETIONCONFIRMATION, getCOMPLETE_OPINIONQUERY } from "./database.js";
import { deleteUSER, deletePRODUCT, deleteCART, deleteTRACKING, deleteCOMPLETION } from "./database.js";
import { updateUSER, updateUSERNAME, updateADDRESS, updateEMAIL, updatePHONE, updateCODE } from "./database.js";
import { updatePRODUCT, updatePRODUCT_DESCRIPTION, updatePRODUCT_NAME, updatePRODUCT_DISCOUNT, updatePRODUCT_PRICE } from "./database.js";
import { updateCART, updateCART_NUMPRODUCTS } from "./database.js";
import { updateTRACKING_ORDERSTATUS, updateTRACKING_SHIPPINGSTATUS, updateTRACKING_SHIPPINGPROVIDER } from "./database.js";
import { updateCOMPLETE, updateCOMPLETE_MESSAGE, updateCOMPLETE_CONFIRMATION, updateCOMPLETE_QUERY } from "./database.js";

//CONTRIBUTION OF LOGAN PASTERNAK ENDS

//CONTRIBUTION OF Rumaysa Adnan

import http from 'http';
import fs from 'fs';
import path from 'path'

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