let arr = [];

const books = document.querySelector('.container');
const arrCollection = () => {
  const titleOfBook = document.querySelector('#Texts').value;
  const authorOfBook = document.querySelector('#author').value;
  const id = arr.length;
  arr.push({ titleOfBook, authorOfBook, id });
};

const storage = () => {
  localStorage.setItem('arr', JSON.stringify(arr));
};

const addButton = document.querySelector('#Add');
addButton.addEventListener('click', () => {
  arrCollection();
  storage();
  window.location.reload();
});
arr = JSON.parse(localStorage.getItem('arr')) || [];

const jsBooks = () => {
  for (let i = 0; i < arr.length; i += 1) {
    const booksOfDiv = document.createElement('div');
    books.append(booksOfDiv);
    const paras = document.createElement('p');
    booksOfDiv.append(paras);
    const authorPara = document.createElement('p');
    booksOfDiv.append(authorPara);
    paras.innerText = arr[i].titleOfBook;
    authorPara.innerText = arr[i].authorOfBook;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    booksOfDiv.append(removeButton);
    removeButton.id = arr[i].id;
    const lineBreak = document.createElement('hr');
    booksOfDiv.append(lineBreak);
    /* eslint-disable */
    const deletBooks = () => {
      const target = removeButton.id;
      arr.splice(target, 1);
      let newid = 0;
      if (arr.length > 0) {
        arr.forEach((e) => {
          e.id = newid;
          newid += 1;
        });
      }
    };
    removeButton.addEventListener("click", () => {
      arr = JSON.parse(localStorage.getItem("arr")) || [];
      deletBooks();
      storage();
      window.location.reload();
    });
  }
};
jsBooks();
