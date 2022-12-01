const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupClose = document.querySelector('.popup__close');

function showPopup(){
     popup.style.display = 'flex';
     setTimeout(() => {
         popupContainer.style.cssText = 'margin-top: 0'; 
     }, 1);
}

function hidePopup(){
     popupContainer.style.cssText = 'margin-top: -100vw'; 
     setTimeout(() => {
          popup.style.display = 'none';
     }, 350);
}

popup.addEventListener('click', function(e){
     if(e.target === popupClose || e.target.classList.contains('popup')) {
          hidePopup();
     }
});