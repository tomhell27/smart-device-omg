'use strict';

(function () {

  var nav = document.querySelector('.footer__nav');
  var contacts = document.querySelector('.footer__contacts');

  var contactToggle = contacts.querySelector('.accordeon__go');
  var contactMenu = contacts.querySelector('.accordeon__menu');
  var contactButton = contacts.querySelector('.footer__head-button');

  var navToggle = nav.querySelector('.accordeon__go');
  var navMenu = nav.querySelector('.accordeon__menu');
  var navButton = nav.querySelector('.footer__head-button');


  var toggleContacts = function () {
    contactToggle.onclick = function () {
      contactButton.classList.toggle('footer__head-button--close');
      contactMenu.classList.toggle('footer__close');
      if (!navMenu.classList.contains('footer__close')) {
        navButton.classList.toggle('footer__head-button--close');
        navMenu.classList.add('footer__close');
      }
    };
  };

  var toggleNav = function () {
    navToggle.onclick = function () {
      navButton.classList.toggle('footer__head-button--close');
      navMenu.classList.toggle('footer__close');

      if (!contactMenu.classList.contains('footer__close')) {
        contactButton.classList.toggle('footer__head-button--close');
        contactMenu.classList.add('footer__close');
      }
    };
  };

  toggleContacts();
  toggleNav();

})();
