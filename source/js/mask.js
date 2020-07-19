'use strict';

(function () {

  var form = document.querySelector('.form');
  var formPhoneInput = form.querySelector('.phone');
  var header = document.querySelector('header');
  var phoneInput = header.querySelector('.phone');

  var getMask = function (el) {
    el.addEventListener('keydown', function (event) {
      if (!(event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Backspace' || event.key === 'Tab')) {
        event.preventDefault();
      }
      var mask = '+7 (111) 111-11-11';

      if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        var currentString = this.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
          if (mask[currentLength] === '1') {
            this.value = currentString + event.key;
          } else {
            for (var i = currentLength; i < mask.length; i++) {
              if (mask[i] === '1') {
                this.value = currentString + event.key;
                break;
              }
              currentString += mask[i];
            }
          }
        }
      }
    });
  };

  getMask(phoneInput);
  getMask(formPhoneInput);

  window.mask = {
    form: form
  };
})();
