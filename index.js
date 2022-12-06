import jsBooks from './modules/addAddRemove.js';
import getDate from './modules/dateandtime.js';

let arr = [];
const arrCollection = () => {
  const titleOfBook = document.querySelector('#Texts').value;
  const authorOfBook = document.querySelector('#author').value;
  const id = arr.length;
  arr.push({ titleOfBook, authorOfBook, id });
};
const addButton = document.querySelector('#Add');
addButton.addEventListener('click', () => {
  arrCollection();
  localStorage.setItem('arr', JSON.stringify(arr));
  window.location.reload();
});
arr = JSON.parse(localStorage.getItem('arr')) || [];
jsBooks();
const bookDisplay = () => {
  document.querySelector('.conatiner-list').style.display = 'block';
  document.querySelector('.container').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.contact-para').style.display = 'none';
  document.querySelector('.contact-list').style.display = 'none';
  document.querySelector('.Book').style.display = 'none';
};
bookDisplay();

const listHide = document.querySelector('#list');
listHide.addEventListener('click', () => {
  document.querySelector('.conatiner-list').style.display = 'block';
  document.querySelector('.container').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.contact-para').style.display = 'none';
  document.querySelector('.contact-list').style.display = 'none';
  document.querySelector('.Book').style.display = 'none';
});

const newBook = document.querySelector('#New');
newBook.addEventListener('click', () => {
  document.querySelector('.Book').style.display = 'block';
  document.querySelector('.conatiner-list').style.display = 'none';
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
  document.querySelector('.contact-para').style.display = 'none';
  document.querySelector('.contact-list').style.display = 'none';
});

const contactBook = document.querySelector('#contact');
contactBook.addEventListener('click', () => {
  document.querySelector('.Book').style.display = 'none';
  document.querySelector('.conatiner-list').style.display = 'none';
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
  document.querySelector('.contact-para').style.display = 'block';
  document.querySelector('.contact-list').style.display = 'block';
});

getDate();
