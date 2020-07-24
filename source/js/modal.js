'use strict';

(function () {

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var header = document.querySelector('header');
  var modal = header.querySelector('.header__modal');
  var modalCross = modal.querySelector('.header__close');
  var modalOpen = document.querySelector('.header__button');
  modalOpen.classList.remove('visually-hidden');

  var form = document.querySelector('.header__form');

  var name = modal.querySelector('[name=name]');
  var telephone = modal.querySelector('[name=telephone]');
  var question = modal.querySelector('[name=question]');

  var isStorageSupport = true;
  var storage = {};

  try {
    storage.name = localStorage.getItem('name');
    storage.telephone = localStorage.getItem('telephone');
    storage.question = localStorage.getItem('question');

  } catch (err) {
    isStorageSupport = false;
  }

  form.addEventListener('submit', function (evt) {
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


  var onMenuEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      hideModal();
    }
  };

  var showModal = function () {
    modal.classList.remove('header__modal--close');
    document.body.classList.add('header__body-fix');
    modal.classList.add('header__modal--show');
    document.addEventListener('keydown', onMenuEscPress);
    if (storage) {
      name.value = storage.name;
      telephone.value = storage.telephone;
      question.value = storage.question;
      if (storage.question === null) {
        question.value = 'Ваш вопрос';
      }
    } else {
      name.focus();
    }
  };

  var hideModal = function () {
    modal.classList.remove('header__modal--show');
    modal.classList.add('header__modal--close');
    document.body.classList.remove('header__body-fix');
    document.removeEventListener('keydown', onMenuEscPress);
  };

  modalOpen.addEventListener('click', function () {
    showModal();
  });

  modalOpen.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      showModal();
    }
  });

  modalCross.addEventListener('click', function () {
    hideModal();
  });

  modalCross.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      hideModal();
    }
  });



})();
