class ParallaxImage {
    constructor(image2p) {
            this.image2p = image2p;
            console.log(image2p);

            this.image2pData = this.image2p.dataset.img;

            this.divContent = document.querySelector(`.content-wrapper[data-img="${this.image2pData}"]`);

            this.divContent = new Content(this.divContent);



            // this.image2p.addEventListener('scroll')
            this.image2p.addEventListener('scroll', () => { this.parallaxDivContent(); });
        }
        //methods



    parallaxDivContent() {
        const imgoffset = this.image2p.offsetTop;

        const contentoffset = this.divContent.offsetTop;


        if (scroll >= imgoffset) {
            if (contentoffset >= imgoffset) {

            }
            const scrolltop = window.pageYOffset || window.scrollY;

            this.image2p.style.top = -scrolltop * .2 + 'px';

            this.divContent.toggleContent();
        }
    }
}


class Content {
    constructor(divElement) {
            console.log(divElement);
            this.divElement = divElement;
        }
        //methods
    toggleContentscrollup() {
        this.divElement.style.top = -window.scrollY * .5 + 'px';
        this.divElement.classList.toggle('fixed');
    }
}


// stepUno selects all images with class bcg // assigns them to a NodeListof<Elements> 

const imgsToParallax = document.querySelectorAll('.hidden');
imgsToParallax.forEach((image2p) => new ParallaxImage(image2p));