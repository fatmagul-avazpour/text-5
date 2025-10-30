 const header = document.querySelector(".mainHeader");
 const closeBtnNav=document.querySelector(".close-btn-nav")
 let nav=document.querySelector(".nav")
 let menuBarBtn=document.querySelector(".menuBarBtn")

 
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
  closeBtnNav.addEventListener("click",()=>{
    nav.classList.remove("left-0")
    nav.classList.add("-left-64")
  })
  menuBarBtn.addEventListener("click",()=>{
     nav.classList.remove("-left-64")
     nav.classList.add("left-0")
   
  })