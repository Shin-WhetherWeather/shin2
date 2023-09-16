tabs = document.querySelectorAll(".navTab");
projects = document.querySelectorAll(".project");

timeoutList = [];

function updateProjects(element){
    for(let i = 0; i <timeoutList.length; i++){
        clearTimeout(timeoutList[i]);
    }

    timeoutList.length = 0;

    category = element.children[0].innerText.toUpperCase();

    projects.forEach(project =>{
        
        list = project.classList;

        inList = false;

        list.forEach(item => {
            if(item.toUpperCase() == category){
                inList = true;
            }
        });

        if(inList){
            project.style.display = "";
            project.style.opacity = "0.5";
            project.style.paddingTop = "100px";
            project.style.filter = "brightness(0.8)";

            timeoutList.push(
                setTimeout(function(){
                    project.style.opacity = "1";
                    project.style.paddingTop = "0";
                    project.style.filter = "brightness(1)";
                },1)
            );

                 
        }
        else{
            project.style.opacity = "0.5";
            project.style.display = "none";
        }
    })
}






tabs.forEach(element => {
    element.addEventListener("click", function(e){
        updateProjects(element);

        tabs.forEach(tab=>{
            tab.classList.remove("selectedTab");
        })
        this.classList.add("selectedTab");
    })
});


window.onload = (event) =>{
    updateProjects(tabs[0]);
}


