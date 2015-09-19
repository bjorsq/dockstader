---
layout: page
title: "Interviews"
headerimage: svg/interviews.svg
permalink: "/interviews/"
sidebar: default
---

Listen to a 1963 interview with Tod Dockstader at WRVR FM, New York City

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

<ul>
    {% for post in site.categories.interviews %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a><br>{{ post.description }}</li>
    {% endfor %}
</ul>