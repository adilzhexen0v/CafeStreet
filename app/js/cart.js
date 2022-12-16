let products;
if(!localStorage.getItem('cart')) {
     products = [];
} else {
     products = JSON.parse(localStorage.getItem('cart'));
}

const cartList = document.querySelector('.cart__list');
const addToCartBtns = document.querySelectorAll('.product__buy div');
const cart = document.querySelector('.cart');
const decreaseBtns = document.querySelectorAll('.decrease');
const increaseBtns = document.querySelectorAll('.increase');

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
               amount: 1,
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

cartList.addEventListener('click', function(e){
     if(e.target.classList.contains('decrease')){
          const pAmount = e.path[1].querySelector('.amount').textContent.replace(/[^0-9]/g,"");
          if(pAmount != 1) {
               const pTitle = e.path[2].querySelector('.cart__title').textContent.trim();
               const pObj = {
                    title: pTitle
               };
               decreaseOfProduct(pObj);
          }
     } else if (e.target.classList.contains('increase')) {
          const pTitle = e.path[2].querySelector('.cart__title').textContent.trim();
               const pObj = {
                    title: pTitle
               };
          increaseOfProduct(pObj);
     }
});

function showCart(){
     cartList.style.display = 'block';
     setTimeout(function(){
          cartList.style.opacity = '1';
     }, 1);
}

function hideCart(e){
     cartList.style.opacity = '0';
     setTimeout(function(){
          cartList.style.display = 'none';
     }, 200);

}
let cartOpenChecker = 0;
cart.addEventListener('click', () => {
     cartOpenChecker++;
     if (cartOpenChecker % 2 === 1) {
          showCart();
     } else {
          hideCart();
     }
});


function puchToLocalStorage(item){
     localStorage.removeItem('cart');
     localStorage.setItem('cart', JSON.stringify(item));
     renderCart();
}

function increaseOfProduct(obj) {
     for(let i = 0; i < products.length; i++) {
          if(products[i].title === obj.title) {
               products[i].amount++;
          }
     }
     puchToLocalStorage(products);
}

function decreaseOfProduct(obj) {
     for(let i = 0; i < products.length; i++) {
          if(products[i].title === obj.title) {
               products[i].amount--;
          }
     }
     puchToLocalStorage(products);
}

function addToCart(obj){
     products.push(obj);
     puchToLocalStorage(products);
}

function totalPrice(arr){
     let total = 0;
     arr.forEach(element => {
          total += element.amount * element.price;
     });
     return total;
}

function renderCart(){ 
     cartList.innerHTML = `
     <div class="cart__line last__cart__line">
          <div class="cart__img"></div>
          <div class="cart__title bold">
               Total price:
          </div>
          <div class="cart__amount"></div>
          <div class="cart__total bold">
               ${totalPrice(products)} &dollar;
          </div>
     </div>
     `;
     const lastCartItem = cartList.querySelector('.last__cart__line');
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
                         <div class="cart__btn decrease">-</div>
                         <div class="amount">
                              ${products[i].amount}
                         </div>
                         <div class="cart__btn increase">+</div>
                    </div>
                    <div class="cart__total">
                         ${+products[i].amount * +products[i].price} &dollar;
                    </div>`;
          lastCartItem.before(newProduct);
     }
}

renderCart();
