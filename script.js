class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    for (let index = 0; index < this.navLinks.length; index++) {
      const link = this.navLinks[index];
  
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    }
  }
  
  
  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
    
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

let index = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.card').length;

document.querySelector('.next').addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
    } else {
        index = 0;  // Volta à primeira imagem
    }
    updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalSlides - 1;  // Volta à última imagem
    }
    updateSlide();
});

function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;  // Desloca as imagens de acordo com o índice
}
