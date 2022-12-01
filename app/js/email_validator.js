const form = document.querySelector('#subscribe form');
const input = document.querySelector('#subscribe input[type="text"]');
form.addEventListener('submit', function(e){ 
     e.preventDefault();
     if(input.value.length > 0 && input.value.indexOf('@') > -1){
          document.querySelector('.email').textContent = input.value;
          showPopup();
     } else if(input.value.length === 0){
          alert('Fill in the email field!');
     } else{
          alert('Invalid value!');
     } 
});

if (document.documentElement.offsetWidth <= 480){
     const submitForm = document.querySelector('#subscribe input[type="submit"]');
     submitForm.value = '>';
}