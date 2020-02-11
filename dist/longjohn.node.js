(function() {
  // Don't load if async traces are enabled
  if (process.execArgv.indexOf('--async-stack-traces') === -1) {
    require('./longjohn');
  }

}).call(this);
