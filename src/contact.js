export default function contact(){
  const form = document.createElement('form');
  form.innerHTML=
  `
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="name">
    <label for="email">Email</label>
    <input type="email" placeholder="email" id="email">
    <label for="phone">Phone</label>
    <input type="tel" placeholder="Phone" id="phone">
    <input type="submit" value="Enviar!">
  `;
  return form;
}