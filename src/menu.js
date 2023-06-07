
// eslint-disable-next-line import/prefer-default-export
export function createMenuTab() {
  // create tabs for each module
  const content = document.getElementById("content");
    const homeTab = document.createElement("button");
    homeTab.classList.add("tab");
    const menuTab = document.createElement("button");
    menuTab.classList.add("tab");
    const contactTab = document.createElement("button");
    contactTab.classList.add("tab");
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";
    content.appendChild(homeTab);
    content.appendChild(menuTab);
    content.appendChild(contactTab);
    content.innerHTML = "";
  
    const header = document.createElement("h1");
    header.textContent = "Menu";
    header.style.margin = "0";
    content.appendChild(header);
  
    const menuList = document.createElement("ul");
  
    const menuItem1 = document.createElement("li");
    menuItem1.textContent = "Noodle Soup";
    menuList.appendChild(menuItem1);
  
    const menuItem2 = document.createElement("li");
    menuItem2.textContent = "Pad Thai";
    menuList.appendChild(menuItem2);
  
    const menuItem3 = document.createElement("li");
    menuItem3.textContent = "Lo Mein";
    menuList.appendChild(menuItem3);
    content.appendChild(menuList);
  }