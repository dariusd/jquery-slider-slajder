#jQuery slider Slajder

jQuery slider Slajder is a animated slider's plugin created with jQuery libriary allowing to paste animated slideshow element with various transition effects

##How to install

Download it from: <https://github.com/dariusd/jquery-slider-slajder>

##How to use it

First add required files (script & CSS) in `<head>` part of your HTML document:

```html
  <script type="text/javascript" src="scripts/jquery.slajder.js"></script>
        
  <link rel="stylesheet" type="text/css" href="scripts/jquery.slajder.css" />
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

author: Dariusz Dzwigałowski
email: dariusd@wp.pl