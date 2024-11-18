/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

const BookCard = (book) => {
  // Ternary operators take the following form:
  // expression ? output if true : output if false
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
        <li class="list-group-item"><strong>Pages:</strong> ${
          book.num_pages
        }</li>
        <li class="list-group-item"><strong>Published:</strong> ${
          book.year_published
        }</li>
        <li class="list-group-item"><strong>ISBN-13:</strong> ${
          book.isbn13 ? book.isbn13 : "N/A"
        }</li>
        <li class="list-group-item"><strong>ISBN-10:</strong> ${
          book.isbn10 ? book.isbn10 : "N/A"
        }</li>
        <li class="list-group-item"><strong>Is this book awesome:</strong> Yes.</li>
      </ul>
    </div>
  </div>
  `;
};

const DogCard = (dog) => {
  return `
  <div id="demo-card" class="card mb-3" style="width: 30%;">
    <img
      src="${dog.photo}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${dog.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <figure>
            <blockquote class="blockquote">
              <p>${dog.quote}</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Someone famous in <cite title="Source Title">${dog.quote_src}</cite>
            </figcaption>
          </figure>
        </li>
        <li class="list-group-item">
          ${dog.name} is rated ${dog.adorability}/10 on the
          totally unbiased dog adorability scale.
        </li>
      </ul>
    </div>
  </div>
  `;
};

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

const dogs = [
  {
    name: "Rufus",
    photo: "https://placedog.net/500/500",
    quote: "Woof.",
    quote_src: "Barkenheimer",
    adorability: 12,
  },
  {
    name: "Spot",
    photo: "https://placedog.net/501/501",
    quote: "You’re late with dinner. Again.",
    quote_src: "Charles",
    adorability: 12,
  },
  {
    name: "Charles",
    photo: "https://placedog.net/502/502",
    quote: "I didn’t choose the slobber life; the slobber life chose me.",
    quote_src: "Barkenheimer",
    adorability: 12,
  },
  {
    name: "Captain",
    photo: "https://placedog.net/503/503",
    quote: "If you didn’t want me to eat it, why did you drop it?",
    quote_src: "Barkenheimer",
    adorability: 12,
  },
  {
    name: "Steve",
    photo: "https://placedog.net/504/504",
    quote: "I bark because I care.",
    quote_src: "Cerberus",
    adorability: 12,
  },
  {
    name: "Lighthouse Dog",
    photo: "https://placedog.net/505/505",
    quote: "Ask not for whom the tail wags, it wags for treats.",
    quote_src: "Barkingway",
    adorability: 12,
  },
];

let library_html = "";
let dog_html = "";

let toggle = true;

const swapContents = () => {
  const shelf = document.querySelector("#library");

  if (toggle) {
    shelf.innerHTML = library_html;
  } else {
    shelf.innerHTML = dog_html;
  }

  toggle = !toggle;
};

window.onload = function() {
  for (const book of library) {
    library_html = library_html + BookCard(book);
  }

  for (const dog of dogs) {
    dog_html = dog_html + DogCard(dog);
  }

  document.querySelector("#library").innerHTML = dog_html;
  document.querySelector("#swapper").addEventListener("click", swapContents);
};
