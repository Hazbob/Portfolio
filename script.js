const stickyNavTarget = document.querySelector(".content")
const navBar = document.querySelector(".nav-bar")
const portfolioSection = document.querySelector('.sec-section')
const homeButton = document.querySelector('.home')
const portfolioButton = document.querySelector('.my-work')
const homeSection = document.querySelector('.first-section')
const width = navBar.offsetWidth
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
};
//Below is for the sticky nav
// const stickyNavLogic = function(entries, observer){
//     entries.forEach((entry) => {
//         if(entry.isIntersecting) {
//             //.fixedElement {
//             //     position:fixed;
//             //     top:0;
//             //     width:100%;
//             //     z-index:100;
//             // }
//             navBar.classList.remove("fixedElement")
//
//
//
//
//         }else{
//
//             navBar.classList.add("fixedElement")
//
//
//         }
//     })
// }
// let stickyNavObserver = new IntersectionObserver(stickyNavLogic, options);

// stickyNavObserver.observe(stickyNavTarget)

const currentPageLogic = function(entries, observer){
    entries.forEach(entry =>{
        console.log(entry)
        if(entry.isIntersecting){
            if(entry.target === portfolioSection){
                portfolioButton.classList.add('underline')
            }
            if(entry.target === homeSection){
                console.log('entry is the home section')
               homeButton.classList.add('underline')
            }
        }else{
            portfolioButton.classList.remove('underline')
            homeButton.classList.remove('underline')

        }

    })

}
const optionsForCurrentPage = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
}

const currentPageObserver = new IntersectionObserver(currentPageLogic, optionsForCurrentPage)

currentPageObserver.observe(portfolioSection)
currentPageObserver.observe(homeSection)


