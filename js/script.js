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
});

document.addEventListener('scroll', function(e){
     e.preventDefault();
     if(this.documentElement.scrollTop > 50){
          document.querySelector('nav').classList.add('nav__border');
     } else{
          document.querySelector('nav').classList.remove('nav__border');
     }
});

/* Cart */

let products;
if(!localStorage.getItem('cart')) {
     products = [];
} else {
     products = JSON.parse(localStorage.getItem('cart'))
}
const cartList = document.querySelector('.cart__list');
const addToCartBtns = document.querySelectorAll('.product__buy div');
addToCartBtns.forEach((btn, i) => {
     btn.addEventListener('click', function(e){
          let product;
          if(e.target.tagName === "DIV") {
               product = e.path[2];
          } else{
               product = e.path[3];
          }
          const productTitle = product.querySelector('.product__title p').textContent,
                productPrice = product.querySelector('.product__title span').textContent.replace(/[^0-9]/g,""),
                productImageSrc = product.querySelector('.product__img img').src;
          const productObj = {
               title: productTitle,
               price: +productPrice,
               amout: 1,
               src: productImageSrc
          };
          let check = false;
          for(let i = 0; i < products.length; i++) {
               if(products[i].title === productObj.title) {
                    check = true;
               }
          }
          if(check){
               increaseOfProduct(productObj);
          } else {
               addToCart(productObj);
          }
          console.log(products);
     });
});

function puchToLocalStorage(item){
     localStorage.removeItem('cart');
     localStorage.setItem('cart', JSON.stringify(item));
     renderCart();
}

function increaseOfProduct(obj) {
     for(let i = 0; i < products.length; i++) {
          if(products[i].title === obj.title) {
               products[i].amout++;
          }
     }
     puchToLocalStorage(products);
}

function decreaseOfProduct(obj) {
     for(let i = 0; i < products.length; i++) {
          if(products[i].title === obj.title) {
               products[i].amout--;
          }
     }
     puchToLocalStorage(products);
}

function addToCart(obj){
     products.push(obj);
     puchToLocalStorage(products);
}

function renderCart(){ 
     cartList.innerHTML = '';
     for(let i = 0; i < products.length; i++) {
          const newProduct = document.createElement('div');
          newProduct.classList.add('cart__line');
          newProduct.innerHTML = `
                    <div class="cart__img">
                         <img src="${products[i].src}">
                    </div>
                    <div class="cart__title">
                         ${products[i].title}
                    </div>
                    <div class="cart__amount">
                         <div class="cart__btn increase">-</div>
                         <div class="amount">${+products[i].amount}</div>
                         <div class="cart__btn decrease">+</div>
                    </div>
                    <div class="cart__total">
                         ${+products[i].amount * +products[i].price} &dollar;
                    </div>`;
          cartList.append(newProduct);
     }
}

renderCart();