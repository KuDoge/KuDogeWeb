const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // Removing active class from previous tab
        tabs.forEach(tab => tab.classList.remove("active"));

        tab.classList.add("active");

        // Showing content according to tab selection

        // Hiding previous tab content 
        contents.forEach((c) => c.classList.remove("active"));

        contents[index].classList.add("active");

    });
});

// Running the animation initially when the page loads
tabs[0].click();