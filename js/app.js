'use strict';

var container = document.getElementById('container');

function handleClick(event) {
  console.log(event.target.id);
}

container.addEventListener('click', handleClick);


// 
