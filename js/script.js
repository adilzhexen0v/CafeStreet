const mobileMenuBtn = document.querySelector('.fa-bars');
const mobileMenuClose = document.querySelector('.fa-times');
const mobileMenuBg = document.querySelector('.mobile__menu');
mobileMenuBtn.addEventListener('click', function(){
     mobileMenuBg.style.cssText = 'opacity: 1; z-index: 4';
     document.body.style.cssText = 'overflow-y: hidden';
});
mobileMenuClose.addEventListener('click', function(){
     mobileMenuBg.style.cssText = 'opacity: 0; z-index: 0';
     document.body.style.cssText = 'overflow-y: none';

});