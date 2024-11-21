let toggleBtn = () => {
    let toggle_btn = document.getElementById("toggleButton");
    let nav_link = document.querySelector(".nav_links");
    
    toggle_btn.addEventListener("click", () => {
        let currentDisplay = window.getComputedStyle(nav_link).display;
        if (currentDisplay === "none") {
            nav_link.style.display = "block";
        } else {
            nav_link.style.display = "none";
        }
    });
};

toggleBtn();
