
const contactLinks = document.querySelectorAll(".contact-link");
const footer = document.getElementById("footer");
const formInput = document.getElementById("name");
const currentYear = document.getElementById("current-year");
const nav = document.querySelector("nav");



contactLinks.forEach(link => {
    link.addEventListener("click", () => {
        footer.scrollIntoView();
        console.log('done')
        formInput.focus();
    })
});


// Output current year to footer

let locale = navigator.language;

const date = new Date();
const year = date.toLocaleString(locale, {
    year: 'numeric',
})

currentYear.innerText=`${year}`