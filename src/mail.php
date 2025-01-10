<?php
// test
$to = "raniabht@hotmail.com";
$subject = "concour";
$txt = $_POST["nom"]"/" $_POST["prenom"];
$headers = 'From:'.$_POST["mail"];

mail($to,$subject,$txt,$headers);


header("location: contact.php");
?>
<?php
 ?>