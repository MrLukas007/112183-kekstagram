'use strict';
var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery');

(module.exports = function() {
  var filter = document.querySelector('.filters');
  filter.classList.add('hidden');

//Отрисовка списка
  var container = document.querySelector('.pictures');
  var renderImages = function(images) {
    images.forEach(function(image, counter) {
      new Picture(image, counter).remove();
      container.appendChild(new Picture(image, counter).element);
    });
    gallery.setPictures(images);
    filter.classList.remove('hidden');
  };
  var url = 'http://localhost:1507/api/pictures';
  load(url, renderImages, 'filter-popular');

  var setFiltersEnabled = function() {
    filter.addEventListener('change', function(evt) {
      if (evt.target.name == 'filter') {
        load (url, renderImages, evt.target.id);
      }
    });
  }
  setFiltersEnabled ();
})();

