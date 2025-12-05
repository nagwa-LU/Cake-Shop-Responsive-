
let navLinks = document.querySelector('.nav-links');


let menuIcon = document.querySelector('.menu-icon');


menuIcon.onclick = () => {
  
    navLinks.classList.toggle('active');
}


window.onscroll = () => {
    navLinks.classList.remove('active');
}







/****************************************** */
 
  const aboutImg = document.querySelector('#about-us img');
  aboutImg.addEventListener('mouseover', () => aboutImg.style.transform = 'scale(1.05)');
  aboutImg.addEventListener('mouseout', () => aboutImg.style.transform = 'scale(1)');

/********************************************************************************** */













const circles = document.querySelectorAll('.circle');
const categories = document.querySelectorAll('.cake-images .category');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    circles.forEach(c => c.classList.remove('active'));
    circle.classList.add('active');

    const category = circle.dataset.category;
    categories.forEach(cat => {
      if(cat.classList.contains(category)) {
        cat.classList.add('active');
      } else {
        cat.classList.remove('active');
      }
    });
  });
});









let card = 
document.getElementById("card");
let scrollAmount = 0;


function slideCards(){
  scrollAmount +=270;


  if(scrollAmount >= card.scrollWidth-card.clientWidth)
{
  scrollAmount =0;
}

card.style.transform =`translateX(-${scrollAmount}px)`
}
setInterval(slideCards,2500);












const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});


setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);











