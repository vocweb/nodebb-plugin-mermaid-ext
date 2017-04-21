var splitData = require('./split');
var winston = require('winston');

var Renderer = {};

Renderer.render = function(text, delimiters) {
  'use strict';
  var data = [{type: 'text', data: text}];
  var i;
  for (i = 0; i < delimiters.length; i++) {
    var delimiter = delimiters[i];
    data = splitData(data, delimiter.left, delimiter.right, delimiter.display || false);
  }

  var output = '';
  for (i = 0; i < data.length; i++) {
    if (data[i].type === 'text') {
      output += data[i].data;
    } else {
        output += '<div class="mermaid">';
        output += data[i].data;
        output += '</div>';
        
        winston.verbose('nodebb-plugin-mermaid: Successfully parsed `' + data[i].data + '`');
    }
  }
  return output;
};

module.exports = Renderer;