#jQuery slider Slajder

jQuery slider Slajder is a animated slider's plugin created with jQuery library allowing to paste animated slideshow element with various transition effects

##How to install

Download it from: <https://github.com/dariusd/jquery-slider-slajder>

There are also available minified (compressed) versions of required files:  
<https://github.com/dariusd/jquery-slider-slajder/blob/master/lib/jquery.slajder.min.js>  
<https://github.com/dariusd/jquery-slider-slajder/blob/master/lib/jquery.slajder.min.css>

##How to use it

First add required files (scripts & CSS) in `<head>` part of your HTML document:

```html
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.min.js"></script>

  <script type="text/javascript" src="lib/jquery.slajder.js"></script>
        
  <link rel="stylesheet" type="text/css" href="lib/jquery.slajder.css" />
```

Then you can add slider to your website by defining unordered list (`<ul>`) with some `<li>` tag(s) with `class="slide"` attribute within html element that has `class=slider` attribute, e.g.:
```html
  <div class="slider">
      <ul>
          <li class="slide active"><img src="images/0.jpg" /></li>
          <li class="slide"><img src="images/1.jpg" /></li>
          <li class="slide"><img src="images/2.jpg" /></li>
          <li class="slide"><img src="images/3.jpg" /></li>
          <li class="slide"><img src="images/4.jpg" /></li>
      </ul>
  </div>
```         
(`class="slide active"` defining which slide is initially visible)

and fire slider plugin in `<script>` part, e.g.:
```html
  <script type="text/javascript">
      $('div.slider').Slajder();
  </script>
```

##Features
* Support for slide left, right and fade transitions
* Clickable slides numbers
* Automatic slides forwarding
* Customizable slider's parameters by slider's call parameters

##Options
* **forwardingSpeed** defaults to `3000`
  * time in miliseconds describing how fast next slide will show up
* **animationSpeed** defaults to `1000`
  * time in miliseconds describing speed of whole animation
* **effect** defaults to 'slideLeft'
  * possible values: `slideLeft`, `slideRight`, `fade`, `random`
  * slide's transition's effects
* **offset** defaults to `0`
  * additional offset (X axis) for slide shifting effect
* **hasPagination** defaults to `true`
  * indicating whether slider should display clickable slides' numbers to toggle slides

##Pagination

slider's pagination is created dynamically (if `hasPagination` call parameter is set to `true`):  
1. append `<div>` to slider container and set it's class to `slidesNumbers` and width to container's width  
2. append `<span>` element for each slide occuring in slider to `<div>` created in Step 1 and set `data-count` html attribute to slide's number  
3. bind click handler function to every `<span>` element created in previous step  

you can style pagination's box by modifing proper lines in CSS file  


author: Dariusz Dzwigałowski  
email: dariusd@wp.pl