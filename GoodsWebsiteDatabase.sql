CREATE DATABASE GoodsWebsiteDatabase;
USE GoodsWebsiteDatabase;
DEFAULT CHARACTER SET = 'utf8mb4';

CREATE TABLE USERS(
    userID INT AUTO_INCREMENT PRIMARY KEY, 
    userName VARCHAR(255) NOT NULL,
    loginUsername VARCHAR (255),
    loginPassword VARCHAR (255) UNIQUE NOT NULL,
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

-- Add productName and imageURL columns to the CART table
ALTER TABLE CART
ADD COLUMN productName VARCHAR(255) NOT NULL,
ADD COLUMN imageURL VARCHAR(255) NOT NULL;

-- Add foreign key constraints for productName and imageURL
ALTER TABLE CART
ADD FOREIGN KEY (productID) REFERENCES PRODUCTS(productID),
ADD FOREIGN KEY (productName) REFERENCES PRODUCTS(productName),
ADD FOREIGN KEY (imageURL) REFERENCES PRODUCTS(imageURL);

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

ALTER TABLE PRODUCTS
ADD imageURL VARCHAR(255) NOT NULL;

UPDATE USERS SET loginUsername = 'temp_username';

-- Reset auto-increment counter for MySQL
ALTER TABLE USERS AUTO_INCREMENT = 1;

ALTER TABLE PRODUCTS AUTO_INCREMENT = 1;

ALTER TABLE CART AUTO_INCREMENT = 1;

ALTER TABLE CreditCard AUTO_INCREMENT = 1;

ALTER TABLE TRACKING AUTO_INCREMENT = 1;

ALTER TABLE COMPLETE AUTO_INCREMENT = 1;


ALTER TABLE USERS
ADD loginUsername VARCHAR (255);

ALTER TABLE USERS
ADD loginPassword VARCHAR (255);

ALTER TABLE CART
ADD totalPrice DECIMAL(10,2) NOT NULL;

DELETE FROM USERS;

DELETE FROM PRODUCTS;

DELETE FROM CART;

DELETE FROM CreditCard;

DELETE FROM TRACKING;

DELETE FROM COMPLETE;

--Puts data into Users table
INSERT INTO USERS (userName,loginUsername,loginPassword,userAddress,userEmail,userPhone,trackingCode)
VALUES
    ('Alice','temp','temp', '123 Elm St', 'alice@example.com', '555-123-4567', 'A1B2C3'),
    ('Bob','buffy','tuffy', '789 Oak Dr', 'bob@gmail.com', '777-888-9999', 'B4O5B6'),
    ('Michael','tubularBells','password', '789 Pine Rd', 'michael@example.com', '555-555-5555', 'M9P8QZ'),
    ('Emily','CocoPuffs','josh918', '101 Redwood Ave', 'emily@gmail.com', '111-222-3333', 'E7R2W1');

--Puts data into Products table
INSERT INTO PRODUCTS(productName,productDescription,discountCategory, discountAmount, productPrice,imageURL)
VALUES
    ('Laptop', 'High-performance laptop', 'DISABLED', 20, 799.99,'assets/laptop.jpg'),
    ('Coffee Maker', 'Automatic coffee machine', 'ENABLED', 0, 49.99,'assets/coffeemaker.jpg'),
    ('Smartphone', 'High-end mobile device', 'DISABLED', 60, 499.99,'assets/smartphone.jpg'),
    ('Headphones', 'Wireless noise-canceling headphones', 'DISABLED', 30, 149.99,'assets/headphones.jpg');


CREATE PROCEDURE Insert100()
BEGIN
    DECLARE counter INT DEFAULT 1;

    WHILE counter <= 100 DO
        INSERT INTO PRODUCTS (productName, productDescription, discountCategory, discountAmount, productPrice, imageURL)
        VALUES (
            CONCAT('Product ', counter),
            CONCAT('Description ', counter),
            IF(counter % 2 = 0, 'ENABLED', 'DISABLED'),
            FLOOR(RAND() * 50),
            ROUND(RAND() * 10 + 5, 2),
            'questionMark.jpg'
        );

        SET counter = counter + 1;
    END WHILE;
END;

CALL Insert100();

INSERT INTO CART (userID, productID, productName, imageURL, numProducts, totalPrice)
VALUES
    (1, 101, 'Product 1', 'questionMark.jpg', 2, 30.00),
    (2, 102, 'Product 2', 'questionMark.jpg', 1, 15.50),
    (1, 103, 'Product 3', 'questionMark.jpg', 3, 45.75);


INSERT INTO CreditCard (userID, cardNumber, expirationDate, CVV) 
VALUES
    (1, '1234567890123456', '12/25', '123'),
    (2, '9876543210987654', '05/23', '456'),
    (3, '1111222233334444', '08/24', '789'),
    (4, '5555666677778888', '02/22', '555');

INSERT INTO TRACKING(userID,orderStatus,shippingStatus,shippingProvider)
VALUES
    (1,'IN PROGRESS','ASSEMBLY','HoalinOats'),
    (2,'IN PROGRESS', 'SHIPPING', 'UPS'),
    (3,'CANCELED','COMPLETE','temp'),
    (4,'NO ORDER', 'COMPLETE', 'temp');

INSERT INTO COMPLETE(trackerID, completionMessage, completionConfirmation, opinionQuery)
VALUES
    (1,'PACKAGE ON ITS WAY','INCOMPLETE','6'),
    (2,'PACKAGE ON ITS WAY', 'INCOMPLETE', '2'),
    (3,'NaN','INCOMPLETE','1'),
    (4,'NaN','INCOMPLETE','4');

SELECT * FROM USERS

SELECT * FROM PRODUCTS

SELECT * FROM CART

SELECT * FROM TRACKING

SELECT * FROM COMPLETION