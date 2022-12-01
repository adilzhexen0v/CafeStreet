const mobileMenuBtn = document.querySelector('.fa-bars');
const mobileMenuClose = document.querySelector('.fa-times');
const mobileMenuBg = document.querySelector('.mobile__menu');

function openMenu(){
     console.log('click');
     mobileMenuBg.style.display = 'flex';
     setTimeout(function(){
          mobileMenuBg.style.cssText = 'opacity: 1; z-index: 1001';
     }, 1);
}

function closeMenu(){
     mobileMenuBg.style.cssText = 'opacity: 0; z-index: -1';
     setTimeout(function(){
          mobileMenuBg.style.display = 'none';
     }, 300);
}

mobileMenuBtn.addEventListener('click', openMenu);
mobileMenuClose.addEventListener('click', closeMenu);

mobileMenuBg.addEventListener('click', function(e){
     if(e.target && e.target.tagName === 'A'){
          closeMenu();
     }
});

document.addEventListener('scroll', function(e){
     e.preventDefault();
     if(this.documentElement.scrollTop > 50){
          document.querySelector('nav').classList.add('nav__border');
     } else{
          document.querySelector('nav').classList.remove('nav__border');
     }
});