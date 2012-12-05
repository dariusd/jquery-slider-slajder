#jQuery slider Slajder

jQuery slider Slajder is a animated slider's plugin created with jQuery libriary allowing to paste animated slideshow element with various transition effects

##How to install

Download it from: <https://github.com/dariusd/jquery-slider-slajder>

##How to use it

First add required files (script & CSS) in `<head>` part of your HTML document:

```html
  <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.min.js"></script>

  <script type="text/javascript" src="lib/jquery.slajder.js"></script>
        
  <link rel="stylesheet" type="text/css" href="lib/jquery.slajder.css" />
```

Then you can add slider to your website by defining unordered list (`<ul>`) with some `<li>` tag(s) with `class="slide"` attribute, e.g.:
```html
  <div id="slideshow">
      <ul>
        <li class="slide active"><img src="images/0.jpg" /></li>
        <li class="slide"><img src="images/1.jpg" /></li>
        <li class="slide"><img src="images/2.jpg" /></li>
        <li class="slide"><img src="images/3.jpg" /></li>
        <li class="slide"><img src="images/4.jpg" /></li>
      </ul>
  </div>
```         

and fire slider plugin in `<script>` part, e.g.:
```html
  <script type="text/javascript">
    $('div#slideshow').Slajder();
  </script>
```

##Features
* Support for slide left, right and fade transitions
* Clickable slides numbers
* Automatic slides forwarding
* Customizable slider's parameters by slider's call parameters

##Options
* **forwardingSpeed** defaults to 3000
  * time in miliseconds describing how fast next slide will show up
* **animationSpeed** defaults to 1000
  * time in miliseconds describing speed of whole animation
* **effect** defaults to 'slideLeft'
  * possible values: 'slideLeft', 'slideRight', 'fade', 'random'
  * slide's transition's effects
* **offset** defaults to 0
  * additional offset (X axis) for slide shifting effect

author: Dariusz Dzwigałowski  
email: dariusd@wp.pl