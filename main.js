const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const nav = document.querySelector("nav");

openNav.addEventListener("click", function() {
    this.style.display = "none";
    closeNav.style.display = "flex";
    nav.style.display = "block";
});
closeNav.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "none";
    openNav.style.display = "flex";
});

const dropDown = document.querySelector(".drop");
dropDown.addEventListener("click", function() {
    if(window.innerWidth <= 921) {
        this.children[1].style.display = "flex";
        this.children[1].style.opacity = "1";
    }
});

//#111745
const header = document.querySelector("header");
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY == 0) {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        goUp.style.display = "none";
    } else if(this.scrollY > 500) {
        header.style.backgroundColor = "#111745";
        header.style.boxShadow = "0 0 5px #131B4D";
        goUp.style.display = "flex";
    }
});

//
const questions = Array.from(document.querySelectorAll(".panel h3"));
const answers = Array.from(document.querySelectorAll(".panel p"));

questions.forEach(q => {
    q.addEventListener("click", function () {
        for(let i = 0;i < questions.length; i++) {
            questions[i].classList.remove("active");
        }
        if(!this.classList.contains("active")) {
            this.classList.add("active");
            this.nextElementSibling.classList.remove("hide");
            Array.from(this.children[0].children).forEach(angle => {
                angle.classList.toggle("hide");
            });
        } else {
            this.classList.remove("active");
            this.nextElementSibling.classList.add("hide");
        }
    });
});
