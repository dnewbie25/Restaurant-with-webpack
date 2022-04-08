(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([e.id,"*{\r\n  margin:0;\r\n  padding:0;\r\n  box-sizing:border-box;\r\n}\r\n\r\nhtml{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nbody{\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  font-family: sans-serif;\r\n  background-color: rgb(190, 238, 238);\r\n}\r\n\r\nh1{\r\n  margin: 2rem;\r\n  text-align: center;\r\n}\r\n.navHorizontal{\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  list-style: none;\r\n}\r\n\r\n.navHorizontal *{\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: blue;\r\n}\r\n\r\n.navHorizontal li{\r\n  margin-right: 1rem;\r\n}\r\n\r\n#content{\r\n  padding: 1rem;\r\n}\r\n\r\nmain{\r\n  margin: 0 auto;\r\n  margin-top: 2rem;\r\n  max-width: 1000px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\narticle{\r\n  flex-basis: 30%;\r\n}\r\n\r\nimg{\r\n  width: 200px;\r\n  margin-left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\nform{\r\n  text-align: center;\r\n  margin-top: 2rem;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n}\r\n\r\ninput{\r\n  font-size: 1rem;\r\n  border-radius: 5px;\r\n  padding: 3px;\r\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=t.base?l[0]+t.base:l[0],p=i[s]||0,d="".concat(s," ").concat(p);i[s]=p+1;var u=r(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,t);t.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);n[c].references--}for(var l=t(e,o),s=0;s<i.length;s++){var p=r(i[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=l}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},213:(e,n,r)=>{e.exports=r.p+"daf94066d3c33b1e446e.jpg"},144:(e,n,r)=>{e.exports=r.p+"c52334d64a78d6621c9e.jpg"},228:(e,n,r)=>{e.exports=r.p+"44872ee455a168fd7561.jpg"}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(213),n=r(144),t=r(228);function o(){const r=document.createElement("main");return r.innerHTML=`<article id="pizza">\n      <img src="${i(t)}" alt="pizza">\n      <h2>Pizza</h2>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, dolore id sequi nulla expedita odio possimus, rerum quaerat dolores, iusto voluptates ullam? Explicabo, reiciendis animi. Ducimus porro dolorum inventore?</p>\n      <p>$12.99</p>\n    </article>\n    <article id="hot dog">\n      <img src="${i(n)}" alt="hot dog">\n      <h2>Hot Dogs</h2>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, dolore id sequi nulla expedita odio possimus, rerum quaerat dolores, iusto voluptates ullam? Explicabo, reiciendis animi. Ducimus porro dolorum inventore?</p>\n      <p>$2.99</p>\n    </article>\n    <article id="cake">\n      <img src="${i(e)}" alt="cake">\n      <h2>Cakes</h2>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis, dolore id sequi nulla expedita odio possimus, rerum quaerat dolores, iusto voluptates ullam? Explicabo, reiciendis animi. Ducimus porro dolorum inventore?</p>\n      <p>$3.79</p>\n    </article>\n  `,r}function i(e){const n=new Image;return n.src=e,n.src}var a=r(379),c=r.n(a),l=r(795),s=r.n(l),p=r(569),d=r.n(p),u=r(565),m=r.n(u),f=r(216),h=r.n(f),v=r(589),g=r.n(v),b=r(426),y={};y.styleTagTransform=g(),y.setAttributes=m(),y.insert=d().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=h(),c()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;const x=document.querySelector("#content"),w=document.createElement("nav"),E=document.createElement("ul"),C=document.createElement("h1");C.textContent="My Restaurant",E.classList.add("navHorizontal");for(let e=0;e<2;e++){const n=document.createElement("li");e%2==0?(n.innerHTML='<a href="#">Home</a>',E.appendChild(n)):(n.innerHTML='<a href="#">Contact</a>',E.appendChild(n))}w.appendChild(E),x.appendChild(w),x.appendChild(C),x.insertAdjacentElement("beforeend",o()),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(e=>{const n=e.target.textContent;"Home"===n?(x.innerHTML="",x.appendChild(w),x.appendChild(C),x.insertAdjacentElement("beforeend",o())):"Contact"===n&&(x.innerHTML="",x.appendChild(w),x.insertAdjacentElement("beforeend",function(){const e=document.createElement("form");return e.innerHTML='\n    <label for="name">Name</label>\n    <input type="text" id="name" placeholder="name">\n    <label for="email">Email</label>\n    <input type="email" placeholder="email" id="email">\n    <label for="phone">Phone</label>\n    <input type="tel" placeholder="Phone" id="phone">\n    <input type="submit" value="Enviar!">\n  ',e}()))}))}))})()})();