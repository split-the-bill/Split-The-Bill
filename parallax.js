// parallax Scene
var controller = new ScrollMagic.Controller();
const slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax',
        triggerHook: 1,
        duration: '200%'
    })
    .setTween(TweenMax.from('.bcg', 1, { y: '-30%', ease: Power0.easeNone }))
    .addTo(controller);





class ParallaxImage {
    constructor(image2p) {
            this.image2p = image2p;
            //article.datset.columns
            //this.link.dataset.tab
            this.image2pData = this.image2p.dataset.img;
        }
        //methods
}




// stepUno selects all images with class bcg 
// and assigns them to a NodeListof<Elements> imgPx
const imgsToParallax = document.querySelectorAll('.bcg')
imgsToParallax.forEach(image2p => new ParallaxImage(image2p));