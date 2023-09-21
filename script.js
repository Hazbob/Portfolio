const stickyNavTarget = document.querySelector(".sec-section")
const navBar = document.querySelector(".nav-bar")
const width = navBar.offsetWidth
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
};

const callback = function(entries, observer){
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            //.fixedElement {
            //     position:fixed;
            //     top:0;
            //     width:100%;
            //     z-index:100;
            // }
            navBar.classList.add("fixedElement")



        }else{
            navBar.classList.remove("fixedElement")


        }
    })
}
let observer = new IntersectionObserver(callback, options);

observer.observe(stickyNavTarget)