---
layout: page
title: "Tod Dockstader: Interviews"
description: "Tod Dockstader gave some interviews when the later work was released on CD by ReR Megacorp. There is also an archival radio interview from 1963."
headerimage: svg/interviews
permalink: "/interviews/"
sitemap:
    priority: 0.7
    changefreq: 'yearly'
    lastmod: 2015-09-22
---

![Tod Dockstader in the studio, circa 1965]({{ site.urlimg }}photographs/tod-dockstader-11.jpg){: .right}


<ul>
    {% for post in site.categories.interviews %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a><br>{{ post.description }}
    {% if post.mp3 and post.ogg %}
      <audio controls>
        <source src="{{ post.mp3 }}" type="audio/mpeg">
        <source src="{{ post.ogg }}" type="audio/ogg">
        <br>Download in <a href="{{ post.mp3 }}">MP3</a> or <a href="{{ post.ogg }}">OGG</a> format
      </audio>
    {% endif %}
    </li>
    {% endfor %}
</ul>