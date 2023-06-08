// eslint-disable-next-line import/prefer-default-export
export function createMenuTab(tabContent) {
  tabContent.innerHTML = "";

  const header = document.createElement("h1");
  header.textContent = "Menu";
  header.style.margin = "0";
  tabContent.appendChild(header);

  const menuList = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "Noodle Soup";
  menuItem1.setAttribute("class", "menu-item");
  const menuItem1Desc = document.createElement("p");
  menuItem1Desc.textContent = "A hearty soup made with noodles, vegetables, and your choice of protein.";
  menuItem1Desc.setAttribute("class", "menu-item-desc");
  menuItem1.appendChild(menuItem1Desc);
  menuList.appendChild(menuItem1);

  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "Pad Thai";
  menuItem2.setAttribute("class", "menu-item");
  const menuItem2Desc = document.createElement("p");
  menuItem2Desc.textContent = "A classic Thai dish made with stir-fried noodles, vegetables, and your choice of protein.";
  menuItem2Desc.setAttribute("class", "menu-item-desc");
  menuItem2.appendChild(menuItem2Desc);
  menuList.appendChild(menuItem2);

  const menuItem3 = document.createElement("li");
  menuItem3.textContent = "Lo Mein";
  menuItem3.setAttribute("class", "menu-item");
  const menuItem3Desc = document.createElement("p");
  menuItem3Desc.textContent = "A Chinese dish made with stir-fried noodles, vegetables, and your choice of protein.";
  menuItem3Desc.setAttribute("class", "menu-item-desc");
  menuItem3.appendChild(menuItem3Desc);
  menuList.appendChild(menuItem3);

  const menuItem4 = document.createElement("li");
  menuItem4.textContent = "Ramen";
  menuItem4.setAttribute("class", "menu-item");
  const menuItem4Desc = document.createElement("p");
  menuItem4Desc.textContent = "A Japanese dish made with noodles in a savory broth, topped with vegetables and your choice of protein.";
  menuItem4Desc.setAttribute("class", "menu-item-desc");
  menuItem4.appendChild(menuItem4Desc);
  menuList.appendChild(menuItem4);

  const menuItem5 = document.createElement("li");
  menuItem5.textContent = "Pho";
  menuItem5.setAttribute("class", "menu-item");
  const menuItem5Desc = document.createElement("p");
  menuItem5Desc.textContent = "A Vietnamese soup made with rice noodles, herbs, and your choice of protein.";
  menuItem5Desc.setAttribute("class", "menu-item-desc");
  menuItem5.appendChild(menuItem5Desc);
  menuList.appendChild(menuItem5);

  const menuItem6 = document.createElement("li");
  menuItem6.textContent = "Spaghetti Carbonara";
  menuItem6.setAttribute("class", "menu-item");
  const menuItem6Desc = document.createElement("p");
  menuItem6Desc.textContent = "An Italian pasta dish made with spaghetti, bacon, eggs, and Parmesan cheese.";
  menuItem6Desc.setAttribute("class", "menu-item-desc");
  menuItem6.appendChild(menuItem6Desc);
  menuList.appendChild(menuItem6);

  tabContent.appendChild(menuList);
}
menuItems.forEach((menuItem) => {
  const menuBox = document.createElement("div");
  menuBox.classList.add("menu-item", "fade-in");

  const title = document.createElement("h3");
  title.textContent = menuItem.title;
  title.classList.add("menu-item-title");

  const description = document.createElement("p");
  description.textContent = menuItem.description;
  description.classList.add("menu-item-desc");

  menuBox.appendChild(title);
  menuBox.appendChild(description);
  menuList.appendChild(menuBox);
});
}
