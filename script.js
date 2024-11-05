// // Entering: "transition ease-out duration-100"
// // From: "transform opacity-0 scale-95"
// // To: "transform opacity-100 scale-100"
// // Leaving: "transition ease-in duration-75"
// // From: "transform opacity-100 scale-100"
// // To: "transform opacity-0 scale-95"

const mobileMenu = document.querySelector(
  'button[aria-controls="mobile-menu"]',
);
const mobileMenuContainer = document.querySelector("#mobile-menu");
const mobileMenuItems = document.getElementById("mobile-menu-items");
mobileMenu.addEventListener("click", () => {
  //   console.log(mobileMenuItems);
  mobileMenuItems.classList.toggle("hidden");
  //   console.log(mobileMenuItems);
});

const menuItems = document.getElementById("menu-items");
const menuItemsChildren = Array.from(menuItems.children);

// Add click event listeners to each link
menuItemsChildren.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Remove active classes from all links
    menuItemsChildren.forEach((link) => {
      link.classList.remove("bg-gray-900");
      link.classList.add(
        "text-gray-300",
        "hover:bg-gray-700",
        "hover:text-white",
      );
    });

    // Add active classes to the clicked link
    this.classList.remove("hover:bg-gray-700", "hover:text-white");
    this.classList.add("bg-gray-900");
  });
});

const mobileMenuItemsChildren = Array.from(mobileMenuItems.children);
// console.log(mobileMenuItemsChildren);

// Add click event listeners to each link
mobileMenuItemsChildren.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent default link behavior (optional, remove if you want the link to navigate)
    // hide the menu
    // mobileMenuContainer.classList.toggle("hidden");
    mobileMenu.click();
    console.log("hid", mobileMenuContainer);

    // Remove active classes from all links
    mobileMenuItemsChildren.forEach((link) => {
      link.classList.remove("bg-gray-900");
      link.classList.add("hover:bg-gray-700", "hover:text-white");
    });

    // Add active classes to the clicked link
    this.classList.remove("hover:bg-gray-700", "hover:text-white");
    this.classList.add("bg-gray-900");
  });
});

// // alternate section bg color
// // bg-white, bg-gray-200
// const allSections = document.getElementsByTagName("section");
// console.log(allSections);
// let counter = 1;
// for (const sec of allSections) {
//   console.log(sec.id === "projects");

//   if (sec.id === "projects") {
//     sec.classList.remove("bg-gray-200", "bg-white", "text-gray-800");
//     sec.classList.add("bg-gray-900", "text-white");
//     console.log(sec);
//   } else if (counter % 2 === 0) {
//     // even pages
//     sec.classList.remove("bg-gray-200");
//     sec.classList.add("bg-white");
//   } else {
//     sec.classList.remove("bg-white");
//     sec.classList.add("bg-gray-200");
//   }
//   counter++;
// }
