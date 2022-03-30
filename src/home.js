export default function home(){

  const homePage = document.createElement('main');
  homePage.innerHTML= 
  `
  <h1>My Restaurant</h1>
    <article id="pizza">
      <img src="" alt="pizza">
      <h2>Pizza</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, dolore id sequi nulla expedita odio possimus, rerum quaerat dolores, iusto voluptates ullam? Explicabo, reiciendis animi. Ducimus porro dolorum inventore?</p>
      <p>$12.99</p>
    </article>
    <article id="hot dog">
      <img src="" alt="hot dog">
      <h2>Hot Dogs</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, dolore id sequi nulla expedita odio possimus, rerum quaerat dolores, iusto voluptates ullam? Explicabo, reiciendis animi. Ducimus porro dolorum inventore?</p>
      <p>$2.99</p>
    </article>
    <article id="cake">
      <img src="" alt="cake">
      <h2>Cakes</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, dolore id sequi nulla expedita odio possimus, rerum quaerat dolores, iusto voluptates ullam? Explicabo, reiciendis animi. Ducimus porro dolorum inventore?</p>
      <p>$3.79</p>
    </article>
  `;
  return homePage;
}