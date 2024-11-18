document.addEventListener("DOMContentLoaded", function () {
    // Header Slider Configuration
    new Splide("header .splide", {
      type: "slide",
      perPage: 2, 
      autoplay: false, 
      arrows: false,
      pagination: false,
      speed: 0, 
      drag: false, 
      breakpoints: {
        768: {
          perPage: 1, 
          arrows: true,
          type: "loop", 
          autoplay: false, 
          pagination: false, 
          speed: 600, 
        },
        480: {
          perPage: 1, 
          arrows: true, 
          type: "loop", 
          autoplay: false, 
          pagination: false, 
          speed: 600, 
        },
      },
    }).mount();
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const navbarItems = document.querySelectorAll(".navbar li");
    const productMains = document.querySelectorAll(".product-main");
  
    navbarItems.forEach(item => {
      item.addEventListener("click", () => {
        navbarItems.forEach(nav => nav.classList.remove("active"));
        item.classList.add("active");
  
        const category = item.getAttribute("data-category");
        productMains.forEach(main => {
          if (main.getAttribute("data-category") === category) {
            main.classList.add("active");
          } else {
            main.classList.remove("active");
          }
        });
      });
    });
  
    document.querySelector(".product-main").classList.add("active");
  });
  