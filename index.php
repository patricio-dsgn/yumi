<!DOCTYPE html>
<html lang="en">
<head>
  <title>Proyecto Yumi</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>

<br><br>

<div class="container">
	<div class="jumbotron">		
		<h1>Yumi</h1>
		<i>(Proyecto en desarrollo)</i>
		<br>
		<h4>María José Ensignia</h4>
		<p>cote_ensignia#0167</p>
		
		<h4>Patricio Garrido <small>patricio_ngg#3563</small></h4>
		<hr>
		<div>
			<b>Presentación online</b>: <a href="https://bit.ly/39FrK6S">https://bit.ly/39FrK6S</a>
		</div>
		<div>
			<b>Prototipo interactivo</b>: <a href="https://bit.ly/2LYITQE">https://bit.ly/2LYITQE</a>
		</div>
		<div>
			<b>Repositorio Github</b>: <a href="https://github.com/patricio-dsgn/yumi">https://github.com/patricio-dsgn/yumi</a>
		</div>
		<hr>
		<h2>Versiones:</h2>
		<?php
		$list = scandir(".");
		foreach ($list as $key => $value) {
			if(
				($value != "index.php") and 
				($value != ".") and
				($value != "..") and
				($value != "__") and
				($value != "error_log")
			) {
				echo '<a href="./'.$value.'" class="btn btn-info" role="button">'.$value.'</a> <br><br>';
			}
		}
		?>
	</div>
</div>


</body>
</html>