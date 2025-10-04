---
created: 2025-04-11T21:13:11-04:00
modified: 2025-10-04T10:52:02-04:00
title: discmaster jam
description: devlog for cloud storage botanical station
draft: false
tags:
  - 🧫
  - log
aliases:
  - cloud storage botanical station
---

> An online-only week-long [[games/dev/jams/index|game jam]], using vintage computer files from [archive.org](https://archive.org/).

- **april 20th** 2025 at 10:00 PM EST -- **april 29th** 2025 at 2:59 AM EST
- [discmaster](https://discmaster.textfiles.com/) -- a search engine for vintage data hosted on the internet archive
- [jam page on itch.io](https://itch.io/jam/discmaster-jam)  + [announcement on archive.org](https://blog.archive.org/event/discmaster-game-jam/)

> [!done] my game -> [cloud storage botanical station](https://ribozone.itch.io/cloud)

- **my jam favorites**
	- [archaeOS](https://illomens.itch.io/archaeos) -- love love love that it gives you a printable zine at the end. so good
	- [sombrin](https://jetbebop.itch.io/sombrin) -- really nice series of scenes; evokes a feeling that i was trying to reach with my own entry

## devlog

### pre-jam activities

#### april 10<sup>th</sup>

- found out about the jam via [sol's tumblr post](https://sol-flo.tumblr.com/post/780410522231275520/hmmm-thinking-i-might-participate-in-the)
- judges and monetary prizes intimidate me, but the theme is irresistibly fun
- not sure about participating, but i'm excited to see what everyone else makes

#### april 11<sup>th</sup>

- still thinking about the jam
- started looking around discmaster
	- first i searched for types of bugs, of course
	- obsessed with [this dragonfly model](https://discmaster.textfiles.com/view/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/dragonfly.mdl/dragonfly.glb) -> "okay maybe i should make something for real"
- no ideas for a game, but it might be fun to create a 3D environment for the first time
- joined the jam on itch + joined the discord

#### april 14<sup>th</sup>

- started adding to my list of [[#interesting assets]]
- ok wow [bug life 3D](https://discmaster.textfiles.com/browse/20636) looks awesome but i don't know how to get the image files out
	- mounting didn't work
	- extracting with winRAR didn't work
	- briefly looked up iso rippers but the results seemed a little skeevy
- i keep looking up models for outdoor scenes, but game environments are typically enclosed spaces...
	- could have the map just end. the player can fall off, flat-earth style
	- natural barriers: an island, thick forest, cliffs, rivers
	- bring the outdoors indoors -> greenhouse
		- sable's vivarium
		- animal crossing's museum bug room
		- [biosphere 2](https://biosphere2.org/) 

#### april 15<sup>th</sup>

- greenhouse idea:  [greenhouse.wad](https://discmaster.textfiles.com/browse/20919/WADS_D2.iso/doom2/deathmatch/gtoi/greenhouse.zip/Greenhouse.WAD) + [godot wad importer](https://github.com/DataPlusProgram/GodotWadImporter)? (feels like starting -- wait until the jam starts!)
- thinking about [[games/dev/engines/index|game engines]]
	- pretty sure i'll use [godot](https://godotengine.org/)
		- yayyy free and open source we love it
		- [godot shaders library](https://godotshaders.com/) (could [dither](https://godotshaders.com/shader/dither-gradient-shader/)  heheh)
		- compatibility w/ discmaster assets: wad importer tool linked above + this [mdl importer](https://github.com/DataPlusProgram/Godot-GoldSrc-MDL-Importer)
		- only concern is that it might be too big/powerful/complicated for me too learn in a week
			- that's why i'm setting the bar for "done" at walking sim w/ no interaction
	- alternatives
		- [rpg paper maker](https://wano.itch.io/rpg-paper-maker) -- "Making 3D games is too complex? RPG Paper Maker will simplify your work!" lol
		- [sok worlds](https://sokpop.itch.io/sok-worlds) -- i was looking for walking sim engines for beginners, and this is soooooo close to perfect. if only you could use discmaster assets instead of the pixabay api

#### april 16<sup>th</sup>

- read [godot docs > getting started > introduction](https://docs.godotengine.org/en/stable/getting_started/introduction/index.html)
	- recommends taking an online course if you're not a programmer, but... i don't want to 😇
- read [godot docs > getting started > step by step](https://docs.godotengine.org/en/stable/getting_started/step_by_step/index.html)
	- finally downloaded godot so i can follow along
	- not covered in the tutorial, but i chose the compatibility [renderer](https://docs.godotengine.org/en/stable/contributing/development/core_and_modules/internal_rendering_architecture.html)
		- least advanced 3D graphics
		- supports web platforms
	- "We recommend dismissing architectural code patterns when making games with Godot, such as Model-View-Controller (MVC) or Entity-Relationship diagrams."
		- good thing i don't know what any of that means
	- ball physics -- kind of fun
	- godot face spin script -- kind of boring
	- player input -- ok yaaaay
	- using signals -- ack
		- i messed up the nesting of the nodes somewhow, and had the button as a child of the godot head sprite, so it was flying around. i tried to drag the button out into the parent (Node2D) in the scene tree but got an error message that i didn't write down (sorry)
		- felt like i was going in circles trying and failing to reorganize the files/scenes/nodes/etc, so i deleted and remade them all instead 
		- got the animation toggle button working, but now i'm bored. the next sections are about timers and health bars, which don't feel relevant to what i'm trying to make, so i'll skip them for now
- new scene -> 3D scene -> drag [dog.glb](https://discmaster.textfiles.com/view/22689/JOYCD122_2.iso/data/sharewares/jeux/si096c_full.exe/data1.cab/Everything/models/dog.mdl/dog.glb) onto scene -> it's there but sideways -> rotate dog upright -> yaaaaaaay
	- that's enough for tonight

#### april 17<sup>th</sup>

- feeling some friction against the types of games that had the biggest modding/freeware scenes
	- i search for "crow" and get only crowbars
	- i search for "apple" and get only grappling hooks
	- easy to find weapons, harder to find living things 
		- most of the animals i'm finding were made as enemies to be killed
			- [this cricket model](https://discmaster.textfiles.com/view/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/cricket.mdl/cricket.glb) has red eyes and two of the associated animations are "angry" and "die"
				- i'll probably have to edit the eyes
		- (less true if you look at all file types but i'm looking for .glbs specifically)
- feeling inspired by [this image describing a high school research course](https://discmaster.textfiles.com/view/13427/NASAHPCC.BIN/contents/pubs/annrpt94/eco.gif)

#### april 18<sup>th</sup>

- today's a university holiday, so i could do godot tutorials all day (but i also have a cold and therefore no motivation)
- read [godot docs > getting started > your first 2D game](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html) but did not follow along in godot
	- [CanvasLayer](https://docs.godotengine.org/en/stable/classes/class_canvaslayer.html#class-canvaslayer) for HUD
	- [TectureRect](https://docs.godotengine.org/en/stable/classes/class_texturerect.html#class-texturerect) for background images
- read [godot docs > getting started > your first 3D game](https://docs.godotengine.org/en/stable/getting_started/first_3d_game/index.html) but did not follow along in godot
	- [StaticBody3D](https://docs.godotengine.org/en/stable/classes/class_staticbody3d.html#class-staticbody3d) for floor, walls, ceiling
		- [CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html#class-collisionshape3d) defines shape
		- [BoxMesh](https://docs.godotengine.org/en/stable/classes/class_boxmesh.html#class-boxmesh) defines texture
	- [Marker3D](https://docs.godotengine.org/en/stable/classes/class_marker3d.html#class-marker3d) with child node [Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html#class-camera3d) for a static camera
	- [Control](https://docs.godotengine.org/en/stable/classes/class_control.html#class-control) for UI
- clicked around and skimmed parts of [godot docs > manual](https://docs.godotengine.org/en/stable/tutorials/best_practices/index.html)
	- use [RichTextLabel](https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html#class-richtextlabel) instead of [Label](https://docs.godotengine.org/en/stable/classes/class_label.html#class-label) to use [BBcode](https://docs.godotengine.org/en/stable/tutorials/ui/bbcode_in_richtextlabel.html)

#### april 19<sup>th</sup>

- started [Learn GDScript from Zero](https://gdquest.github.io/learn-gdscript/)
	- first impression: what the hell did they do to the scroll behavior? i hate it
		- i'm on my touchscreen laptop and sometimes i like to scroll by swiping on the page directly. that doesn't work at all here
		- scrolling with two fingers on the trackpad feels off somehow. a bit of lag(?) and it moves by a different amount than i expect every time
			- so unsettling that i ended up clicking and dragging the scrollbar instead
	- also i can't highlight text
	- "Engineers at Tesla also used it for their cars' dashboards." (typed by hand because i can't highlight text)
	- fuck this actually. who cares
- no more tutorials until the jam starts, lest i get so bored i give up entirely
	- boring: "here's how you make a game" -> i make a game exactly as taught
	- fun: "i want to make a game that does x, y, and z" -> i look up how to accomplish x, y, and z
	- agreed upon foundational knowledge is great for professionals and teams, but i'm just here to play with toys

### jam time

#### april 20<sup>th</sup>

- the jam starts <big>**today!!**</big> but at 10pm local time
	- that's bed time
	- started getting sleepy at around 8:30 (remember that i'm recovering from a cold ok), but stayed awake long enough to get the discmaster care package
		- mine has [wildflowers](https://discmaster.textfiles.com/search?family=image&itemid=3801&widthMin=200&heightMin=200) in it ⚘⚘⚘⚘⚘ 
- goodnight gamers

#### april 21<sup>st</sup>

- good morning gamers. i created a new project in godot
- downloaded the [wad importer](https://github.com/DataPlusProgram/GodotWadImporter) and [greenhouse.wad](https://discmaster.textfiles.com/browse/20919/WADS_D2.iso/doom2/deathmatch/gtoi/greenhouse.zip/Greenhouse.WAD) mentioned on [[#april 15th]]
	- followed along with the [video demonstration](https://www.youtube.com/watch?v=SkcoE_M1Itc) (youtube link)
		- put everything in the new project folder
		- enabled the plugins
		- imported the map
			- map is there but has no textures
		- imported playerguy
			- playerguy is a white rectangle
		- pressed play
			- does not run! godot highlights some errors
	- when i imported the map, there were multiple options not addressed by the video. i left it as the default "Doom" but maybe i should have selected "Doom Mod" ?
		- Doom Mod option requires an IWAD and PWAD file path
			- [IWAD](https://doomwiki.org/wiki/IWAD): internal WAD, all data for a complete game
			- [PWAD](https://doomwiki.org/wiki/PWAD): patch mod, additional data
		- okay i see... maybe [greenhouse.wad](https://discmaster.textfiles.com/browse/20919/WADS_D2.iso/doom2/deathmatch/gtoi/greenhouse.zip/Greenhouse.WAD) is a PWAD and i need the base doom IWAD
			- it's in a folder called [doom2](https://discmaster.textfiles.com/browse/20919/WADS_D2.iso/doom2), so the IWAD might be in there
			- if not, try [discmaster search for doom2.wad](https://discmaster.textfiles.com/search?q=doom2.wad&dedup=dedup&unsupported=false)
- stopping here because i have to go to work!

> [!note] lunchtime interlude — themes & goals 
> as i've used discmaster, the things that have inspired me the most are educational software and screensavers. i'd like to take elements from each kind of program and make a nice digital space to rest and maybe learn a few things.
> 
> i have almost zero game dev experience, so i don't have a good sense of what's feasible. regardless, here's my plan:
> - minimum viable game -- if i can do this, i'll submit it
> 	- 3D environment that's fun or interesting to be in
> 		- animated dragonfly model (essential)
> 	- player can look around, walk, and jump
> 		- mouse and keyboard support
> 		- controller support
> - intermediate goals -- ideally i'll figure these out
> 	- player can interact with objects in the environment
> 		- interact with a book to open a pdf from the internet archive
> 	- start menu screen
> 		- displays the name of the game
> 		- start and quit buttons
> 		- audiovisual transition from the menu to the world
> - advanced goals -- erm. we'll see
> 	- multiple maps/rooms
> 	- some kind of HUD
> 		- decorative border
> 		- displays the name of the room you're in
> 		- compass and clock
> 			- day and night cycle would be sweet
> 		- player controls maybe
> 			- box that shows when/how you can interact with something
> 	- settings menu
> 		- volume, mouse sensitivity, Y-axis inversion, adjust shader(s)...?
> 	- ...mobile support? (maybe after the jam)

- okay yay i'm home from work and i downloaded [DOOM2.WAD](https://discmaster.textfiles.com/browse/11597/ludo28m.free.fr.tar/ludo28m.free.fr/logs/winms/jeux/id/doom2v19.rar/DOOM2.WAD)
	- reloaded assets with doom2.wad set as the IWAD and greenhouse.wad as the PWAD
		- imported the map
			- yaaaay textures
		- imported playerguy
			- yaaaay i can see playerguy
		- pressed play
		- > [!error] ERROR: core/extension/gdextension_library_loader.cpp:350 - GDExtension only compatible with Godot version 4.3 or earlier: res://addons/godot-jolt/godot-jolt.gdextension
			- i'm running godot v4.4.1
- downloaded [godot 4.3](https://godotengine.org/download/archive/4.3-stable/)
	- oh yay i can open the project i already started
	- enabled plugins
	- pressed play and it RUNS!!!
- if i delete the `gunManager` node will it run, but with no gun?
	- > [!error] player.gd:135 @ \_ready(): Node not found: "visual/gunManager" (relative to "/root/Node3D/playerguy").
	- deleted lines 135-145 and from [player.gd](https://github.com/DataPlusProgram/GodotWadImporter/blob/b86288f080f7d0cf631b435ee4012c9f938b75b6/addons/godotWad/scenes/player/player.gd) 
	- another error
	- `Ctrl+F` for `weaponManager`
		- oh god it's everywhere
	- it would probably better to make my own player character instead of trying to rework this one
		- don't need 10 million nodes and scripts for my little walking sim
- back to the map from greenhouse.wad -- it doesn't feel right for this
	- ceilings too low everywhere except the big slime pit area
	- i don't think swapping out textures will make it into something i like
- wad exploration (`Shift+F` to fly around the map)
	- [GARDEN.WAD](https://discmaster.textfiles.com/browse/20919/WADS_D1.iso/doom2/gtoi/garden1.zip/GARDEN.WAD) -- not sure i'd call any part of this a garden
	- [garden.wad](https://discmaster.textfiles.com/browse/11272/Mega%20Doom%202.iso/dm2wads/garden/garden.wad) -- this... could work?
	- [GARDEN2.WAD](https://discmaster.textfiles.com/browse/20919/WADS_D1.iso/doom2/gtoi/garden2.zip/GARDEN2.WAD) -- this one has some sinister looking trees
	- [LIBRARY.WAD](https://discmaster.textfiles.com/browse/13085/CDRI%20-%20Game%20Box%20Volume%201.iso/014/albrary.zip/LIBRARY.WAD) -- the bookshelf texture is so cute...
	- [LAB.WAD](https://discmaster.textfiles.com/browse/17678/PowersourceMultimedia-UltimateDOOMCompanion.iso/levels_e/lab.zip/LAB.WAD) -- some wild rooms here
	- [forest.wad](https://discmaster.textfiles.com/browse/28646/Violence%20in%203D.iso/doom2/forest/forest.wad) -- one big rectangle with a path and a river, plus a bunch of those sinister trees
- most of the assets i've saved so far are [mdl](https://developer.valvesoftware.com/wiki/MDL) files, but it didn't it occur to me until now to look for quake/goldsrc/source engine maps...
	- downloaded [godot_bsp_importer](https://github.com/jitspoe/godot_bsp_importer) and enabled the plugin
	- downloaded and imported a bunch of random maps, nothing stood out
		- gotta figure out the texture thing described in the README
		- watched the [video tutorial](https://www.youtube.com/watch?v=RvCyg_lm_7w) but everything is so fast and i am tired

#### april 22<sup>nd</sup>

- [ffxiv patch 7.21](https://na.finalfantasyxiv.com/lodestone/topics/detail/6f824223a7e10da7b9b7dfc84f626d10d4df88b3) was released today, so i'm not going to spend much time on the jam
- did a little [CSS](https://itch.io/docs/creators/css-guide) to make the game's itch page look more like discmaster
- little crisis of confidence -- maybe a 3D game is too much?
	-  wait nevermind [Godot Open Adventure Template (GOAT)](https://github.com/miskatonicstudio/goat) is here to save my life
- potentially useful tools
	- [BSP Headquarters](https://www.bspquakeeditor.com/) -- quake map editor with docs and tutorials
	- [Hammer++](https://ficool2.github.io/HammerPlusPlus-Website/) -- source engine level editor

#### april 23<sup>rd</sup>

- bsp exploration
	- [garden.bsp](https://discmaster.textfiles.com/view/19256/Shrak%20(USA)/Shrak%20(USA)%20(Track%2001).bin/shrak/shrak/shrak/pak0.pak/maps/garden.bsp) -- middle area has some potential if i can figure out how to change the sky texture, maybe?
	- [forestsanctuary](https://discmaster.textfiles.com/view/23208/Gamestar_58_2004-01_dvd.iso/DVDStar/Akce/JediAcademy/Mapy/forestsanctuary.zip/forestsanctuary.pk3/maps/forestsanctuary.bsp) -- format not supported by discmaster... but i want to see it...
		- i tried importing it and godot crashed :(
	- [padgarden.bsp](https://discmaster.textfiles.com/view/23975/GSSH42002.iso/MODS/Q3a/PadGarden_new.exe/padgarden.pk3/maps/padgarden.bsp) -- ooh a cute backyard. no textures imported though, and i still can't figure out what's going on in the video tutorial for the importer
	- all of these also had no textures, so i don't have much to say: [lighthouse.bsp](https://discmaster.textfiles.com/view/15688/PCXL12D2.iso/Exes/action_mega_pack.exe/action/maps/lighthouse.bsp),  [avenue1.bsp](https://discmaster.textfiles.com/view/15688/PCXL12D2.iso/Exes/action_mega_pack.exe/action/maps/AVENUE1.BSP), [villagev2.bsp](https://discmaster.textfiles.com/view/15688/PCXL12D2.iso/Exes/action_mega_pack.exe/action/maps/villagev2.bsp), [ruins.bsp](https://discmaster.textfiles.com/view/15688/PCXL12D2.iso/Exes/action_mega_pack.exe/action/maps/ruins.bsp), [town.bsp](https://discmaster.textfiles.com/view/22092/SSERVCD_50B.bin/3d_extra/quake-tc/x-com/xcomb2.zip/Pak0.pak/maps/TOWN.BSP), [wq_town.bsp](https://discmaster.textfiles.com/view/11523/Igromania_11.iso/DeathMatch/Q3_Mods/WesternQuake/wq3b1.exe/western/westernmaps0.pk3/maps/wq_town.bsp), [atomic.bsp](https://discmaster.textfiles.com/view/26837/Dppcz0400b/Dppcz0400b.mdf/Quake%20III%20Arena/Levels/atomic.zip/atomic.pk3/maps/atomic.bsp)
	- [arch.bsp](https://discmaster.textfiles.com/view/22584/Hrac_11_1997-05_cd.bin/UTILS/QUAKE/LEVELS/ARCH1196.ZIP/ARCH.BSP) -- square room with arches. could make a nice little garden
- figured out how to swap out some (but not all) of the textures in the quake maps that already have texture
	- select a 'TransparentMesh' in the scene menu on the left
	- select 'Surface Material Override' in the inspector menu on the right
		- \<empty\> -> Quick Load...
			- (i have a bunch of textures in my project already from importing the those WADs earlier)
	- oooooh i can access the rest of the walls by selecting 'Mesh' 
		- had to scroll past many 'TransparentMesh' nodes to find it
- i feel like i should be able to do the same by selecting '[MeshInstance3D](https://docs.godotengine.org/en/latest/classes/class_meshinstance3d.html)' in the untextured maps, but it isn't working. the colors of things will change but the actual texture isn't showing up
- [house.bsp](https://discmaster.textfiles.com/view/29705/ibm0880-0889/ibm0885.tar/ibm0885/ETRDKQ09.ZIP/etrnldrk.a08/MAPS/HOUSE.BSP) is looking quite nice, compared to everything else so far
- installed [GOAT from the asset library](https://godotengine.org/asset-library/asset/2108)
	- it doesn't include the [demo folder](https://github.com/miskatonicstudio/goat/tree/master/demo) :(
	- downloaded [v1.1.2](https://github.com/miskatonicstudio/goat/releases/tag/v1.1.2) from github instead
		- this doesn't include the demo folder either
	- downloaded master branch as a zip
		- erm... no demo?!?!?!
	- cloned repository
		- finally the demo folder is there. what the hell
- well, it's getting late. adventure gaming begins tomorrow

#### april 24<sup>th</sup>

- i know that it probably would have been faster to throw together my own four wall map in godot, but i'm so committed to using an existing map from discmaster at this point
	- pushing the 100% discmaster asset use rule as far as it will go...
- following [goat docs > getting started > installation](https://miskatonicstudio-goat.readthedocs.io/en/latest/getting_started/installation.html)
	- main menu, settings, credit, and exit work, but if i click "play" in game...
		- > [!error] Attempt to call function 'get_next_dialogue_line' in base 'null instance' on a null instance.
		- little yellow triangle next to line 62 of [goat_voice.gd](https://github.com/miskatonicstudio/goat/blob/master/addons/goat/globals/goat_voice.gd)
			- looks like an indentation error?
		- intent line 62 -> run game -> press play -> it works :-)
- quickly read [goat docs > features](https://miskatonicstudio-goat.readthedocs.io/en/latest/features/player.html)
	- i think this will work well for me! 
- changing the font
	- converted [courier-12.fnt](https://discmaster.textfiles.com/view/2194/BUGCD1998_04.ISO/_runtime/_nt4sp3/nt4sp3_i.exe/courfg.fon/Courier-12.fnt) to .ttf
	- made a fonts folder in the demo folder (the tutorial said it would be there, but it wasn't) -> added courier
	- read the first paragraph or so of [godot docs > ui > using fonts](https://docs.godotengine.org/en/stable/tutorials/ui/gui_using_fonts.html)
	- read most of [godot docs > ui > using the theme editor](https://docs.godotengine.org/en/stable/tutorials/ui/gui_using_theme_editor.html) and got confused
		- made a new theme with courier, applied it to the menu scenes, but it did nothing. sad
	- applying the font through theme overrides in the inspector does work though
		- there aren't many text labels, so it's not too painful to change them individually...
- replacing demo map with a beautiful .bsp
	- added and enabled [godot_bsp_importer](https://github.com/jitspoe/godot_bsp_importer) in this new project
	- more bsp exploration
		- [stoneh.bsp](https://discmaster.textfiles.com/view/22004/Qoole%20for%20Quake%20(USA)/Qoole%20for%20Quake%20(USA).bin/Levels/stoneh/stoneh.bsp) -- heheh it's stonehenge
		- [courtyrd.bsp](https://discmaster.textfiles.com/view/14402/ACWARE10.iso/acware10/levels/courtyrd/courtyrd.bsp) -- oh my god... this is the one i think
	- added Courtyrd as a child of Gameplay and deleted Workshop
- run current scene -> Player can walk around Courtyrd!! wow
	- Player gets stuck on certain parts of the map
		- stuck = can only look around, no walking
		- moved Player's [CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html) up a little bit -> no more getting stuck
	- where Player was getting stuck before still has an invisible wall... why?
		- starting Player on other side of it allows access to the other half of the map, but the wall is still there
		- shrunk CollisionShape3D to 10% of its original size -> Player can move without hitting invisible walls yay
			- too small! now Player can walk through fence
			- 50% works nicely
	- Player cannot climb stairs 
		- problem for another day
		- should Player glide up? or jump?

#### april 25<sup>th</sup>

> <small>[r/godot](https://www.reddit.com/r/godot/comments/18d2op4/how_do_i_make_a_ramp/) • 1 yr. ago</small>
> <small>[deleted]</small>
>
> <big>**How do i make a ramp.**</big>
>
> Beginner here, im making as a first game a platforming game, but, to gain verticality instead of jumping you use ramps and jump pads. My question is, how do you do you pull a ramp off? Is there some special scripting involved or do i literally just... like... make a prism with a shallow angle.
>
> EDIT: I figured it out. Im and idiot.
> 
> STEP 1: Make a triangle
>
> STEP 2: Profit

- made [CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html) as child of [StaticBody](https://docs.godotengine.org/en/stable/classes/class_staticbody3d.html) in Courtyrd.tscn
	- set shape to [BoxShape3D](https://docs.godotengine.org/en/stable/classes/class_boxshape3d.html) and adjust so that it's a ramp over some stairs
	- doesn't work
		- noooo the reddit post made me think it would be easy
- didn't take good notes while i was banging my head against the wall trying to get Player up the ramp
- finally got it to a point where Player could go up the ramp but sometimes (?!) not down the ramp
	- either getting stuck at the top or floating over the ramp
	- with Player selected, i turned gravity enabled to 'on' and motion mode to 'grounded' in the inspector
	- also increased the floor max angle.
- looked closer at [Player.gd](https://github.com/miskatonicstudio/goat/blob/master/addons/goat/main_scenes/Player.gd) for clues
	- added `apply_floor_snap()` to a new line under [move_and_slide()](https://github.com/miskatonicstudio/goat/blob/master/addons/goat/main_scenes/Player.gd#L79)
		- i'm looking through my open tabs and browser history and cannot figure out where i heard of this
	- noticed a warning symbol in the scene menu next to [GravityTimer](https://github.com/miskatonicstudio/goat/blob/master/addons/goat/main_scenes/Player.tscn#L86)
		- > [!warning] Very low timer wait times (< 0.05 seconds) may behave in significantly different ways depending on the rendered or physics frame rate. Consider using a script's process loop instead of relying on a Timer for very low wait times.
		- increased the wait time to 0.05 seconds
- run scene -> Player reliably moves up and down the ramp -> yaaaay

#### april 26<sup>th</sup>

- made ramps for the other 4 sets of stairs -> the map is navigable!
- time to decorate
	- new textures
		- add new image files to the textures folder
		- right click an image -> create new resource -> [StandardMaterial3D](https://docs.godotengine.org/en/stable/classes/class_standardmaterial3d.html) -> doesn't work
			- tried this because the materials that came with the map are StandardMaterial3D
		- right click an image -> create new resource -> [CanvasItemMaterial](https://docs.godotengine.org/en/stable/classes/class_canvasitemmaterial.html) -> doesn't work
			- tried this because it sounded plausible
		- mess around in the inspector for Courtyrd.tscn's Mesh
			- surface material override -> New StandardMaterial3D
				- try specifying path to a texture under 'Resource' -> doesn't work
				- drag and drop image file from the file menu to the inspector menu
					- YESSSS THANK YOU DRAG AND DROP
	- shrank the range of all of the outdoor [lights](https://docs.godotengine.org/en/stable/classes/class_omnilight3d.html) the map came with to zero, replaced with [DirectionalLight3D](https://docs.godotengine.org/en/stable/classes/class_directionallight3d.html)
		- looks... better? still bad though
- my game is so ugly and i'm tired of looking at it
	- took a big long break to walk around and take photos for the [city nature challenge](https://www.citynaturechallenge.org/) happening this weekend 
		- everything is beautiful actually
- added a glass block texture to the walls and made them transparent :-)
	- set transparency to alpha AND change the albedo color to have transparency
		- i was doing just the first thing for a while and getting frustrated that it didn't work
	- issue: models disappear when i go to the other side of the wall
		- fix: disable the [Occluder](https://docs.godotengine.org/en/stable/classes/class_occluderinstance3d.html) in the Mesh
- played with the lighting more... still feels off
- threw some plants models into the scene
	- starting to look like... something
		- originally, i wanted to go an educational direction, but that's looking less possible to achieve within the remaining jam time
		- hmmmmmmmm
		- maybe more abstract? surreal? sci-fi?
			- what can i say with just a scene?

#### april 27<sup>th</sup>

- gave the sky a denim texture. why not
- added [dithering](https://github.com/Donitzo/godot-color-dither)
	- [MeshInstance3D](https://docs.godotengine.org/en/latest/classes/class_meshinstance3d.html) as a child of Player's [Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html) with the color_dither_post_3d shader
	- it mostly works!
	- everything dithered except for my beautiful semi-transparent glass blocks, which are now totally invisible
		- option one: set render priority of the glass block to 1 -> keep transparency, but no dither on the blocks
			- looks uncanny
		- option two: learn to program -> write new shader with no issues (no time)
		- option three: give up on transparency
		- option four: give up on dithering
			- goodbye dithering! i love my transparent blocks!
- added background audio
	- new scene called Game, containing MainMenu and Gameplay scenes
	- added [AudioStreamPlayer](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html) as child of Game
		- yes autoplay yes looping
	- play game -> music plays while you're on the menu but turns off when you hit play
		- [godot docs > autoloads vs internal nodes](https://docs.godotengine.org/en/stable/tutorials/best_practices/autoloads_versus_internal_nodes.html#when-you-should-use-an-autoload) seems to address this? maybe? the page is mostly incomprehensible to me
		- [godot docs > autoload](https://docs.godotengine.org/en/latest/tutorials/scripting/singletons_autoload.html#autoload) is more clear
			- Project > Project Settings > Globals > Autoload
			- add the path to a scene containing the AudioStreamPlayer
		- play game -> yay music -> press play in the menu -> yaaaaay music
- made some attempts to get the [goat interactive items ](https://miskatonicstudio-goat.readthedocs.io/en/latest/features/interactive_items.html) system to work
	- added one of the demo objects to my game -> Player can add it to their inventory
	- made a new scene in the pickable_items folder for a cool toad
		- set it up with the same structure and formatting as the demo objects
	- play game -> toad is there -> hand icon appears when i approach -> game crashes when i click
		- > [!error] Invalid access to property or key 'toad' on a base object of type 'Dictionary'.
	- breakpoint on [goat_inventory.gd line 73](https://github.com/miskatonicstudio/goat/blob/master/addons/goat/globals/goat_inventory.gd#L73)
		- `var icon = _config[item_name].get("icon")`
		- [goat docs > inventory](https://miskatonicstudio-goat.readthedocs.io/en/latest/features/inventory.html) says the demo is set up with a folder for icons, but it is not
	- read all 54 comments on [Inventory Wont work](https://github.com/miskatonicstudio/goat/issues/339) issue on github
		- only more confused now
	- i do not have time for this. okay. no inventory
- nightmare scenario! now the game won't run at all
	- keeps getting stuck on that breakpoint in goat_inventory.gd
	- if i'm not gonna use it... why not delete the file
	- play game -> crash again because other scripts depend on that file
		- erm. delete
	- cycle of like two dozen rounds of pressing play, crashing, and deleting lines of code that refer to the inventory or voice systems in goat
		- ...aaaand it's running again!
- while i'm here deleting things:
	- removed Settings nodes from the MainMenu and Player scenes because most of the sliders did not work
		- made pressing esc during gameplay take you to the main menu instead of opening the settings menu
	- removed crouch input from Player.gd because it was causing the player to clip and/or float around
- played around with MainMenu style a little
	- why are there one million dropdown menus
	- i miss CSS

#### april 28<sup>th</sup>

- uuuuaaagh deadline tonight at 3 AM (i will not stay up until 3 AM)
	- long day at work too aaauuuueeegh
	- 8 hours left! let's see what i can do
- really scrambling - no time for notes
	- too late to learn/add anything really new
	- mostly adding more models
		- trying to place everything neatly -> lots of work for little effect -> demoralizing
		- copy and paste x100 -> yayyyy plants everywhere
	- did add [WorldEnvironment](https://docs.godotengine.org/en/stable/classes/class_worldenvironment.html) to Courtyrd.tscn
		- played with every slider until things looked a little less shitty
- okay i think it's done, i just need to finalize the name...
- project > export
	- > [!error] No export template found at the expected path
	- click on Export Template Manager -> Download from: Best available mirror
	- Presets: Web (runnable) -> Export Project
		- > [!error] NetworkError when attempting to fetch resource.
		- skimmed [godot docs > exporting for the web](https://docs.godotengine.org/en/latest/tutorials/export/exporting_for_web.html)
			- what the hell is going on here...
			- kind of devastating. i love the web
- ooough the background image looks much worse when stretched across my whole screen... but it's after midnight now and i would like to go to bed

🌱 [cloud storage botanical station](https://ribozone.itch.io/cloud) submitted 2 hours before the deadline!

- ok yay yaaay it's over
- goodnight gamers

### post-jam thoughts

#### april 29<sup>th</sup>

- too much energy after submitting my game, so i had a hard time falling asleep
- woke up feeling good (emotionally) and bad (physically)
	- glad i didn't give up! it was a lot of work, but i am satisfied
- very excited to play through the other submissions
	- i'll list my favorites at the top of the page instead of down here at the end
- exporting to different platforms
	- i never tested the linux build, but no one's told me it doesn't work so i think we're fine
	- realized that the web build i tried last night didn't work because i needed to have it run from a webserver (i just opened the .html file)
		- i made a dummy itch page and uploaded the zip. it mostly works! except pressing quit on the main menu causes it to freeze and hitting escape won't close the game, so i had to close it by closing the browser window completely
			- not good! i don't want to share it in that state, but i also don't want to make changes to the code while judging is underway
				- not that i think i'll win! this is mostly an excuse to step away from godot and go back to looking for bugs and playing ffxiv and updating my website
			- web version postponed but not abandoned 
				- maybe i'll even be in the mood to try adding touch controls...
	-  [godot docs > running godot apps on macOS](https://docs.godotengine.org/en/latest/tutorials/export/running_on_macos.html) scared me away from the idea last night, but i've changed my mind. probably better to give people the option if they want it, even if i can't test it myself
		- my plan is to upload it along with the web version, whenever i get that done

#### may 28<sup>th</sup>

- <big style="font-size:3rem;">congrats <a href="https://itch.io/jam/discmaster-jam/results/discmaster-spelunker">spelunkers</a>!!</big>

#### june 8<sup>th</sup>

- opened godot for the first time since last time
- deleted the "quit" button on the main menu
- project > export > web (runnable)
	- left all the settings as they were
	- zipped everything that was exported
- uploaded the .zip to itch
	- in-page embed was behaving strangely (viewport drifting right, fullscreen button cut off), so i set it to launch full-screen
	- made a few css tweaks
	- yaaaaaaaay we love the browser

## interesting assets

> [!example]- poly
> - fauna
> 	- [dragonfly.mdl](https://discmaster.textfiles.com/browse/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/dragonfly.mdl) <3
> 	- [cricket.mdl](https://discmaster.textfiles.com/browse/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/cricket.mdl) + [butterfly.mdl](https://discmaster.textfiles.com/browse/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/butterfly.mdl) 
> 	- [fish3.mdl](https://discmaster.textfiles.com/browse/22706/JOY139CD2.iso/Data/Sharewares/Jeux/frontline16.exe/frontline/models/hk_fish3.mdl) + [dogfish.mdl](https://discmaster.textfiles.com/browse/22694/JOYCD127CD_2.iso/data/sharewares/jeux/frontline13.zip/frontline/models/dogfish.mdl) + [gator.mdl](https://discmaster.textfiles.com/browse/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/gator.mdl) + [snake.mdl](https://discmaster.textfiles.com/browse/22695/JOY128_CD1.iso/data/sharewares/wanted15.exe/data1.cab/Game_data/pak0.pak/models/snake.mdl)
> 	- [gull1.mdl](https://discmaster.textfiles.com/browse/19273/ftp.winsite.com-win95-games.tar/ftp.winsite.com/pub/pc/win95/games/arctic_rush.exe/%7Bapp%7D/model/gull1.mdl) + [eagle.mdl](https://discmaster.textfiles.com/browse/22695/JOY128_CD1.iso/data/sharewares/wanted15.exe/data1.cab/Game_data/pak0.pak/models/eagle.mdl) + [vulture.mdl](https://discmaster.textfiles.com/browse/22695/JOYCD128_2.iso/data/sharewares/jeux/cm_pack_2-zp.zip/models/vulture.mdl) + [parrot.mdl](https://discmaster.textfiles.com/browse/22697/JOYCD130_2.iso/data/sharewares/jeux/pvkb10.exe/Main/p_parrot.mdl)
> 	- [chicken.mdl](https://discmaster.textfiles.com/browse/22697/JOYCD130_2.iso/data/sharewares/jeux/pvkb10.exe/Main/chicken.mdl) + [cow2.mdl](https://discmaster.textfiles.com/browse/22697/JOYCD130_2.iso/data/sharewares/jeux/pvkb10.exe/Main/cow2.mdl)
> - flora
> 	- [swampstuff.mdl](https://discmaster.textfiles.com/browse/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/swampstuff.mdl)
> 	- mushrooms -- [one](https://discmaster.textfiles.com/view/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/mushroom2.mdl/mushroom2.glb), [two](https://discmaster.textfiles.com/view/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/Mushroom.mdl/Mushroom.glb), [three](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/TheBattleGrounds/bg-1.2.1.exe/$INSTDIR/bg/models/other/mushrooms.mdl/mushrooms.glb), [four](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/TheBattleGrounds/bg-1.2.1.exe/$INSTDIR/bg/models/other/mushroom.mdl/mushroom.glb)
> 	- [plant_pod2.mdl](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/NaturalSelection/ns_install_v3_b1.exe/%7Bapp%7D/nsp/models/ns_origin/plant_pod2.mdl) + [trava1.mdl](https://discmaster.textfiles.com/browse/23215/Gamestar_64_2004-07-08_dvd.iso/DVDStar/Ceske_mody/Vlokam2/vlokam2full.rar/vlokam2/models/trava1.mdl) +[lag_plat_ointy88_32.mdl](https://discmaster.textfiles.com/browse/11547/Igromania_04.ISO/DeathZone/Counter-Strike/de_escher19/cstrike.rar/cstrike/models/escher/lag_plat_ointy88_32.mdl) + [herbs.mdl](https://discmaster.textfiles.com/browse/22695/JOY128_CD1.iso/data/sharewares/wanted15.exe/data1.cab/Game_data/pak0.pak/models/herbs.mdl)
> 	- [gins_yucca.mdl](https://discmaster.textfiles.com/browse/11547/Igromania_04.ISO/DeathZone/Counter-Strike/cs_pacific/cs_pacific.rar/models/cs_pacific/gins_yucca.mdl) + [kvitecka1.glb](https://discmaster.textfiles.com/view/23222/Gamestar_70_2005-02_dvd.iso/DVDStar/Akce/Half-Life/Sic2.exe/Bloodbath/pak0.pak/models/kvitecka1.mdl/kvitecka1.glb) + [gramita.mdl](https://discmaster.textfiles.com/browse/26822/DPPCZ1201B/DPPCZ1201B.ISO/modwatch/FLF/Game%20File/frontline13a.exe/frontline/models/map/gramita.mdl)
> 	- 📁 [many trees, bushes, rocks](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/TheBattleGrounds/bg-1.2.1.exe/$INSTDIR/bg/models/other) 
> 	- 📁 [many potted plants](https://discmaster.textfiles.com/browse/26820/DPPCZ1001b/DPPCZ1001b.iso/mods/The%20Opera/opera_r1.exe/disk1/data1.cab/Models)
> - structures
> 	- [bord.glb](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/bord.mdl/bord.glb) + [hydrant.glb](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/hydrant.mdl) + [outsidebench.mdl](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/outsidebench.mdl) + [shelf.mdl](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/shelf.mdl) + [banco.mdl](https://discmaster.textfiles.com/browse/26822/DPPCZ1201B/DPPCZ1201B.ISO/modwatch/FLF/Game%20File/frontline13a.exe/frontline/models/map/banco.mdl)
> 	 - [washbowl.glb](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/washbowl.mdl/washbowl.glb) + [toilette.glb](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/toilette.mdl)
> 	- [big_water_tower.glb](https://discmaster.textfiles.com/view/22716/JOY149_CD2.iso/Data/Sharewares/Jeux/dod_v10.exe/%25MAINDIR%25/dod/models/mapmodels/big_water_tower.mdl/big_water_tower.glb) + [generic_pylon_02.ac](https://discmaster.textfiles.com/view/27106/MF_UK_197_1.iso/pc/DiscContents/Software/Games/FlightGear%201.0r154/FlightGear-1.0.0-r154.dmg/FlightGear.app/Contents/Resources/data/Models/fgfsdb/generic_pylon_02.ac) + [antenna2.mdl](https://discmaster.textfiles.com/browse/22706/JOY139CD2.iso/Data/Sharewares/Jeux/frontline16.exe/frontline/models/antena2.mdl) + [radar.glb](https://discmaster.textfiles.com/browse/23215/Gamestar_64_2004-07-08_dvd.iso/DVDStar/Ceske_mody/Vlokam2/vlokam2full.rar/vlokam2/models/Radar.mdl)
> - objects
> 	- books -- [one](https://discmaster.textfiles.com/browse/22889/ACSCD10102.iso/Master_Sword/MasterSword101f.exe/MS/models/misc/book.mdl) + [two](https://discmaster.textfiles.com/browse/22693/126cd2.img/data/sharewares/jeux/ge_beta19full.exe/Main/book.mdl) + [three](https://discmaster.textfiles.com/browse/22454/XENIATGM90.iso/Fragzone/Half-Life/Goldeneye/ge_beta15.exe/Main/book.mdl) + [four](https://discmaster.textfiles.com/view/22709/JOY142CD_2.iso/Data/Sharewares/Jeux/svencoop20f.exe/Main/p_spell2.mdl/p_spell2.glb)
> 	- computers -- [pc.glb](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/pc.mdl/pc.glb) + [pc.mdl](https://discmaster.textfiles.com/browse/11549/Igromania_07.ISO/DeathZone/CounterStrike/Maps/Map_cs_bikini/cs_bikini.rar/models/3dm_pc.mdl) + [pc4.mdl](https://discmaster.textfiles.com/browse/11549/Igromania_07.ISO/DeathZone/CounterStrike/Maps/Map_cs_bikini/cs_bikini.rar/models/3dm_pc4.mdl) + [laptop w/ antenna](https://discmaster.textfiles.com/browse/22706/JOY139CD2.iso/Data/Sharewares/Jeux/frontline16.exe/frontline/models/antena.mdl)
> 	- [lab_medical.mdl](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/Science&Industry/si97b.exe/%7Bapp%7D/si/models/lab_medical.mdl) + [chem_ammo.mdl](https://discmaster.textfiles.com/view/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/chem_ammo.mdl/chem_ammo.glb) + [health.mdl](https://discmaster.textfiles.com/browse/22707/JOY140_CD2.iso/Data/Sharewares/Jeux/fcs10041005.exe/%25MAINDIR%25/opforup.exe/%25MAINDIR%25/gearbox/models/w_health.mdl)
> 	- [documents.glb](https://discmaster.textfiles.com/view/28809/CDMM85_1.ISO/Science%20and%20Industry/si97a.exe/%25MAINDIR%25/si/models/resource_documents.mdl/resource_documents.glb) + [cd.glb](https://discmaster.textfiles.com/view/28809/CDMM85_1.ISO/Science%20and%20Industry/si97a.exe/%25MAINDIR%25/si/models/resource_cd.mdl/resource_cd.glb)
> 	- [mug.mdl](https://discmaster.textfiles.com/browse/11547/Igromania_04.ISO/DeathZone/Counter-Strike/de_escher19/cstrike.rar/cstrike/models/escher/gins_mug.mdl)
> 	- [forklift.glb](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/fork.mdl/fork.glb)
> - maps
> 	- [house.bsp](https://discmaster.textfiles.com/view/29705/ibm0880-0889/ibm0885.tar/ibm0885/ETRDKQ09.ZIP/etrnldrk.a08/MAPS/HOUSE.BSP)
> 	- [courtyrd.bsp](https://discmaster.textfiles.com/view/14402/ACWARE10.iso/acware10/levels/courtyrd/courtyrd.bsp) 

> [!example]- font
> - [courier-12.fnt](https://discmaster.textfiles.com/view/2194/BUGCD1998_04.ISO/_runtime/_nt4sp3/nt4sp3_i.exe/courfg.fon/Courier-12.fnt) 
> - [kimdeitch.font](https://discmaster.textfiles.com/view/844/Grafik%20Collection%201.iso/fonts/kimdeitch.font) -- tall
> -  📁 [amiga bitmap fonts](https://discmaster.textfiles.com/browse/14598/MicroRD-CD-ROM-Vol3-1994.iso/600amigafonts#font)

> [!example]- image
> - [dragonfly_resting_lc.gif](https://discmaster.textfiles.com/view/2735/250K_ANIMATIONS.iso/animations/animals/flies_flying_bugs/dragonfly_resting_lc.gif)
> - [waterfall.iff](https://discmaster.textfiles.com/view/1761/Utilities%20Professional%201-1500%20(1994)(WPD)[!].iso/00010250/var0099.dms/var0099.adf/Lo-Res/Waterfall)
> - [palette.gif](https://discmaster.textfiles.com/view/1060/Amiga%20Format%20CD49%20(2000-01-17)(Future%20Publishing)(GB)(Track%201%20of%203)[!][issue%202000-02].iso/-websites-/f1_gp/f1gp-ed/grabs/palette.gif)
> -  📁 [amiga icons](https://discmaster.textfiles.com/browse/1090/CU%20Amiga%20Magazine's%20Super%20CD-ROM%2017%20(1997)(EMAP%20Images)(GB)[!][issue%201997-12].iso/CoolWB/Icons/MagicWB/mwbarchive/tools)
> -  📁 [martha royer mac schemes](https://discmaster.textfiles.com/browse/17755/MacAddict_049_2000_09.iso/Software/Interface/Martha%20Royer%20Schemes/Martha%20Royer%20Schemes/Martha%20Royer%20Schemes)
> - [eco.gif](https://discmaster.textfiles.com/view/13427/NASAHPCC.BIN/contents/pubs/annrpt94/eco.gif)
> - [IMG_ARECIBO.jpg](https://discmaster.textfiles.com/view/14902/MOBICLIC127.ISO/pc/DATA/DSS127/DSS127_02/I_DSS127_02/IMG_ARECIBO.jpg)
> - [the ozone hole](https://discmaster.textfiles.com/view/955/The%20Learning%20Curve%20(Weird%20Science,%201996).iso/science/ecology/tc_ecology/slideshow2/14)
> - [euglena.bmp](https://discmaster.textfiles.com/view/14595/MWDICT_100.iso/dict/ill/euglena.bmp)
> - [beetle03.tif](https://discmaster.textfiles.com/view/657/FM%20Towns%20Free%20Software%20Collection%2010.iso/graphics/tiff/a_miura/beetle03.tif) -- wow
> - 📁 [kde icons](https://discmaster.textfiles.com/browse/1051/Amiga%20Format%20CD40%20(1999-05-11)(Future%20Publishing)(GB)(Track%201%20of%203)[!][issue%201999-06].iso/-in_the_mag-/linuxppc/redhat/rpms/kdebase-1.0-1b.ppc.rpm/kdebase-1.0.1b.cpio.gz/kdebase-1.0.1b.cpio/opt/kde/share/icons)

> [!example]- video
> -  📁 [variety looping movies](https://discmaster.textfiles.com/browse/1430/Great%20Jigsaw%20Puzzles.iso/LIBRARIES/Variety%20Looping%20Movies)
> - [ch4mesh.mov](https://discmaster.textfiles.com/view/15450/Image.iso/pc/organic/media/content/ch01/ag/Dfg01o2/dswmedia/ch4mesh.mov)

> [!example]- audio
> -  📁 [game programming for teens](https://discmaster.textfiles.com/browse/2758/GameProgrammingForTeens.iso/Sounds)
> - 📁 [creatures](https://discmaster.textfiles.com/browse/23339/Chip-Cover-CD-2007-02.iso/Hity%20z%20okladki/Anarchy%20Online%2017.0/data1.cab/Anarchy_Online_Files/cd_image/sound/sfx/creatures)
> - [planet loop](https://discmaster.textfiles.com/view/1105/CU%20Amiga%20Magazine's%20Super%20CD-ROM%2006%20(1996)(EMAP%20Images)(GB)(Track%201%20of%204)[!][issue%201997-01].iso/cucd/sound/phat_trax_samples/drumloops/planet-loop)
> - [World_Cricket 05.mp3](https://discmaster.textfiles.com/view/2006/AACD%2024.iso/AACD/Sound/SIDTunes/Rodger_Andrew/World_Cricket.sid/World_Cricket%2005.mp3)
> - [00010_aphex twin loop.wav](https://discmaster.textfiles.com/view/20855/Mac%20Magazin%20and%20MacEasy%20Magazine%20CD%20-%20Issue%2014.iso/Service/Leserecke/J%C3%B6rg%20Hoheisel/Akte%20X%20%E2%81%84%20X%20Files%20Guide/X%20Files%20Episode%20Guide/About/00010_aphex%20twin%20loop.wav)

> [!example]- 📁 archive
> - [EE menus.rsrc](https://discmaster.textfiles.com/browse/19410/AppleEarthExplorer.toast.sit.hqx/AppleEarthExplorer.toast/EE%20Resources%C6%92/EE%20Menus/EE%20Menus.rsrc)
> - [Aleph.rsrc](https://discmaster.textfiles.com/browse/16762/pucsofteducativoeinfo.iso/Educaci%C3%B3n/Aleph/Aleph.i/Aleph.i/Aleph/Aleph.rsrc)
> - [National Geographic: The 1970s](https://discmaster.textfiles.com/browse/15250)
> 	- [pseudomonas page](https://discmaster.textfiles.com/view/15250/CNG_76_79_September_1976-December_1979.ISO/pc/images/276i/276i0375.jpg)
> - [Experiments in General Chemistry - Disc 1.iso](https://discmaster.textfiles.com/browse/10951/Experiments%20in%20General%20Chemistry%20-%20Disc%201.iso)
> - [The Learning Curve (Weird Science, 1996).iso](https://discmaster.textfiles.com/view/955/The%20Learning%20Curve%20(Weird%20Science,%201996).iso)
> - [bugbook](https://discmaster.textfiles.com/browse/990/cdrt22.iso/pc/bugbook)
> - [Corporate Video Backgrounds.iso](https://discmaster.textfiles.com/browse/417/Corporate%20Video%20Backgrounds.iso)
> - [Qoole for Quake (USA).bin](https://discmaster.textfiles.com/browse/22004/Qoole%20for%20Quake%20(USA)/Qoole%20for%20Quake%20(USA).bin)

## final asset table

| File                                                                                                                                                                                                                    | Format | Size     | Date       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- | ---------- |
| [Courier-12](https://discmaster.textfiles.com/view/2194/BUGCD1998_04.ISO/_runtime/_nt4sp3/nt4sp3_i.exe/courfg.fon/Courier-12.fnt)                                                                                       | .fnt   | 9.8 KB   | 1997-05-01 |
| [00020_Greenhouse](https://discmaster.textfiles.com/view/28579/VIRTUAL%20[md5%20EC7DB5CC033E38E511F666CE80BCE509].ISO/mac/stills/novak.dir/novak.dir/00020_Greenhouse.png)                                              | .png   | 52.5 KB  | 1995-06-18 |
| [ARROW1](https://discmaster.textfiles.com/view/811/Monster%20Media%20No.%2011%20(Second%20Quarter%201995)(Monster%20Media,%20Inc.).ISO/os2/icoholic.zip/ARROW1.ICO)                                                     | .ico   | 766 b    | 1995-01-01 |
| [\_WHITE](https://discmaster.textfiles.com/view/549/Especial%20Multimedia.iso/Multimed/Presenta/PKING330.ZIP/SOURCE/_WHITE.BM_/_WHITE.BM)                                                                               | .bm    | 3.9 KB   | 1995-11-25 |
| [Black to White-W](https://discmaster.textfiles.com/view/534/epsPRO%203%20Cartoon%20Stock%20(Wayzata%20Technology)%20(1281)%20(1994).iso/mac/Mac/Aldus%20FreeHand/Borders-Wide/Black%20to%20White-W)                    | .svg   | 191.9 KB | 1994-05-18 |
| [468](https://discmaster.textfiles.com/view/20636/Bug%20Life%203D.iso/Bug.ico/1049/SOUND/468)                                                                                                                           | .ogg   | 1.1 MB   | 2008-09-23 |
| [courtyrd](https://discmaster.textfiles.com/view/14402/ACWARE10.iso/acware10/levels/courtyrd/courtyrd.bsp)                                                                                                              | .bsp   | 494.4 KB | 1996-08-14 |
| [d_glass_block](https://discmaster.textfiles.com/view/29945/ibm3290-3299/ibm3298.tar/ibm3298/M-SWT346.ZIP/M-SWAT3.R44/Swatdata/Textures/missiond/d_glass_block.tga)                                                     | .tga   | 64.0 KB  | 1999-11-05 |
| [detail-concrete](https://discmaster.textfiles.com/view/11562/Igromania_2005-10.iso/Cybersport/Promodes/ChallengeProModeArena/cpma132-full.rar/cpma132-full/baseq3/map_cpm3.pk3/textures/tex-oxide/detail-concrete.jpg) | .jpg   | 10.9 KB  | 2000-08-29 |
| [textures_marsh_1_4](https://discmaster.textfiles.com/view/12262/Gamblexx0102.iso/demos/Empire_Earth.exe/Disk1/data.ssa/textures_marsh_1_4.sst)                                                                         | .sst   | 6.7 KB   | 2001-09-29 |
| [denim_2](https://discmaster.textfiles.com/view/2184/Bright%20Ideas%20-%201997-01.iso/pc/demos/rzdemocd/textures/cloth/denim_2)                                                                                         | .pict  | 194.6 KB | 1995-05-12 |
| [trava1](https://discmaster.textfiles.com/view/23215/Gamestar_64_2004-07-08_dvd.iso/DVDStar/Ceske_mody/Vlokam2/vlokam2full.rar/vlokam2/models/trava1.mdl/trava1.glb)                                                    | .glb   | 17.9 KB  | 2004-03-30 |
| [kvitecka1](https://discmaster.textfiles.com/view/23222/Gamestar_70_2005-02_dvd.iso/DVDStar/Akce/Half-Life/Sic2.exe/Bloodbath/pak0.pak/models/kvitecka1.mdl/kvitecka1.glb)                                              | .glb   | 57.3 KB  | 2004-12-19 |
| [gins_leafy](https://discmaster.textfiles.com/view/11547/Igromania_04.ISO/DeathZone/Counter-Strike/de_escher19/cstrike.rar/cstrike/models/escher/gins_leafy.mdl/gins_leafy.glb)                                         | .glb   | 48.7 KB  | 2002-09-14 |
| [swampstuff](https://discmaster.textfiles.com/view/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/swampstuff.mdl/swampstuff.glb)                           | .glb   | 74.8 KB  | 2001-01-02 |
| [plant_pod2](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/NaturalSelection/ns_install_v3_b1.exe/%7Bapp%7D/nsp/models/ns_origin/plant_pod2.mdl/plant_pod2.glb)        | .glb   | 225.7 KB | 2004-01-03 |
| [lag_plat_ointy88_32](https://discmaster.textfiles.com/view/11547/Igromania_04.ISO/DeathZone/Counter-Strike/de_escher19/cstrike.rar/cstrike/models/escher/lag_plat_ointy88_32.mdl/lag_plat_ointy88_32.glb)              | .glb   | 18.3 KB  | 2002-11-19 |
| [tree2](https://discmaster.textfiles.com/view/23222/Gamestar_70_2005-02_dvd.iso/DVDStar/Akce/Half-Life/Sic2.exe/Bloodbath/pak0.pak/models/tree2.mdl/tree2.glb)                                                          | .glb   | 137.2 KB | 2004-12-19 |
| [Mushroom](https://discmaster.textfiles.com/view/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/Mushroom.mdl/Mushroom.glb)                                                           | .glb   | 61.9 KB  | 2001-01-14 |
| [mushroom2](https://discmaster.textfiles.com/view/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/mushroom2.mdl/mushroom2.glb)                                                        | .glb   | 64.1 KB  | 2001-01-14 |
| [dragonfly](https://discmaster.textfiles.com/view/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/dragonfly.mdl/dragonfly.glb)                              | .glb   | 37.7 KB  | 2001-01-02 |
| [cricket](https://discmaster.textfiles.com/view/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/cricket.mdl/cricket.glb)                                    | .glb   | 276.2 KB | 2001-01-02 |
| [fountain2](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/TheBattleGrounds/bg-1.2.1.exe/$INSTDIR/bg/models/other/fountain2.mdl/fountain2.glb)                         | .glb   | 870.1 KB | 2004-03-11 |
| [antena](https://discmaster.textfiles.com/view/22706/JOY139CD2.iso/Data/Sharewares/Jeux/frontline16.exe/frontline/models/antena.mdl/antena.glb)                                                                         | .glb   | 318.3 KB | 2001-02-22 |
| [Radar](https://discmaster.textfiles.com/view/23215/Gamestar_64_2004-07-08_dvd.iso/DVDStar/Ceske_mody/Vlokam2/vlokam2full.rar/vlokam2/models/Radar.mdl/Radar.glb)                                                       | .glb   | 250.9 KB | 2000-11-08 |
| [generator](https://discmaster.textfiles.com/view/11547/Igromania_04.ISO/DeathZone/Counter-Strike/de_escher19/cstrike.rar/cstrike/models/escher/generator.mdl/generator.glb)                                            | .glb   | 101.9 KB | 2003-06-12 |
| [gins_shelves_b](https://discmaster.textfiles.com/view/11547/Igromania_04.ISO/DeathZone/Counter-Strike/de_escher19/cstrike.rar/cstrike/models/escher/gins_shelves_b.mdl/gins_shelves_b.glb)                             | .glb   | 38.8 KB  | 2003-04-20 |
| [p_shovel](https://discmaster.textfiles.com/view/23197/Gamestar_48_2003-02_cd2.bin/GSSpecial/TheyHunger3.exe/Hunger/pak1.pak/models/p_shovel.mdl/p_shovel.glb)                                                          | .glb   | 64.1 KB  | 2001-03-26 |
