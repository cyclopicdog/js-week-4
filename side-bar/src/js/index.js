// import the SideMenu component from the Sidemenu.js file
import SideMenu from './sideMenu';
// create a new object of the class SideMenu
const menu = new SideMenu('closed');
// get the side menu element by calling .mount() on the object
//menu.mount();
// append the element into the element with class .side-content that is already in the HTML document
const container = document.querySelector('.side-content');
container.appendChild(menu.mount());
