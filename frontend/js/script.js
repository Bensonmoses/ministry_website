document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");
    
    if (menuButton && mobileNav) {
      menuButton.addEventListener("click", function(event) {
        event.stopPropagation();
        mobileNav.classList.toggle("active");
      });
      
      // Close mobile nav when clicking outside
      document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
          mobileNav.classList.remove("active");
        }
      });
      
      // Close mobile nav when a link is clicked
      document.querySelectorAll(".mobile-nav ul li a").forEach(link => {
        link.addEventListener("click", function() {
          mobileNav.classList.remove("active");
        });
      });
      
      // Close mobile nav on Escape key press
      document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
          mobileNav.classList.remove("active");
        }
      });
    }
    
    // Language Toggle with localStorage
    const savedLang = localStorage.getItem("preferredLanguage") || "english";
    document.body.classList.remove("english", "telugu");
    document.body.classList.add(savedLang);
    
    // Attach event listeners to language toggle buttons
    const langButtons = document.querySelectorAll(".language-toggle button");
    langButtons.forEach(btn => {
      btn.addEventListener("click", function() {
        let selectedLang = this.textContent.trim().toLowerCase() === "english" ? "english" : "telugu";
        localStorage.setItem("preferredLanguage", selectedLang);
        document.body.classList.remove("english", "telugu");
        document.body.classList.add(selectedLang);
      });
    });
  });
  