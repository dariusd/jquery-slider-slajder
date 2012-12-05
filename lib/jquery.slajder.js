/**
 * @author Dariusz Dzwigałowski
 * email: dariusd@wp.pl
 */

/**
 * jQuery slider plugin
 * 
 * plugin automaticaly animate each of it's content (slides) with various transition's effects 
 * or after clicking on requested slide's number
 */

(function($) {

  $.fn.extend({

    Slajder : function(opts) {

      return this.each(function() {
        
       /**
        * Default values for slider's parameters
        * you can add/override them by calling slider with new or same parameter(s)
        */
        var defaults = {
          forwardingSpeed : 3000,     //slides forwarding speed
          animationSpeed : 1000,      //animation's (effect's) speed
          effect : "slideLeft",       //effect for slide transition
          offset : 0,                  //additional offset (X axis) for slide shifting effect
          hasPagination: true         //indicates whether show clickable slides' numbers to toggle slides
        }, 
        options = $.extend(defaults, opts),     //extending/overriding defaults by call parameters
        timer = null,                           
        i = 0,                                  //current slide number
        container = $(this),                    //html element that plugin is call on
        slides = container.find('.slide'),      //all slides in container
        slidesNrBox = null,                     //box for slides' numbers
        randNum = Math.floor((Math.random() * 3)), //random number for slider's effect

        wdthUL = container.find('ul').width();    //slides' parent container width
        hghtUL = container.find('ul').height(),   //ditto height


        //container setup
        container.find('ul').css('position', 'relative');

        if (options.hasPagination) {            //if slider should have pagination part
          slidesNrBox = $('<div/>', {           //append new <div> element to the container
            'class' : 'slidesNumbers'           //add class to new element
          }).appendTo(container).css('width', wdthUL);    //and set it width to container's width

          slidesNrBox.delegate('span', 'click', function() {    //bind handler for clicking for every slide's number element (span)
            clearInterval(timer);
            forward($(this).data('count'));                     //switch to requested slide number
            randNum = Math.floor((Math.random() * 3));          //generate random number for next transition effect 
          });
        }

        slides.each(function(i) {
          $(this).css({                           //setting up CSS properties for each slide
            'position' : 'absolute',
            'left' : 0,
            'width' : wdthUL,
            'height' : hghtUL
          });
          
          if (options.hasPagination)              //checks if slider should have pagination (slides' numbers)
            slidesNrBox.append($('<span/>', {     //append each slide's number to slidesNrBox
              'data-count' : i                    //with data-count html attribute
            }).html(i + 1));

        });

        container.find('ul li *').css({           //setting width and height of all slides' content to container's dimensions
          'width' : wdthUL,
          'height' : hghtUL
        });

        var effects = {                
          
          /**
           * 
           * general syntax:
          
           *  effectName: function(index) { body };
           *  body:
           *    stopping current slides' animation, hiding it (removing css active slide class),
           *    starting next (clicked) slide animation, adding css active slide class
           *   
           *  transition's effects are stored in JS Object, because they're being used in randomize function for drawing slides' switching effect
           */
                    
          animate_left : function(i) {      //slidding left 

            slides.filter('.slide.active').stop(true, false).animate({    //stopping active slide animation and hiding it (css properties):
              'left' : -wdthUL / 2 - options.offset,                      //shifting left
              'opacity' : 0                                               //fadding it
            }, options.animationSpeed).removeClass('active');             //removing active slide class

            slides.eq(i).addClass('active').css({                         //showing next/requested slide 
              'display' : 'block',
              'opacity' : 0,
              'left' : wdthUL / 2 + options.offset
            }).stop(true, false).animate({                                //animating and making it visible by setting CSS properties for jQuery animate function
              'left' : 0,
              'opacity' : 1
            }, options.animationSpeed);

          },

          animate_right : function(i) {     //slidding right

            slides.filter('.slide.active').stop(false, false).animate({
              'left' : wdthUL / 2 + options.offset,
              'opacity' : 0
            }, options.animationSpeed).removeClass('active');

            slides.eq(i).addClass('active').css({
              'display' : 'block',
              'opacity' : 0,
              'left' : -wdthUL / 2 - options.offset
            }).stop(true, false).animate({
              'left' : 0,
              'opacity' : 1
            }, options.animationSpeed);

          },

          animate_fade : function(i) {      //fadding

            slides.filter('.slide.active').stop(false, false).animate({
              'opacity' : 0
            }, options.animationSpeed).removeClass('active');

            slides.eq(i).addClass('active').css({
              'display' : 'block',
              'opacity' : 0,
              'left' : 0
            }).stop(true, false).animate({
              'opacity' : 1
            }, options.animationSpeed);

          }
        };

        function forward(i) {                   //forwarding slides

          if (i >= slides.length)
            i = 0;

          switch(options.effect) {              //check which transition's effect was requested
            case "slideLeft":
              effects['animate_left'](i);
              break;

            case "slideRight":
              effects['animate_right'](i);
              break;

            case "fade":
              effects['animate_fade'](i);
              break;

            case "random":                                                      
              functions = ["animate_left", "animate_right", "animate_fade"];    //array for all transition's effect
              effects[functions[randNum]](i);                                   //randomize the effect
              break;
          }

          if (slidesNrBox)
            slidesNrBox.find('span').removeClass().eq(i).addClass('activeSlide');   //set class for current slide number (styled in CSS)

          timer = setTimeout(function() {     //set timer for automatic slides switching
            forward(i);                       
            if (i >= slides.length)           
              i = 0;                      //reset current slide index (if it's last slide)
          }, options.forwardingSpeed);   
          i++;
        }

        // Start slider
        forward(0);

      });

    }
  });

})(jQuery);

