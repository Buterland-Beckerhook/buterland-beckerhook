---
title: "{{ replace .Name "-" " " | title }}"
publishdate: {{ dateFormat "2006-01-02" .Date }}
date: {{ .Date }}
end_date:  {{ .Date }}
location:
draft: false
outputs:
- html
- calendar
---