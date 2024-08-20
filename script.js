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