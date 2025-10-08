---
title: neocities
description:
draft: false
tags:
  - CSS
created: 2025-03-08
modified: 2025-10-08T11:15:53-04:00
---

- [source code activity](https://github.com/neocities/neocities/activity) on github
- [some undocumented neocities mechanics](https://suboptimalism.neocities.org/writings/undocumented) by suboptimalism

## hiding ui elements with css

view and follower counts have been stressing me out lately, and i had more fun on the global activity page when it just showed site update previews without every single user's text statuses[^1], so i've been using [custom css (in firefox)](https://www.reddit.com/r/FirefoxCSS/wiki/index/tutorials/)[^2] to hide some things.

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
	/* hide text updates on the global activity feed */
	.news-item.comment {
		display: none;
	}
}
```

[^1]: why are so many of these just pointing out how many views/followers their site has?
[^2]: i gotta figure out how to do this on mobile... for my health
