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
	increaseQuantity,
	decreaseQuantity,
	deleteFromCart,
	deleteAllProductsFromCart,
	searchProductByName,
	getDISCOUNTEDPRODUCTS,
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

app.get('/discountedproducts', async (req, res) => {
	try {
		const category = 'ENABLED';
		const products = await getDISCOUNTEDPRODUCTS(category);
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

app.put('/updatecart', async (req, res) => {
	try {
		console.log(req.body);
		const { userID, productID, numProducts, totalPrice } = req.body;
		await updateCART(userID, productID, numProducts, totalPrice);

		res.status(201).json({ message: 'Cart updated successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.post('/increasequantity', async (req, res) => {
	try {
		const { userID, productID, numProducts, totalPrice } = req.body;

		// Input validation
		if (!userID || !productID) {
			return res.status(400).json({ error: 'Missing or invalid parameters' });
		}

		// Assume there is a function increaseQuantity in your database logic
		const increaseSuccessful = await increaseQuantity(
			userID,
			productID,
			numProducts,
			totalPrice
		);

		if (increaseSuccessful) {
			res.status(200).json({ message: 'Quantity increased successfully' });
		} else {
			res.status(404).json({
				error: 'Cart entry not found or quantity could not be increased',
			});
		}
	} catch (error) {
		console.error('Error increasing quantity:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.post('/decreasequantity', async (req, res) => {
	try {
		const { userID, productID, numProducts, totalPrice } = req.body;

		// Input validation
		if (!userID || !productID) {
			return res.status(400).json({ error: 'Missing or invalid parameters' });
		}

		// Assume there is a function increaseQuantity in your database logic
		const decreaseSuccessful = await decreaseQuantity(
			userID,
			productID,
			numProducts,
			totalPrice
		);

		if (decreaseSuccessful) {
			res.status(200).json({ message: 'Quantity decreased successfully' });
		} else {
			res.status(404).json({
				error: 'Cart entry not found or quantity could not be decreased',
			});
		}
	} catch (error) {
		console.error('Error decreasing quantity:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.delete('/deleteallproducts', async (req, res) => {
	try {
		const { userID } = req.body;

		// Input validation
		if (!userID) {
			return res.status(400).json({ error: 'Missing user ID parameter' });
		}

		// Assume there is a function deleteAllProductsFromCart in your database logic
		const deletionSuccessful = await deleteAllProductsFromCart(userID);

		if (deletionSuccessful) {
			res
				.status(200)
				.json({ message: 'All products deleted from the cart successfully' });
		} else {
			res
				.status(404)
				.json({ error: 'Cart not found or products could not be deleted' });
		}
	} catch (error) {
		console.error('Error deleting all products from the cart:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.delete('/deleteFromCart', async (req, res) => {
	try {
		const { userID, productID } = req.body;

		if (!userID || !productID) {
			return res.status(400).json({ error: 'Missing or invalid parameters' });
		}

		const deletionSuccessful = await deleteFromCart(userID, productID);

		if (deletionSuccessful) {
			res.status(200).json({ message: 'Cart entry deleted successfully' });
		} else {
			res
				.status(404)
				.json({ error: 'Cart entry not found or could not be deleted' });
		}
	} catch (error) {
		console.error('Error deleting cart entry:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.get('/monitor', (req, res) => {
	// res.sendFile(__dirname+'/index.html');
	res.sendFile('monitor.html', { root: '.' });
});

app.get('/searchproduct', async (req, res) => {
	try {
		const { productName } = req.body;
		console.log(req.body);
		// Input validation
		if (!productName) {
			return res.status(400).json({ error: 'Missing product name parameter' });
		}

		// Assume there is a function searchProductByName in your database logic
		const searchResults = await searchProductByName(productName);

		if (searchResults.length === 0) {
			res.status(404).json({ error: 'Product not found' });
		} else {
			res.status(200).json({ results: searchResults });
		}
	} catch (error) {
		console.error('Error searching for products by name:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
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
