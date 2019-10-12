// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const selectHeaderContainer = document.querySelector(".header-container");
selectHeaderContainer.appendChild(Header());

function Header() {
  // Create Elements
  const header = document.createElement("div");
  const date = document.createElement("span");
  const h1 = document.createElement("h1");
  const temperature = document.createElement("span");

  //Add Content
  date.textContent = "MARCH 28, 2019";
  h1.textContent = "Lambda Times";
  temperature.textContent = "98°";

  // Give Structure
  header.appendChild(date);
  header.appendChild(h1);
  header.appendChild(temperature);

  //Add Style
  header.classList.add("header");
  date.classList.add("date");
  h1.classList.add("h1");
  temperature.classList.add("temp");

  return header;
}
