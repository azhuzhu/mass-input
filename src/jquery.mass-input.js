/*
 * mass-input
 * http://github.com/azhuzhu/mass-input
 *
 * Copyright (c) 2015 Yuming Zhu
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.mass_input = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.mass_input = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.mass_input.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.mass_input.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].mass_input = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

  

}(jQuery));
