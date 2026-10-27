IIT Motorsports Website & 3D Viewer Project Hub
Bug Fixes

    [x] Fix Scarlet Hawk link redirecting to Google

    [x] Fix Red Rocket link redirecting to Google

    [x] Fix Hammer Hawk link redirecting to Google

    [ ] Take more Photos for the Website

Content Updates

    [ ] Edit Sponsors Page

        [ ] Need Sponsor List

    [ ] Add new photos to Media Gallery

    [ ] Edit Our Team Page

        [ ] Need List of Members

        [ ] Captain Names and Photos

Redesign

    [ ] Complete Home Page rehaul

Page Ideas
Blender Approach

    Setup camera to make smooth cuts.

    Panning from overview of the whole car to specific subsystems.

    Flow Idea: Full Car -> Zoom out making chassis only visible -> pan to dash (software) -> Accumulator/wiring for low voltage.

    Note: Might not implement this completely—models are fine, but animating entirely in Blender and exporting to heavy video files is pretty taxing.

WordPress Approach

    Researched and found a tool called Elementor which is useful for scroll effects.

    Can place video widgets that play the animation for each sector.

    Need to check out how feasible HTML and CSS code can be placed directly into WordPress and if it’s even worth the overhead.

Inspiration

    Jacob recommended a site called Three.js. I find it super useful and checked out some projects for inspiration. Still need to hunt down a free, clean Formula SAE vehicle model to import into Blender.

    Warning: Use Cornerstone to navigate each page.

🔗 Resources

    Three.js / WebGL YouTube Playlist
    https://youtube.com/playlist?list=PL6QREj8te1P7d4j3k8Snfa187o-IjXuJx

🏎️ IIT Motorsports FSAE Subteam 3D Viewer

Building a quick interactive 3D viewer for the IIT Motorsports site so our subteam pages aren't just boring blocks of text. Right now I'm basically finishing up Day 1, getting the basic layout, canvas sizing, and camera coords working smoothly inside a WordPress column without everything collapsing.
TODOs (2–3 Week Sprint)
WEEK 1: Three.js Foundations & Asset Pipeline

    [ ] Lock down the Three.js viewport and responsive canvas resize handlers.

    [ ] Swap out these primitive box/cylinder meshes for actual Blender/CAD models (.glb) of our actual FSAE car parts.

    [ ] Optimise polygon counts so mobile phones don't melt running WebGL.

WEEK 2: Apple-Style Parallax & Scroll Controls (need to watch some jsmastery on youtube for this)

    [ ] Dig into Apple's product page source code (Mac Pro / Pro Display XDR style) to figure out how they scrub 3D animations using scroll position.

    [ ] Hook GSAP ScrollTrigger up to the camera positions so scrolling down the page rotates the car and explodes the subteam parts outward.

    [ ] Tweak smooth lerp (linear interpolation) on the camera damping so the movement feels weighted and expensive instead of jittery.

WEEK 3: UI Polish, Performance & WordPress Integration

    [ ] Set up custom raycasting so people can click directly on the 3D car parts (like clicking the front wing to open Suspension) instead of just clicking the nav buttons.

    [ ] Run frame rate tests—aiming for a locked 60 FPS on both desktop and mobile.

    [ ] Clean up build files, bundle via Vite, and properly enqueue/embed it into WordPress.

🚀 Stack

    HTML5 / CSS3 / Vanilla JS

    Three.js & OrbitControls

    GSAP (GreenSock)

    Tailwind CSS / FontAwesome
