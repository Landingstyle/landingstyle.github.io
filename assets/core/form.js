let form = document.getElementById('modalForm');
let submitBtn = document.getElementById('modalSubmit');
let modalSuccess = document.querySelector('.modal-success');


submitBtn.addEventListener('click', () => {
    let formData = new FormData(form);
    fetch('assets/form/sendmail.php', {
       method: 'POST',
       body: formData
    }).then(function (response) {
       console.log(response)
       if (response.ok) {
          modalSuccess.innerHTML = '<p><strong>Заявка отправлена! Мы перезвоним Вам в ближайшее время!</strong></p>'
       }
    }).catch(function (error) {
       console.log(error);
    });
});
