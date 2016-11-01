'use strict';
var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery');

(module.exports = function() {
  var filter = document.querySelector('.filters');
  filter.classList.add('hidden');

//Отрисовка списка
  var container = document.querySelector('.pictures');
  var template = document.querySelector('template');
  var templateContainer = 'content' in template ? template.content : template;
  var imageElement = templateContainer.querySelector('a').cloneNode(true);
  var renderImages = function(images) {
    images.forEach(function(image, counter) {
      container.appendChild(new Picture(image, counter, imageElement));
    });
    gallery.setPictures(images);
  };
  var url = 'http://localhost:1507/api/pictures?callback=createCallback';
  load(url, renderImages);
})();




