'use strict';
// ------
// 
// Global variables
// 
// ------

var container = document.getElementById('container');

var PRODUCTS = {};
var totalVotesOnPage = 0;
var previousIndexProducts = [];
var currentProducts = [];
var MINIMUM_NUMBER = 0;
var MAXIMUM_NUMBER = 6;  //Change back to 20 when it is all working

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
  ['Sweep', 'sweep', './img/sweep.png'],
  ['Tauntaun', 'tauntaun', './img/tauntaun.jpg'],
  ['Unicorn', 'unicorn', './img/unicorn.jpg'],
  ['Usb', 'usb', './img/usb.gif'],
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

function randomNumberGenerator(){

// add global variables for make less brittle

  return Math.floor(Math.random() * 20);
}

function randomImageGenerator(){
  currentProducts =[];

  for (i = 0; i < 3; i++) {
    var randomIndex = randomNumberGenerator(MINIMUM_NUMBER, productArray.length);
    while(currentProducts.includes(randomIndex)){
      randomIndex = randomNumberGenerator(MINIMUM_NUMBER, productArray.length);
      console.log('random Index', randomIndex);
    }
    currentProducts.push(randomIndex);
    // console.log(currentProducts);
  }
  previousIndexProducts = currentProducts;

  if(previousIndexProducts.length === 6){
    previousIndexProducts.shift();
    previousIndexProducts.shift();
    previousIndexProducts.shift();

    // console.log(previousIndexProducts);
  }

}

function addCurrentSetOfImages(){ 
  for(i = 0; i < currentProducts.length; i++){
    PRODUCTS[productArray[currentProducts[i]][1]].render(`item_${i+1}`);
  }

  // event.trigger.id = this.HTMLid;
  // event.trigger.src = this.imgFilePath;
  // console.log('event.trigger.id');

}

function addProducts() {
  // Do something
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
    li.textContent = PRODUCTS[productArray[i][1]].totalVotes + ' votes for ' + PRODUCTS[productArray[i][1]].name;
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
      chartRender();
      return;
    }
    randomImageGenerator();
    addCurrentSetOfImages();
  }
}

container.addEventListener('click', handleClick);

// -------------------------
// 
// Bar Chart code goes here
// 
// --------------------------

var  resultsBarChart = document.getElementById('barChart');

function chartRender(){
  var canvas = document.getElementById('voteResultsBarChart');
  var ctx = canvas.getContext('2d');

  var data = {
    labels: ['Cthulhu', 'Dragon', 'Water-can', 'Wine-glass', 'Bubblegum'],
    datasets: [{
      
      label: 'Number of votes',
      data: [3, 10, 6, 8, 5],
      backgroundColor:[
        'rgba(255, 99, 132, .6)',
        'rgba(54, 162, 235, .6)',
        'rgba(255, 205, 86, .6)',
        'rgba(75, 192, 192, .6)',
        'rgba(255, 159, 64, .6)',

      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(255, 159, 64)',
      ],
      borderWidth: 1,
    }],
  };

  var barChartConfig = {
    type: 'bar',
    data: data,
    options: {
      title: {
        display: true,
        text: 'Voting ResultsData'
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  var barChart = new Chart(ctx, barChartConfig);

}

// chartRender();

// -------------
//
// Add Local Storage Functionality Here`
//
// ---------------

// Add info to Local Storage
// function addToStorage(){
// something like this
// var name = JSON.stringify('something here');
// var productName = localStorage.setItem('name');

// }

// Get info from Local Storage
// function getFromStorage(){
//  var productName = localStorage.getItem('name');
//  var somethingHere = JSON.parse('productName');
// }


// Reset Local Storage
// need to reset the storage so that upon 
// first visit the web application, the state will be set to null.
// RESET_GLOBAL_OBJECT



// Test Display Data 
// Delete as soon as random images generator is working

var boots = new Product('Boots', 'boots', './img/boots.jpg');
boots.render('item_1');
var bag = new Product('Bag', 'bag', './img/bag.jpg');
bag.render('item_2');
var breakfast = new Product('Breakfast', 'breakfast', './img/breakfast.jpg');
breakfast.render('item_3');

