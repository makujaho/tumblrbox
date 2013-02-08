/*
 * tumblrboxv2 - Lightbox effect for Tumblr
 * using FancyBox
 *
 * Copyright (c) 2011 Picuous
 * Copyright (c) 2013 makujaho 
 *
 * Version: alpha (goodified => without tracking)
 *
 * Licensed under the MIT license
 *   http://www.opensource.org/licenses/mit-license.php
 */

;(function() {
  
  if(typeof(window.console) === "undefined" || typeof(window.console.log) === "undefined") {
    window.console = {
      debug: function() {},
      log: function() {},
      warn: function() {},
      error: function() {}
    }
  }
  console.debug('tumblrbox');
  
  // Global variables
  var otherlib = false;
  
  if(typeof jQuery != 'undefined') {
    //console.debug('This page is already using jQuery v'+jQuery.fn.jquery);
  } else if (typeof $ == 'function') {
    //console.debug('This page is using another $ library');
    otherlib = true;
  }
  
  // more or less stolen form jquery core and adapted by paul irish
  // shameless stolen again and chained to a fancyBox commit blob
  function load_file(url, success) {
    var script;
    var blob = 'https://raw.github.com/fancyapps/fancyBox/6208e1213bec87cdb6b13b134a3fd3d425802c24/';
    if(url.match(/\.js$/)) {
      script = document.createElement('script');
      script.src = blob+url;
      script.type = 'text/javascript';
    } else {
      script = document.createElement('link');
      script.rel = 'stylesheet';
      script.type = 'text/css';
      script.href = blob+url;
    }
    var head = document.getElementsByTagName('head')[0],
        done = false;
    // Attach handlers for all browsers
    script.onload=script.onreadystatechange = function() {
      if(!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') ) {
        done = true;
        if(success) {
          success();
        }
        script.onload = script.onreadystatechange = null;
        //head.removeChild(script);
      }
    };
    head.appendChild(script);
  }
  load_file('lib/jquery-1.9.0.min.js', function() {
    if(typeof jQuery=='undefined') {
      console.debug('Sorry, but jQuery wasn\'t able to load');
    } else {
      $ = jQuery.noConflict();
      console.debug('loaded '+$.fn.jquery);
      load_file('source/jquery.fancybox.pack.js', function() {
        console.debug('loaded fancybox');
        
        var $tumblr_pics = $('a[href*=".media.tumblr.com"].hi-res, a>img[src*=".media.tumblr.com"]').parent();
        $tumblr_pics.fancybox({
          'type': 'image',
          'transitionIn': 'elastic',
          'transitionOut': 'elastic',
          'opacity': true,
          'padding': 0,
          'overlayOpacity':	0.95,
          'overlayColor': '#111',
          'showCloseButton': false,
          'hideOnContentClick': true
        });
        console.debug($tumblr_pics.length+' tumblr pictures tumblrboxed');
        
        // Make it more responsive over click intents
        $tumblr_pics.hover(function() {
          (new Image()).src = $(this).attr('href');
        });
        
      });
    }
  });
  
  // Add CSS
  load_file('source/jquery.fancybox.css');
  
})();
