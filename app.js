const navLinks = document.querySelectorAll('nav a')
const imgsNav = document.querySelectorAll('nav img')
const title = document.querySelector('h1')
const verticalLine = document.querySelector('.middle-line')
const grapesLogo = document.querySelector('.home-content img')
const homeBtn = document.querySelector('.home-content button')


window.addEventListener('load', revealAnim);
window.addEventListener('DOMContentLoaded', playMusic);

function revealAnim(){
    
    const TLFADE = gsap.timeline();

    TLFADE 
    .from(title, {autoAlpha: 0, y: -50, delay: 0.2})
    .to(verticalLine, {height: 100}, '-=0.2')
    .from(grapesLogo, {autoAlpha: 0, y: -50}, '-=0.2')
    .from(homeBtn, {autoAlpha: 0, y: -50}, '-=0.2')
    .from(navLinks, {autoAlpha:0, y:-50, duration: 0.4, stagger: 0.1}, '-=0.2')
    .from(imgsNav, {autoAlpha: 0, y: -50})
    
}

function playMusic(){
    const song = document.querySelector('audio');
    console.log(song)
    if (song !== undefined) {
        // song.play();
        song.then(() => {
          // Autoplay started!
          song.play();
        }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
        });
      }
}