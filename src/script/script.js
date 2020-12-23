function validator(_value) {
  return {
    value: _value,
    isValid: null,
    validate() {
      return this.isValid;
    },
    checkAll(n) {
      if (n === 0 || n === 1) {
        this.isName();
      }
      if (n === 2) {
        this.isEmail();
      }
      if (n === 3) {
        this.isValidPassword();
      }
      return this;
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
  let currentElem;
  registryButton.onclick = function registyClick() {
    for (let i = 0; i < 4; i += 1) {
      currentElem = document.getElementsByClassName('input')[i];
      if (!validator(currentElem.value).checkAll(i).validate()) {
        document.getElementsByClassName('error')[i].style.display = 'inline';
        currentElem.style.backgroundColor = '#AA0000';
      } else {
        document.getElementsByClassName('error')[i].style.display = 'none';
      }
    }
  };
};
