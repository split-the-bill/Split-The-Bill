class ParallaxImage {
    constructor(image2p) {
            this.image2p = image2p;
            //article.datset.columns
            //this.link.dataset.tab
            this.image2pData = this.image2p.dataset.img;
            this.divContent = document.querySelector(`.content-wrapper[data-img="${this.image2pData}"]`);
            console.log(this.divContent)
        }
        //methods
}



// stepUno selects all images with class bcg 
// and assigns them to a NodeListof<Elements> imgPx
const imgsToParallax = document.querySelectorAll('.bcg')
imgsToParallax.forEach(image2p => new ParallaxImage(image2p));