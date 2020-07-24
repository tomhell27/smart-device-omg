'use strict';

(function () {
  var mainForm = window.mask.form.querySelector('form');
  var name = mainForm.querySelector('[name=name]');
  var telephone = mainForm.querySelector('[name=telephone]');
  var question = mainForm.querySelector('[name=question]');


  var isStorageSupport = true;
  var storage = {};

  try {
    storage.name = localStorage.getItem('name');
    storage.telephone = localStorage.getItem('telephone');
    storage.question = localStorage.getItem('question');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storage) {
    name.value = storage.name;
    telephone.value = storage.telephone;
    question.value = storage.question;
    if (storage.question === null) {
      question.value = 'Ваш вопрос';
    }
  }

  mainForm.addEventListener('submit', function (evt) {
    if (!name.value || !telephone.value || !question.value) {
      evt.preventDefault();

    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('telephone', telephone.value);
        localStorage.setItem('question', question.value);
      }
    }
  });

})();
