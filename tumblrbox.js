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
  console.log('tumblrbox start');
  
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
    var blob = 'http://makujaho.github.com/tumblrbox/';
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
  load_file('jquery-1.9.0.min.js', function() {
    if(typeof jQuery=='undefined') {
      console.log('Sorry, but jQuery wasn\'t able to load');
    } else {
      $ = jQuery.noConflict();
      console.log('loaded '+$.fn.jquery);
      // Add CSS
      load_file('jquery.mousewheel-3.0.6.pack.js', function(){
        console.log('Loaded MouseWheel')
        load_file('jquery.fancybox.css', function() {
          console.log('Added FancyBox CSS');
        });
        
        load_file('jquery.fancybox.pack.js', function() {
          console.log('loaded fancybox');
          var options = {
            mouseWheel: false,
            autoCenter: true,
            closeClick: true,
            fitToView:  true,
            autoSize:   true,
            padding :   20,
            helpers:  {
              title:  null,
              css : {
                'background' : 'rgba(58, 42, 45, 0.95)'
              }
            },
          };

          var $tb_hires  = $('a[href*=".media.tumblr.com"].hi-res');
        
          $tb_hires.fancybox(options).attr('data-fancybox-group', 'hires');

          console.log(($tb_images.length + $tb_hires.length) + ' tumblr pictures tumblrboxed');
        });
      });
    }
  });
})();
