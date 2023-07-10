// eslint-disable-next-line import/prefer-default-export
export function createMenuTab(tabContent) {
  const header = document.createElement("h1");
  header.textContent = "Menu";
  header.classList.add("menu-header");
  tabContent.appendChild(header);


  const menuList = document.createElement("ul");
  menuList.classList.add("menu-grid");
  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "Noodle Soup";
  const noodle1 = document.createElement("div");
  noodle1.classList.add("noodle1");
  menuItem1.setAttribute("class", "menu-item");
  const menuItem1Desc = document.createElement("p");
  menuItem1Desc.textContent = "A hearty soup made with noodles, vegetables, and your choice of protein.";
  menuItem1Desc.setAttribute("class", "menu-item-desc");
  menuItem1.appendChild(menuItem1Desc);
  menuItem1.appendChild(noodle1);
  menuList.appendChild(menuItem1);

  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "Pad Thai";
  menuItem2.setAttribute("class", "menu-item");
  const menuItem2Desc = document.createElement("p");
  menuItem2Desc.textContent = "A classic Thai dish made with stir-fried noodles, vegetables, and your choice of protein.";
  const noodle2 = document.createElement("div");
  noodle2.classList.add("noodle2");
  menuItem2Desc.setAttribute("class", "menu-item-desc");
  menuItem2.appendChild(menuItem2Desc);
  menuItem2.appendChild(noodle2);
  menuList.appendChild(menuItem2);

  const menuItem3 = document.createElement("li");
  menuItem3.textContent = "Lo Mein";
  menuItem3.setAttribute("class", "menu-item");
  const menuItem3Desc = document.createElement("p");
  menuItem3Desc.textContent = "A Chinese dish made with stir-fried noodles, vegetables, and your choice of protein.";
  const noodle3 = document.createElement("div");
  noodle3.classList.add("noodle3");
  menuItem3Desc.setAttribute("class", "menu-item-desc");
  menuItem3.appendChild(menuItem3Desc);
  menuItem3.appendChild(noodle3);
  menuList.appendChild(menuItem3);

  const menuItem4 = document.createElement("li");
  menuItem4.textContent = "Ramen";
  menuItem4.setAttribute("class", "menu-item");
  const menuItem4Desc = document.createElement("p");
  menuItem4Desc.textContent = "A Japanese dish made with noodles in a savory broth, topped with vegetables and your choice of protein.";
  const noodle4 = document.createElement("div");
  noodle4.classList.add("noodle4");
  menuItem4Desc.setAttribute("class", "menu-item-desc");
  menuItem4.appendChild(menuItem4Desc);
  menuItem4.appendChild(noodle4);
  menuList.appendChild(menuItem4);
  
  const menuItem5 = document.createElement("li");
  menuItem5.textContent = "Pho";
  menuItem5.setAttribute("class", "menu-item");
  const menuItem5Desc = document.createElement("p");
  menuItem5Desc.textContent = "A Vietnamese soup made with rice noodles, herbs, and your choice of protein.";
  const noodle5 = document.createElement("div");
  noodle5.classList.add("noodle5");
  menuItem5Desc.setAttribute("class", "menu-item-desc");
  menuItem5.appendChild(menuItem5Desc);
  menuItem5.appendChild(noodle5);
  menuList.appendChild(menuItem5);

  const menuItem6 = document.createElement("li");
  menuItem6.textContent = "Spaghetti Carbonara";
  menuItem6.setAttribute("class", "menu-item");
  const menuItem6Desc = document.createElement("p");
  menuItem6Desc.textContent = "An Italian pasta dish made with spaghetti, bacon, eggs, and Parmesan cheese.";
  const noodle6 = document.createElement("div");
  noodle6.classList.add("noodle6");
  menuItem6Desc.setAttribute("class", "menu-item-desc");
  menuItem6.appendChild(menuItem6Desc);
  menuItem6.appendChild(noodle6);
  menuList.appendChild(menuItem6);

  tabContent.appendChild(menuList);
}
