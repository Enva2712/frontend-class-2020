---
title: Lessons
layout: base
tags:
---

These are the lessons:

{% for lesson in collections.lessons %}
<ol class="nolist">
    <li>{% if lesson.data.lesson %}{{ lesson.data.lesson }}&mdash;{% endif %}<a href="{{ lesson.url }}">{{ lesson.data.title }}</a></li>
</ol>
{% endfor %}
