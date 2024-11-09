/* eslint-disable */
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generateDog = () => {
  const cardImg = document.querySelector("#demo-card img");
  const width = Math.floor(Math.random() * 1024);
  const height = Math.floor(Math.random() * 1024);
  cardImg.src = `https://placedog.net/${width}/${height}`;
};

window.onload = function() {
  /**
   * document
   * This represents the HTML document in its
   * current state, including any changes made
   * to it by JS.
   */

  // document.querySelector lets us get items from the page.
  const card = document.querySelector("#demo-card");
  card.querySelector("img").src = "https://placedog.net/500/280";
  card.querySelector("img").alt =
    "No matter what dog we get, they are adorable.";
  card.querySelector("h5").innerHTML = "This is a cute dog.";
  card.querySelector("button").onclick = generateDog;
};
