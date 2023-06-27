// eslint-disable-next-line import/prefer-default-export
export function createHomeTab(tabContent) {
  const homeTabDiv = document.createElement("div");
  homeTabDiv.classList.add("hometab");
  homeTabDiv.style.color = "white";
  homeTabDiv.style.height = "100vh";
  homeTabDiv.style.backgroundSize = "cover";
  homeTabDiv.style.backgroundPosition = "center";
  document.body.style.margin = "0";

  const header = document.createElement("h1");
  header.textContent = "Welcome to Atomic Noodles!";
  header.style.margin = "0";
  homeTabDiv.appendChild(header);

  const para = document.createElement("p");
  para.textContent =
    "At Atomic Noodles, we believe in the power of noodles to create an explosion of flavors that will leave you craving for more. Our expert chefs use only the finest ingredients and traditional recipes to craft each dish with precision and care. Let us take you on a gastronomic journey filled with delicious surprises and unforgettable moments. We guarantee that every bite will be an explosion of taste that will leave you wanting more.";

  homeTabDiv.appendChild(para);
  tabContent.appendChild(homeTabDiv);
}