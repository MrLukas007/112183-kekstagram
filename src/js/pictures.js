'use strict';
var load = require('./load');
var Picture = require('./picture');
var gallery = require('./gallery');

(module.exports = function() {
  var isMore = true;
  var PAGE_SIZE = 6;
  var pageNumber = 0;
  var renderProperties = {
    from: pageNumber * PAGE_SIZE,
    to: pageNumber * PAGE_SIZE + PAGE_SIZE,
    filter: 'filter-popular'
  };
  var URL = 'http://localhost:1507/api/pictures';
  var THROTTLE_DELAY = 100;
  var filter = document.querySelector('.filters');
  var container = document.querySelector('.pictures');

  filter.classList.add('hidden');

//Отрисовка списка
  var renderImages = function(images) {
    if (!images.length) {
      isMore = false;
    }
    images.forEach(function(image, counter) {
      container.appendChild(new Picture(image, counter + pageNumber * PAGE_SIZE).element);
    });
    gallery.setPictures(images);
    filter.classList.remove('hidden');
  };

  var setFilterProperties = function() {
    renderProperties.from = pageNumber * PAGE_SIZE;
    renderProperties.to = pageNumber * PAGE_SIZE + PAGE_SIZE;
  };

  var isBottomReached = function() {
    var GAP = 100;
    var footerElement = document.querySelector('footer');
    var footerPosition = footerElement.getBoundingClientRect();
    return footerPosition.top - window.innerHeight - GAP <= 0;
  };

  var recursiveLoad = function() {
    load(URL, renderProperties, function(data) {
      renderImages(data);
      if (isBottomReached() && isMore) {
        pageNumber++;
        setFilterProperties();
        recursiveLoad();
      }
    });
  };

//Применение фильтров
  var setFiltersEnabled = function() {
    filter.addEventListener('change', function(evt) {
      if (evt.target.name === 'filter') {
        gallery.clearPictures();
        container.innerHTML = '';
        isMore = true;
        pageNumber = 0;
        setFilterProperties();
        renderProperties.filter = evt.target.id;
        recursiveLoad();
      }
    });
  };

  var setScrollEnabled = function() {
    var lastCall = Date.now();

    window.addEventListener('scroll', function() {
      if (Date.now() - lastCall >= THROTTLE_DELAY && isMore && isBottomReached()) {
        pageNumber++;
        setFilterProperties();
        load(URL, renderProperties, renderImages);
        lastCall = Date.now();
      }
    });
  };

  recursiveLoad();
  setFiltersEnabled();
  setScrollEnabled();

})();


