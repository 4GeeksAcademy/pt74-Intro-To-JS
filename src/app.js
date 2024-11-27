/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

const BookCard = (book) => {
  const card = document.createElement("div");
  card.classList.add("card", "mb-3");
  card.style.width = "20%";

  card.innerHTML = `<img
      src="${book.cover}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${book.author}</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Pages:</strong> ${book.num_pages}</li>
        <li class="list-group-item"><strong>Published:</strong> ${book.year_published}</li>
      </ul>
    </div>`;

  const isbns = `<li class="list-group-item"><strong>ISBN-10:</strong> ${
    book.isbn10 ? book.isbn10 : "N/A"
  }</li>
  <li class="list-group-item"><strong>ISBN-13:</strong> ${
    book.isbn13 ? book.isbn13 : "N/A"
  }</li>`;

  // Every html element should be a valid DOM tree.
  card.querySelector("ul").innerHTML += isbns;

  const awesome = document.createElement("li");
  awesome.innerHTML = "<strong>Is this book awesome:</strong> Yes.";
  awesome.classList.add("list-group-item");
  card.querySelector("ul").appendChild(awesome);

  return card;
};

/**
 * This is waaaaay longer than it was before,
 * but the tradeoff is that we have more control
 * over every step of the process.
 *
 * Because we are assembling this piece-by-piece
 * we get to make decisions along the way.
 */
const DogCard = (dog) => {
  const newCard = document.createElement("div");
  newCard.classList.add("card", "mb-3");
  newCard.style.width = "30%";

  const img = document.createElement("img");
  img.src = dog.photo;
  img.classList.add("card-img-top");
  img.alt = "A cute doggo.";

  newCard.appendChild(img);

  const body = document.createElement("div");
  body.classList.add("card-body");
  newCard.appendChild(body);

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerHTML = dog.name;

  body.appendChild(title);

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "list-group-flush");
  body.appendChild(ul);

  const quote = document.createElement("li");
  quote.classList.add("list-group-item");

  quote.appendChild(document.createElement("figure"));
  quote
    .querySelector("figure")
    .appendChild(document.createElement("blockquote"));

  quote.querySelector("blockquote").classList.add("blockquote");

  quote.querySelector("blockquote").appendChild(document.createElement("p"));
  quote.querySelector("blockquote > p").innerHTML = dog.quote;

  quote
    .querySelector("blockquote")
    .appendChild(document.createElement("figcaption"));
  quote.querySelector("figcaption").classList.add("blockquote-footer");
  quote.querySelector(
    "figcaption"
  ).innerHTML = `Someone famous in <cite title="Source Title">${dog.quote_src}</cite>`;

  ul.appendChild(quote);

  const adorable = document.createElement("li");
  adorable.classList.add("list-group-item");
  adorable.innerHTML = `${dog.name} is rated ${dog.adorability}/10 on the totally unbiased dog adorability scale.`;
  ul.appendChild(adorable);

  if (dog.adorability < 10) {
    adorable.classList.add("bg-warning", "text-dark");
  } else if (dog.adorability < 15) {
    adorable.classList.add("bg-info", "text-dark");
  } else {
    adorable.classList.add("bg-success");
  }

  return newCard;
};

let library = [
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
    adorability: 9,
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
    adorability: 16,
  },
  {
    name: "Captain",
    photo: "https://placedog.net/503/503",
    quote: "If you didn’t want me to eat it, why did you drop it?",
    quote_src: "Barkenheimer",
    adorability: 9001,
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

let toggle = true;

const swapContents = () => {
  const shelf = document.querySelector("#library");

  if (toggle) {
    shelf.replaceChildren(...library.map((book) => BookCard(book)));
  } else {
    shelf.replaceChildren(...dogs.map((dog) => DogCard(dog)));
  }

  toggle = !toggle;
};

window.onload = function() {
  console.log(JSON.stringify(library));
  console.log(library);

  // LocalStorage is a way to save data past page reffreshes.
  const initialState = window.localStorage.getItem("nebulous-progress");
  if (initialState !== null) {
    document.querySelector("#cool-slider").value = JSON.parse(initialState);
    document.querySelector(
      "#cool-progress > .progress-bar"
    ).style.width = `${JSON.parse(initialState)}%`;
  }

  document
    .querySelector("#library")
    .replaceChildren(...dogs.map((dog) => DogCard(dog)));

  document.querySelector("#swapper").addEventListener("click", swapContents);

  // Event listeners let us make things happen when the page is interacted with.
  document.querySelector("#cool-slider").addEventListener("input", (ev) => {
    // We save the state of the progress bar here.
    window.localStorage.setItem(
      "nebulous-progress",
      JSON.stringify(ev.target.valueAsNumber)
    );

    document.querySelector(
      "#cool-progress > .progress-bar"
    ).style.width = `${ev.target.valueAsNumber}%`;
    console.log(
      `This progress barr is ${ev.target.valueAsNumber}% filled with a disregard for actual progress completed.`
    );
  });

  document.querySelector("#book-button").addEventListener("click", (ev) => {
    ev.preventDefault();

    const data = JSON.parse(document.querySelector("#book-input").value);
    library.unshift(data);

    if (!toggle) {
      document
        .querySelector("#library")
        .replaceChildren(...library.map((book) => BookCard(book)));
    }
  });
};
