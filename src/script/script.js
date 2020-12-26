function validator(_value) {
  return {
    value: _value,
    isValid: null,
    validate() {
      return this.isValid;
    },
    isEmail() {
      if (this.value.match(/^[\w-.]+@[\w-]+.[a-z]{2,4}$/)) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      return this;
    },
    isName() {
      if (this.value.match(/^[а-яa-zА-ЯA-Z]+$/)) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      return this;
    },
    isValidPassword() {
      if (this.value.length >= 6) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
      return this;
    },
  };
}

window.onload = function upload() {
  const registryButton = document.querySelector('.btn');
  const firstName = document.querySelector('#name-first');
  const lastName = document.querySelector('#name-second');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  registryButton.onclick = function registyClick() {
    if (!validator(firstName.value).isName().validate()) {
      document.getElementsByClassName('form-line__name-first__error')[0].style.display = 'inline';
      firstName.style.backgroundColor = '#800000';
    } else {
      document.getElementsByClassName('form-line__name-first__error')[0].style.display = 'none';
      firstName.style.backgroundColor = '#27282f';
    }
    if (!validator(lastName.value).isName().validate()) {
      document.getElementsByClassName('form-line__name-second__error')[0].style.display = 'inline';
      lastName.style.backgroundColor = '#800000';
    } else {
      document.getElementsByClassName('form-line__name-second__error')[0].style.display = 'none';
      lastName.style.backgroundColor = '#27282f';
    }
    if (!validator(password.value).isValidPassword().validate()) {
      document.getElementsByClassName('form-line__password__error')[0].style.display = 'inline';
      password.style.backgroundColor = '#800000';
    } else {
      document.getElementsByClassName('form-line__password__error')[0].style.display = 'none';
      password.style.backgroundColor = '#27282f';
    }
    if (!validator(email.value).isEmail().validate()) {
      document.getElementsByClassName('form-line__email__error')[0].style.display = 'inline';
      email.style.backgroundColor = '#800000';
    } else {
      document.getElementsByClassName('form-line__email__error')[0].style.display = 'none';
      email.style.backgroundColor = '#27282f';
    }
  };
};
