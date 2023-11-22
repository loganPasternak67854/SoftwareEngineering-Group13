<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if rating is received
    if (isset($_POST['rating'])) {
        $rating = $_POST['rating'];

        // Validate range of 1 to 10
        if ($rating >= 1 && $rating <= 10) {
            // Store the rating and save to a database
            // display the rating
            echo "Thank you for rating the service: $rating/10";
        } else {
            echo "Please enter a valid rating between 1 and 10.";
        }
    } else {
        echo "Rating not received.";
    }
}
?>