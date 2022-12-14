/**
 *
 * CONST
 */
const sideMenu = document.querySelector("aside"),
   menuBtn = document.querySelector("#menu-btn"),
   closeBtn = document.querySelector("#close-btn"),
   themeToggler = document.querySelector(".theme-toggler");

/**Show sidebar */
menuBtn.addEventListener("click", () => {
   sideMenu.style.display = "block";
});

/**Close sidebar */
closeBtn.addEventListener("click", () => {
   sideMenu.style.display = "none";
});

// Change Theme Dashboard
themeToggler.addEventListener("click", () => {
   document.body.classList.toggle("dark-theme-variables");

   // themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
   // themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");

   themeToggler.querySelector("span").classList.toggle("active");
   themeToggler.style.color = "#ffbb55";
   themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
   themeToggler.querySelector("span:nth-child(2)").style.color = "#000";
});

/**
 * FILL ORDERS IN TABLE
 */

Orders.forEach((order) => {
   const tr = document.createElement("tr"),
      trContent = `
                     <td>${order.productName}</td>
                     <td>${order.productNumber}</td>
                     <td>${order.paymentStatus}</td>
                     <td class="${
                        order.shipping === "Declined"
                           ? "danger"
                           : order.shipping === "Pending"
                           ? "warning"
                           : "primary"
                     }">${order.shipping}</td>
                     <td class="primary">Details</td>
                  `;

   tr.innerHTML = trContent;
   document.querySelector("table tbody").appendChild(tr);
});
