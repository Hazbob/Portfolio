const stickyNavTarget = document.querySelector(".content")
const navBar = document.querySelector(".nav-bar")
const portfolio_section = document.querySelector('.sec-section')
const width = navBar.offsetWidth
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
};
//Below is for the sticky nav
const stickyNavLogic = function(entries, observer){
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry)
            //.fixedElement {
            //     position:fixed;
            //     top:0;
            //     width:100%;
            //     z-index:100;
            // }
            navBar.classList.remove("fixedElement")




        }else{
            console.log(entry)
            navBar.classList.add("fixedElement")


        }
    })
}
let stickyNavObserver = new IntersectionObserver(stickyNavLogic, options);

stickyNavObserver.observe(stickyNavTarget)

const currentPageLogic = function(){

}

const currentPageObserver = new IntersectionObserver()