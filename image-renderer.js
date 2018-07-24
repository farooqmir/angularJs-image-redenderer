/**   
 * Author: Farooq Mir
 * Image rendition directive
 * Usage: '{"mobile":"{{imgUrlMob}}","tab":"{{imgUrlTab}}","desktop":"{{imgUrl}}","isInline":true}'
 *     isInline: will put the image and inline
 *     classes: each rendition class will be added
 *     fallback: desktop image is considered
 **/
app.directive('imgRenditions', ['$window','$timeout',function($window,$timeout){
    return {
        restrict:'A',
        link:function(scope, element, attr){
            var debounceResize, 
            debouncevalue=100, // debounce value
            interface_={},
            tabletBreakPoint=992, //tablet size
            mobileBreakPoint=600, // mobile size
            renditions = JSON.parse(attr.imgRenditions);//parse rendition


            //apply image on resizing- device tilt
            interface_.OnResizeHandler = function() {
                $timeout.cancel(debounceResize);
                debounceResize = $timeout(interface_.OnResizeTimeout, debouncevalue);
            }

            //on tilt apply image
            interface_.OnResizeTimeout = function(){
                interface_.setImage();
            }

            //get the right image to render as per the screen size         
            interface_.getImage = function (type){
                var imageUrl =  null;

                if(renditions[type]){
                    imageUrl = {
                        url: renditions[type],
                        type: type
                    }
                }else if(renditions['desktop']){
                    imageUrl = {
                        url: renditions['desktop'],
                        type: 'desktop'
                    }
                }

                if(!imageUrl){
                  if(console && console.error)
                   console.error("No image found for rendition [imgRenditions]");
                } 
                
                
                return imageUrl;
              }
               
             
              
              // set/render the right image
              interface_.setImage = function(){
                var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0],
                x = w.innerWidth || e.clientWidth || g.clientWidth,
                y = w.innerHeight|| e.clientHeight|| g.clientHeight,
                renderedImage;
                try{               
                     if(x<=mobileBreakPoint){
                        renderedImageUrl = interface_.getImage('mobile');
                     }else if(x<tabletBreakPoint){
                        renderedImageUrl = interface_.getImage('tab');
                     }else{
                        renderedImageUrl = interface_.getImage('desktop');
                     }

                     if(renditions.isInline)
                     {
                       element.css({'background-image':'url('+renderedImageUrl.url+')'});
                     }else{
                        element.attr({'src':renderedImageUrl.url});
                     }
                     element.removeClass('desktop mobile tab').addClass(renderedImageUrl.type);
                }catch(e){
                    if(console && console.error)
                       console.error("Image rendition failed due to invalid JSON inputs- refer [imgRenditions] directive");
                }
              }
             
              //Initialize the image renered
              interface_.init = function(){
                interface_.setImage();
                angular.element($window).bind('resize',interface_.OnResizeHandler);
              }

              //call initialization
              interface_.init();
        }
    }
  }]);