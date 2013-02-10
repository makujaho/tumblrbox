# tumblrbox

Lightbox effect for Tumblr using the FancyBox jQuery plugin.

## Reason for the fork

We forked the original tumblrbox as it contained tracking codes for Google Analytics and other unwanted stuff. 

## Installation

You have two options to install tumblrbox in your blog:

### Using the description box (easy way)

If your not comfortable with HTML you can follow these steps to enable tumblrbox: 

* Go to your options page
* Click on your tumbblog name
* Click on the customize button for your template
* Paste the following text at the end of your blog description:

  <script type='text/javascript'>
  document.write(unescape("%3Cscript src='http://makujaho.github.com/tumblrbox/tumblrbox.js' type='text/javascript'%3E%3C/script%3E"));
  </script>

### Update your theme (advanced, recommended)

If you are okay with editing the HTML of your template, you can add the following script tag to the end of your (Tumblr) theme:

  <script src="http://makujaho.github.com/tumblrbox/tumblrbox.js" type="text/javascript"></script>

### Selfhosting

You can clone this repository to host your own tumblrbox. You need this if you want the script on SSL encrypted pages, as Github don't seem to support https.
