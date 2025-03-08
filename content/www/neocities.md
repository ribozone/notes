---
title: neocities
description: 
draft: false
tags:
---

the social features of neocities make it easy to find and keep up with sites i like, but the view and follower counts have really been stressing me out lately. [canned statement about introversion] luckily, it's easy to [set up custom css in firefox](https://www.reddit.com/r/FirefoxCSS/wiki/index/tutorials/). here's what i use to make my time on neocities a bit more peaceful:

`userContent.css`
```css
@-moz-document domain(neocities.org) {
	/* limit height of new followers section */
	.col-66 .follow .content { 
		max-height: 3.1rem;
		overflow-Y: auto;
	}
	/* hide view and follower counts */
	.news-site-info .stats .col-50:nth-child(2),
	.profile-info > .stats,
	.site-info > .site-stats {
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