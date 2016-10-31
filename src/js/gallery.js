'use strict';
var Gallery = function() {
  this.element = document.querySelector('.gallery-overlay');
  this.closeGallery = document.querySelector('.gallery-overlay-close');
  this.elementImage = document.querySelector('.gallery-overlay-image');
  this.activePicture;
  this.pictures = [];
};
Gallery.prototype = {
  setPictures: function(pictures) {
    this.pictures = pictures;
  },
  show: function(number) {
    var that = this;
    this.number = number;
    this.elementImage.onclick = function() {
      if (number === that.pictures.length - 1) {
        that.setActivePicture(0);
        number = 0;
        number++;
      } else {
        that.setActivePicture(number + 1);
        number++;
      }
    };
    this.closeGallery.onclick = this.hide.bind(this);

    this.element.classList.remove('invisible');
    this.setActivePicture(this.number);
  },
  hide: function() {
    this.element.classList.add('invisible');
    this.element.onclick = null;
    this.closeGallery.onclick = null;
    this.elementImage.onclick = null;
  },
  setActivePicture: function(number) {
    this.activePicture = number;
    this.elementImage.src = this.pictures[number].preview ? this.pictures[number].preview : this.pictures[number].url;
    this.element.querySelector('.likes-count').textContent = this.pictures[number].likes;
    this.element.querySelector('.comments-count').textContent = this.pictures[number].comments;
  }
};

module.exports = new Gallery();
