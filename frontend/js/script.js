function toggleMenu() {
    var mobileNav = document.getElementById("mobileNav");
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
}
