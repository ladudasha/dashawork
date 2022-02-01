
// // burger-menu

function burgerMenu() {
    let burgerIcon = document.getElementById("header__burger-btn");
    // let burgerClose = document.getElementById("burger__close");
    let burgerMenu = document.getElementById("header__burger");

    burgerIcon.addEventListener("click", function () {
        burgerMenu.classList.toggle("header__burger-active")
    })
}
burgerMenu()



// плавный скролл

  let anchors = document.querySelectorAll("a[href*='#']")
  // console.log(anchors);
  for(let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault()
      
      let blockID  = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }




//   // кнопка go top

// let goTop = document.querySelector('.footer__btn-top')

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 400) {
//     goTop.style.opacity = 1
//   } else {
//     goTop.style.opacity = 0
//   }
// })

