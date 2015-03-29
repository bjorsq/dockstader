---
layout: page
show_meta: false
subheadline: ""
title: "Compositions"
description: "Some of the following notes on Compositions first appeared in the Starkland CD re-issues of Dockstader's works, and are written by TD. The text for Omniphony, Study 7 and Past Prelude is taken from the ReR Omniphony CD release, the text for Aerial is taken from the sub rosa CD release, and the text for the Eight Electronic Pieces is taken from the Folkways and Locust issues of these pieces."
header:
   image_fullwidth: ""
permalink: "/compositions/"
---
<ul>
    {% for post in site.categories.compositions %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>