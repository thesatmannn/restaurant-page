// eslint-disable-next-line import/prefer-default-export
export function createContactTab(tabContent) {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");
  const header = document.createElement("h1");
  header.textContent = "Contact Us";
  header.style.margin = "0";
  contactPage.appendChild(header);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const address = document.createElement("p");
  address.textContent = "123 Noodle Street, Pasta City";
  contactInfo.appendChild(address);

  const phone = document.createElement("p");
  phone.textContent = "Phone: 555-1234";
  contactInfo.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "Email: info@atomicnoodles.com";
  contactInfo.appendChild(email);

  const map = document.createElement("div");
  map.classList.add("map");
  contactInfo.appendChild(map);

  contactPage.appendChild(contactInfo);
  tabContent.appendChild(contactPage);
}

  