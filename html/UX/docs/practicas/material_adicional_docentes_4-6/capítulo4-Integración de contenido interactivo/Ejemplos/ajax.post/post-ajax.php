<?php 

if (isset($_POST['name']) && isset($_POST['location'])) {
	echo "- Hello 2º DAW: I am " . $_POST['name'] . " from " . $_POST['location'];
	echo "\n Data received via AJAX POST request";
}
?>