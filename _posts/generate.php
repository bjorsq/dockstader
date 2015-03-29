<?php
include "text.php";
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
foreach ($text["compositions"] as $c) {
	$filename = dirname(__FILE__) . "/compositions/" . date("Y-m-d") . '-' . preg_replace('/[^a-zA-Z]+/', '-', $c["title"]) . '.md';
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