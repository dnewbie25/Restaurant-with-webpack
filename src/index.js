import home from "./home";
import contact from "./contact";
import './style.css';

const mainContainer = document.querySelector('#content');
const navBar = document.createElement('nav');
const ul = document.createElement('ul');
const h1 = document.createElement('h1');
h1.textContent = 'My Restaurant';
ul.classList.add('navHorizontal');
for(let i=0; i<2;i++){
  const li = document.createElement('li');
  if(i%2 === 0){
    li.innerHTML = `<a href="#">Home</a>`
    ul.appendChild(li);
  }else{
    li.innerHTML = `<a href="#">Contact</a>`
    ul.appendChild(li);
  }
}
navBar.appendChild(ul);
mainContainer.appendChild(navBar);
mainContainer.appendChild(h1);
mainContainer.insertAdjacentElement("beforeend", home());

const li = document.querySelectorAll('li');
li.forEach(a=>{
  a.addEventListener('click',e=>{
    const text = e.target.textContent;
    if(text === 'Home'){
      mainContainer.innerHTML = "";
      mainContainer.appendChild(navBar);
      mainContainer.appendChild(h1);
      mainContainer.insertAdjacentElement("beforeend", home());
    }else if(text === 'Contact'){
      mainContainer.innerHTML = "";
      mainContainer.appendChild(navBar);
      mainContainer.insertAdjacentElement("beforeend", contact())
    }
  })
})