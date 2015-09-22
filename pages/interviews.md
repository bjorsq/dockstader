---
layout: page
title: "Interviews"
description: "Tod Dockstader gave some interviews when the later work was released on CD by ReR Megacorp. There is also an archival radio interview from 1963."
headerimage: svg/interviews.svg
permalink: "/interviews/"
sitemap:
    priority: 0.7
    changefreq: 'yearly'
    lastmod: 2015-09-22
---

![Tod Dockstader in the studio, circa 1965]({{ site.urlimg }}photographs/tod-dockstader-11.jpg){: .right}


<ul>
	<li>Listen to a 1963 interview with Tod Dockstader at WRVR FM, New York City

<audio controls>
  <source src="{{ site.musicurl }}dockstader_interview_WRVR_FM_NY_1963.ogg" type="audio/ogg">
  <source src="{{ site.musicurl }}dockstader_interview_WRVR_FM_NY_1963.mp3" type="audio/mpeg">
  <p>Download in <a href="">MP3</a> or <a href="">OGG</a> format</p>
</audio>
</li>
    {% for post in site.categories.interviews %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a><br>{{ post.description }}</li>
    {% endfor %}
</ul>