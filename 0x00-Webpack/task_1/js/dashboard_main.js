/* eslint-disable import/no-unresolved */
const $ = require('jquery');
const _ = require('lodash');

let counter = 0;

$('<p>Holberton Dashboard</p>').appendTo('body');
$('<p>Dashboard data for the students</p>').appendTo('body');
$('<button>Click here to get started</button>').appendTo('body');
$("<p id='count'></p>").appendTo('body');
$('<p>Copyright - Holberton School</p>').appendTo('body');

function updateCounter() {
  // eslint-disable-next-line no-plusplus
  counter++;
  $('#count').html(`${counter} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
