USE GoodsWebsiteDatabase;--Contributed by Logan Pasternak
DEFAULT CHARACTER SET = 'utf8mb4';
--This is the user entity 
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
--The information regarding a single product is tracked here
CREATE TABLE PRODUCTS(
    productID INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255) NOT NULL, 
    productDescription TEXT, 
    discountCategory ENUM('ENABLED','DISABLED') NOT NULL,
    discountAmount INT, 
    productPrice DECIMAL(10,2) NOT NULL
);

--The collection of products in the cart
CREATE TABLE CART(
    cartID INT AUTO_INCREMENT PRIMARY KEY, 
    userID INT, 
    productID INT, 
    numProducts INT NOT NULL,
    totalPrice DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (userID) REFERENCES USERS(userID), 
    FOREIGN KEY (productID) REFERENCES PRODUCTS(productID)
     
);

CREATE TABLE CreditCard (
    CardID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    cardNumber VARCHAR(16),
    expirationDate VARCHAR(7),
    CVV VARCHAR(3),
    FOREIGN KEY (userID) REFERENCES USERS(userID)
);

--Package tracking database
CREATE TABLE TRACKING(
    trackerID INT AUTO_INCREMENT PRIMARY KEY, 
    userID INT, 
    FOREIGN KEY (userID) REFERENCES USERS(userID), 
    orderStatus ENUM('NO ORDER','IN PROGRESS', 'CANCELED') NOT NULL, 
    shippingStatus ENUM('ASSEMBLY','SHIPPING','COMPLETE') NOT NULL, 
    shippingProvider VARCHAR(255) NOT NULL 
);

--Order completion database
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
INSERT INTO PRODUCTS(productName,productDescription,discountCategory, discountAmount, productPrice)
VALUES
    ('Laptop', 'High-performance laptop', 'DISABLED', 20, 799.99),
    ('Coffee Maker', 'Automatic coffee machine', 'ENABLED', 0, 49.99),
    ('Smartphone', 'High-end mobile device', 'DISABLED', 60, 499.99),
    ('Headphones', 'Wireless noise-canceling headphones', 'DISABLED', 30, 149.99);


CREATE PROCEDURE Insert100Products()
BEGIN
    DECLARE counter INT DEFAULT 1;

    WHILE counter <= 100 DO
        INSERT INTO PRODUCTS (productName, productDescription, discountCategory, discountAmount, productPrice)
        VALUES (
            CONCAT('Product ', counter),
            CONCAT('Description ', counter),
            IF(counter % 2 = 0, 'ENABLED', 'DISABLED'),
            FLOOR(RAND() * 50),
            ROUND(RAND() * 10 + 5, 2)
        );

        SET counter = counter + 1;
    END WHILE;
END;

CALL Insert100Products();

--Puts data into Cart table
INSERT INTO CART(userID,productID,numProducts, totalPrice)
VALUES
    (1,1,2,10.00),
    (1,2,2,10.00),
    (2,3,1,499.99),
    (3,4,1,149.99);


INSERT INTO CreditCard (userID, cardNumber, expirationDate, CVV) 
VALUES
    (1, '1234567890123456', '12/25', '123'),
    (2, '9876543210987654', '05/23', '456'),
    (3, '1111222233334444', '08/24', '789'),
    (4, '5555666677778888', '02/22', '555');


--Puts data into Tracking table
INSERT INTO TRACKING(userID,orderStatus,shippingStatus,shippingProvider)
VALUES
    (1,'IN PROGRESS','ASSEMBLY','HoalinOats'),
    (2,'IN PROGRESS', 'SHIPPING', 'UPS'),
    (3,'CANCELED','COMPLETE','temp'),
    (4,'NO ORDER', 'COMPLETE', 'temp');

--Puts data into Complete table
INSERT INTO COMPLETE(trackerID, completionMessage, completionConfirmation, opinionQuery)
VALUES
    (1,'PACKAGE ON ITS WAY','INCOMPLETE','6'),
    (2,'PACKAGE ON ITS WAY', 'INCOMPLETE', '2'),
    (3,'NaN','INCOMPLETE','1'),
    (4,'NaN','INCOMPLETE','4');

--Show User data in a table format
SELECT * FROM USERS

--Show Product data in a table format
SELECT * FROM PRODUCTS

--Show Cart data associated with a specific user
SELECT * FROM CART

--Show Tracking data associated with a specific user
SELECT * FROM TRACKING

--Show completion data associated with a specific user
SELECT * FROM COMPLETION

//CONTRIBUTION OF LOGAN PASTERNAK END
