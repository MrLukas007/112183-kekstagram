'use strict';
var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery');

(module.exports = function() {
  var PAGE_SIZE = 6;
  var pageNumber = 0;
  var renderProperties = {
    from: pageNumber * PAGE_SIZE,
    to: pageNumber * PAGE_SIZE + PAGE_SIZE,
    filter: 'filter-popular'
  };
  var URL = 'http://localhost:1507/api/pictures';
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

//Применение фильтров
  var setFiltersEnabled = function() {
    filter.addEventListener('change', function(evt) {
      if (evt.target.name == 'filter') {
        container.innerHTML = '';
        pageNumber = 0;
        renderProperties.filter = evt.target.id;
        load(URL, renderImages, renderProperties);
      }
    });
  };

  load(URL, renderImages, renderProperties);
  setFiltersEnabled();

})();


