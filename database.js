// CONTRIBUTION OF LOGAN PASTERNAK START 
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

export async function getPRODUCTNAME(id)
{

    const[rows]=await pool.query(`SELECT productName FROM PRODUCTS WHERE productID = ?`, [id]);
    return rows[0];
}

//Get a project's description

export async function getPRODUCTDESCRIPTION(id)
{

    const[rows]=await pool.query(`SELECT productDescription FROM PRODUCTS WHERE productID = ?`, [id]);
    return rows[0];
}

//Get a product's discountCategory

export async function getPRODUCTDISCOUNT(id)
{

    const[rows]=await pool.query(`SELECT discountCategory FROM PRODUCTS WHERE productID = ?`, [id]);
    return rows[0];
}

//Get a product's price

export async function getPRODUCTPRICE(id)
{

    const[rows]=await pool.query(`SELECT productPrice FROM PRODUCTS WHERE productID = ?`, [id]);
    return rows[0];
}


//Picks out a specific cart's information
export async function getCART(id)
{
    const[rows]=await pool.query(`SELECT * FROM CART WHERE userID = ?`, [id])
    return rows[0];
}

//Picks out a specific tracking entity and its information
export async function getTRACKING(id)
{
    const[rows]=await pool.query(`SELECT * FROM TRACKING WHERE trackerID = ?`, [id])
    return rows[0];
}

//Picks out a specific completion entity and its information
export async function getCOMPLETE(id)
{
    const[rows]=await pool.query(`SELECT * FROM COMPLETE WHERE completionID = ?`, [id])
    return rows[0];
}

//Creats a user entity
export async function createUSER(userName,userAddress,userEmail,userPhone,trackingCODE)
{
    const [result] = await pool.query(`INSERT INTO USERS (userName,userAddress,userEmail,userPhone,trackingCODE) VALUES (?,?,?,?,?)`,
    [userName,userAddress,userEmail,userPhone,trackingCODE]) 
}

//Creats a product entity
export async function createPRODUCT(productName,productDescription,discountCategory,productPrice)
{
    const [result] = await pool.query(`INSERT INTO PRODUCT (productName,productDescription,discountCategory,productPrice) VALUES (?,?,?,?)`,
    [productName,productDescription,discountCategory,productPrice]) 
}

//Creats a cart entity
export async function createCART(userID,productID,numProducts)
{
    const [result] = await pool.query(`INSERT INTO CART (userID,productID,numProducts) VALUES (?,?,?)`,
    [userID,productID,numProducts]) 
}


//Creats a tracking entity
export async function createTRACKING(userID,orderStatus,shippingStatus,shippingProvider)
{
    const [result] = await pool.query(`INSERT INTO TRACKING (userID,orderStatus,shippingStatus,shippingProvider) VALUES (?,?,?,?)`,
    [userID,orderStatus,shippingStatus,shippingProvider]) 
}

//Creats a completion entity
export async function createCOMPLETION(trackerID,completionMessage,completionConfirmation,opinionQuery)
{
    const [result] = await pool.query(`INSERT INTO COMPLETION (trackerID,completionMessage,completionConfirmation,opinionQuery) VALUES (?,?,?,?)`,
    [trackerID,completionMessage,completionConfirmation,opinionQuery]) 
}

//Code to test functions
//await createUSER('test','test','test','996-999-9999','3HZ040');
//const result = await getCARTS();
//console.log(result);

//CONTRUTION END