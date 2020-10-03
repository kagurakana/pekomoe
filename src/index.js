import _ from "lodash"
import './css/style.css';
// import img from './assets/imgs/aoripeko.jpg'

import printMe from './print.js';
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.innerHTML = _.join(['Helleo', 'webpack'], ' ');
  element.appendChild(btn);
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.classList.add('hello');
  // var myIcon = new Image();
  // myIcon.src = img;
  // element.appendChild(myIcon)
  return element;
}

document.body.appendChild(component());