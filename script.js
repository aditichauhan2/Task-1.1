const sidebar = document.querySelector(".sidebar");

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  sidebar.classList.add("close"); // Collapse the sidebar on mouse leave
};

// Function to show the sidebar when the mouse enters
const showSidebar = () => {
  sidebar.classList.remove("close"); // Expand the sidebar on mouse enter
};

// Add event listeners
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);






