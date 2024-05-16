<?php
	$yName = $_POST['yourName'];
	$email = $_POST['Email'];
	$message = $_POST['Message'];

	// Database connection
	$conn = new mysqli('localhost','root','Jabu2k@2002','contact_db');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(yourName, Email, Message) values(?, ?, ?,)");
		$stmt->bind_param("sss", $yourName, $Email, $Message);
		$execval = $stmt->execute();
		echo $execval;
		echo "submitted successfully...";
		$stmt->close();
		$conn->close();
	}
?>