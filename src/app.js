/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

const BookCard = (book) => {
  // if (!book.isbn10) {
  //   console.log(book.title, "doesn't have an isbn-10");
  // }
  // if (!book.isbn13) {
  //   console.log(book.title, "doesn't have an isbn-13");
  // }

  return `
  <div id="demo-card" class="card mb-3" style="width: 20%;">
    <img
      src="${book.cover}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${book.author}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Pages: ${book.num_pages}</li>
        <li class="list-group-item">Published: ${book.year_published}</li>
        <li class="list-group-item">ISBN-13: ${book.isbn13}</li>
        <li class="list-group-item">ISBN-10: ${book.isbn10}</li>
        <li class="list-group-item">Is this book awesome: Yes.</li>
      </ul>
    </div>
  </div>
  `;
};

const tooManyLayers = ["asdf", "qwerty", "zxcv"];
const library = [
  {
    title: "Something Wicked This Way Comes",
    author: "Ray Bradbury",
    cover: "https://pictures.abebooks.com/isbn/9780553136951-us.jpg",
    num_pages: 293,
    year_published: 1997,
    isbn13: "978-0-380-72940-1",
    isbn10: "0-380-72940-7",
    is_awesome: true,
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    cover: "https://m.media-amazon.com/images/I/81dy4cfPGuL._SY522_.jpg",
    num_pages: 383,
    year_published: 1970,
    isbn13: null,
    isbn10: "0-380-01503-X",
    is_awesome: true,
  },
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    cover:
      "https://i5.walmartimages.com/seo/Snow-Crash-Hardcover-9780613361620_f11eea3c-5e60-4a1b-936b-67c9c4455e27_1.0a9c061d4600a35fb739ad85e9e9aa06.jpeg",
    num_pages: 470,
    year_published: 1992,
    isbn13: "978-061336162",
    isbn10: null,
    is_awesome: true,
  },
  {
    title: "The Ultimate Hitchiker's Guide To The Galaxy",
    author: "Douglas Adams",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1404613595i/13.jpg",
    num_pages: 815,
    year_published: 2002,
    isbn13: "978-0-645-45374-7",
    isbn10: null,
    is_awesome: true,
  },
];

window.onload = function() {
  const shelf = document.querySelector("#library");

  for (const book of library) {
    shelf.innerHTML = shelf.innerHTML + BookCard(book);
  }

  // for (const word of tooManyLayers) {
  //   for (const letter of word) {
  //     console.log(word, letter);
  //   }
  // }
};
