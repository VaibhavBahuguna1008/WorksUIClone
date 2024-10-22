function loading(){
    var t1 = gsap.timeline()

    t1.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration:0.5,
        ease: "expo.out"
    }) 

    t1.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration:0.5,
        ease: "expo.out"
    }, "anim") 

    t1.to("#loader h1", {
        delay: 0.6,
        color: "black"
    }, "anim")

    t1.to("#loader",{
        opacity: 0  
    })

    t1.to("#loader",{
        display : "none"
    })
}
loading();

// const sidebar = document.querySelector(".sidebar")
// const navbar = document.querySelector(".nav-right i")
// navbar.addEventListener("click", function(){
//     sidebar.style.display = "flex";
//     sidebar.style.right = 0;
// })
// const sidebarcross = document.querySelector(".sidebar i")
// sidebarcross.addEventListener("click", function(){
//     sidebar.style.display = "none";
// })


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
    
});
document.querySelector(".footer1 h1")
.addEventListener("click", function(){
    scroll.scrollTo(0)
})
document.querySelector(".footer1 i")
.addEventListener("click", function(){
    scroll.scrollTo(0)
})

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})
