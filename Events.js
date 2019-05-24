const logoimg = document.getElementById("logo");

logoimg.addEventListener("mouseenter", () => {
    if (logoimg.src != "assets/images/SplitDollar Inverted.png") {
        logoimg.src = "assets/images/SplitDollar Inverted.png";
    } else {
        logoimg.src = "assets/images/SplitDollar.png";
    }

    logoimg.addEventListener("mouseleave", () => {
        if (logoimg.src != "assets/images/SplitDollar.png") {
            logoimg.src = "assets/images/SplitDollar.png";
        } else {
            logoimg.src = "assets/images/SplitDollar Inverted.png";
        }
    })
});

const money = document.getElementById("moneyz");

money.addEventListener('mouseover', () => {
    if (money.innerHTML === "Split the bill works on all platforms 💵") {
        money.innerHTML = "Split the bill works on all platforms 🤑";
    } else {
        money.innerHTML = "Split the bill works on all platforms 💵";
    }
});

