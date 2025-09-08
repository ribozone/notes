---
created: 2025-07-03T23:15:18-04:00
modified: 2025-07-22T11:33:16-04:00
title: decker
description: 
draft: false
tags: 
---

> Decker is a multimedia platform for creating and sharing interactive documents, with sound, images, hypertext, and scripted behavior.

- [homepage + docs](https://beyondloom.com/decker/)
- [source code](https://github.com/JohnEarnest/Decker)
- [community forum](https://internet-janitor.itch.io/decker/community)
- [decker tag on itch.io](https://itch.io/games/tag-decker)

## tips & tricks

### navigation

#### prevent arrow key navigation

menu -> **File > Properties > Script...** and paste the following:

```
on navigate do
end
```

source: [ahmwma on the decker community forum](https://itch.io/t/4297520/preventing-the-user-from-using-the-arrow-keys)
#### remove menu bar 

menu -> **File > Properties > Protect...** to export as .deck or .html file where user is locked in interact mode