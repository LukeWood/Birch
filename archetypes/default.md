---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
comments: false
outputs:
  - "html"
  - "json"
precache:
  - "pages to precache"
---
