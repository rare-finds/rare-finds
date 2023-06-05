// function handleButtonTabClick(tab) {
//     const buttons = document.querySelectorAll(".button-group button");
//     buttons.forEach((button) => {
//       button.classList.remove("active");
//     });

//     const productItems = document.querySelectorAll(".product-item");
//     productItems.forEach((item) => {
//       item.style.display = "none";
//     });

//     document.querySelector(`[data-tab="${tab}"]`).classList.add("active");

//     if (tab === "favorito") {
//       const favoritoItems = document.querySelectorAll(".favorito-item");
//       favoritoItems.forEach((item) => {
//         item.style.display = "flex";
//       });
//     } else if (tab === "A_vender") {
//       const A_venderItems = document.querySelectorAll(".A_vender-item");
//       A_venderItems.forEach((item) => {
//         item.style.display = "flex";
//       });
//     } else if (tab === "compras") {
//       const comprasItems = document.querySelectorAll(".compras-item");
//       comprasItems.forEach((item) => {
//         item.style.display = "flex";
//       });
//     }
//   }

//   function setActiveButton() {
//     const currentUrl = new URL(window.location.href);
//     const tab = currentUrl.searchParams.get("tab");
//     const buttons = document.querySelectorAll(".button-group button");
//     buttons.forEach((button) => {
//       button.classList.remove("active");
//       if (button.getAttribute("data-tab") === tab) {
//         button.classList.add("active");
//       }
//     });
//   }

//   setActiveButton();

//   handleButtonTabClick('favorito');