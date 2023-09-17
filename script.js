tabs = document.querySelectorAll(".navTab");
projects = document.querySelectorAll(".project");

email = document.getElementById("emailButton");
emailRow = document.getElementById("emailRow");

body = document.getElementById("body");

closeButton = document.getElementById("closeButton");

timeoutList = [];

closeButton.addEventListener("click", function(){
    email.style.setProperty("font-variation-settings", "'FILL' 0 ");

    emailRow.style.display = "none";
    emailRow.style.opacity = "0.5";
})


email.addEventListener("click", function(){
    for(let i = 0; i <timeoutList.length; i++){
        clearTimeout(timeoutList[i]);
    }

    if(emailRow.style.display == "flex"){

        email.style.setProperty("font-variation-settings", "'FILL' 0 ");

        emailRow.style.display = "none";
        emailRow.style.opacity = "0.5";

        
    }
    else{

        emailRow.style.display = "flex";
        emailRow.style.opacity = "0.5";
        emailRow.style.paddingTop = "100px";

        email.style.setProperty("font-variation-settings", "'FILL' 1 ");

        timeoutList.push(
            setTimeout(function(){
                emailRow.style.paddingTop = "0px";
                emailRow.style.opacity = "1";
            },1)
        );

        

        
    }
    
});


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
        
        topFunction();

        tabs.forEach(tab=>{
            tab.classList.remove("selectedTab");
        })
        this.classList.add("selectedTab");

        updateProjects(element);

        

    })
});


window.onload = (event) =>{
    updateProjects(tabs[0]);

    tabs.forEach(tab=>{
        tab.classList.remove("selectedTab");
    })
    tabs[0].classList.add("selectedTab");
}


