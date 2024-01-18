const dropdown = document.querySelector('.dropdown')
    const dropicon = document.querySelector('.dropdown-1')
    const deepdropdown = document.querySelector('.dropdowns')
    const deepdropicon = document.querySelector('.dropdown-2')
    const dropcontainer = document.querySelector('.dropdown-container')
    const AccordingDropdown = document.querySelectorAll('.according')
    const AccordingItem = document.querySelectorAll('.according-item')
    const AccordingContent = document.querySelectorAll('.according-content')
    const icon =  document.querySelectorAll('.icon-1')
    const AccordingArr = Array.from(AccordingDropdown)
    const inputTag = document.querySelectorAll('input')
    const MenuBar = document.querySelector('.menubar')
    const nav = document.querySelector('nav')
    const root = document.querySelector(':root')

  for(i = 0; i < AccordingDropdown.length; i++ ){
    
    AccordingDropdown[i].onclick = function(){
      
    let activeElement = document.querySelector('.according.call')

      console.log(activeElement)

    let indexofAccordionItem = AccordingArr.indexOf(this)
    

    if(activeElement != null && activeElement != AccordingDropdown[indexofAccordionItem]){
      activeElement.classList.remove('call')
    }



      AccordingDropdown[indexofAccordionItem].classList.toggle('call')
  }

  }
  inputTag.forEach(function( btn,index){
    btn.onclick=()=>{
      let  active = document.querySelector('input.active')
      if(active != null){
        active.classList.remove('active')
      }
      btn.classList.toggle('active')
    }
  })
 
  function CallBar(){
    nav.classList.add('actives')
  }
  function Exitrbar(){
    nav.classList.remove('actives')
  }
  
   nav.onclick=()=>{

    let icon = nav.querySelector('i');
    if(icon.classList.contains('fa-bars')){
      let CurrentColor = nav.getAttribute('data-background-color');
      let CurrentSos = nav.getAttribute('data-opacity');

      root.style.setProperty('--background-color' , CurrentColor);
      root.style.setProperty("--opacity" , CurrentSos);
    }

   } 



   function dropcall(){
    dropdown.classList.toggle('active')
    dropicon.classList.toggle('actives')
   } 
   function deepdropcall(){
    deepdropdown.classList.toggle('view')
    
   }
   function IconRot(){
    dropcontainer.classList.toggle('change')
   }

   var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
 
  });
  var swiper = new Swiper(".myswiper", {
    spaceBetween: 20,
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      }, 
      1380: {
        slidesPerView: 3
      }
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  });
  
  window.onclick =(event)=>{

    let clickedElement = event.target;
    // console.log(clickedElement)
    if(clickedElement != dropdown && clickedElement != deepdropdown){
      if(!dropcontainer.contains(clickedElement)){
        deepdropdown.classList.remove('view')
        dropdown.classList.remove('active')
      }
    }
  }
