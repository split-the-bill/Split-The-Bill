class Carousel {
    constructor(element) {
        this.element = element;
        this.leftBtn = element.querySelector(".left-button");
        this.rightBtn = element.querySelector(".right-button");

        this.images = element.querySelectorAll("img");

        this.selectedImage = 0;

        this.selectImage("left", 0, 3);

        this.leftBtn.addEventListener("click", () => this.leftClick());
        this.rightBtn.addEventListener("click", () => this.rightClick());
    }

    leftClick() {
        let oldImage = this.selectedImage;

        if (oldImage === 0) {
            this.selectedImage = this.images.length - 1;
        } else {
            this.selectedImage -= 1;
        }

        this.selectImage("left", this.selectedImage, oldImage);
    }
    rightClick() {
        let oldImage = this.selectedImage;

        if (oldImage === this.images.length - 1) {
            this.selectedImage = 0;
        } else {
            this.selectedImage += 1;
        }
        this.selectImage("right", this.selectedImage, oldImage);
    }

    selectImage(direction, newIndex, oldIndex) {
        let newImage = this.images[newIndex];
        let oldImage = this.images[oldIndex];

        let oldImageTransition;
        let newImageTransition;

        if (direction === "left") {
            oldImageTransition = 100;
            newImageTransition = -100;
        } else {
            oldImageTransition = -100;
            newImageTransition = 100;
        }

        oldImage.style.transform = `translate3d(${oldImageTransition}%, 0, 0)`;
        oldImage.style.opacity = 0;
        newImage.style.opacity = 0;

        setTimeout(() => {
            oldImage.style.display = "none";
            newImage.style.display = "block";
            newImage.style.transform = `translate3d(${newImageTransition}%, 0, 0)`;
        }, 500);

        setTimeout(() => {
            newImage.style.opacity = 1;
            newImage.style.transform = "";
        }, 600);
    }
}

let carousel = document.querySelector(".carousel");
let carouselInstance = new Carousel(carousel);



// class Carousel {
//     constructor() {
//         this.buttonR = document.querySelector('.right-button');
//         this.buttonL = document.querySelector('.left-button');
//         this.images = document.querySelectorAll('.carousel img');
//         this.currentIndex = 0;
//         this.images[0].style.display = 'block';
//         this.buttonR.addEventListener('click', () => this.nextR());
//         this.buttonL.addEventListener('click', () => this.nextL());
//     }

//     nextR() {
//         if (this.currentIndex < this.images.length - 1) {
//             this.currentIndex++;
//             this.images[this.currentIndex - 1].style.display = 'none';
//             this.images[this.currentIndex].style.display = 'block';
//         }
//     }

//     nextL() {
//         if (this.currentIndex > 0) {
//             this.currentIndex--;
//             this.images[this.currentIndex + 1].style.display = 'none';
//             this.images[this.currentIndex].style.display = 'block';
//         }
//     }
// }

// let carousel = document.querySelector('.carousel');
// carousel = new Carousel;