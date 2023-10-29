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
async function getUSERS(){

    const [rows] = await pool.query("SELECT * FROM USERS");
    return rows

}

//Gets all the Products from the Database
async function getPRODUCTS(){

    const [rows] = await pool.query("SELECT * FROM PRODUCTS");
    return rows

}

//Gets all the Tracking Information
async function getTRACKINGS(){

    const [rows] = await pool.query("SELECT * FROM TRACKING");
    return rows

}

//Gets all the Carts
async function getCARTS(){

    const [rows] = await pool.query("SELECT * FROM CART");
    return rows

}

//Gets all the completion entities
async function getCOMPLETES(){

    const [rows] = await pool.query("SELECT * FROM COMPLETE");
    return rows

}

//Picks out a specific user's information
async function getUSER(id)
{
    const[rows]=await pool.query(`SELECT * FROM USERS WHERE userID = ?`, [id])
    return rows[0];
}

//Picks out a specific product's information
async function getPRODUCT(id)
{
    const[rows]=await pool.query(`SELECT * FROM PRODUCTS WHERE productID = ?`, [id])
    return rows[0];
}

//Picks out a specific cart's information
async function getCART(id)
{
    const[rows]=await pool.query(`SELECT * FROM CART WHERE userID = ?`, [id])
    return rows[0];
}

//Picks out a specific tracking entity and its information
async function getTRACKING(id)
{
    const[rows]=await pool.query(`SELECT * FROM TRACKING WHERE trackerID = ?`, [id])
    return rows[0];
}

//Picks out a specific completion entity and its information
async function getCOMPLETE(id)
{
    const[rows]=await pool.query(`SELECT * FROM COMPLETE WHERE completionID = ?`, [id])
    return rows[0];
}

//Creats a user entity
async function createUSER(userName,userAddress,userEmail,userPhone,trackingCODE)
{
    const [result] = await pool.query(`INSERT INTO USERS (userName,userAddress,userEmail,userPhone,trackingCODE) VALUES (?,?,?,?,?)`,
    [userName,userAddress,userEmail,userPhone,trackingCODE]) 
}

//Creats a product entity
async function createPRODUCT(productName,productDescription,discountCategory,productPrice)
{
    const [result] = await pool.query(`INSERT INTO PRODUCT (productName,productDescription,discountCategory,productPrice) VALUES (?,?,?,?)`,
    [productName,productDescription,discountCategory,productPrice]) 
}

//Creats a cart entity
async function createCART(userID,productID,numProducts)
{
    const [result] = await pool.query(`INSERT INTO CART (userID,productID,numProducts) VALUES (?,?,?)`,
    [userID,productID,numProducts]) 
}

//Creats a tracking entity
async function createTRACKING(userID,orderStatus,shippingStatus,shippingProvider)
{
    const [result] = await pool.query(`INSERT INTO TRACKING (userID,orderStatus,shippingStatus,shippingProvider) VALUES (?,?,?,?)`,
    [userID,orderStatus,shippingStatus,shippingProvider]) 
}

//Creats a completion entity
async function createCOMPLETION(trackerID,completionMessage,completionConfirmation,opinionQuery)
{
    const [result] = await pool.query(`INSERT INTO COMPLETION (trackerID,completionMessage,completionConfirmation,opinionQuery) VALUES (?,?,?,?)`,
    [trackerID,completionMessage,completionConfirmation,opinionQuery]) 
}

//Code to test functions
//await createUSER('test','test','test','996-999-9999','3HZ040');
const result = await getUSERS();
console.log(result);