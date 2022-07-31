// querySelector // Node
// querySelectorAll // NodeList
// getElementById
// getElementsByClassname
// getElementsByTagName
// const typeEmailInput = document.querySelector("#about .email-input");

// const intervalID = setInterval(() => {
//   element.classList.toggle(className);
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalID);
// }, 10000);

// Long version
// if (element.classList.contains("some-class")) {
//   element.classList.remove("some-class");
// } else {
//   element.classList.add("some-class");
// }
// Short version
// element.classList.toggle("some-element");

const LINKS = ["home", "about", "contact", "faq", "career"];
const navigationList = document.querySelector(".navigation-list");
LINKS.forEach(function (link) {
  const anchorElement = document.createElement("a");
  const listItem = document.createElement("li");
  // Template literal
  anchorElement.href = `./${link}.html`;
  anchorElement.innerText = link;
  listItem.appendChild(anchorElement);
  navigationList.appendChild(listItem);
});

// const someDivision = document.querySelector(".some-division");
// const otherDivision = document.querySelector(".other-division");

// const someElementInsideSomeDivison = someDivision.querySelector(
//   ".some-other-element"
// );
