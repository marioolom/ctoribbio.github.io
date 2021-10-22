<?php
echo "<style>
html{
background-color:",$_GET['color'],"
}
</style>";
echo "El method  usado fué: " ,$_SERVER['REQUEST_METHOD'],"<br>";
echo  $_GET['nombre'],"<br>";
echo  $_GET['direccion'],"<br>";
echo  $_GET['telf'],"<br>";
echo  $_GET['genero'],"<br>";
echo  $_GET['calificacion'],"<br>";
echo  $_GET['texto'],"<br>";
echo  $_GET['oculto'],"<br>";  ?>