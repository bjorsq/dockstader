---
layout: page
show_meta: false
subheadline: ""
title: "Biography"
description: "Tod Dockstader was born in 1932 in St.Paul, Minnesota. After majoring in psychology and art at the University of Minnesota, he went on to study painting and film, earning money by drawing cartoons for local newspapers and magazines. In 1955, Dockstader moved to Hollywood to work as an apprentice film editor, cutting picture and sound for animated cartoons including "Mr.Magoo" and "Gerald McBoing Boing." He then moved on to writing and storyboarding cartoons."
header:
   image_fullwidth: ""
permalink: "/biography/"
---
<ul>
    {% for post in site.tags.biography %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>