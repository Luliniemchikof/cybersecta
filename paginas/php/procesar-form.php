<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sendto = 'lulikunka@gmail.com';
    $subject = "Formulario de contacto";
    
    $corps = "Nombre: " . $_POST['nombre'] . "\n" .
    "Apellido: " . $_POST['apellido'] . "\n" .
    "Email: " . $_POST['email'] . "\n" .
    "Provincia y localidad: " . $_POST['provinciaYlocalidad'] . "\n" .
    "Empresa: " . $_POST['empresa'] . "\n" .
    "Propuesta: " . $_POST['propuesta'] . "\n" ."\n";
    
    $From = "From: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";
	$From .= "Reply-To: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";

    if (mail($sendto, $subject, $corps, $headers)) {
        echo "success"; // Respuesta para JavaScript
    } else {
        echo "error"; // Respuesta para JavaScript
    }
} else {
    echo "error"; // Si no es POST, devuelve error
}
?>
