'use strict';

(function () {
  var nav = document.querySelector('.footer__nav');
  var contacts = document.querySelector('.footer__contacts');


  var toggleContacts = function () {
    var toggleButton = contacts.querySelector('.footer__head-button');
    var ul = contacts.querySelector('.footer__contacts-ul');

    toggleButton.onclick = function (e) {
      toggleButton.classList.toggle('footer__head-button--close');
        ul.classList.toggle('footer__close');
    };
  };

    var toggleNav = function () {
      var toggleButton = nav.querySelector('.footer__head-button');
      var wrap = nav.querySelector('.footer__nav-wrap ');

      toggleButton.onclick = function () {
        toggleButton.classList.toggle('footer__head-button--close');
          wrap.classList.toggle('footer__close');
      };
    };

    toggleContacts();
    toggleNav()


})();
