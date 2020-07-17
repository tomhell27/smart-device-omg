'use strict';
var button = document.querySelector(".header__button");

var popup = document.querySelector(".header__modal");
var close = popup.querySelector(".header__close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var phone = popup.querySelector("[name=telephone]");
var question = popup.querySelector("[name=question]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("header__modal-show");

  if (storage) {
    login.value = storage;
    name.focus();
  } else {
    phone.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("header__modal-show");
  popup.classList.remove("header__modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !phone.value || !question.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("header__modal-show")) {
      popup.classList.remove("header__modal-show");
      popup.classList.remove("header__modal-error");
    }
  }
});
