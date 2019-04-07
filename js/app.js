'use strict';
// ------
// 
// Global variables
// 
// ------

var container = document.getElementById('container');
var PRODUCTS = {};
var totalVotesOnPage = 0;
var previousProducts = [];
var currentProducts = [];
var MINIMUM_NUMBER = 0;
var MAXIMUM_NUMBER = 5;

var productArray = [
  ['Bag', 'bag', './img/bag.jpg'],
  ['Banana', 'banana', './img/banana.jpg'],
  ['Bathroom', 'bathroom', './img/bathroom.jpg'],
  ['Boots', 'boots', './img/boots.jpg'],
  ['Breakfast', 'breakfast', './img/breakfast.jpg'],
  ['Bubblegum', 'bubblegum', './img/bubblegum.jpg'],
  ['Chair', 'chair', './img/chair.jpg'],
  ['Cthulhu', 'cthulhu', './img/cthulhu.jpg'],
  ['Dog-duck', 'dog-duck', './img/dog-duck.jpg'],
  ['Dragon', 'dragon', './img/dragon.jpg'],
  ['Pen', 'pen', './img/pen.jpg'],
  ['Pet-sweep', 'pet-sweep', './img/pet-sweep.jpg'],
  ['Scissors', 'scissors', './img/scissors.jpg'],
  ['Shark', 'shark', './img/shark.jpg'],
  ['Sweep', 'sweep', './img/sweep.jpg'],
  ['Tauntaun', 'tauntaun', './img/tauntaun.jpg'],
  ['Unicorn', 'unicorn', './img/unicorn.jpg'],
  ['Usb', 'usb', './img/usb.jpg'],
  ['Water-can', 'water-can', './img/water-can.jpg'],
  ['Wine-glass', 'wine-glass', './img/wine-glass.jpg']
];

// -----------------
// 
// Constructor function
// 
// -----------------

function Product(name, HTMLid, imgFilePath){
  this.name = name;
  this.imgFilePath = imgFilePath;
  this.HTMLid = HTMLid;
  this.totalVotes = this.totalViews = 0;
  
  PRODUCTS[this.HTMLid] = this;
}

Product.prototype.calculatePercent = function (){
  return this.totalVotes / this.totalViews;
};


// function newProductArrayGeneration(){
//   Add the for loop just below and stick the function call some place smart
// }

for(var i = 0; i < productArray.length; i++){
  new Product(productArray[i][0], productArray[i][1], productArray[i][2]);
  // put this into the funtion above later
}

Product.prototype.render = function(parentId){
  
  var parent = document.getElementById(parentId);

  var img = document.createElement('img');
  img.setAttribute('id', this.HTMLid);
  img.setAttribute('src', this.imgFilePath);
  img.setAttribute('class', 'product');

  parent.appendChild(img);
};

function randomGenerator(productArray){
// ToDo : Randomly select 3 new images
// keep track of total views for each product

  var randomNumber = Math.floor(Math.random() * 20);

  console.log(productArray);
  // console.log(productArray.length);
  console.log(randomNumber);
}

// for (i = 0; i < 3; i++) {
//   var randomIndex = randomGenerator(0, productArray.length);
//   while(previousProducts.includes(randomIndex)){
//     randomIndex = randomGenerator(0, productArray.length);
//   }
//   previousProducts.push(randomIndex);
// }
// while((i = previousProducts.shift()) !== 3) {
//  console.log(previousProducts);
// }


function addCurrentSetOfImages(event){  
  // add them to an array?

  // event.trigger.id = this.HTMLid;
  // event.trigger.src = this.imgFilePath;
  // console.log('event.trigger.id');

}

// ------------------------
// 
// Displaying to the DOM
// 
// -------------------------

function displayResults(){
  var resultListCellElement = document.getElementById('resultListCell');
  var h3 = document.createElement(h3);
  h3.textContent = 'Most Voted Products (High to Low)';
  resultListCellElement.appendChild(h3);

  var ol = document.createElement('ol');
  ol.setAttribute('id', 'orderedResultList');
  resultListCellElement.appendChild(ol);

  for(var i = 0; i < productArray.length; i++){
    var li = document.createElement('li');

    // Need to grab the total votes for each project
    // they are undefined at this point

    li.textContent = 'votes for ' + PRODUCTS[productArray[i][1]].name;
    ol.appendChild(li);
  }
}

function removeListener(){
  container.removeEventListener('click', handleClick);
}

// ------------------
// 
// Event Handler
// 
// ------------------


function handleClick(event) {
  if(event.target.className === 'product'){
    totalVotesOnPage++;
    PRODUCTS[event.target.id].totalVotes++;

    if(totalVotesOnPage === MAXIMUM_NUMBER){
      removeListener();
      displayResults();
      return;
    }
    randomGenerator();
    addCurrentSetOfImages(event);
  }
}

container.addEventListener('click', handleClick);

// Test Display Data 

var boots = new Product('Boots', 'boots', './img/boots.jpg');
boots.render('item_1');
var bag = new Product('Bag', 'bag', './img/bag.jpg');
bag.render('item_2');
var breakfast = new Product('Breakfast', 'breakfast', './img/breakfast.jpg');
breakfast.render('item_3');

// -------------------------
// 
// Bar Chart code goes here
// 
// --------------------------

// var  resultsBarChart = document.getElementById('barChart');

// function chartRender(){
//      Shows the bar chart on the page
// }

