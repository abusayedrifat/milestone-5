
const sections = document.querySelectorAll('section')
// console.log(section);

for (const section of sections) {
    section.style.border = '2px solid tomato';
    section.style.margin = '50px';
    section.style.borderRadius = '10px';
    section.style.padding = '20px';
    section.style.backgroundColor = 'lightgray'
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'salmon'

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('salmon-bg')










