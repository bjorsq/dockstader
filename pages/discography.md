---
layout: page
show_meta: false
subheadline: ""
title: "Discography"
description: ""
header:
   image_fullwidth: ""
permalink: "/discography/"
---
<ul>
    {% for post in site.categories.discography %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>