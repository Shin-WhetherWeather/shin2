tabs = document.querySelectorAll(".navTab");

tabs.forEach(element => {
    element.addEventListener("click", function(e){
        tabs.forEach(tab=>{
            tab.classList.remove("selectedTab");
        })
        this.classList.add("selectedTab");
    })
});