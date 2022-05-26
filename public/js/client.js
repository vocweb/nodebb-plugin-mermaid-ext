"use strict";
import mermaid from 'mermaid';
/* global document $ config */

$(document).ready(function() {
  // Add the $ composer button
  var Mermaid = {};
  
  $(window).on('action:topic.loaded', function() {
    mermaid.init(undefined, ".mermaid");
  });
  
  $(window).on('action:posts.edited', function() {
    mermaid.init(undefined, ".mermaid");
  });

  $(window).on('action:composer.enhanced', function() {
    Mermaid.prepareFormattingTools();
  });
  
  /**
   * Check if previewRender is enabled
   */
  if(config.mermaid.previewRender === 'on') {
    $(window).on('action:composer.preview', function() {
      mermaid.init(undefined, ".mermaid");
    });
  }

  /**
  * Add a sitemap button to the composer
  */
  Mermaid.prepareFormattingTools = function() {
    require(['composer/formatting', 'composer/controls'], function(formatting, controls) {
      formatting.addButtonDispatch('sitemap', function(textarea, selectionStart, selectionEnd) {
        if (selectionStart === selectionEnd) {
          controls.insertIntoTextarea(textarea, '```mermaid\ngraph TD;\n```');
          controls.updateTextareaSelection(textarea, selectionStart + 11, selectionStart + 20);
        } else {
          controls.wrapSelectionInTextareaWith(textarea, '```mermaid\n', '\n```');
          controls.updateTextareaSelection(textarea, selectionStart + 11, selectionEnd + 11);
        }
      });
    });
  };

});