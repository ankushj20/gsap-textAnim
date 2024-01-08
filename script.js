var tl = gsap.timeline()
tl.from("#nav h2,#nav h3, #nav img",{
    y:-50,
    duration:0.5,
    opacity:0,
    stagger:0.5,


})
tl.from("#left h1",{
    x:-800,
    duration:1,
    delay:0.2,
    stagger:0.3,
    opacity:0,

})
tl.from("#img1",{
    x:-830,
    duration:0.6,
    rotate:180,
    opacity:0,
    scale:1.2,


})
tl.from("#img2",{
    x:830,
    duration:0.6,
    rotate: 250,
    opacity:0,
    scale:1.2,


})
tl.from("#rgt p",{
    y:500,
    duration:0.6,
    opacity:0,
    scale:1.2,
})