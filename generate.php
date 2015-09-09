<?php
include "_data/text.php";
function cleanup($txt)
{
	$pats = array(
		'&egrave;',
		'&eacute;',
		'&Egrave;',
		'&Eacute;',
		'&uuml;',
		'&Uuml;',
		'<em>',
		'</em>',
		'<i>',
		'</i>',
		'–',
		'<b>',
		'</b>',
		'<strong>',
		'</strong>'
	);
	$reps = array(
		'è',
		'È',
		'é',
		'É',
		'ü',
		'Ü',
		'*',
		'*',
		'*',
		'*',
		'&mdash;',
		'**',
		'**',
		'**',
		'**',
	);
	return str_replace($pats, $reps, $txt);
}
/*
foreach ($text["compositions"] as $c) {
	$filename = dirname(__FILE__) . "/_posts/compositions/" . date("Y-m-d") . '-' . preg_replace('/[^a-zA-Z0-9]+/', '-', $c["title"]) . '.md';
	$pagetext = "---\nlayout: page\nsidebar: left\nsubheadline: \ntitle: ";
	$pagetext .= '"' . str_replace('"', '\"', $c["title"]) . '"' . "\n";
	$pagetext .= "teaser: " . '""' . "\nbreadcrumb: true\ncategories:\n    - compositions\nsamples:\n";
	foreach ( $c["sample"] as $mp3 ) {
		$pagetext .= sprintf("    - %s\n", $mp3);
	}
	$img = $text["images"][$c["images"][0]];
	if ( $img ) {
		$pagetext .= "image:\n";
		$pagetext .= sprintf("    url: %s\n    title: %s\n    caption: %s\n", $img["filename"], $img["alt"], $img["caption"] );
	}
	$pagetext .= "\n---\n\n";
	foreach ( $c["description"] as $txt ) {
		$pagetext .= cleanup($txt) . "\n\n";
	}
	foreach ( $c["sources"] as $src ) {
		if ( $src["title"] === "empty" ) {
			break;
		}
		if ( $src["title"] !== "" ) {
			$pagetext .= "### " . $src["title"] . "\n\n";
		}
		if ( count( $src["content"] ) ) {
			foreach ( $src["content"] as $source ) {
				$pagetext .= " - " . cleanup($source) . "\n";
			}
		}
	}
	if ( file_exists( $filename ) ) {
		@unlink($filename);
	}
	file_put_contents( $filename, $pagetext );
}
foreach ( $text["reviews"]["articles"] as $r) {
	$filename = dirname(__FILE__) . "/_posts/reviews/" . $r["date"] . '-' . preg_replace('/[^a-zA-Z0-9]+/', '-', $r["publication"]) . '.md';
	$pagetext = "---\nlayout: page\ntitle: ";
	$pagetext .= '"' . str_replace('"', '\"', trim($r["title"] . " " . $r["publication"] . " " . $r["issue"])) . '"' . "\n";
	$pagetext .= "\ncategories:\n    - reviews\n";
	$pagetext .= "\n---\n\n";
	$pagetext .= "## " . trim($r["publication"] . " " . $r["issue"]) . "\n\n";
	if ( $r["title"] !== "" ) {
		$pagetext .= "## " . $r["title"] . "\n\n";
	}
	$pagetext .= "### by " . $r["author"] . "\n\n";
	foreach ( $r["paras"] as $txt ) {
		$pagetext .= cleanup($txt) . "\n\n";
	}
	if ( file_exists( $filename ) ) {
		@unlink($filename);
	}
	file_put_contents( $filename, $pagetext );
}
$imgout = "# Image details for dockstader.info\n";
foreach ( $text["images"] as $i ) {
	$imgout .= sprintf("- title: \"%s\"\n  caption: \"%s\"\n filename: \"%s\"\n\n", $i["alt"], $i["caption"], $i["filename"]);
}
file_put_contents( dirname(__FILE__) . "/_data/images.yaml", $imgout );

foreach ( $text["interviews"] as $r) {
	$filename = dirname(__FILE__) . "/_posts/interviews/" . $r["postdate"] . '-' . preg_replace('/[^a-zA-Z0-9]+/', '-', $r["title"]) . '.md';
	$pagetext = "---\nlayout: page\ntitle: ";
	$pagetext .= '"' . str_replace('"', '\"', trim($r["title"] . ", " . $r["date"])) . '"' . "\n";
	$pagetext .= "\ncategories:\n    - interviews\n";
	$pagetext .= "\n---\n\n";
	$pagetext .= "## " . trim($r["title"] . ", " . $r["date"]) . "\n\n";
	$pagetext .= $r["preamble"] . "\n\n";
	$speaker = "first";
	foreach ( $r["text"] as $txt ) {
		$pagetext .= "*" . $r["people"][$speaker] . "*: " . cleanup($txt) . "\n\n";
		$speaker = ( $speaker == "first" )? "second": "first";
	}
	if ( file_exists( $filename ) ) {
		@unlink($filename);
	}
	file_put_contents( $filename, $pagetext );
}
*/
$pagetext = "---\n";
$filename = dirname(__FILE__) . '/_data/discography.yml';

foreach ( array_reverse($text["discography"]) as $r) {
	$pagetext .= "  -\n    name: \"" . $r["label"] . "\"\n";
	$pagetext .= "    preamble: \"" . str_replace('"', '\"', cleanup($r["preamble"])) . "\"\n";
	$pagetext .= "    recordings:\n";
	foreach ( $r["recordings"] as $rec ) {
		$first = true;
		foreach( $rec as $key => $val ) {
			$sep = $first? "      -\n        ": '        ';
			$pagetext .= $sep . $key . ": \"" . str_replace('"', '\"', cleanup($val)) . "\"\n";
			$first = false;
		}
		$pagetext .= "\n";
	}
}
if ( file_exists( $filename ) ) {
	@unlink($filename);
}
file_put_contents( $filename, $pagetext );
