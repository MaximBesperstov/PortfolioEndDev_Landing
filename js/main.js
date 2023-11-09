const portfolioMenu = [{
  id: 1,
  category: "website",
  img: "./img/portfolio/1.jpg",
  title: "Website One",
  desc: `Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's 
          standard dummy text ever since the 
          1500s, when an unknown printer took a 
          galley of type and scrambled it to 
          make a type specimen book. 
          It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged. 
          It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem 
          Ipsum passages, and more recently with 
          desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum.`
},
{
  id: 2,
  category: "website",
  img: "./img/portfolio/2.jpg",
  title: "Website Two",
  desc: `Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's 
          standard dummy text ever since the 
          1500s, when an unknown printer took a 
          galley of type and scrambled it to 
          make a type specimen book. 
          It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged. 
          It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem 
          Ipsum passages, and more recently with 
          desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum.`
},
{
  id: 3,
  category: "project",
  img: "./img/portfolio/3.jpg",
  title: "Project One",
  desc: `Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's 
          standard dummy text ever since the 
          1500s, when an unknown printer took a 
          galley of type and scrambled it to 
          make a type specimen book. 
          It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged. 
          It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem 
          Ipsum passages, and more recently with 
          desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum.`
},
{
  id: 4,
  category: "project",
  img: "./img/portfolio/4.jpg",
  title: "Project Two",
  desc: `Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's 
          standard dummy text ever since the 
          1500s, when an unknown printer took a 
          galley of type and scrambled it to 
          make a type specimen book. 
          It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged. 
          It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem 
          Ipsum passages, and more recently with 
          desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum.`
},
{
  id: 5,
  category: "UI UX Design",
  img: "./img/portfolio/5.jpg",
  title: "UI UX Design",
  desc: `Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's 
          standard dummy text ever since the 
          1500s, when an unknown printer took a 
          galley of type and scrambled it to 
          make a type specimen book. 
          It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged. 
          It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem 
          Ipsum passages, and more recently with 
          desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum.`
},
{
  id: 6,
  category: "picture",
  img: "./img/portfolio/6.jpg",
  title: "picture",
  desc: `Lorem Ipsum is simply dummy text of the 
          printing and typesetting industry. 
          Lorem Ipsum has been the industry's 
          standard dummy text ever since the 
          1500s, when an unknown printer took a 
          galley of type and scrambled it to 
          make a type specimen book. 
          It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged. 
          It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem 
          Ipsum passages, and more recently with 
          desktop publishing software like Aldus 
          PageMaker including versions of Lorem Ipsum.`
}
];
//scroll to top and navbar

const topLinks = document.querySelector(".to-top-bar");
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function(){
  const scrollHeight = window.pageYOffset;

  //navbar
  const navHeight = navbar.getBoundingClientRect().height;
  
  if(scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  // to top
  if(scrollHeight > 200) {
    topLinks.classList.add("show-link");
  } else {
    topLinks.classList.remove("show-link");
  }
})

const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav-links");

navBtn.addEventListener("click", function (){  
  // show nav list
  const linksheight = links.getBoundingClientRect().height;
  const containerHeight = navList.getBoundingClientRect().height;

  if(containerHeight === 0) {
    navList.style.height = `${linksheight}px`;
    } else {
      navList.style.height = 0;
    }
  //navbar btn
  navBtn.classList.toggle("active");
})


//portfolio

const portfolioList = document.querySelector(".portfolio-list");
const portfolioFilter = document.querySelectorAll(".current");

// porttfolio filter

portfolioFilter.forEach(function(btn){
  btn.addEventListener("click", function(e) {
   // console.log(e.currentTarget.dataset.filter);
   const category = e.currentTarget.dataset.filter;
   const portCategory = portfolioMenu.filter(function
    (portfolioItem) {
      // console.log(portfolioItem.category);

      if(portfolioItem.category === category) {
return portfolioItem
      }
    });
    if(category === "all") {
      portfolio(portfolioMenu);
    } else {
      portfolio(portCategory);
    }
  })
})

window.addEventListener("DOMContentLoaded", function () {
  portfolio(portfolioMenu);
})
// portfolio Item
function portfolio(portfolioItem){
  let portfolio = portfolioItem.map(function (item) {
    // console.log(item);

    return `
    <div class="portfolio-box">
        <div class="portfolio-shadow">
          <div class="box">
            <img src=${item.img} alt="">
            <div class="content">
              <h3>${item.title}</h3>
              <p>
              ${item.desc}
              </p>
            </div>
          </div>
        </div>
      </div>`
  });
  portfolio = portfolio.join("");
  portfolioList.innerHTML = portfolio;


  // portfolio popup

  const portfolioBox = document.querySelectorAll(".portfolio-shadow");

portfolioBox.forEach(popup => popup.addEventListener("click", () => {
  popup.classList.toggle("active");
}))

}


//skills

const skills = document.querySelector(".skills-section");
const spans = document.querySelectorAll(".inner-skills span");

window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 1000) { //проблема была в 300, поставил 1000 все ок
    spans.forEach((span) => {
      span.style.width = span.dataset.value;
    })
  }
}

//video 

const popupBtn = document.querySelector(".popup-btn");
const popupVideo = document.querySelector(".popup-video");

popupBtn.onclick = function () {
  popupVideo.style.display = "block";  
}

popupVideo.onclick = function () {
  popupVideo.style.display = "none";  
}
// testimonial

const slides = document.querySelectorAll(".testimonial-slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

slides.forEach(function(slide, index) {
  slide.style.left =`${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  coursel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  coursel();
});

function coursel(){
  // Working with slides
  if(counter === slides.length){
    counter = 0;
  }
  if(counter < 0){
    counter = slides.length - 1;
  }
  slides.forEach(function(slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};


// blog

const popupBlog = document.querySelectorAll(".popup-blog");
const bgColor = document.querySelector(".bg-color");

popupBlog.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const {popupTrigger} = trigger.dataset;
    const popupModel = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);
    popupModel.classList.add('visible');
    bgColor.classList.add('bg-visible');
//remove
bgColor.addEventListener("click", () => {  
  popupModel.classList.remove('visible');
  bgColor.classList.remove('bg-visible');
})

})
})

// contact

const openModal = document.querySelector(".popup-contact");
const modal = document.querySelector(".box-inner");
const closeModal = document.querySelector(".bg-contact");

openModal.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("open-modal");
})

// footer

const date = document.getElementById("date");

date.innerHTML - new Date().getFullYear();

//setting box

//openbox

document.querySelector(".icon .setting").onclick = function () {
  document.querySelector(".settings-box").classList.toggle("open");
  this.classList.toggle("fa-spin");
};

// change color

const colorList = document.querySelectorAll(".color-list li");

colorList.forEach(li => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty('--black-color', e.target.dataset.color);    
  //set local storage
localStorage.setItem("color-option", e.target.dataset.color);

//remove Active
e.target.parentElement.querySelectorAll(".active").forEach(element => {
  element.classList.remove("active");
});

//add active
e.target.classList.add("active");
  })
})

//local starage color option

let mainColor = localStorage.getItem("color-option");
if(mainColor !== null);{
  document.documentElement.style.setProperty('--black-color', mainColor);

  
// remove active on element
document.querySelectorAll(".color-list li").forEach(element => {
  element.classList.remove("active");
  //add active on element
if(element.dataset.color === mainColor){
  element.classList.add("active");
  }
});
}

