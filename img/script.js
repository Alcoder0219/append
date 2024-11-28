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
// toggle button end

// Client Counter Start
let view_counter = ()=>{
    let counters = [
        {id: "counter1", target: 232},
        {id: "counter2", target: 521},
        {id: "counter3", target: 1453},
        {id: "counter4", target: 32},
    ];
    
    let animationCounter = () => {
        counters.forEach(counter => { 
            let count = 0;
            let duration = 2000;
            const interval = Math.round(duration / counter.target);
            const element = document.getElementById(counter.id);
            const updateCounter = () => {
                if (count < counter.target) {
                    count++;
                    element.textContent = count;
                    setTimeout(updateCounter, interval);
                }
            };
            updateCounter();
        });
    };
    window.onload = animationCounter;
}
view_counter()
// Client Counter End