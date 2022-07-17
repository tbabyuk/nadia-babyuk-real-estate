

console.log("hello world")


const contactLinks = document.querySelectorAll(".contact-link");
const footer = document.getElementById("footer");
const formInput = document.getElementById("name");



// contactLink.addEventListener("click", () => {
//     footer.scrollIntoView();
//     console.log('done')
//     formInput.focus();
// })

contactLinks.forEach(link => {
    link.addEventListener("click", () => {
        footer.scrollIntoView();
        console.log('done')
        formInput.focus();
    })
})