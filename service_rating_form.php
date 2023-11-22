<!DOCTYPE html>
<html>
<head>
    <title>Service Quality Rating</title>
</head>
<body>

<h2>Rate the Quality of Service</h2>

<form method="post" action="process_rating.php">
    <label for="rating">Rate from 1 to 10:</label>
    <input type="number" id="rating" name="rating" min="1" max="10" required>
    <input type="submit" value="Submit">
</form>

</body>
</html>
