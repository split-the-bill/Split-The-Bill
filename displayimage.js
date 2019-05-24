class Image {
    constructor(element) {

        // Assign this.element to the dropdown element
        this.element = element;

        // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
        this.example = this.element.querySelectorAll(".example");
        this.textData = this.element.dataset.imgnum;
        // assign the reference to the ".dropdown-content" class found in the dropdown element
        this.img = this.element.querySelectorAll('#img');
        this.image = document.querySelector(`img[data-imgnum='${this.textData}']`);
        this.textImg = new TextImg(this.image);
        // Add a click handler to the button reference and call the toggleContent method.
        this.element.addEventListener('mouseover', () => this.toggleContent());
        this.element.addEventListener('click', () => this.select());
    };

    toggleContent() {

        // Toggle the ".dropdown-hidden" class off and on
        this.element.classList.toggle('fade-in-element');
    }
    select() {
        //gets all divimg texts/div elements with classname='example'
        let texts = document.querySelectorAll('#texts');
        // uses a loop and foreach to remove fadeinclass from all elements
        texts.forEach(text => text.classList.remove('texthilight'));
        // adds fadeinclass to this text 
        this.element.classList.add('texthilight');
        // call select method on the item associated with this textcontent
        this.textImg.select();
    }
}
class TextIm {
    constructor(img) {
            console.log(img);
            this.img = img;
        }
        //methods
    select() {
            const imgs = document.querySelectorAll('.img');
            imgs.forEach(img => img.classList.remove('show'));
            this.img.classList.add('fade-in-element');
        }
        // toggleContentscrollup() {
        //     this.img.style.top = -window.scrollY * .5 + 'px';
        //     this.img.classList.toggle('fixed');
        // }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let imgs = document.querySelectorAll('.img').forEach(img => new Image(img));