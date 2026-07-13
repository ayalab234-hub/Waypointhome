// =======================================
// WAYPOINT HOME
// =======================================

const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("mobileMenu");

hamburger.addEventListener("click",()=>{

menu.classList.toggle("open");

});

// Close menu when link clicked

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("open");

});

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Header shadow

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.classList.add("scrolled");

}

else{

header.classList.remove("scrolled");

}

});

// Fade animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});
