CREATE DATABASE completionset
    DEFAULT CHARACTER SET = 'utf8mb4';
CREATE TABLE Users (
    User_id INT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Address VARCHAR(255),
    Email_Address VARCHAR(255),
    Phone_Number VARCHAR(20)
);

CREATE TABLE Products (
 Product_id INT PRIMARY KEY,
    Product_name VARCHAR(255) NOT NULL,
    Product_description TEXT,
    Discount_category VARCHAR(50)
);

CREATE TABLE Tracking (
    Tracker_id INT PRIMARY KEY,
    User_id INT,
    Product_id INT,
    Order_status BOOLEAN,
    Current_shipping_status VARCHAR(50),
    Shipping_provider VARCHAR(100),
    FOREIGN KEY (User_id) REFERENCES Users(User_id),
    FOREIGN KEY (Product_id) REFERENCES Products(Product_id) 
);

CREATE table Completion(
  Completion_id INT PRIMARY KEY,
  Completion_Confirmation BOOLEAN,
  Opinion_Query VARCHAR(255) NOT NULL,
  FOREIGN KEY (User_id) REFERENCES Users(User_id),
  FOREIGN KEY (Tracker_id) REFERENCES Tracker(Tracker_id),
  FOREIGN KEY (Product_id) REFERENCES Products(Product_id)   
) COMMENT '';

insert INTO Completion (Completion_id, Completion_Confirmation, Opinion_Query)
VALUES(
    '1',
    '0',
    'On a scale of 1-10 what is your opinion of the services provided?'
    );
