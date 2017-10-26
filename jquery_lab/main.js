
// DEMO: Attributes, Classes & Removal
// 1. Set “href” attribute of all links on the page to “http://www.nyan.cat”.
// When a jQuery that changes nodes, it will do that effect on all the nodes
// of the jQuery list without needing to iterate.
$('a').attr('href', 'http://www.nyan.cat');

// Reading from a jQuery list will always return information about the first
// node in the list.
$('a').attr('href') // <-- Only the value for `href` of the first `a` is returned

// 2. Remove the “blue” class from all shapes and replace it with the “red” class.
// Nearly all jQuery DOM manipulation methods return the jQuery list, allowing
// to chain them as long as we want as shown below.
$('.blue').removeClass('blue').addClass('red');

// EXERCISE: Practice
$('a').attr('class', 'highlight');
$('.circle').removeClass('circle').addClass('diamond');
$('#purple-container .shape, #green-container .shape').remove();

// EXERCISE: html, children and parent
// 1. Get “html” of the reset button.
$('#reset').html()
// 2. Try to get “html” of all links.
// jQuery lists come with a `map` method. But be careful because the arguments
// that its callback receives are not the same order as for `map` for vanilla
// javascript arrays.
$('a').map((value, index, array) => {
  // `value` here is actually the index
  // `index` is actually value
  // And, `array` does not exists
	console.log(value, index)
})
// The `value`s when mapping of a jQuery list will be nodes inside. They are
// regular  DOM nodes. You can't use jQuery methods (like html(), addClass()
// , removeClas(), attr(...), etc) on them.
$('a').map((index, value) => value.innerHTML)
// To jQuery methods one regular DOM nodes, you must wrap it with the jQuery
// function (i.e. $(domNode)) which will return the node inside a jQuery list
// allowing to use all jQuery methods on it.
$('a').map((index, value) => $(value).html())

// 3. Change “reset” button to read “Launch Doggos!”
$('#reset').html('Launch Doggos!');

// EXERCISE: Practice

$('td').html('yass');
$('td').parent();
// Use the .parents(<css-query>) methods to search ancestor nodes
$('td').parents('table');

// DEMO: Creating nodes, appending and prepending

// 1.
const diamond = $(`
  <div class="small blue diamond shape">
  </div>
`);

// 2.
$('.container').append(diamond);

// 3.
$('ul').prepend($(`
  <li>
    <a href="http://www.nyan.cat">Nyan Cat</a>
  </li>
`));

// EXERCISE: Practice

// 1.
const container = $(`<div class="container"></div>`)

// 2.
$('section:first-child')
// returns [section, prevObject: r.fn.init(1)]
$('section').first()
// returns [section, prevObject: r.fn.init(5)]
$('section').eq(0)
// returns [section, prevObject: r.fn.init(5)]
$('section')[0]
// returns <section></section> <-- a DOM node


$('section:first-child').prepend(container)
$('section:first-child').prepend($(`<div class="container"></div>`))

// 3.
$('section:first-child').prepend(
  $(`<div class="container"></div>`).append($(`
    <div class="small black circle shape"></div>
  `))
)

// DEMO
$('.blue.circle').on('mouseenter', event => {
  console.log('Blue circle go away!')
})

$('.blue.circle').on('mouseenter', event => {
  console.log('Blue circle go away!')
})

$('#button-1').on('click', event => {
  $('.shape').remove()
})









// bump
