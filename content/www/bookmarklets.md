---
created: 2025-10-29T10:40:07-04:00
modified: 2025-11-03T11:35:31-05:00
title: bookmarklets
description:
draft: false
tags:
  - javascript
---

javascript commands stored in browser bookmarks, mostly for modifying/interacting with the webpage you're on

## [bookmarklet garden](https://adamledoux.net/bookmarklets/)

#### 88x31 button randomizer

```js
javascript:var links = document.getElementsByTagName('a'); var buttons = []; for (var i = 0; i < links.length; i++) { var img = links[i].getElementsByTagName('img')[0]; if (img && img.width == 88 && img.height == 31) { buttons.push(links[i]); } } if (buttons.length > 0) { var button = buttons[Math.floor(Math.random() * buttons.length)]; if (confirm('found a button! visit ' + button.href + '?')) { window.location.href = button.href; } else { alert('bye!'); } } else { alert('sorry, there are no 88x31 buttons on this page :('); }
```

## [poetic web bookmarklets](https://poeticweb.com/bookmarklets/index.html)

#### rearrange everything, instantly

```js
javascript:(function(){[...document.querySelectorAll('*')].forEach(el=>{ if (el.children.length===0) { el.style.position='absolute';el.style.left=Math.random()*window.innerWidth+'px';el.style.top=Math.random()*window.innerHeight+'px'} });})();
```

#### rearrange everything, one by one

```js
javascript:(function(){const elements=[...document.querySelectorAll('*')].filter(el=>el.children.length===0);elements.forEach((el,i)=>{ setTimeout(()=>{ el.style.position='absolute';el.style.left=Math.random()*window.innerWidth+'px';el.style.top=Math.random()*window.innerHeight+'px'},i*200+Math.random()*300)});})();
```

## [link bookmarklets](https://www.squarefree.com/bookmarklets/)

#### open all links in new tabs

```js
javascript:(function(){var n_to_open,dl,dll,i; function linkIsSafe(u) { if (u.substr(0,7)=='mailto:') return false; if (u.substr(0,11)=='javascript:') return false; return true; } n_to_open = 0; dl = document.links; dll = dl.length; for(i = 0; i < dll; ++i) { if (linkIsSafe(dl[i].href)) ++n_to_open; } if (!n_to_open) alert ('no links'); else { if (confirm('Open ' + n_to_open + ' links in new windows?')) for (i = 0; i < dll; ++i) if (linkIsSafe(dl[i].href)) window.open(dl[i].href); } })();
```