// Responsive Navigation starts here 

const menu_btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");

menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle('active');
    nav.classList.toggle('active');
});

// Responsive Navigation ends here 

// Responsive Slider starts here 

const slider_btns = document.querySelectorAll(".nav-dots");
const slides = document.querySelectorAll(".video-slide");
const content = document.querySelectorAll(".content");

var slide = (slide_index) =>{

slider_btns.forEach(btn => {
btn.classList.remove("active");
});

slides.forEach(slide => {
    slide.classList.remove("active");
    });

    content.forEach(cont => {
        cont.classList.remove("active");
        });

slider_btns[slide_index].classList.add("active");
slides[slide_index].classList.add("active");
content[slide_index].classList.add("active");
}

slider_btns.forEach((btn, idx) => {
    btn.addEventListener("click", () => 
    {
slide(idx);
    });
});

// Responsive Slider ends here

// Setting up Tool-tips using Tippy.js

const facebook = document.querySelector(".tool-tip-fb");
const LinkedIn = document.querySelector(".tool-tip-linked");
const Email = document.querySelector(".tool-tip-email");

tippy(facebook, {
    content: "Facebook", 
    placement: 'right',
    animation: 'fade',
      
  });

  tippy(LinkedIn, {
    content: "LinkedIn",
    placement: 'right',
    animation: 'fade',
  });

  tippy(Email, {
    content: "Email",
    placement: 'right',
    animation: 'fade',
  });

// Tool-tips ends here
