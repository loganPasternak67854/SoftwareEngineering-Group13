CREATE DATABASE completionset
    DEFAULT CHARACTER SET = 'utf8mb4';


CREATE table Completion(
  Completion_id INT PRIMARY KEY,
  Completion_Confirmation BOOLEAN,
  Opinion_Query VARCHAR(255) NOT NULL,
  FOREIGN KEY (User_id) REFERENCES Users(User_id),
  FOREIGN KEY (Tracker_id) REFERENCES Tracker(Tracker_id),
  FOREIGN KEY (Product_id) REFERENCES Products(Product_id)   
) COMMENT '';
