(()=>{"use strict";function e(e){const t=document.createElement("div");t.classList.add("hometab"),t.style.color="white",t.style.height="100vh",t.style.backgroundSize="cover",t.style.backgroundPosition="center",document.body.style.margin="0";const n=document.createElement("h1");n.textContent="Welcome to Atomic Noodles!",n.style.margin="0",t.appendChild(n);const o=document.createElement("p");o.textContent="At Atomic Noodles, we believe in the power of noodles to create an explosion of flavors that will leave you craving for more. Our expert chefs use only the finest ingredients and traditional recipes to craft each dish with precision and care. Let us take you on a gastronomic journey filled with delicious surprises and unforgettable moments. We guarantee that every bite will be an explosion of taste that will leave you wanting more.",t.appendChild(o),e.appendChild(t)}const t=document.getElementById("content"),n=document.createElement("button");n.classList.add("tab","home");const o=document.createElement("button");o.classList.add("tab","menu");const a=document.createElement("button");a.classList.add("tab","contact"),n.textContent="Home",o.textContent="Menu",a.textContent="Contact";const d=document.createElement("div");d.classList.add("header"),d.appendChild(n),d.appendChild(o),d.appendChild(a),t.appendChild(d);const c=document.createElement("div");function s(){c.innerHTML=""}c.classList.add("tab-content"),t.appendChild(c),n.addEventListener("click",(()=>{s(),e(c)})),o.addEventListener("click",(()=>{s(),function(e){const t=document.createElement("h1");t.textContent="Menu",t.classList.add("menu-header"),e.appendChild(t);const n=document.createElement("ul");n.classList.add("menu-grid");const o=document.createElement("li");o.textContent="Noodle Soup",o.setAttribute("class","menu-item");const a=document.createElement("p");a.textContent="A hearty soup made with noodles, vegetables, and your choice of protein.",a.setAttribute("class","menu-item-desc"),o.appendChild(a),n.appendChild(o);const d=document.createElement("li");d.textContent="Pad Thai",d.setAttribute("class","menu-item");const c=document.createElement("p");c.textContent="A classic Thai dish made with stir-fried noodles, vegetables, and your choice of protein.",c.setAttribute("class","menu-item-desc"),d.appendChild(c),n.appendChild(d);const s=document.createElement("li");s.textContent="Lo Mein",s.setAttribute("class","menu-item");const i=document.createElement("p");i.textContent="A Chinese dish made with stir-fried noodles, vegetables, and your choice of protein.",i.setAttribute("class","menu-item-desc"),s.appendChild(i),n.appendChild(s);const l=document.createElement("li");l.textContent="Ramen",l.setAttribute("class","menu-item");const m=document.createElement("p");m.textContent="A Japanese dish made with noodles in a savory broth, topped with vegetables and your choice of protein.",m.setAttribute("class","menu-item-desc"),l.appendChild(m),n.appendChild(l);const r=document.createElement("li");r.textContent="Pho",r.setAttribute("class","menu-item");const p=document.createElement("p");p.textContent="A Vietnamese soup made with rice noodles, herbs, and your choice of protein.",p.setAttribute("class","menu-item-desc"),r.appendChild(p),n.appendChild(r);const u=document.createElement("li");u.textContent="Spaghetti Carbonara",u.setAttribute("class","menu-item");const h=document.createElement("p");h.textContent="An Italian pasta dish made with spaghetti, bacon, eggs, and Parmesan cheese.",h.setAttribute("class","menu-item-desc"),u.appendChild(h),n.appendChild(u),e.appendChild(n)}(c)})),a.addEventListener("click",(()=>{s(),function(e){const t=document.createElement("div");t.classList.add("contact-page");const n=document.createElement("h1");n.textContent="Contact Us",n.style.margin="0",t.appendChild(n);const o=document.createElement("div");o.classList.add("contact-info");const a=document.createElement("p");a.textContent="123 Noodle Street, Pasta City",o.appendChild(a);const d=document.createElement("p");d.textContent="Phone: 555-1234",o.appendChild(d);const c=document.createElement("p");c.textContent="Email: info@atomicnoodles.com",o.appendChild(c);const s=document.createElement("div");s.classList.add("map"),o.appendChild(s),t.appendChild(o),e.appendChild(t)}(c)})),e(c)})();