import {
	createUSER,
	createPRODUCT,
	createCART,
	createTRACKING,
	createCOMPLETION,
} from './database.js';
import {
	getUSERS,
	getUSER,
	getUSERNAME,
	getEMAIL,
	getPHONE,
	getADDRESS,
	getCODE,
} from './database.js';
import {
	getPRODUCTS,
	getPRODUCT,
	getPRODUCT_NAME,
	getPRODUCT_DESCRIPTION,
	getPRODUCT_DISCOUNT,
	getPRODUCT_DISCOUNT_AMOUNT,
	getPRODUCT_PRICE,
} from './database.js';
import {
	getCARTS,
	getCART,
	getCART_NUMPRODUCTS,
	getCART_TOTAL_PRICE,
} from './database.js';
import {
	getTRACKINGS,
	getTRACKING,
	getTRACKING_ORDERSTATUS,
	getTRACKING_SHIPPINGSTATUS,
	getTRACKING_SHIPPINGPROVIDER,
} from './database.js';
import {
	getCOMPLETES,
	getCOMPLETE,
	getCOMPLETE_COMPLETIONMESSAGE,
	getCOMPLETE_COMPLETIONCONFIRMATION,
	getCOMPLETE_OPINIONQUERY,
} from './database.js';
import {
	deleteUSER,
	deletePRODUCT,
	deleteCART,
	deleteTRACKING,
	deleteCOMPLETION,
} from './database.js';
import {
	updateUSER,
	updateUSERNAME,
	updateADDRESS,
	updateEMAIL,
	updatePHONE,
	updateCODE,
} from './database.js';
import {
	updatePRODUCT,
	updatePRODUCT_DESCRIPTION,
	updatePRODUCT_NAME,
	updatePRODUCT_DISCOUNT,
	updatePRODUCT_DISCOUNT_AMOUNT,
	updatePRODUCT_PRICE,
} from './database.js';
import {
	updateCART,
	updateCART_NUMPRODUCTS,
	updateCART_TOTALPRICE,
} from './database.js';
import {
	updateTRACKING_ORDERSTATUS,
	updateTRACKING_SHIPPINGSTATUS,
	updateTRACKING_SHIPPINGPROVIDER,
} from './database.js';
import {
	updateCOMPLETE,
	updateCOMPLETE_MESSAGE,
	updateCOMPLETE_CONFIRMATION,
	updateCOMPLETE_QUERY,
} from './database.js';

import express from 'express';
import fs from 'fs';

const app = express();
const port = 3002;
app.use(express.json());
app.use(express.static('.'));
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: '.' });
});

app.get('/products', async (req, res) => {
	try {
		const products = await getPRODUCTS();
		res.json(products);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.get('/getcart', async (req, res) => {
	try {
		const carts = await getCARTS();
		res.json(carts);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.post('/addtocart', async (req, res) => {
	try {
		console.log(req.body);
		const {
			userID,
			productID,
			productName,
			numProducts,
			totalPrice,
			imageURL,
		} = req.body;
		await createCART(
			userID,
			productID,
			productName,
			numProducts,
			totalPrice,
			imageURL
		);

		res.status(201).json({ message: 'Cart created successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.get('/monitor', (req, res) => {
	// res.sendFile(__dirname+'/index.html');
	res.sendFile('monitor.html', { root: '.' });
});

const orders = [
	{ orderId: 1, status: 'Pending', totalAmount: 100 },
	{ orderId: 2, status: 'Shipped', totalAmount: 100 },
	{ orderId: 3, status: 'Pending', totalAmount: 100 },
];

const products = [
	{
		productId: 1,
		name: 'Lightsaber',
		description: 'A jedi lightsaber',
		price: 100,
	},
	{
		productId: 2,
		name: 'Blaster',
		description: 'A blaster from star wars',
		price: 200,
	},
	{
		productId: 3,
		name: 'Droid',
		description: 'A droid from star wars',
		price: 300,
	},
];

app.get('/monitor_order', (req, res) => {
	console.log('monitor_order');
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(orders));
});

app.get('/product_list', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(products));
});

app.get('/cart_list', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(products));
});

app.get('/fetch_cart', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(products));
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
