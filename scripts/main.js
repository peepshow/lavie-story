"use strict";$.fn.exists=function(e){var t=[].slice.call(arguments,1);return this.length&&e.call(this,t),this},$("div.test").exists(function(){}),function(e){function t(){var t=e(".tlt");t.textillate({"in":{effect:"fadeInUp",delayScale:1,delay:50,sync:!1,shuffle:!1,reverse:!1,callback:function(){}}})}function i(){var e=document.getElementById("dripsBg");e.onload=function(){var e=new RainyDay({image:this,gravityAngle:Math.PI/4,crop:[0,0,1400,700]});e.trail=e.TRAIL_SMUDGE,e.rain([[1,0,10],[4,2,.5]],33)},e.src="../images/blue_sky.jpg"}function n(){function e(e){e=e||{},this.terrain=document.createElement("canvas"),this.terCtx=this.terrain.getContext("2d"),this.terrain.width=l,this.terrain.height=c,this.fillStyle=e.fillStyle||"rgb(244,247,250)",this.mHeight=e.mHeight||c,this.points=[];var t=e.displacement||100,i=Math.pow(2,Math.ceil(Math.log(l)/Math.log(2)));this.points[0]=this.mHeight,this.points[i]=this.points[0];for(var n=1;i>n;n*=2){for(var o=i/n/2;i>o;o+=i/n)this.points[o]=(this.points[o-i/n/2]+this.points[o+i/n/2])/2+Math.floor(Math.random()*-t+t);t*=.6}h.appendChild(this.terrain)}s.width=l,s.height=c,e.prototype.update=function(){this.terCtx.clearRect(0,0,l,c),this.terCtx.fillStyle=this.fillStyle,this.terCtx.beginPath();for(var e=0;l>=e;e++)0===e?this.terCtx.moveTo(0,this.points[0]):void 0!==this.points[e]&&this.terCtx.lineTo(e,this.points[e]);this.terCtx.lineTo(l,this.terrain.height),this.terCtx.lineTo(0,this.terrain.height),this.terCtx.lineTo(0,this.points[0]),this.terCtx.fill()},r.push(new e({displacement:60,fillStyle:"rgb(28, 34, 42)",mHeight:-10})),r.push(new e({displacement:30,fillStyle:"rgb(77, 77, 83)",mHeight:c/4-136})),r.push(new e({displacement:20,fillStyle:"rgb(64, 52, 42)",mHeight:c/4-124})),r.push(new e({displacement:18,fillStyle:"rgb(75, 69, 62)",mHeight:c/4-110})),r.push(new e({displacement:30,fillStyle:"rgb(224, 234, 244)",mHeight:c/4-90})),r.push(new e({displacement:30,fillStyle:"rgb(240,250,255)",mHeight:c/3-40})),r.push(new e({displacement:100,fillStyle:"rgb(212,220,230)",mHeight:c/3})),r.push(new e({displacement:150,fillStyle:"rgb(10, 1, 66)",mHeight:c-200}));for(var t=r.length;t--;)r[t].update()}function o(){e("#floatscene");e("#floatscene").parallax()}function a(){window.innerHeight}var r=[],s=document.getElementById("bgCanvas"),l=(s.getContext("2d"),window.innerWidth),c=800,h=document.getElementById("terrain"),p=new ScrollMagic.Controller,d=(new TimelineMax).to(".panelscroll-l",1,{x:"-110%",z:"300px",ease:Power4.easeOut}).to(".panelscroll-r",1,{x:"110%",z:"300px",ease:Power4.easeOut},"-=1").to(".panelscroll-l2",1,{x:"0",z:"0",ease:Power4.easeOut}).to(".panelscroll-r2",1,{x:"0",z:"0",ease:Power4.easeOut},"-=1");new ScrollMagic.Scene({triggerElement:"#pinContainer",triggerHook:"onLeave",duration:"300%"}).setPin(".panelscroll").setTween(d).addIndicators().addTo(p),e(window).on("load scroll resize",function(){var t=e(document).height(),i=e(window).scrollTop(),n=e(window).height(),o=e(window).width(),a=i/(t-n);n>=t?e("#progress").width(o):e("#progress").width(a*o)}),e(".tlt").exists(function(){t()}),e("#bubs").exists(function(){}),e("#terrain").exists(function(){n()}),e("#floatscene").exists(function(){o()}),e(function(){e("#dripsBg").exists(function(){i()}),e("#dailyuse").exists(function(){a()})})}(jQuery);var controller=new ScrollMagic.Controller,panelOne=new TimelineMax;panelOne.add([TweenMax.fromTo("#img-move-1",3,{transformStyle:"preserve-3d",perspective:1e3,transformPerspective:1e3,opacity:0,y:"200",rotationY:"0",rotationX:"0",rotationZ:"0",ease:Sine.easeIn},{opacity:1,y:"-=220",x:"-230%",rotationY:"26",rotationX:"14",rotationZ:"4",z:"230px",ease:Sine.easeIn}),TweenMax.to("#img-move-1",1,{opacity:0,y:"-=80",ease:Sine.easeIn,delay:6}),TweenMax.fromTo("#img-move-2",2,{transformStyle:"preserve-3d",perspective:1e3,transformPerspective:1e3,opacity:0,y:"200",rotationY:"0",rotationX:"0",rotationZ:"0",ease:Sine.easeIn},{opacity:1,y:"-140%",x:"136%",rotationY:"-26",rotationX:"16",rotationZ:"-4",z:"200px",ease:Sine.easeIn,delay:1}),TweenMax.to("#img-move-2",1,{opacity:0,y:"-=80",ease:Sine.easeIn,delay:6}),TweenMax.fromTo("#img-move-3",2,{transformStyle:"preserve-3d",perspective:1e3,transformPerspective:1e3,opacity:0,y:"200",rotationY:"0",rotationX:"0",rotationZ:"0",ease:Sine.easeIn},{opacity:1,y:"-=200",x:"140%",rotationY:"-22",rotationX:"12",rotationZ:"-3",z:"190px",ease:Sine.easeIn,delay:2}),TweenMax.to("#img-move-3",1,{opacity:0,y:"-=80",ease:Sine.easeIn,delay:6}),TweenMax.fromTo("#text-move-1",.5,{opcity:0},{opacity:1}),TweenMax.to("#text-move-1",1,{opacity:0,delay:4}),TweenMax.to("#dailyuse",7,{y:"-300",ease:Sine.easeIn})]);var underwaterScene=new ScrollMagic.Scene({duration:800,triggerElement:"#dailyuse",triggerHook:"onLeave"}).setTween(panelOne).addIndicators({name:"1 (duration: 500)"}).setPin("#dailyuse").addTo(controller);controller.addScene([underwaterScene]);