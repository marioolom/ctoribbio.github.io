<?php 
//isset, devuelve true si está definida
if (isset($_GET['name']) && isset($_GET['location'])) {
	echo "- Hello 2º DAW: I am " . $_GET['name'] . " from " . $_GET['location'];
	echo "<br />- Data received via AJAX GET request";
}
?>