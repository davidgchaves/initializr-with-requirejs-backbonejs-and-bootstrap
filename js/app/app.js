define([
  'jquery',
  'bootstrap'
  ], function ($, bootstrap) {
    'use strict';

    var initialize = function () {
        $('.jumbotron .container h1').html('<h1>Hello World from JS!</h1>');
    };

    var currentTime = function () {
      var date = new Date();
      return [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
    };

    var displayTime = function () {
      var node = [
        '<div class="alert">',
          '<button type="button" class="close" data-dismiss="alert">&times;</button>',
          'The time is ',
          currentTime(),
        '</div>'
      ].join('');

      $('footer').html(node);
    };

    return {
      initialize: initialize,
      displayTime: displayTime
    }
  }
)
