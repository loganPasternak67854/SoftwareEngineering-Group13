// CONTRIBUTION OF LOGAN PASTERNAK START 
//New stuff
import mysql from 'mysql2';

import dotenv from 'dotenv';

dotenv.config();
//Connects the database.js file to the sql database
const pool = mysql.createPool({

    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE

}).promise()

//Gets all the users from the database
export async function getUSERS(){

    const [rows] = await pool.query("SELECT * FROM USERS");
    return rows

}

//Gets all the Products from the Database
export async function getPRODUCTS(){

    const [rows] = await pool.query("SELECT * FROM PRODUCTS");
    return rows

}

//Gets all the Tracking Information
export async function getTRACKINGS(){

    const [rows] = await pool.query("SELECT * FROM TRACKING");
    return rows

}

//Gets all the Carts
export async function getCARTS(){

    const [rows] = await pool.query("SELECT * FROM CART");
    return rows

}

//Gets all the completion entities
export async function getCOMPLETES(){

    const [rows] = await pool.query("SELECT * FROM COMPLETE");
    return rows

}

//Picks out a specific user's information
export async function getUSER(id)
{
    const[rows]=await pool.query(`SELECT * FROM USERS WHERE userID = ?`, [id])
    return rows[0];
}

//Gets a specific user's username

export async function getUSERNAME(id)
{

    const[rows]=await pool.query(`SELECT userName FROM USERS WHERE userID = ?`, [id]);
    return rows[0];
}

//Get login username

export async function getUSER_LOGIN_USERNAME(id)
{

    const[rows]=await pool.query(`SELECT loginUsername FROM USERS WHERE userID = ?`, [id]);
    return rows[0];
}

//Get login password
 
export async function getUSER_LOGIN_PASSWORD(id)
{

    const[rows]=await pool.query(`SELECT loginPassword FROM USERS WHERE userID = ?`, [id]);
    return rows[0];
}

//Gets a specific user's home address

export async function getADDRESS(id)
{

    const[rows]=await pool.query(`SELECT userAddress FROM USERS WHERE userID = ?`, [id]);
    return rows[0];
}

//Gets a specific user's email address

export async function getEMAIL(id)
{

    const[rows]=await pool.query(`SELECT userEmail FROM USERS WHERE userID = ?`, [id]);
    return rows[0];
}

//Gets a specific user's phone number

export async function getPHONE(id)
{

    const[rows]=await pool.query(`SELECT userPhone FROM USERS WHERE userID = ?`, [id]);
    return rows[0];
}

//Gets a specific user's tracking code

export async function getCODE(id)
{

    const[rows]=await pool.query(`SELECT trackingCODE FROM USERS WHERE userID = ?`, [id]);
    return rows[0];
}

//Picks out a specific product's information
export async function getPRODUCT(id)
{
    const[rows]=await pool.query(`SELECT * FROM PRODUCTS WHERE productID = ?`, [id])
    return rows[0];
}

//Get a product's name

export async function getPRODUCT_NAME(id)
{

    const[rows]=await pool.query(`SELECT productName FROM PRODUCTS WHERE productID = ?`, [id]);
    return rows[0];
}

//Get a project's description

export async function getPRODUCT_DESCRIPTION(id)
{

    const[rows]=await pool.query(`SELECT productDescription FROM PRODUCTS WHERE productID = ?`, [id]);
    return rows[0];
}

//Get a product's discountCategory

export async function getPRODUCT_DISCOUNT(id)
{

    const[rows]=await pool.query(`SELECT discountCategory FROM PRODUCTS WHERE productID = ?`, [id]);
    return rows[0];
}

//Get a product's price

export async function getPRODUCT_PRICE(id)
{

    const[rows]=await pool.query(`SELECT productPrice FROM PRODUCTS WHERE productID = ?`, [id]);
    return rows[0];
}

//Get a product's discount amount

export async function getPRODUCT_DISCOUNT_AMOUNT(id)
{

    const[rows]=await pool.query(`SELECT discountAmount FROM PRODUCTS WHERE productID = ?`, [id]);
    return rows[0];
}


//Picks out a specific cart's information
export async function getCART(id)
{
    const[rows]=await pool.query(`SELECT * FROM CART WHERE cartID = ?`, [id])
    return rows[0];
}


//Get the number of products for a 
export async function getCART_NUMPRODUCTS(id)
{
    const[rows]=await pool.query(`SELECT numProducts FROM CART WHERE cartID = ?`, [id])
    return rows[0];
}

export async function getCART_TOTAL_PRICE(id)
{
    const[rows]=await pool.query(`SELECT totalPrice FROM CART WHERE cartID = ?`, [id])
    return rows[0];
}

//Picks out a specific tracking entity and its information
export async function getTRACKING(id)
{
    const[rows]=await pool.query(`SELECT * FROM TRACKING WHERE trackerID = ?`, [id])
    return rows[0];
}

//Gets a specific tracking entity's order status

export async function getTRACKING_ORDERSTATUS(id)
{
    const[rows]=await pool.query(`SELECT orderStatus FROM TRACKING WHERE trackerID = ?`, [id])
    return rows[0];
}

//Gets a specific tracking entity's shipping status

export async function getTRACKING_SHIPPINGSTATUS(id)
{
    const[rows]=await pool.query(`SELECT shippingStatus FROM TRACKING WHERE trackerID = ?`, [id])
    return rows[0];
}

//Gets a specific tracking entities shipping provider

export async function getTRACKING_SHIPPINGPROVIDER(id)
{
    const[rows]=await pool.query(`SELECT shippingProvider FROM TRACKING WHERE trackerID = ?`, [id])
    return rows[0];
}

//Picks out a specific completion entity and its information
export async function getCOMPLETE(id)
{
    const[rows]=await pool.query(`SELECT * FROM COMPLETE WHERE completionID = ?`, [id])
    return rows[0];
}

//Get a specific completion entity's completion message

export async function getCOMPLETE_COMPLETIONMESSAGE(id)
{
    const[rows]=await pool.query(`SELECT completionMessage FROM COMPLETE WHERE completionID = ?`, [id])
    return rows[0];
}

//Gets a specific completion entity's completion confirmation

export async function getCOMPLETE_COMPLETIONCONFIRMATION(id)
{
    const[rows]=await pool.query(`SELECT completionConfirmation FROM COMPLETE WHERE completionID = ?`, [id])
    return rows[0];
}

//Gets a specific completion entity's opinion query

export async function getCOMPLETE_OPINIONQUERY(id)
{
    const[rows]=await pool.query(`SELECT opinionQuery FROM COMPLETE WHERE completionID = ?`, [id])
    return rows[0];
}

//Posts a user entity
export async function createUSER(userName,loginUsername,loginPassword,userAddress,userEmail,userPhone,trackingCODE)
{
    const [result] = await pool.query(`INSERT INTO USERS (userName,loginUsername,loginPassword,userAddress,userEmail,userPhone,trackingCODE) VALUES (?,?,?,?,?,?,?)`,
    [userName,loginUsername,loginPassword,userAddress,userEmail,userPhone,trackingCODE]) 
}

//Posts a product entity
export async function createPRODUCT(productName,productDescription,discountCategory,discountAmount,productPrice)
{
    const [result] = await pool.query(`INSERT INTO PRODUCT (productName,productDescription,discountCategory, discountAmount, productPrice) VALUES (?,?,?,?,?)`,
    [productName,productDescription,discountCategory,discountAmount,productPrice]) 
}

//Posts a cart entity
export async function createCART(userID,productID,numProducts,totalPrice)
{
    const [result] = await pool.query(`INSERT INTO CART (userID,productID,numProducts,totalPrice) VALUES (?,?,?,?)`,
    [userID,productID,numProducts,totalPrice]) 
}


//Posts a tracking entity
export async function createTRACKING(userID,orderStatus,shippingStatus,shippingProvider)
{
    const [result] = await pool.query(`INSERT INTO TRACKING (userID,orderStatus,shippingStatus,shippingProvider) VALUES (?,?,?,?)`,
    [userID,orderStatus,shippingStatus,shippingProvider]) 
}

//Posts a completion entity
export async function createCOMPLETION(trackerID,completionMessage,completionConfirmation,opinionQuery)
{
    const [result] = await pool.query(`INSERT INTO COMPLETION (trackerID,completionMessage,completionConfirmation,opinionQuery) VALUES (?,?,?,?)`,
    [trackerID,completionMessage,completionConfirmation,opinionQuery]) 
}

//Deletes a person enetity
export async function deleteUSER(id)
{

    let [result] = await pool.query(`DELETE FROM USERS WHERE userID = ?`,[id]);
    return result['affectedRows'];

}

//Deletes a person enetity
export async function deletePRODUCT(id)
{

    let [result] = await pool.query(`DELETE FROM PRODUCTS WHERE productID = ?`,[id]);
    return result['affectedRows'];

}

//Deletes a person enetity
export async function deleteCART(id)
{

    let [result] = await pool.query(`DELETE FROM CART WHERE cartID = ?`,[id]);
    return result['affectedRows'];

}

//Deletes a person enetity
export async function deleteTRACKING(id)
{

    let [result] = await pool.query(`DELETE FROM TRACKING WHERE trackerID = ?`,[id]);
    return result['affectedRows'];

}

//Deletes a person enetity
export async function deleteCOMPLETION(id)
{

    let [result] = await pool.query(`DELETE FROM COMPLETION WHERE completionID = ?`,[id]);
    return result['affectedRows'];

}

//Updates a specific user's information
export async function updateUSER(id,userName,loginUsername,loginPassword,userAddress,userEmail,userPhone,trackingCODE)
{
    try
    {
        
        await pool.query(`UPDATE USERS SET userName = ? WHERE userID = ?`,[userName,id]);
        await pool.query(`UPDATE USERS SET loginUsername = ? WHERE userID = ?`,[loginUsername,id]);
        await pool.query(`UPDATE USERS SET loginPassword = ? WHERE userID = ?`, [loginPassword,id]);
        await pool.query(`UPDATE USERS SET userAddress = ? WHERE userID = ?`,[userAddress,id]);
        await pool.query(`UPDATE USERS SET userEmail = ? WHERE userID = ?`,[userEmail,id]);
        await pool.query(`UPDATE USERS SET userPhone = ? WHERE userID = ?`,[userPhone,id]);
        await pool.query(`UPDATE USERS SET trackingCODE = ? WHERE userID = ?`,[trackingCODE,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a specific user's username

export async function updateUSERNAME(id,userName)
{
    try
    {
        await pool.query(`UPDATE USERS SET userName = ? WHERE userID = ?`,[userName,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a specific person's username

export async function updateUSER_LOGIN_USERNAME(id,loginUsername)
{
    try
    {
        await pool.query(`UPDATE USERS SET loginUsername = ? WHERE userID = ?`,[loginUsername,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a specific person's password

export async function updateUSER_LOGIN_PASSWORD(id,loginPassword)
{
    try
    {
        await pool.query(`UPDATE USERS SET loginPassword = ? WHERE userID = ?`,[loginPassword,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a specific user's home address

export async function updateADDRESS(id,userAddress)
{
    try
    {
        await pool.query(`UPDATE USERS SET userAddress = ? WHERE userID = ?`,[userAddress,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a specific user's email

export async function updateEMAIL(id,userEmail)
{
    try
    {
        await pool.query(`UPDATE USERS SET userEmail = ? WHERE userID = ?`,[userEmail,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a specific user's phone number

export async function updatePHONE(id,userPhone)
{
    try
    {
        await pool.query(`UPDATE USERS SET userPhone = ? WHERE userID = ?`,[userPhone,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a specific user's tracking code

export async function updateCODE(id,trackingCODE)
{
    try
    {
        await pool.query(`UPDATE USERS SET trackingCODE = ? WHERE userID = ?`,[trackingCODE,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Updates a specific user's information
export async function updatePRODUCT(id,productName,productDescription,discountCategory,discountAmount,productPrice)
{
    try
    {
        await pool.query(`UPDATE PRODUCTS SET productName = ? WHERE productID = ?`,[productName,id]);
        await pool.query(`UPDATE PRODUCTS SET productDescription = ? WHERE productID = ?`,[productDescription,id]);
        await pool.query(`UPDATE PRODUCTS SET discountCategory = ? WHERE productID = ?`,[discountCategory,id]);
        await pool.query(`UPDATE PRODUCTS SET discountAmount = ? WHERE productID = ?`, [discountAmount,id]);
        await pool.query(`UPDATE PRODUCTS SET productPrice = ? WHERE productID = ?`,[productPrice,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a product's name

export async function updatePRODUCT_NAME(id,productName)
{
    try
    {
        await pool.query(`UPDATE PRODUCTS SET productName = ? WHERE productID = ?`,[productName,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a product's description

export async function updatePRODUCT_DESCRIPTION(id,productDescription)
{
    try
    {
        await pool.query(`UPDATE PRODUCTS SET productDescription = ? WHERE productID = ?`,[productDescription,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a product's discount category

export async function updatePRODUCT_DISCOUNT(id,discountCategory)
{
    try
    {
        await pool.query(`UPDATE PRODUCTS SET discountCategory = ? WHERE productID = ?`,[discountCategory,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//UPDATE THE AMOUNT OF A DISCOUNT

export async function updatePRODUCT_DISCOUNT_AMOUNT(id,discountAmount)
{
    try
    {
        await pool.query(`UPDATE PRODUCTS SET discountAmount = ? WHERE productID = ?`,[discountAmount,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a product's price

export async function updatePRODUCT_PRICE(id,productPrice)
{
    try
    {
        await pool.query(`UPDATE PRODUCTS SET productPrice = ? WHERE productID = ?`,[productPrice,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Updates a specific user's information
export async function updateCART(id,numProducts,totalPrice)
{
    try
    {   
        await pool.query(`UPDATE CART SET numProducts = ? WHERE cartID = ?`,[numProducts,id]);
        await pool.query(`UPDATE CART SET totalPrice = ? WHERE cartID = ?`, [totalPrice,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update the number of products that are in a cart

export async function updateCART_NUMPRODUCTS(id,numProducts)
{
    try
    {   
        await pool.query(`UPDATE CART SET numProducts = ? WHERE cartID = ?`,[numProducts,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Updates the total price within the cart

export async function updateCART_TOTALPRICE(id,totalPrice)
{
    try
    {   
        await pool.query(`UPDATE CART SET totalPrice = ? WHERE cartID = ?`,[totalPrice,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Updates a specific user's information
export async function updateTRACKING(id,orderStatus,shippingStatus,shippingProvider)
{
    try
    {
        await pool.query(`UPDATE TRACKING SET orderStatus = ? WHERE trackerID = ?`,[orderStatus,id]);
        await pool.query(`UPDATE TRACKING SET shippingStatus = ? WHERE trackerID = ?`,[shippingStatus,id]);
        await pool.query(`UPDATE TRACKING SET shippingProvider = ? WHERE trackerID = ?`,[shippingProvider,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a tracking entity's order status

export async function updateTRACKING_ORDERSTATUS(id,orderStatus)
{
    try
    {
        await pool.query(`UPDATE TRACKING SET orderStatus = ? WHERE trackerID = ?`,[orderStatus,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a tracking entity's shipping status

export async function updateTRACKING_SHIPPINGSTATUS(id,shippingStatus)
{
    try
    {
        await pool.query(`UPDATE TRACKING SET shippingStatus = ? WHERE trackerID = ?`,[shippingStatus,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Update a tracking entity's shipping provider

export async function updateTRACKING_SHIPPINGPROVIDER(id,shippingProvider)
{
    try
    {
        await pool.query(`UPDATE TRACKING SET shippingProvider = ? WHERE trackerID = ?`,[shippingProvider,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Updates a specific user's information
export async function updateCOMPLETE(id,completionMessage,completionConfirmation,opinionQuery)
{
    try
    {
        await pool.query(`UPDATE COMPLETE SET completionMessage = ? WHERE completionID = ?`,[completionMessage,id]);
        await pool.query(`UPDATE COMPLETE SET completionConfirmation = ? WHERE completionID = ?`,[completionConfirmation,id]);
        await pool.query(`UPDATE COMPLETE SET opinionQuery = ? WHERE completionID = ?`,[opinionQuery,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Updates the completion message of a completion entity

export async function updateCOMPLETE_MESSAGE(id,completionMessage)
{
    try
    {
        await pool.query(`UPDATE COMPLETE SET completionMessage = ? WHERE completionID = ?`,[completionMessage,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Updates the completion confirmation of a completion entity

export async function updateCOMPLETE_CONFIRMATION(id,completionConfirmation)
{
    try
    {
        await pool.query(`UPDATE COMPLETE SET completionConfirmation = ? WHERE completionID = ?`,[completionConfirmation,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}

//Updates the opinion query response of a completion entity

export async function updateCOMPLETE_QUERY(id,opinionQuery)
{
    try
    {
        await pool.query(`UPDATE COMPLETE SET opinionQuery = ? WHERE completionID = ?`,[opinionQuery,id]);
        return true;
    }
    catch(error)
    {
        return false;
    }
}



//Code to test functions

/*
const result = await getPRODUCTS();
console.log(result);
*/

/*
const result = await getCARTS();
console.log(result);
*/

//const result = await getTRACKINGS()
//const result = await getTRACKING_SHIPPINGSTATUS(1);

/*
const temp = await getTRACKING_SHIPPINGSTATUS(1);
const result = temp.shippingStatus;
*/

/*
const temp = await getTRACKING_SHIPPINGSTATUS(1);
const result = typeof(temp);
*/
//await createUSER('test','test','test','996-999-9999','3HZ040');
//const result = await getCARTS();
//console.log(result);

//CONTRUTION OF LOGAN PASTERNAK END