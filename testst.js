// Function to load Ionicons script
function loadIoniconsScript() {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
  script.defer = true;
  document.head.appendChild(script);
}

// Function to handle menu toggle
function handleMenuToggle() {
  const menuToggle = document.querySelector(".menu_toggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.addEventListener('click', function () {
    navigation.classList.toggle("active");
  });
}

// Function to handle mode toggle and store preference
function handleModeToggle() {
  const modeToggleButton = document.getElementById('mode-toggle-button');
  const storedMode = localStorage.getItem('mode'); // Get stored preference

  // Set initial mode based on stored preference
  if (storedMode === 'white') {
    document.body.classList.add('white-mode');
    document.querySelector(".navigation").classList.add('white-mode');
    modeToggleButton.checked = true; // Check the checkbox
  }

  modeToggleButton.addEventListener('change', function () {
    document.body.classList.toggle('white-mode');
    document.querySelector(".navigation").classList.toggle('white-mode');

    // Store the current mode in localStorage
    if (document.body.classList.contains('white-mode')) {
      localStorage.setItem('mode', 'white');
    } else {
      localStorage.removeItem('mode'); // Remove if not white mode
    }
  });

}

// Function to handle click event on menu items
function handleMenuItems() {
  const navLinks = document.querySelectorAll('.navigation .menu li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Remove 'active' class from all links
      navLinks.forEach(item => {
        item.classList.remove('active');
      });
      // Add 'active' class to the clicked link
      this.classList.add('active');
    });
  });

  // Highlight 'About' link when in about.html
  const currentPath = window.location.pathname;
  if (currentPath.includes("about.html")) {
    const aboutLink = document.querySelector('.navigation .menu li a[href="about.html"]');
    aboutLink.classList.add('active');
  }
}

// Load Ionicons script
loadIoniconsScript();

// Listen for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  // Handle menu toggle
  handleMenuToggle();

  // Handle mode toggle and restore preference
  handleModeToggle();

  // Handle click event on menu items
  handleMenuItems();
});