const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = [...document.querySelectorAll('.hidden'), ... document.querySelectorAll('.hiddenRight')]
hiddenElements.forEach(element => {observer.observe(element)});

const darkModeButton = document.getElementById("dark-mode-button");
const bottomElement = document.getElementById("bottom");
const squigElements = document.querySelectorAll(".squig");
const headerElement = document.querySelector("header");
console.log(headerElement)

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

if (isMobile()) {
    let nav = document.querySelector("nav")
    nav.remove()
}

let isDark = false;
function enableDarkMode() {
    document.body.style.backgroundColor = 'rgb(150, 150, 150)';
    document.body.style.color = 'white';
    bottomElement.style.fill = 'rgb(150, 150, 150)'; 
    headerElement.style.backgroundColor = 'rgb(150, 150, 150)';
    darkModeButton.textContent = "Light Mode"; 
    darkModeButton.style.backgroundColor = "white"
}

function disableDarkMode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    bottomElement.style.fill = 'white'; 
    headerElement.style.backgroundColor = 'white';
    darkModeButton.textContent = "Dark Mode"; 
    darkModeButton.style.backgroundColor = "gray"
}

darkModeButton.addEventListener("mousedown", (e)=>{
    console.log("hello")
    if(!isDark){
        enableDarkMode()
        isDark = true
    } else{
        disableDarkMode()
        isDark = false
    }
})

// make biuttons same height
/*window.onload = function() {
    const imageItems = document.querySelectorAll('.image-item');

    imageItems.forEach(function(item) {
        const img = item.querySelector('.dynamicImage');
        const buttonsDiv = item.querySelector('.buttons');

        // Get the height of the image
        const imgHeight = img.clientHeight;

        // Set the margin-top of the buttons div to the height of the image
        buttonsDiv.style.marginTop = (213 - imgHeight + 15) + 'px';
    });
};*/