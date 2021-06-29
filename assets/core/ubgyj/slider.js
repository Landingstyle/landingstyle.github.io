let form = document.getElementById('modalForm');
let submitBtn = document.getElementById('modalSubmit');
let modalSuccess = document.querySelector('.modal-success');

let priceBtnOne = document.getElementById('priceOne');
let priceBtnTwo = document.getElementById('priceTwo');
let priceBtnThree = document.getElementById('priceThree');
let priceBtnFour = document.getElementById('priceFour');

let price = "";

function closeModal() {
   $('#formModal').modal('hide');
}

priceBtnOne.addEventListener('click', () => {
   price = "Разовая консультация";
});

priceBtnTwo.addEventListener('click', () => {
   price = "Модуль 2 консультации";
});

priceBtnThree.addEventListener('click', () => {
   price = "Модуль 5 консультаций";
});

priceBtnFour.addEventListener('click', () => {
   price = "Модуль VIP 5 консультаций";
});

submitBtn.addEventListener('click', () => {
   let formData = new FormData(form);
   formData.append("price", price);
   for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
   }
   
   fetch('https://shulginhypnos.ru/assets/form/sendmail.php', {
      method: 'POST',
      body: formData
   }).then(function (response) {
      console.log(response)
      if (response.ok) {
         modalSuccess.innerHTML = '<p><strong>Заявка отправлена! Мы перезвоним Вам в ближайшее время!</strong></p>'
         setTimeout(closeModal, 3000);
      }
   }).catch(function (error) {
      console.log(error);
   });
});
