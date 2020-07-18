'use strict';

(function () {

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var formName = window.mask.form.querySelector("[name=name]");
var formPhone = window.mask.form.querySelector("[name=telephone]");


var header = document.querySelector('header');
var modal = header.querySelector('.header__modal');
var modalCross = modal.querySelector('.header__close');
var modalOpen = document.querySelector('.header__button');
modalOpen.classList.remove('visually-hidden');

var form = document.querySelector('.header__form');

var name = modal.querySelector("[name=name]");
var phone = modal.querySelector("[name=telephone]");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }


var onMenuEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    hideModal();
  }
};

var showModal = function () {
  modal.classList.remove('header__modal--close');
  modal.classList.add('header__modal--show');
  document.addEventListener('keydown', onMenuEscPress);
  if (storage) {
    name.value = storage;
    phone.focus();
  } else {
    name.focus();
  }
};

var hideModal = function () {
  modal.classList.remove('header__modal--show');
  modal.classList.add('header__modal--close');
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

form.addEventListener("submit", function (evt) {
  if (!name.value || !phone.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и телефон");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", name.value);
    }
  }
});

window.mask.form.addEventListener("submit", function (evt) {
  if (!formName.value || !formPhone.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и телефон");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", formName.value);
    }
  }
});

})();
