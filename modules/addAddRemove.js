/* eslint-disable */
let arr = [];
arr = JSON.parse(localStorage.getItem("arr")) || [];
const books = document.querySelector(".container");
const jsBooks = () => {
  for (let i = 0; i < arr.length; i += 1) {
    const booksOfDiv = document.createElement("div");
    booksOfDiv.classList.add("inner");
    books.append(booksOfDiv);
    const paras = document.createElement("p");
    booksOfDiv.append(paras);
    paras.innerText = `"${arr[i].titleOfBook}" by ${arr[i].authorOfBook}`;
    const removeButton = document.createElement("button");
    removeButton.classList.add("delete");
    removeButton.innerText = "Remove";
    booksOfDiv.append(removeButton);
    removeButton.id = arr[i].id;
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
      localStorage.setItem("arr", JSON.stringify(arr));
      window.location.reload();
    });
  }
};
export { jsBooks as default };
