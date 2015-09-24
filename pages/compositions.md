---
layout: page
title: "Compositions"
headerimage: svg/compositions
description: "Some of the following notes on Compositions first appeared in the Starkland CD re-issues of Dockstader's works, and are written by the artist. The text for Omniphony, Study 7 and Past Prelude is taken from the ReR Omniphony CD release, the text for Aerial is taken from the sub rosa CD release, and the text for the Eight Electronic Pieces is taken from the Folkways and Locust issues of these pieces."
permalink: "/compositions/"
sitemap:
    priority: 0.7
    changefreq: 'yearly'
    lastmod: 2015-09-22
---

![Tod Dockstader's studio, circa 1965]({{ site.urlimg }}photographs/tod-dockstader-12.jpg){: .right}

Some of the following notes on Compositions first appeared in the Starkland CD re-issues of Dockstader's works, and are written by the artist. The text for Omniphony, Study 7 and Past Prelude is taken from the ReR Omniphony CD release, the text for Aerial is taken from the sub rosa CD release, and the text for the Eight Electronic Pieces is taken from the Folkways and Locust issues of these pieces.

<ul>
    {% for post in site.categories.compositions reversed %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>