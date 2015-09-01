/*! Mass Input - v0.1.0 - 2015-08-20
* http://github.com/azhuzhu/mass-input
* Copyright (c) 2015 Yuming Zhu; Licensed , ,  */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // For CommonJS and CommonJS-like environments where a window with jQuery
    // is present, execute the factory with the jQuery instance from the window object
    // For environments that do not inherently posses a window with a document
    // (such as Node.js), expose a Mass-input-making factory as module.exports
    // This accentuates the need for the creation of a real window or passing in a jQuery instance
    // e.g. require("bootstrap-mass-input")(window); or require("bootstrap-mass-input")($);
    module.exports = global.window && global.window.$ ?
      factory( global.window.$ ) :
      function( input ) {
        if ( !input.$ && !input.fn ) {
          throw new Error( "mass-input requires a window object with jQuery and a jQuery instance" );
        }
        return factory( input.$ || input );
      };
  } else {
    // Browser globals
    factory(jQuery, window);
  }
}(function ($, window) {

  "use strict"; // jshint ;_;

  /* MASS-INPUT PUBLIC CLASS DEFINITION
     ==================================== */
  var MassInput = function (element, options) {
    var _self = this

    this.$element = $(element)

    // Extend options
    this.options = $.extend(true, {}, $.fn.massinput.defaults, { values: this.$element.val() }, this.$element.data(), options)

    //TODO for initializer

  }

  MassInput.prototype = {
    constructor: MassInput,

    //TODO for functions
  }

  /* MASS-INPUT JQUERY PLUGIN DEFINITION
     =================================== */
  var old = $.fn.massinput

  $.fn.massinput = function (option, param) {
    var value
      , args = []

    Array.prototype.push.apply( args, arguments );

    var elements = this.each(function () {
      var $this = $(this)
        , data = $this.data('bs.massinput')
        , options = typeof option === 'object' && option

      if (typeof option === 'string' && data && data[option]) {
        args.shift()
        value = data[option].apply(data, args)
      } else {
        if (!data && typeof option !== 'string' && !param) {
          $this.data('bs.massinput', (data = new MassInput(this, options)))
          $this.trigger('massinput:initialize')
        }
      }
    })

    return typeof value !== 'undefined' ? value : elements;
  }

  $.fn.massinput.defaults = {
    minWidth: 60,
    minLength: 0,
    allowEditing: true,
    allowPasting: true,
    limit: 0,
    autocomplete: {},
    typeahead: {},
    showAutocompleteOnFocus: false,
    createTokensOnBlur: false,
    delimiter: ',',
    beautify: true,
    inputType: 'text'
  }

  $.fn.massinput.Constructor = MassInput


 /* MASS-INPUT NO CONFLICT
  * ====================== */

  $.fn.massinput.noConflict = function () {
    $.fn.massinput = old
    return this
  }

  return MassInput;
}));