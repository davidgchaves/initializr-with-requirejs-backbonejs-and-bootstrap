require.config({

  paths: {
    'jquery': 'libs/jquery-1.11.0',
    'underscore': 'libs/underscore',
    'backbone': 'libs/backbone',
    'bootstrap': 'libs/bootstrap'
  },

  shim: {
    'underscore': {
      exports: '_'
    },

    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },

    'bootstrap': {
      deps: [
        'jquery'
      ]
    }
  }
});

require([
  'backbone',
  'app/app'
], function (Backbone, App) {
  'use strict';

  App.initialize();
  App.displayTime();
});
