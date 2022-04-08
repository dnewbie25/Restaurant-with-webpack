import Cake from './cake.jpg';
import Hot_Dog from './hot dog.jpg';
import Pizza from './pizza.jpg';

export default function home(){

  const homePage = document.createElement('main');
  homePage.innerHTML= 
  `<article id="pizza">
      <img src="${importImage(Pizza)}" alt="pizza">
      <h2>Pizza</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, dolore id sequi nulla expedita odio possimus, rerum quaerat dolores, iusto voluptates ullam? Explicabo, reiciendis animi. Ducimus porro dolorum inventore?</p>
      <p>$12.99</p>
    </article>
    <article id="hot dog">
      <img src="${importImage(Hot_Dog)}" alt="hot dog">
      <h2>Hot Dogs</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, dolore id sequi nulla expedita odio possimus, rerum quaerat dolores, iusto voluptates ullam? Explicabo, reiciendis animi. Ducimus porro dolorum inventore?</p>
      <p>$2.99</p>
    </article>
    <article id="cake">
      <img src="${importImage(Cake)}" alt="cake">
      <h2>Cakes</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, dolore id sequi nulla expedita odio possimus, rerum quaerat dolores, iusto voluptates ullam? Explicabo, reiciendis animi. Ducimus porro dolorum inventore?</p>
      <p>$3.79</p>
    </article>
  `;
  return homePage;
}

function importImage(name){
  const image = new Image();
  image.src = name;
  return image.src
}