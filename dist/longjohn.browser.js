(function() {
  // Chrome natively supports async stack traces
  if (navigator.indexOf('Chrome/') === -1) {
    require('./longjohn');
  }

}).call(this);
