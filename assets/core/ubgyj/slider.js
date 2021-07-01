let form = document.getElementById('modalForm');
let submitBtn = document.getElementById('modalSubmit');
let modalSuccess = document.querySelector('.modal-success');

let priceBtnOne = document.getElementById('priceOne');
let priceBtnTwo = document.getElementById('priceTwo');
let priceBtnThree = document.getElementById('priceThree');
let priceBtnFour = document.getElementById('priceFour');

//Функция закрытия модалки
function closeModal() {
   $('#formModal').modal('hide');
}

//Присвоение услуге по вызову модалки
let price = "";

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

//Проверка обязательных полей
function formValidate(form) {
let error = 0;
let formReq = form.querySelectorAll('._req');

for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
         if (emailTest(input)) {
            formAddError(input);
            error++;
         }
      }else if (input.getAttribute('type') == "checkbox" && input.checked === false) {
         formAddError(input);
         error++;
      }else {
         if (input.value === '') {
            formAddError(input);
            error++;
         }
      }
}

return error;
}

//Функция добавления класса _error
function formAddError(input) {
input.parentElement.classList.add('_error');
input.classList.add('_error');
}

//Функция удаления класса _error
function formRemoveError(input) {
input.parentElement.classList.remove('_error');
input.classList.remove('_error');
}

//Функция проверки email
function emailTest(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//Отправление и валидация
submitBtn.addEventListener('click', () => {
   let error = formValidate(form);
   let formData = new FormData(form);
   formData.append("price", price);
   for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
   }
   console.log(error)

   if (error === 0) {
      fetch('https://shulginhypnos.ru/assets/form/sendmail.php', {
         method: 'POST',
         body: formData
      }).then(function (response) {
         console.log(response)
         if (response.ok) {
            modalSuccess.innerHTML = '<p style="color: #b2ebf2;"><strong>Заявка отправлена! Мы перезвоним Вам в ближайшее время!</strong></p>'
            setTimeout(closeModal, 1000);
         }
      }).catch(function (error) {
         console.log(error);
      });
   } else {
      modalSuccess.innerHTML = '<p style="color: #ff4081;"><strong>Пожалуйста, заполните корректно все обязательные поля.</strong></p>'
   }
   
      modalSuccess.innerHTML = '<p style="color: #ff4081;"><strong>Пожалуйста, заполните корректно все обязательные поля.</strong></p>'
   
});
