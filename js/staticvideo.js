let projects = document.querySelectorAll("#page4 .project");
let videoWrapper = document.querySelector("#static-video");
let video = document.querySelector("#static-video video");
projects.forEach((project)=>{
    project.addEventListener("mouseenter",()=>{
        videoWrapper.style.opacity = 1; 
       
        let videoLink = project.getAttribute("videoLink");
        video.setAttribute("src", videoLink);
    },true);

    project.addEventListener("mouseleave",()=>{
        videoWrapper.style.opacity = 0; 
       
     });
 },true)

// console.log(projects);

