const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", () => {
  const isDark = link.getAttribute("href") === "dark.css";

  if (isDark) {
    link.setAttribute("href", "light.css");
    button.textContent = "Dark Mode";
  } else {
    link.setAttribute("href", "dark.css");
    button.textContent = "Light Mode";
  }
});

// Reading mode: the same pattern, swapping the type file instead of the colours
const typeLink = document.querySelector("#type");
const readingButton = document.querySelector("#reading");

readingButton.addEventListener("click", () => {
  const isReading = typeLink.getAttribute("href") === "reading.css";

  if (isReading) {
    typeLink.setAttribute("href", "type.css");
    readingButton.textContent = "Reading Mode";
  } else {
    typeLink.setAttribute("href", "reading.css");
    readingButton.textContent = "Default Type";
  }
});
