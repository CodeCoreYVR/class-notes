
// S E L E C T I N G  N O D E S

// `document.getElementById`
// ☝️ a method that returns the first node in the document
// with a given id. It's fastest all the different selector methods.

// usage:
let toxicTim = document.getElementById('toxic-tim');

// <Any-Node>.querySelector
// querySelector is a method available on nodes that returns the first node
// from its descendents that matches a given CSS query.
// You can use any CSS selector you've learned.

// usage:
let teamAquamarineHeading = document
  .querySelector('.team.aquamarine')
  .querySelector('h1');
let lastDoggoOfTeamSalmon = document
  .querySelector('.team.salmon .doggo:last-child');

// <Any-Node>.querySelectorAll
// querySelectorAll is a method available on nodes that returns all nodes
// from its descendents that match a given CSS query.

// usage:
let allTeams = document.querySelectorAll('.team');
let allDoggos = document.querySelectorAll('.doggo');

// All nodes obtained with `querySelector` share the prototype `Node` while
// the object returned by `querySelectorAll` is not a `Node`. It is a `NodeList`
// which is an array-like (but not an `Array`) that contains all the matching
// nodes. You can iterate with a loop like an array. You can even `forEach`
// with it.
//
// E X E R C I S E: Picking Doggos
// 1. Select Knight Nicholas by id
document.getElementById('knight-nicholas');
document.querySelector('#knight-nicholas');
document.querySelectorAll('#knight-nicholas')[0];

// 2. Select Moneybags Michael & Larry The Lion
document.querySelectorAll('#moneybags-michael, #larry-the-lion');

// 3. Select all Team Khaki Doggos but the first
document.querySelectorAll('.team.khaki .doggo:not(:first-child)')

// 4. Select the first doggo in every team
document.querySelectorAll('.team .doggo:first-child');

// N A V I G A T I N G  N O D E S
// Use the properties `.nextElementSibling` & `.previousElementSibling` to
// select the surrounding nodes of a node.

// usage:
toxicTim.nextElementSibling // returns node for bumble-bertha
toxicTim.previousElementSibling // returns `null`, because there are no sibling
// nodes before it

// Use the property `.parentElement` to grab the parent node of a node
// usage:
toxicTim.parentElement // returns the roster div
// All properties or methods that return a node can be chained
toxicTim.parentElement.parentElement // returns the team salmon node

// Use the property `.children` to grab all the children nodes inside of
// an HTMLCollection (not be confused with a NodeList). Their methods are
// slightly different.
let teamSalmon = document.querySelector('.team.salmon')
teamSalmon.children
teamSalmon.children[1].children // get all doggos of team salmon using children

// Use the `.matches` method to test whether or not a node matches a CSS query.
// usage:
toxicTim.matches('div') // true
toxicTim.matches('p') // false
toxicTim.matches('#toxic-tim') // true
toxicTim.matches('.doggo') // true
toxicTim.matches('.col-md-3') // false

// M A N I P U L A T I N G  N O D E S

// Changing inline styles
// Nodes have a `style` property which is an object that contains all inline styles
// for the node. You manually assign any CSS property this as a property of the object.
// usage:

/*
toxicTim.style.transform = 'rotateZ(180deg)';
// When assign styles this way, CSS properties composed of multiple words
// must be written in camelCase instead of kebab-case
toxicTim.style.backgroundImage = 'url(images/paws.jpg)';
// Or, they can still be written in kebab-case with the brack notation
toxicTim.style['border-top-right-radius'] = '15px';
*/

// The .style property only returns the inline style of a node (those assigned
// with the html attribute `style`.) To get all styles (from stylesheets and
// browser defaults) of a node, use the function `getComputedStyle`.
// usage:
let toxicTimStyle = getComputedStyle(toxicTim) // will return a big object containing *ALL* calculated
// styles for toxicTim.
toxicTimStyle.borderWidth; // returns "0px"
toxicTimStyle.borderRadius; // returns "0px 15px 0px 0px"

// Use the `.innerHTML` property to get all the HTML content of node as a string.
toxicTim.innerHTML; // returns "<h1>Toxic Tim</h1>"
// Write to it to replace the HTML contents of a node.
// toxicTim.innerHTML = 'PAWS';

// Use the `.outerHTML` property to the node and its contents in HTML as text.
toxicTim.outerHTML;
// Write to it to replace the node entirely
// toxicTim.outerHTML = ''; // This replaces toxicTim with an empty text node

// All standard HTML attributes can be accessed as properties of nodes
toxicTim.id // returns toxic tim's id
// This is very useful for input fields with their `value` attribute to get
// user input
let nameInputField = document.querySelector('#name');
nameInputField.value // returns the current text written in the fields
nameInputField.value = 'thing';

// Classes are special case. Use the `.classList` property to manipulate classes.
// It returns an array-like object of the classes.
toxicTim.classList // returns a list of toxic tim's classes

// To add a class use the method of `classList` `add`:
toxicTim.classList.add('labourer');
toxicTim.classList.add('cancer', 'tumor');
// To remove a class use the `remove` method:
toxicTim.classList.remove('cancer', 'tumor');
// To toggle classes:
toxicTim.classList.toggle('fighter') // removes fighter class
toxicTim.classList.toggle('fighter') // adds the fighter class

// To reliably read & write HTML attributes, use the methods
// `getAttribute` and `setAttribute`. Unlike manipulating standard attributes
// with properties, these methods will work with any attribute including your
// own custom attributes.

// usage:
toxicTim.getAttribute('id') // returns toxic tim's id
toxicTim.setAttribute('data-target', '#bumble-bertha')
// adds a custom attribute, 'data-target' to the toxic-tim node.
// toxicTim.setAttribute('id', 'moneybags-michael')
// replaces toxic tim's id with moneybags-michael

// Use the method `.hasAttribute` to check whether or not a node
// posses a given attribute.
// usage:

toxicTim.hasAttribute('id') // returns true
toxicTim.hasAttribute('href') // returns false
toxicTim.hasAttribute('class') // returns true

// Use the method `.removeAttribute` to remove an attribute.
// usage:
// toxicTim.removeAttribute('id') // removes the id attribute

// Use the `.remove` method to remove a node from the DOM.
// usage:
// toxicTim.remove();


// E X E R C I S E: Vandalise the Arena

// 1. Change the color of all teams to fuchsia
/*
for (let node of document.querySelectorAll('.team')) {
  node.style.backgroundColor = 'fuchsia';
}
*/

/*
document.querySelectorAll('.team').forEach(node => {
  node.style.backgroundColor = 'fuchsia';
})
*/

// 2. Rename all doggos to Rob The Slob
/*
for (let doggo of document.querySelectorAll('.team .doggo')) {
  doggo.innerHTML = '<h1>Rob The Slob</h1>';
}
*/

// 3. Change all doggo pictures to that of a cat from the internet
/*
const catOnTheInternet = 'https://i.imgur.com/MtowCur.jpg';

document.querySelectorAll('.team .doggo').forEach(node => {
  node.style.backgroundImage = `url(${catOnTheInternet})`;
})
*/

// C R E A T I N G  N O D E S
// Use `document.createElement` to create node by giving a tag name. You must
// then use everything you'be learned to manipulate DOM nodes to build it fully.
// This will not be in the document until we add it.

const drillBitDarel = document.createElement('div')
drillBitDarel.id = 'drill-bit-darel';
drillBitDarel.classList.add('doggo', 'fighter');
drillBitDarel.innerHTML = '<h1>Drill Bit Darel</h1>';
drillBitDarel.style.backgroundImage = 'url(./images/drill_bit_darel.jpg)';

// Adding nodes to the DOM
// use the .appendChild method on a parent node to add a node as the last child
// of that parent node.
// usage:
teamSalmon.querySelector('.roster').appendChild(drillBitDarel);

// use the .prepend method to on a parent node to add a node as the first child
// of that parent node
// usage:
const teamKhakiRoster = document.querySelector('.team.khaki > .roster')
teamKhakiRoster.prepend(toxicTim);

// Use `.cloneNode()` to make a copy of a node without its descendents. Use
// `.cloneNode(true)` to make a copy of node including all of its descendents.
const toxicTimClone = toxicTim.cloneNode(true);
teamKhakiRoster.prepend(toxicTim);

// bump
