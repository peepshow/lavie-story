/* ===================================================================
 *
 * LA VIE SCRIPTS
 *
 * ================================================================= */

  // Tiny jQuery Plugin - by Chris Goodchild
  $.fn.exists = function(callback) {
    var args = [].slice.call(arguments, 1);

    if (this.length) {
      callback.call(this, args);
    }

    return this;
  };


  $('div.test').exists(function() {

  });

(function($) {

/* ===================================================================
* INTRO - Text Transitions
* ================================================================= */

  function introText () {
    var animateText = $('.tlt');
    animateText.textillate({
      in: {
        effect: 'fadeInUp', // set the effect name
        delayScale: 1,      // set the delay factor applied to each consecutive character
        delay: 50,          // set the delay between each character
        sync: false,        // set to true to animate all the characters at the same time
        shuffle: false,     // randomize the character sequence
        reverse: false,     // reverse the character sequence
        callback: function () {} // callback that executes once the animation has finished
      }
    });
  }


/* ===================================================================
 * RAINY WINDOW
 * ================================================================= */


 function rainWindow() {
   var image = document.getElementById('dripsBg');
   image.onload = function() {
     var engine = new RainyDay({
         image: this,
         gravityAngle: Math.PI / 4,
         crop: [ 0, 0, 1400, 700],

     });
     engine.trail = engine.TRAIL_SMUDGE;
     engine.rain([ [1, 0, 10], [4, 2, 0.5] ], 33);
     //engine.rain([ [1, 0, 600], [4, 3, 1] ], 100);
   };
   image.src = '../images/blue_sky.jpg';
 }


/* ===================================================================
 * WATER BUBBLES
 * ================================================================= */

  function makeBubbles() {
    function randomNumber(start, end){
      return Math.random() * (end - start);
    }

    function bubbler() {
      var water = document.getElementsByClassName('bubs')[0],
          i     = 0;

      function generateBubbles() {
        if(i < 60) {
          var el     = document.createElement('svg'),
              circle = document.createElement('circle'),
              size   = randomNumber(7, 20);

          water.appendChild(el);

          el.appendChild(circle);
          el.setAttribute('viewBox', '0 0 100 100');
          el.setAttribute('class', 'bubble');
          el.setAttribute('style', 'width: ' + size + 'px; height: ' + size + 'px; left: ' + randomNumber(1, window.innerWidth/10) + 'vw;');

          circle.setAttribute('cx', 50);
          circle.setAttribute('cy', 50);
          circle.setAttribute('r', 150);

          i++;
        } else {
          clearInterval(cycle);
        }
      };

      generateBubbles();
      var cycle = setInterval(generateBubbles, 150);
    }

    bubbler();
  }


/* ===================================================================
 * TERRAIN LAYERS
 * ================================================================= */

  var entities = [];

  var background = document.getElementById("bgCanvas"),
      bgCtx = background.getContext("2d"),
      width = window.innerWidth,
      height = 800;

  var holder = document.getElementById("terrain");

  function landLayers() {

    background.width = width;
    background.height = height;

    function Terrain(options) {
      options = options || {};
      this.terrain = document.createElement("canvas");
      this.terCtx = this.terrain.getContext("2d");
      this.terrain.width = width;
      this.terrain.height = height;
      this.fillStyle = options.fillStyle || "rgb(244,247,250)";
      this.mHeight = options.mHeight || height;

      // generate
      this.points = [];

      var displacement = options.displacement || 100,
          power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

      // set the start height and end height for the terrain
      this.points[0] = this.mHeight;//(this.mHeight - (Math.random() * this.mHeight / 2)) - displacement;
      this.points[power] = this.points[0];

      // create the rest of the points
      for (var i = 1; i < power; i *= 2) {
        for (var j = (power / i) / 2; j < power; j += power / i) {
          this.points[j] = ((this.points[j - (power / i) / 2] + this.points[j + (power / i) / 2]) / 2) + Math.floor(Math.random() * -displacement + displacement);
        }
        displacement *= 0.6;
      }
      holder.appendChild(this.terrain);
    }

    Terrain.prototype.update = function () {
      // draw the terrain
      this.terCtx.clearRect(0, 0, width, height);
      this.terCtx.fillStyle = this.fillStyle;

      this.terCtx.beginPath();
      for (var i = 0; i <= width; i++) {
        if (i === 0) {
          this.terCtx.moveTo(0, this.points[0]);
        } else if (this.points[i] !== undefined) {
          this.terCtx.lineTo(i, this.points[i]);
        }
      }
      this.terCtx.lineTo(width, this.terrain.height);
      this.terCtx.lineTo(0, this.terrain.height);
      this.terCtx.lineTo(0, this.points[0]);
      this.terCtx.fill();
    }

    entities.push(new Terrain({displacement : 60, fillStyle : "rgb(28, 34, 42)", mHeight : -10}));
    entities.push(new Terrain({displacement : 30, fillStyle : "rgb(77, 77, 83)", mHeight : (height/4)-136}));
    entities.push(new Terrain({displacement : 20, fillStyle : "rgb(64, 52, 42)", mHeight : (height/4)-124}));
    entities.push(new Terrain({displacement : 18, fillStyle : "rgb(75, 69, 62)", mHeight : (height/4)-110}));
    entities.push(new Terrain({displacement : 30, fillStyle : "rgb(224, 234, 244)", mHeight : (height/4)-90}));
    entities.push(new Terrain({displacement : 30, fillStyle : "rgb(240,250,255)", mHeight : (height/3)-40}));
    entities.push(new Terrain({displacement : 100, fillStyle : "rgb(212,220,230)", mHeight : height/3}));
    entities.push(new Terrain({displacement : 150, fillStyle : "rgb(10, 1, 66)", mHeight : (height-200)}));

    var entLen = entities.length;

    while (entLen--) {
      entities[entLen].update();
    }
  }

  function floatscene() {
    var $scene = $('#floatscene');
    $('#floatscene').parallax();
  }


  function scrollItboi() {
    var movers = $('.movers');
    // init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var image1 = new TimelineMax()
      .set(".img-move-1", {
        opacity: 1,
        transformStyle: "preserve-3d",
        perspective: 1000,
        transformPerspective: 1000,
        y: '100%'
        //x: '50'
      })
      .set(".img-move-2", {
        opacity: 1,
        transformStyle: "preserve-3d",
        perspective: 1000,
        transformPerspective: 1000,
        y: '100%'
        //x: '-50'
      })
      .set(".text1", {
        opacity: 1,
        y: '100%'
        //x: '-50'
      })

      //.to(".img-move-1", 1, { opacity:1 })
      .to(".img-move-1", 1, {
        y: '-100%',
        x: '-=80%',
        rotationY:'+=14',
        z:'+=10'
      })


      //.to(".img-move-2", 1, { opacity:1 })
      .to(".img-move-2", 1, {
        y: '-100%',
        rotationY:'-=14',
        z: '-=10'
      }, '-=0.8')

      //.to(".text1", 1, { opacity:1 })
      .to(".text1", 1, {
        y: '-100%'
      },'-=0.8')


      //.fromTo(".img-move-1",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			//.fromTo(".img-move-1", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

		// create scene to pin and link animation
		var scene = new ScrollMagic.Scene({
				triggerElement: "#dailyuse",
        triggerHook: 0.82,
				duration: "300%"
			})
			//.setPin("#dailyuse")
			.setTween(image1)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

    // var scene = new ScrollMagic.Scene({
		// 		triggerElement: "#dailyuse",
		// 		triggerHook: "30",
		// 		duration: "200%"
		// 	})
		// 	.setTween(image2)
		// 	.addIndicators() // add indicators (requires plugin)
		// 	.addTo(controller);

    // var scene = new ScrollMagic.Scene({
    //     triggerElement: "#dailyuse",
    //     triggerHook: "50",
    //     duration: "200%"
    //   })
    //   .setTween(text1)
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);
}


var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.fromTo(".panelscroll-l", 1, {y: "-100%"}, {y: "100%", ease: Linear.easeNone}).fromTo(".panelscroll-r", 1, {y: "100%"}, {y: "-100%", ease: Linear.easeNone}, '-=1')  // in from left
			.fromTo(".panelscroll-l", 1, {y: "-100%"}, {y: "100%", ease: Linear.easeNone}).fromTo(".panelscroll-r", 1, {y: "100%"}, {y: "-100%", ease: Linear.easeNone}, '-=1')  // in from right
			.fromTo(".panelscroll-l", 1, {y: "-100%"}, {y: "100%", ease: Linear.easeNone}).fromTo(".panelscroll-r", 1, {y: "100%"}, {y: "-100%", ease: Linear.easeNone}, '-=1'); // in from top

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

$(window).on('load scroll resize', function() {

   var docHeight = $(document).height();
   var windowPos = $(window).scrollTop();
   var windowHeight = $(window).height();
   var windowWidth = $(window).width();
   var completion = windowPos / (docHeight - windowHeight);

   if (docHeight <= windowHeight) {
     $('#progress').width(windowWidth);
   } else {
     $('#progress').width(completion * windowWidth);
   }

 });



$('.tlt').exists (function() {
  introText();
});

$('#bubs').exists (function() {
  //makeBubbles();
});
$('#terrain').exists (function() {
  landLayers();
});
$('#floatscene').exists (function() {
  floatscene();
});

$(function(){
  $('#dripsBg').exists (function() {
    rainWindow();
  });
  $('#dailyuse').exists (function() {
    scrollItboi();
  });
})

})(jQuery);
