
//1.where to add
const placesList = document.getElementById('places-list');

//2. what to add
const li =document.createElement('li');
li.innerText = 'guliakhali'

//3.add the child
placesList.appendChild(li)



const  mainContent = document.getElementById('main-content');
const section = document.createElement('section')
const h1 = document.createElement('h1');
h1.innerText = 'my food list'
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li')
li1.innerText = 'biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'kabab';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'borhani';
ul.appendChild(li3);

section.appendChild(ul);

mainContent.appendChild(section);

//set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>Dress which i like most</h1>
<ul>
<li>Shirt</li>
<li>T-shirt</li>
<li>Jeans</li>
<li>Panjabi</li>
</ul>
` ;
mainContent.appendChild(sectionDress)


