$correoDestino = "tucorreo@example.com"; // Reemplaza con tu dirección de correo electrónico

// Después de realizar el procesamiento del pago y obtener el monto
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$monto = $_POST['monto'];

// Envío del correo electrónico
$asunto = "Pago realizado";
$mensaje = "¡Hola $nombre! Se ha realizado un pago por un monto de $monto USD.";

$headers = "From: $correoDestino" . "\r\n" .
           "Reply-To: $correoDestino" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

mail($email, $asunto, $mensaje, $headers);