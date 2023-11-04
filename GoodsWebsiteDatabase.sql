CREATE DATABASE GoodsWebsiteDatabase;
USE GoodsWebsiteDatabase;
DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE USERS(
    userID INT AUTO_INCREMENT PRIMARY KEY, 
    userName VARCHAR(255) NOT NULL,
    loginUsername VARCHAR (255),
    loginPassword VARCHAR (255),
    userAddress VARCHAR(255) NOT NULL,
    userEmail VARCHAR(255) UNIQUE NOT NULL, 
    userPhone VARCHAR(255) UNIQUE NOT NULL, 
    trackingCODE VARCHAR(6) UNIQUE NOT NULL 
);

CREATE TABLE PRODUCTS(
    productID INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255) NOT NULL, 
    productDescription TEXT, 
    discountCategory ENUM('ENABLED','DISABLED') NOT NULL,
    discountAmount INT, 
    productPrice DECIMAL(10,2) NOT NULL,
    imageURL VARCHAR(255) NOT NULL
);

CREATE INDEX productName_index ON PRODUCTS (productName);
CREATE INDEX imageURL_index on PRODUCTS (imageURL);

CREATE TABLE CART(
    cartID INT AUTO_INCREMENT PRIMARY KEY, 
    userID INT, 
    productID INT, 
    productName VARCHAR(255) NOT NULL, 
    imageURL VARCHAR(255) NOT NULL,
    numProducts INT NOT NULL,
    totalPrice DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (userID) REFERENCES USERS(userID), 
    FOREIGN KEY (productID) REFERENCES PRODUCTS(productID),
	FOREIGN KEY (productName) REFERENCES PRODUCTS(productName),
    FOREIGN KEY (imageURL) REFERENCES PRODUCTS(imageURL)
);

CREATE TABLE CreditCard (
    CardID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    cardNumber VARCHAR(16),
    expirationDate VARCHAR(7),
    CVV VARCHAR(3),
    FOREIGN KEY (userID) REFERENCES USERS(userID)
);


CREATE TABLE TRACKING(
    trackerID INT AUTO_INCREMENT PRIMARY KEY, 
    userID INT, 
    FOREIGN KEY (userID) REFERENCES USERS(userID), 
    orderStatus ENUM('NO ORDER','IN PROGRESS', 'CANCELED') NOT NULL, 
    shippingStatus ENUM('ASSEMBLY','SHIPPING','COMPLETE') NOT NULL, 
    shippingProvider VARCHAR(255) NOT NULL 
);


CREATE TABLE COMPLETE(
    completionID INT AUTO_INCREMENT PRIMARY KEY,
    trackerID INT, 
    FOREIGN KEY (trackerID) REFERENCES TRACKING(trackerID), 
    completionMessage TEXT, 
    completionConfirmation ENUM('COMPLETE','INCOMPLETE') NOT NULL, 
    opinionQuery ENUM('1','2','3','4','5','6','7','8','9','10') NOT NULL 
);

ALTER TABLE PRODUCTS
ADD discountAmount INT;

UPDATE USERS SET loginUsername = 'temp_username';

UPDATE USERS SET loginPassword = 'temp_password';


ALTER TABLE USERS
ADD loginUsername VARCHAR (255);

ALTER TABLE USERS
ADD loginPassword VARCHAR (255);

ALTER TABLE CART
ADD totalPrice DECIMAL(10,2) NOT NULL;

DELETE FROM USERS;

DELETE FROM PRODUCTS;

DELETE FROM CART;

DELETE FROM TRACKING;

DELETE FROM COMPLETE;

INSERT INTO USERS (userName,loginUsername,loginPassword,userAddress,userEmail,userPhone,trackingCode)
VALUES
    ('Alice','temp','temp', '123 Elm St', 'alice@example.com', '555-123-4567', 'A1B2C3'),
    ('Bob','buffy','tuffy', '789 Oak Dr', 'bob@gmail.com', '777-888-9999', 'B4O5B6'),
    ('Michael','tubularBells','password', '789 Pine Rd', 'michael@example.com', '555-555-5555', 'M9P8QZ'),
    ('Emily','CocoPuffs','josh918', '101 Redwood Ave', 'emily@gmail.com', '111-222-3333', 'E7R2W1');

INSERT INTO PRODUCTS(productName,productDescription,discountCategory, discountAmount, productPrice,imageURL)
VALUES
    ('Laptop', 'High-performance laptop', 'DISABLED', 20, 799.99,'assets/laptop.jpg'),
    ('Coffee Maker', 'Automatic coffee machine', 'ENABLED', 0, 49.99,'assets/coffeemaker.jpg'),
    ('Smartphone', 'High-end mobile device', 'DISABLED', 60, 499.99,'assets/smartphone.jpg'),
    ('Headphones', 'Wireless noise-canceling headphones', 'DISABLED', 30, 149.99,'assets/headphones.jpg');

INSERT INTO CART(userID,productID,numProducts, totalPrice)
VALUES
    (17,7,2,10.00),
    (17,6,2,10.00),
    (18,8,1,499.99),
    (19,9,1,149.99);

INSERT INTO TRACKING(userID,orderStatus,shippingStatus,shippingProvider)
VALUES
    (17,'IN PROGRESS','ASSEMBLY','HoalinOats'),
    (18,'IN PROGRESS', 'SHIPPING', 'UPS'),
    (19,'CANCELED','COMPLETE','temp'),
    (20,'NO ORDER', 'COMPLETE', 'temp');

INSERT INTO COMPLETE(trackerID, completionMessage, completionConfirmation, opinionQuery)
VALUES
    (14,'PACKAGE ON ITS WAY','INCOMPLETE','6'),
    (15,'PACKAGE ON ITS WAY', 'INCOMPLETE', '2'),
    (16,'NaN','INCOMPLETE','1'),
    (17,'NaN','INCOMPLETE','4');

SELECT * FROM USERS

SELECT * FROM PRODUCTS

SELECT * FROM CART

SELECT * FROM TRACKING

SELECT * FROM COMPLETION
