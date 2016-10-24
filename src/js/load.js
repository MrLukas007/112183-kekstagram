// Тут грузим JSONP


var load = function(url, callback) {
  var script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
  window.createCallback = function(data) {
    callback(data);
  };
};

module.exports = load;
