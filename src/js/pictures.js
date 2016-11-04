'use strict';
var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery');

(module.exports = function() {
  var PAGE_SIZE = 6;
  var pageNumber = 0;
  var URL = 'http://localhost:1507/api/pictures';
  var THROTTLE_DELAY = 100;
  var filterDefault = 'filter-popular';
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
  var deleteAllElements = function() {
    var arr = container.querySelectorAll('a');
    arr.forEach(function(elem) {
      container.removeChild(elem);
    });
  };
//Применение фильтров
  var setFiltersEnabled = function() {
    filter.addEventListener('change', function(evt) {
      if (evt.target.name == 'filter') {
        deleteAllElements();
        load(URL, renderImages, evt.target.id);
      }
    });
  };

  load(URL, renderImages, filterDefault);
  setFiltersEnabled();
  
})();


