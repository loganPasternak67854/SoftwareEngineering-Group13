// const express = require('express');

//CONTRIBUTION OF LOGAN PASTERNAK START

import { createUSER, createPRODUCT, createCART, createTRACKING, createCOMPLETION } from "./database.js";
import { getUSERS, getUSER, getUSERNAME, getUSER_LOGIN_USERNAME,getUSER_LOGIN_PASSWORD, getEMAIL, getPHONE, getADDRESS, getCODE } from "./database.js";
import { getPRODUCTS, getPRODUCT, getPRODUCT_NAME, getPRODUCT_DESCRIPTION, getPRODUCT_DISCOUNT, getPRODUCT_DISCOUNT_AMOUNT, getPRODUCT_PRICE } from "./database.js";
import { getCARTS, getCART, getCART_NUMPRODUCTS, getCART_TOTAL_PRICE } from "./database.js";
import { getTRACKINGS, getTRACKING, getTRACKING_ORDERSTATUS, getTRACKING_SHIPPINGSTATUS, getTRACKING_SHIPPINGPROVIDER } from "./database.js";
import { getCOMPLETES, getCOMPLETE, getCOMPLETE_COMPLETIONMESSAGE, getCOMPLETE_COMPLETIONCONFIRMATION, getCOMPLETE_OPINIONQUERY } from "./database.js";
import { deleteUSER, deletePRODUCT, deleteCART, deleteTRACKING, deleteCOMPLETION } from "./database.js";
import { updateUSER, updateUSERNAME, updateUSER_LOGIN_USERNAME, updateUSER_LOGIN_PASSWORD, updateADDRESS, updateEMAIL, updatePHONE, updateCODE } from "./database.js";
import { updatePRODUCT, updatePRODUCT_DESCRIPTION, updatePRODUCT_NAME, updatePRODUCT_DISCOUNT, updatePRODUCT_DISCOUNT_AMOUNT, updatePRODUCT_PRICE } from "./database.js";
import { updateCART, updateCART_NUMPRODUCTS, updateCART_TOTALPRICE } from "./database.js";
import { updateTRACKING, updateTRACKING_ORDERSTATUS, updateTRACKING_SHIPPINGSTATUS, updateTRACKING_SHIPPINGPROVIDER } from "./database.js";
import { updateCOMPLETE, updateCOMPLETE_MESSAGE, updateCOMPLETE_CONFIRMATION, updateCOMPLETE_QUERY } from "./database.js";
import { getCREDITCARD, getCREDITCARD_SINGLE, getCREDITCARD_NUMBER, getCREDITCARD_EXPIRATION, getCREDITCARD_CVV } from "./database.js";
import { createCREDITCARD } from "./database.js";
import { deleteCREDITCARD } from "./database.js";
import { updateCREDITCARD, updateCREDITCARD_CARDNUMBER, updateCREDITCARD_EXPIRATION, updateCREDITCARD_CVV } from "./database.js";

//CONTRIBUTION OF LOGAN PASTERNAK ENDS

//CONTRIBUTION OF Rumaysa Adnan

import express from 'express'

const app = express();
const port = 3002;
app.use(express.static("."));
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
//CONTRIBUTION OF LOGAN PASTERNAK END


//CONTRIBUTION OF Santosh Pandey START
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});


app.get('/orderStatus', async(req, res) => {

  try {
    // Call the getUSERS function from your database module
    const tracking = await getTRACKINGS();

    const orderStats = [];

    for (let i = 0; i < tracking.length; i++) 
    {
      const temp = tracking[i];
      const status = temp.orderStatus;
      orderStats.push(status);
    }

    // Send the response as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(orderStats))

  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

app.get('/completionConfirmation', async(req, res) => {

  try {
    // Call the getUSERS function from your database module
    const completion = await getCOMPLETES();

    const completionConfirmation = [];

    for (let i = 0; i < completion.length; i++) 
    {
      const temp = completion[i];
      const status = temp.completionConfirmation;
      completionConfirmation.push(status);
    }

    // Send the response as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(completionConfirmation))

  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

app.get('/shippingStatus', async(req, res) => {

    try {
      // Call the getUSERS function from your database module
      const shipping = await getTRACKINGS();
  
      const shippingStatus = [];
  
      for (let i = 0; i < shipping.length; i++) 
      {
        const temp = shipping[i];
        const status = temp.shippingStatus;
        shippingStatus.push(status);
      }
  
      // Send the response as JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(shippingStatus))
  
    } catch (error) {
      // Handle errors and send an error response
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
});


app.get('/shippingProvider', async(req, res) => {

  try 
  {
    // Call the getUSERS function from your database module
    const shipping = await getTRACKINGS();

    const shippingProvider = [];

    for (let i = 0; i < shipping.length; i++) 
    {
      const temp = shipping[i];
      const status = temp.shippingProvider;
      shippingProvider.push(status);
    }

    // Send the response as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(shippingProvider))

  } 
  catch (error) 
  {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});


app.get('/monitor_order', (req, res) => {

  res.sendFile('status.html', { root: '.' });

});

app.get('/trackingCODES', async (req, res) => {
  try {
    // Call the getUSERS function from your database module
    const users = await getUSERS();

    const trackingCodes = [];

    for (let i = 0; i < users.length; i++) 
    {
      const user = users[i];
      const trackingCode = user.trackingCODE;
      trackingCodes.push(trackingCode);
    }

    // Send the response as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(trackingCodes))

  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/usernames', async (req, res) => {
  try {
    // Call the getUSERS function from your database module
    const users = await getUSERS();

    const usernames = [];

    for (let i = 0; i < users.length; i++) 
    {
      const user = users[i];
      const username = user.loginUsername;
      usernames.push(username);
    }

    // Send the response as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(usernames))

  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/passwords', async (req, res) => {
  try {
    // Call the getUSERS function from your database module
    const users = await getUSERS();

    const passwords = [];

    for (let i = 0; i < users.length; i++) 
    {
      const user = users[i];
      const password = user.loginPassword;
      passwords.push(password);
    }

    // Send the response as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(passwords))

  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/userID', async (req, res) => {
  try {
    // Call the getUSERS function from your database module
    const users = await getUSERS();

    const userID = [];

    for (let i = 0; i < users.length; i++) 
    {
      const temp = users[i];
      const iD = temp.userID;
      userID.push(iD);
    }

    // Send the response as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(userID))

  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/product_list', async (req, res) => {
  // Dislay 20 list of products from database
  
  let products=[];
  for (let i = 1; i < 101; i++) {
    let product= await getPRODUCT(i);
    products.push(product);
  }
  // console.log(products);
  // console.log(sampleproducts);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(products));
});

app.get('/fetch_cart', async (req, res) => {
  let items= [];
  let cartID = 1; // Currently works for a cart
  let carts = await getCART(cartID);
  let products= await getPRODUCT(carts['productID']);
  items.push(products);
  // console.log(products);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(items));
});


app.get('/cart', (req, res) => {
  // res.sendFile(__dirname+'/index.html');
  res.sendFile('cart.html', { root: '.' });
  // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify(products));
});

app.get('/account', (req, res) => {
  // res.sendFile(__dirname+'/index.html');
  res.sendFile('account.html', { root: '.' });
  // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify(products));
});

//CONTRIBUTION OF Santosh Pandey END
