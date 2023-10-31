//CONTRIBUTION OF LOGAN PASTERNAK START
import express from 'express'

import { getUSERS, getPRODUCTS, getCARTS, getTRACKINGS, getCOMPLETES, getUSER, getPRODUCT, getCART, getTRACKING, getCOMPLETE, createUSER, createPRODUCT, createCART, createTRACKING, createCOMPLETION} from './database';

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
//CONTRIBUTION OF LOGAN PASTERNAK END