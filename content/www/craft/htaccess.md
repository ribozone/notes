---
created: 2025-11-03T16:39:15-05:00
modified: 2025-11-03T17:16:23-05:00
title: .htaccess
description:
draft: false
tags:
---

configuration file for apache web servers

ribo.zone's looks like this:
```
ErrorDocument 404 /not_found.html
ErrorDocument 403 /not_found.html

Options +MultiViews

RewriteEngine on

RewriteRule ^index\.html$ / [R=301,L]
RewriteRule ^(.*)/index\.html$ /$1/ [R=301,L]

RewriteCond %{THE_REQUEST} /([^.]+)\.html [NC]
RewriteRule ^ /%1 [NC,L,R]

RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^ %{REQUEST_URI}.html [NC,L]

RewriteCond %{HTTP_REFERER} !^https?://(.+\.)?ribo\.zone/.*$ [NC]
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{REQUEST_URI} !^/88x31/site/ribose\.png$ [NC]
RewriteCond %{REQUEST_URI} !^/88x31/site/ribozone\.gif$ [NC]
RewriteRule .*\.(jpe?g|gif|bmp|png|css|js|mp3|mp4)$ - [F]
```

cobbled together from several stackoverflow answers thank u internet

## ErrorDocument

makes 404 and 403 errors display my `/not_found.html` file

## MultiViews

enables extensionless URLs (i think?)

## RewriteEngine

redirects `/example/index.html` to `/example/`
redirects `/example.html` to `/example`
redirects images/audio/video/css/js to Nothing unless it is being served from ribo.zone (hotlink protection); my 88x31 buttons are excluded