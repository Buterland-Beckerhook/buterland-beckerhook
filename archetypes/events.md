---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
outputs:
- html
- rss
- json
- calendar
params:
- start: {{ .Date }}
- end: {{ .Date }}
- location:
---