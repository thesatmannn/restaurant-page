import { createHomeTab } from "./home";
import { createContactTab } from "./contact";
import { createMenuTab } from "./menu";

const content = document.getElementById("content");
const homeTab = document.createElement("button");
homeTab.classList.add("tab", "home");
const menuTab = document.createElement("button");
menuTab.classList.add("tab", "menu");
const contactTab = document.createElement("button");
contactTab.classList.add("tab", "contact");
homeTab.textContent = "Home";
menuTab.textContent = "Menu";
contactTab.textContent = "Contact";
content.appendChild(homeTab);
content.appendChild(menuTab);
content.appendChild(contactTab);

function clearContent(){
  
}

// Set event listeners for tab buttons
homeTab.addEventListener("click", () => {
  createHomeTab();
});

menuTab.addEventListener("click", () => {
  createMenuTab();
});

contactTab.addEventListener("click", () => { 
  createContactTab();
});
