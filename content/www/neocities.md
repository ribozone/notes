---
title: neocities
description: 
draft: false
tags:
---

- [source code activity](https://github.com/neocities/neocities/activity) on github
- [some undocumented neocities mechanics](https://suboptimalism.neocities.org/writings/undocumented) by suboptimalism

## hiding ui elements with css

view and follower counts have been stressing me out lately, and i had more fun on the global activity page when it was just updates without comments, so i've been using [custom css (in firefox)](https://www.reddit.com/r/FirefoxCSS/wiki/index/tutorials/) to hide some things.

`userContent.css`
```css
@-moz-document domain(neocities.org) {
	/* limit height of new followers section to two lines */
	.col-66 .follow .content { 
		max-height: 3.1rem;
		overflow-Y: auto;
	}
	/* hide views, follower count, traffic */
	.news-site-info .stats .col-50:nth-child(2),
	.profile-info > .stats,
	.site-info > .site-stats,
	.col-33 .stats a {
		display: none;
	}
}
@-moz-document url-prefix(https://neocities.org/activity) {
	/* hide comments on the global activity feed */
	.comment {
		display: none;
	}
}
```

