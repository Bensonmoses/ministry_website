<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Load Header and Footer
    Promise.all([
      fetch('header.html').then(res => res.text()),
      fetch('footer.html').then(res => res.text())
    ]).then(([headerHTML, footerHTML]) => {
      document.getElementById('header-placeholder').innerHTML = headerHTML;
      document.getElementById('footer-placeholder').innerHTML = footerHTML;

      // Now DOM elements exist, attach listeners

      // Mobile Menu Toggle
      const menuButton = document.getElementById("menuButton");
      const mobileNav = document.getElementById("mobileNav");

      if (menuButton && mobileNav) {
        menuButton.addEventListener("click", function(event) {
          event.stopPropagation();
          mobileNav.classList.toggle("active");
        });

        document.addEventListener("click", function(event) {
          if (!menuButton.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.classList.remove("active");
          }
        });

        document.querySelectorAll(".mobile-nav ul li a").forEach(link => {
          link.addEventListener("click", function() {
            mobileNav.classList.remove("active");
          });
        });

        document.addEventListener("keydown", function(event) {
          if (event.key === "Escape") {
            mobileNav.classList.remove("active");
          }
        });
      }

      // Language toggle with localStorage
      const savedLang = localStorage.getItem("preferredLanguage") || "english";
      document.body.classList.remove("english", "telugu");
      document.body.classList.add(savedLang);

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
  });
</script>
