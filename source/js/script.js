var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var headerBg = document.querySelector('.page-header');
var pageName = document.querySelector('.page-name');

var popupSuccess = document.querySelector('.popup-success');
var popupFailure = document.querySelector('.popup--failure');
var closeButtonSuccess = document.querySelector('.popup__button--success');
var closeButtonFailure = document.querySelector('.popup__button--failure');

var sendForm = document.querySelector('.lottery-form__button');

var surName = document.getElementById('your-surname');
var name = document.getElementById('your-name');
var mail = document.getElementById('your-mail');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');
headerBg.classList.add('page-header--menu-closed');
if (document.title != 'Фотоприложение Пинк') {
  pageName.classList.add('page-name--menu-closed')
}

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--opened');
  navToggle.classList.toggle('main-nav__toggle--cross');
  navToggle.classList.toggle('main-nav__toggle--burger');
  navMain.classList.toggle('main-nav--closed');
  headerBg.classList.toggle('page-header--menu-closed');
  pageName.classList.toggle('page-name--menu-closed');
});

function validForm() {
  return !surName.value && !name.value && !mail.value/*.match("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")*/;
}

sendForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (validForm()) {
    popupFailure.classList.add('popup--open');
  } else {
    popupSuccess.classList.add('popup--open');
  }
});

closeButtonFailure.addEventListener('click', function () {
  popupFailure.classList.remove('popup--open');
});

closeButtonSuccess.addEventListener('click', function () {
  popupSuccess.classList.remove('popup--open');
});
