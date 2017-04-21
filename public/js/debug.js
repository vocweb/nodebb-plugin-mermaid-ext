"use strict";
/* global document $ config */

$(document).ready(function() {
  
  if(config.mermaid.clientDebug === 'on') {
    console.log("nodebb-plugin-mermaid: Mermaid client debug mode on, registering client side event listeners!");
    
    if(config.mermaid.previewRender === 'on') {
      console.log("nodebb-plugin-mermaid: previewRender enabled.")
    }
    
    $(window).on('action:ajaxify.end', function(event, data) {
      console.log("nodebb-plugin-mermaid: action:ajaxify.end ->");
      console.log(data);
    });

    $(window).on('action:posts.loaded', function(event, data) {
      console.log("nodebb-plugin-mermaid: action:posts.loaded ->");
      console.log(data);
    });

    $(window).on('action:topic.loaded', function(event, data) {
      console.log("nodebb-plugin-mermaid: action:topic.loaded ->");
      console.log(data);
    });

    $(window).on('action:topics.loaded', function(event, data) {
      console.log("nodebb-plugin-mermaid: action:topics.loaded ->");
      console.log(data);
    });

    $(window).on('action:posts.edited', function(event, data) {
      console.log("nodebb-plugin-mermaid: action:posts.edited ->");
      console.log(data);
    });

    $(window).on('action:composer.post.edit', function(event, data) {
      console.log("nodebb-plugin-mermaid: action:composer.post.edit ->");
      console.log(data);
    });
    
    $(window).on('action:composer.preview', function(event, data) {
      console.log("nodebb-plugin-mermaid: action:composer.preview ->");
      console.log(data);
    });

    $(window).on('action:composer.enhance', function(event, data) {
      console.log("nodebb-plugin-mermaid: action:composer.enhance ->");
      console.log(data);
    });

    $(window).on('action:post.tools.load', function(event, data) {
      console.log("nodebb-plugin-mermaid: action:post.tools.load ->");
      console.log(data);
    });
    
  }

});
