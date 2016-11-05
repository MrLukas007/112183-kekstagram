'use strict';
var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery');

(module.exports = function() {
  var PAGE_SIZE = 6;
  var pageNumber = 0;
  var renderProperties = {
    from: pageNumber * PAGE_SIZE,
    get to() { return this.from + PAGE_SIZE;},
    filter: 'filter-popular'
  };
  var URL = 'http://localhost:1507/api/pictures';
  var THROTTLE_DELAY = 100;
  var filter = document.querySelector('.filters');
  var container = document.querySelector('.pictures');

  filter.classList.add('hidden');

//Отрисовка списка
  var renderImages = function(images) {
    images.forEach(function(image, counter) {
      container.appendChild(new Picture(image, counter).element);
    });
    gallery.setPictures(images);
    filter.classList.remove('hidden');
  };
//Удаление всех отрисованных элементов
//   var deleteAllElements = function() {
//     var arr = container.querySelectorAll('a');
//     arr.forEach(function(elem) {
//       container.removeChild(elem);
//     });
//   };
//Применение фильтров
  var setFiltersEnabled = function() {
    filter.addEventListener('change', function(evt) {
      if (evt.target.name == 'filter') {
        // deleteAllElements();
        container.innerHTML = '';
        pageNumber = 0;
        renderProperties.filter = evt.target.id;
        load(URL, renderImages, renderProperties);
      }
    });
  };

  load(URL, renderImages, renderProperties);
  setFiltersEnabled();


  //
  // var isNextPageAvailable = function(images, page, pageSize) {
  //   return page < Math.floor(images.length / pageSize);
  // };

  // var isBottomReached = function() {
  //   var GAP = 100;
  //   var footerElement = document.querySelector('footer');
  //   var footerPosition = footerElement.getBoundingClientRect();
  //   return footerPosition.top - window.innerHeight - GAP <= 0;
  // };
  //
  // var renderNextPages = function(reset) {
  //   if (reset) {
  //     pageNumber = 0;
  //     container.innerHTML = '';
  //   }
  //
  //   while(isBottomReached()) {
  //     pageNumber++;
  //     load(URL, renderImages, renderProperties);
  //   }
  //   // &&
  //   // isNextPageAvailable(images, pageNumber, PAGE_SIZE)) {
  //   //   load(URL, renderImages, renderProperties);
  //   //   pageNumber++;
  //   // }
  // };
  //
  //
  // var setScrollEnabled = function() {
  //   var lastCall = Date.now();
  //
  //   window.addEventListener('scroll', function(evt) {
  //     if (Date.now() - lastCall >= THROTTLE_DELAY) {
  //       renderNextPages();
  //       lastCall = Date.now();
  //     }
  //   });
  // };
  // setScrollEnabled();
})();


