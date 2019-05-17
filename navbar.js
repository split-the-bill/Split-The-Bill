const nav = document.querySelector('#navbar');

const navTop = nav.offsetTop;

const windowScrollY = window.scrollY;

function stickyNavbar() {
    console.log(`${navTop}"=navTOP"`);
    console.log(`${windowScrollY}`);
    if (window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');

    }
}

window.addEventListener('scroll', this.stickyNavbar);