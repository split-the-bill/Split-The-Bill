// stepUno selects all images with class bcg 
// and assigns them to a NodeListof<Elements> imgPx
const imgsToParallax = document.querySelectorAll('.bcg')
imgsToParallax.forEach(image2p => new ParallaxImage(image2p));