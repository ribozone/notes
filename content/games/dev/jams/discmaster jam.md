---
created: 2025-04-11T21:13:11-04:00
modified: 2025-04-18T22:06:31-04:00
title: discmaster jam
description: 
draft: false
tags: 
---

> An online-only week-long game jam, using vintage computer files from [archive.org](https://archive.org/).

- **april 20th** 2025 at 10:00 PM EST -- **april 29th** 2025 at 2:59 AM EST
- [discmaster](https://discmaster.textfiles.com/) -- a search engine for vintage data hosted on the internet archive
- [jam page on itch.io](https://itch.io/jam/discmaster-jam)  + [announcement on archive.org](https://blog.archive.org/event/discmaster-game-jam/)


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
		- most of the animals i'm finding were made to be enemies to be killed
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

## interesting assets

📁 = folder
✔️ = used in my game (none yet! the jam hasn't started)

> [!example]- poly
> - fauna
> 	- [dragonfly.mdl](https://discmaster.textfiles.com/browse/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/dragonfly.mdl) <3
> 	- [cricket.mdl](https://discmaster.textfiles.com/browse/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/cricket.mdl) + [butterfly.mdl](https://discmaster.textfiles.com/browse/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/butterfly.mdl) 
> 	- [fish3.mdl](https://discmaster.textfiles.com/browse/22706/JOY139CD2.iso/Data/Sharewares/Jeux/frontline16.exe/frontline/models/hk_fish3.mdl) + [dogfish.mdl](https://discmaster.textfiles.com/browse/22694/JOYCD127CD_2.iso/data/sharewares/jeux/frontline13.zip/frontline/models/dogfish.mdl) + [gator.mdl](https://discmaster.textfiles.com/browse/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/gator.mdl)
> 	- [gull1.mdl](https://discmaster.textfiles.com/browse/19273/ftp.winsite.com-win95-games.tar/ftp.winsite.com/pub/pc/win95/games/arctic_rush.exe/%7Bapp%7D/model/gull1.mdl) + [eagle.mdl](https://discmaster.textfiles.com/browse/22695/JOY128_CD1.iso/data/sharewares/wanted15.exe/data1.cab/Game_data/pak0.pak/models/eagle.mdl) + [vulture.mdl](https://discmaster.textfiles.com/browse/22695/JOYCD128_2.iso/data/sharewares/jeux/cm_pack_2-zp.zip/models/vulture.mdl)
> 	- [chicken.mdl](https://discmaster.textfiles.com/browse/22697/JOYCD130_2.iso/data/sharewares/jeux/pvkb10.exe/Main/chicken.mdl) + [cow2.mdl](https://discmaster.textfiles.com/browse/22697/JOYCD130_2.iso/data/sharewares/jeux/pvkb10.exe/Main/cow2.mdl)
> - flora
> 	- [swampstuff.mdl](https://discmaster.textfiles.com/browse/28051/february_2001.iso/intercd/root/Multimedia/%5EGames_Demos/GunMan/setup.exe/%25MAINDIR%25/rewolf/models/swampstuff.mdl)
> 	- mushrooms -- [one](https://discmaster.textfiles.com/view/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/mushroom2.mdl/mushroom2.glb), [two](https://discmaster.textfiles.com/view/23173/Gamestar_26_2001-02_cd2.bin/DEMA/gunmandemo.exe/%25MAINDIR%25/rewolf/models/Mushroom.mdl/Mushroom.glb), [three](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/TheBattleGrounds/bg-1.2.1.exe/$INSTDIR/bg/models/other/mushrooms.mdl/mushrooms.glb), [four](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/TheBattleGrounds/bg-1.2.1.exe/$INSTDIR/bg/models/other/mushroom.mdl/mushroom.glb)
> 	- [plant_pod2.mdl](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/NaturalSelection/ns_install_v3_b1.exe/%7Bapp%7D/nsp/models/ns_origin/plant_pod2.mdl)
> 	-  📁 [many trees, bushes, rocks](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/TheBattleGrounds/bg-1.2.1.exe/$INSTDIR/bg/models/other) 
> - structures
> 	- [bord.glb](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/bord.mdl/bord.glb) + [hydrant.glb](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/hydrant.mdl) + [outsidebench.mdl](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/outsidebench.mdl)
> 	 - [washbowl.glb](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/washbowl.mdl/washbowl.glb) + [toilette.glb](https://discmaster.textfiles.com/browse/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/toilette.mdl)
> 	- [big_water_tower.glb](https://discmaster.textfiles.com/view/22716/JOY149_CD2.iso/Data/Sharewares/Jeux/dod_v10.exe/%25MAINDIR%25/dod/models/mapmodels/big_water_tower.mdl/big_water_tower.glb) + [generic_pylon_02.ac](https://discmaster.textfiles.com/view/27106/MF_UK_197_1.iso/pc/DiscContents/Software/Games/FlightGear%201.0r154/FlightGear-1.0.0-r154.dmg/FlightGear.app/Contents/Resources/data/Models/fgfsdb/generic_pylon_02.ac) + [antenna2.mdl](https://discmaster.textfiles.com/browse/22706/JOY139CD2.iso/Data/Sharewares/Jeux/frontline16.exe/frontline/models/antena2.mdl)
> - [forklift.glb](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/fork.mdl/fork.glb)
> - [pc.glb](https://discmaster.textfiles.com/view/23212/Gamestar_61_2004-04_dvdb.iso/DVDStar/Akce/Half-Life/HostileIntent/hostileintent_1.1_full.exe/hostileintent/pc.mdl/pc.glb)


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

> [!example]- video
> -  📁 [variety looping movies](https://discmaster.textfiles.com/browse/1430/Great%20Jigsaw%20Puzzles.iso/LIBRARIES/Variety%20Looping%20Movies)
> - [ch4mesh.mov](https://discmaster.textfiles.com/view/15450/Image.iso/pc/organic/media/content/ch01/ag/Dfg01o2/dswmedia/ch4mesh.mov)

> [!example]- audio
> -  📁 [game programming for teens](https://discmaster.textfiles.com/browse/2758/GameProgrammingForTeens.iso/Sounds)

> [!example]- 📁 archive 
> - [EE menus.rsrc](https://discmaster.textfiles.com/browse/19410/AppleEarthExplorer.toast.sit.hqx/AppleEarthExplorer.toast/EE%20Resources%C6%92/EE%20Menus/EE%20Menus.rsrc)
> - [Aleph.rsrc](https://discmaster.textfiles.com/browse/16762/pucsofteducativoeinfo.iso/Educaci%C3%B3n/Aleph/Aleph.i/Aleph.i/Aleph/Aleph.rsrc)
> - [National Geographic: The 1970s](https://discmaster.textfiles.com/browse/15250)
> 	- [pseudomonas page](https://discmaster.textfiles.com/view/15250/CNG_76_79_September_1976-December_1979.ISO/pc/images/276i/276i0375.jpg)
> - [Experiments in General Chemistry - Disc 1.iso](https://discmaster.textfiles.com/browse/10951/Experiments%20in%20General%20Chemistry%20-%20Disc%201.iso)
> - [The Learning Curve (Weird Science, 1996).iso](https://discmaster.textfiles.com/view/955/The%20Learning%20Curve%20(Weird%20Science,%201996).iso)