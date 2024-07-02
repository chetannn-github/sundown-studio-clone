let navs = document.querySelectorAll("#page5 #navigation h2");
let text = document.querySelector("#page5 #description p");
let img = document.querySelector("#page5 #image-showcase img");



navs.forEach((nav)=>{
    nav.addEventListener("click" ,()=>{
        let imgLink = nav.getAttribute("imgLink"); 
        let txt = nav.getAttribute("txt");
        navs.forEach((n) => n.classList.remove("selected"));

        // Add the class to the clicked nav item
        nav.classList.add("selected");

        text.innerHTML=txt;
        img.setAttribute("src",imgLink)

    })
})