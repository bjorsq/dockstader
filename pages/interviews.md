---
layout: page
title: "Interviews"
description: "Tod Dockstader gave some interviews when the later work was released on CD by ReR Megacorp. There is also an archival radio interview from 1963."
headerimage: svg/interviews.svg
permalink: "/interviews/"
redirect_from:
  - /interviews.php
---

![Tod Dockstader in the studio, circa 1965]({{ site.urlimg }}photographs/tod-dockstader-11.jpg){: .right}

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