'use strict';
var Gallery = function() {
  this.element = document.querySelector('.gallery-overlay');
  this.closeGallery = document.querySelector('.gallery-overlay-close');
  this.elementImage = document.querySelector('.gallery-overlay-image');
  this.activePicture = 0;
  this.pictures = [];
};
Gallery.prototype = {
  setPictures: function(pictures) {
    this.pictures = this.pictures.concat(pictures);
  },
  clearPictures: function() {
    this.pictures = [];
  },
  show: function(number) {
    var that = this;
    this.elementImage.onclick = function() {
      if (that.activePicture === that.pictures.length - 1) {
        that.setActivePicture(0);
      } else {
        that.setActivePicture(that.activePicture + 1);
      }
    };
    this.closeGallery.onclick = this.hide.bind(this);
    this.element.classList.remove('invisible');
    this.setActivePicture(number);
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


