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
let formReq = form.querySelectorAll('._valid');

for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
         if ((emailTest(input))||(window.containsMat(input.value))) {
            formAddError(input);
            error++;
         }
      }else if (input.classList.contains('_phone')) {
        if ((phoneTest(input))||(window.containsMat(input.value))) {
           formAddError(input);
           error++;
        }
     }else if (input.getAttribute('type') == "checkbox" && input.checked === false) {
         formAddError(input);
         error++;
      }else if (input.classList.contains('_req')) {
         if ((input.value === '')||(window.containsMat(input.value))) {
            formAddError(input);
            error++;
         }
      }else if (input.classList.contains('_noreq')) {
         if (window.containsMat(input.value)) {
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

//Функция проверки phone
function phoneTest(input) {
    return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
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
      fetch('assets/form/sendmail.php', {
         method: 'POST',
         body: formData
      }).then(function (response) {
         console.log(response)
         if (response.ok) {
            modalSuccess.innerHTML = '<p style="color: #b2ebf2;"><strong>Заявка отправлена! Мы перезвоним Вам в ближайшее время!</strong></p>'
            setTimeout(closeModal, 3000);
         }
      }).catch(function (error) {
         console.log(error);
      });
   } else {
      modalSuccess.innerHTML = '<p style="color: #ff4081;"><strong>Пожалуйста, заполните корректно все обязательные поля.</strong></p>'
   }
});

(function () {

   var t = {};

   window.containsMat = function (text) {
       return t.containsMat(text);
   };

   window.antimat = t;

   t.badPatterns = [
       "^(о|а)н(о|а)нист.*",
       "^лошар.*",
       "^к(а|о)злина$",
       "^к(о|а)зел$",
       "^сволоч(ь|ъ|и|уга|ам|ами).*",
       "^лох[уеыаоэяию].*",
       ".*урод(ы|у|ам|ина|ины).*",
       ".*бля(т|д).*", ".*гандо.*",
       "^м(а|о)нд(а|о).*",
       ".*сперма.*",
       ".*[уеыаоэяию]еб$",
       "^сучк(а|у|и|е|ой|ай).*",
       "^придур(ок|ки).*",
       "^д(е|и)би(л|лы).*",
       "^сос(ать|и|ешь|у)$",
       "^залуп.*",
       "^муд(е|ил|о|а|я|еб).*",
       ".*шалав(а|ы|ам|е|ами).*",
       ".*пр(а|о)ст(и|е)т(у|е)тк(а|и|ам|е|ами).*",
       ".*шлюх(а|и|ам|е|ами).*",
       ".*ху(й|и|я|е|л(и|е)).*",
       ".*п(и|е|ы)зд.*",
       "^бл(я|т|д).*",
       "(с|сц)ук(а|о|и|у).*",
       "^еб.*",
       ".*(д(о|а)лб(о|а)|разъ|разь|за|вы|по)ебы*.*",
       ".*пид(а|о|е)р.*",
       ".*хер.*"
   ];

   t.goodPatterns = [
       ".*психу.*",
       ".*к(о|а)манд.*",
       ".*истр(е|и)блять.*",
       ".*л(о|а)х(о|а)трон.*",
       ".*(о|а)ск(о|а)рблять.*",
       "хул(е|и)ган",
       ".*м(а|о)нд(а|о)рин.*",
       ".*р(а|о)ссл(а|о)блять.*",
       ".*п(о|а)тр(е|и)блять.*",
       ".*@.*\\.(ру|сом|нет)$"
   ];

   t.goodWords = [
       "дезмонда",
       "застрахуйте",
       "одномандатный",
       "подстрахуй",
       "психуй"
   ];

   t.letters = {
       "a": "а",
       "b": "в",
       "c": "с",
       "e": "е",
       "f": "ф",
       "g": "д",
       "h": "н",
       "i": "и",
       "k": "к",
       "l": "л",
       "m": "м",
       "n": "н",
       "o": "о",
       "p": "р",
       "r": "р",
       "s": "с",
       "t": "т",
       "u": "у",
       "v": "в",
       "x": "х",
       "y": "у",
       "w": "ш",
       "z": "з",
       "ё": "е",
       "6": "б",
       "9": "д"
   };

   t.containsMat = function (text) {

       text = t.cleanBadSymbols(text.toLowerCase());

       var words = text.split(" ");

       for (var i = 0; i < words.length; i++) {

           var word = t.convertEngToRus(words[i]);

           if (t.isInGoodWords(word) && t.isInGoodPatterns(word))
               continue;

           if (t.isInBadPatterns(word))
               return true;
       }

       if (t.containsMatInSpaceWords(words))
           return true;

       return false;
   };

   t.convertEngToRus = function (word) {
       for (var j = 0; j < word.length; j++) {
           for (var key in t.letters) {
               if (word.charAt(j) == key)
                   word = word.substring(0, j) + t.letters[key] + word.substring(j + 1, word.length)
           }
       }

       return word;
   };

   t.cleanBadSymbols = function (text) {
       return text.replace(/[^a-zA-Zа-яА-Яё0-9\s]/g, "");
   };

   t.isInGoodWords = function (word) {

       for (var i = 0; i < t.goodWords.length; i++) {
           if (word == t.goodWords[i])
               return true;
       }

       return false;
   };

   t.isInGoodPatterns = function (word) {

       for (var i = 0; i < t.goodPatterns.length; i++) {
           var pattern = new RegExp(t.goodPatterns[i]);
           if (pattern.test(word))
               return true;
       }

       return false;
   };

   t.isInBadPatterns = function (word) {

       for (var i = 0; i < t.badPatterns.length; i++) {
           var pattern = new RegExp(t.badPatterns[i]);
           if (pattern.test(word))
               return true;
       }

       return false;
   };

   t.containsMatInSpaceWords = function (words) {
       var spaceWords = t.findSpaceWords(words);

       for (var i = 0; i < spaceWords.length; i++) {

           var word = t.convertEngToRus(spaceWords[i]);

           if (t.isInBadPatterns(word))
               return true;
       }

       return false;
   };

   t.findSpaceWords = function (words) {

       var out = [];
       var spaceWord = "";

       for(var i=0; i < words.length; i++ ){
           var word = words[i];

           if(word.length <= 3){
               spaceWord += word;
               continue;
           }

           if(spaceWord.length >= 3){
               out.push(spaceWord);
               spaceWord = "";
           }
       }

       return out;
   };

   t.addBadPattern = function (pattern) {
       t.badPatterns.push(pattern);
   };

   t.addGoodPattern = function (pattern) {
       t.goodPatterns.push(pattern);
   };

   t.addGoodWord = function (pattern) {
       t.goodWords.push(pattern);
   };

})();
