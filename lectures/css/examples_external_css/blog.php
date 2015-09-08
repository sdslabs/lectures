<?php
	$name = $_POST['name'];
	$author = $_POST['author'];
	$content = $_POST['content'];
	$file = fopen('index.txt', 'r');
	$index = fread($file, filesize('index.txt'));
	fclose($file);
	$index = intval($index);

	$marker = "Pinger";
$file = fopen("template.html", 'r');
$text = fread($file, filesize('template.html'));
fclose($file);

	$start = strpos($text, $marker);
	$render = substr($text, 0, $start) . "\n\t\t\t<h2>Blog{$index}: {$name}</h2>\n
	\t\t\t<span>Author: {$author}</span>\n
	\t\t\t{$content}" . substr($text, $start + strlen($marker));
	$file = fopen("blog{$index}.html", 'w');
	fwrite($file, $render);
	fclose($file);
	$index++;
		$file = fopen('index.txt', 'w');
	fwrite($file, "{$index}");
		fclose($file);
?>