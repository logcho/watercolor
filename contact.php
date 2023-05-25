<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message-input"];

    // Validate form data (you can add more validation if needed)
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all fields.";
    } else {
        // Process the form data as desired
        // For example, you can send an email or save the data to a database
        // Replace this code with your own processing logic

        // Send an email
        $to = "support@watercolorgames.com"; // Replace with your own email address
        $subject = "Form Submission";
        $emailBody = "Name: " . $name . "\n";
        $emailBody .= "Email: " . $email . "\n";
        $emailBody .= "Message: " . $message;

        $headers = "From: " . $email . "\r\n" .
            "Reply-To: " . $email . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $emailBody, $headers)) {
            echo "Thank you for your submission. We will get back to you soon.";
        } else {
            echo "Oops! An error occurred. Please try again later.";
        }
    }
}
?>
