<?php
$nombre = $_POST["nombre"];
$descripción = isset($_POST["descripción"])?$_POST["descripción"]:"";
$precio = $_POST["precio"];
$cantidad =  isset($_POST["cantidad"])?$_POST["cantidad"]:"";
$total = $cantidad * $precio;

echo " el producto tiene los siguientes datos";
echo "el nombre:$nombre </br>";
echo "la descripción:$descripción </br>";
echo "el precio:$precio </br>";
echo "Total:$total";

?>