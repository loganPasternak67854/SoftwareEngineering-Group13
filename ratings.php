<?php
// what is the database credentials?
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "service_ratings";

// creates the connections
$conn = new mysqli($servername, $username, $password, $dbname);

// Checks connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['rating'])) {
        $rating = $_POST['rating'];

        if ($rating >= 1 && $rating <= 10) {
            // Prepare SQL statement to insert the rating
            $sql = "INSERT INTO ratings (rating) VALUES (?)";
            
            // Prepare and bind parameter
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $rating);

            // Execute the statement
            $stmt->execute();

            echo "Thank you for rating the service: $rating/10";
        } else {
            echo "Please enter a valid rating between 1 and 10.";
        }
    } else {
        echo "Rating not received.";
    }
}

// Close the connection
$conn->close();
?>
