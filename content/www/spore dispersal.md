---
title: spore dispersal
description: my random link portal
draft: false
tags: 
created: 2025-03-03
modified: 2025-04-07T18:43:01-04:00
---

## [Disperse!](https://spore.ribo.zone/)

Context from my blog post about [random site portals](https://ribo.zone/blog/random-site-portals)...

>prioritize:
>- databases and archives
>- community hubs
>- net art
>- resources, tutorials, and syllabi
>
>avoid:
>- tech giants
>- commerce and paywalls
>- productivity tools
>- websites about making websites
>- blogs, portfolios, and personal sites

## Page number milestones

| # of pages | Date         |
| ---------- | ------------ |
| 100        | I forgot     |
| 200        | May 19, 2024 |
| 300        | Feb 03, 2025 |

## Dead link checking

### Visual Basic! in Excel!

```vbscript
Function CheckURL(url As String)

    Dim request As Object
    Dim rc As Variant
    Set request = CreateObject("WinHttp.WinHttpRequest.5.1")
    On Error GoTo haveError

    With request
        .Open "HEAD", url, False
        .Send
        rc = .StatusText
    End With
    
    Set request = Nothing
    If rc = "OK" Then CheckURL = True Else CheckURL = False
    
    Exit Function

haveError:
    CheckURL = False

End Function
```
Source: [this reddit comment](https://www.reddit.com/r/excel/comments/m86k8a/comment/grgdtwo/)

### Link check log

| Date | # dead | % dead |
| ---- | ------ | ------ |
|      |        |        |

## How it's made

I started with this [random redirect php script](https://gist.github.com/racinmat/874de00981056dca8ed0), but I eventually split it into two files so I could use the variable `$size` without executing the redirect.

`sites.php`
```php
<?php

$addresses = [
	'https://example.com',
	'https://example2.com',
	'https://example3.com'
];

$size = count($addresses);
$randomIndex = rand(0, $size - 1);
$randomUrl = $addresses[$randomIndex];

?>
```

`disperse.php`
```php
<?php

include 'sites.php';
header('Location: ' . $randomUrl, true, 303);

?>
```

Then, in `index.php`, I can display the project's stats with the following code:

```php
<?php 

include 'sites.php';
echo "Last updated: " .  
date("F d Y", filemtime("sites.php"));

?>

Site count: <?= $size ?>
```

Spore dispersal is currently hosted on [InfinityFree](https://www.infinityfree.com/). I don't love it, but it gets the job done.