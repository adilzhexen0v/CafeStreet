const mobileMenuBtn = document.querySelector('.fa-bars');
const mobileMenuClose = document.querySelector('.fa-times');
const mobileMenuBg = document.querySelector('.mobile__menu');

function openMenu(){
     mobileMenuBg.style.cssText = 'opacity: 1; z-index: 1000';
}

function closeMenu(){
     mobileMenuBg.style.cssText = 'opacity: 0; z-index: -1';
}

mobileMenuBtn.addEventListener('click', function(){
     openMenu();
});
mobileMenuClose.addEventListener('click', function(){
     closeMenu();
});

mobileMenuBg.addEventListener('click', function(e){
     if(e.target && e.target.tagName === 'A'){
          closeMenu();
     }
     console.log(e);
});

document.addEventListener('scroll', function(e){
     e.preventDefault();
     if(this.documentElement.scrollTop > 50){
          document.querySelector('nav').classList.add('nav__border');
     } else{
          document.querySelector('nav').classList.remove('nav__border');
     }
});