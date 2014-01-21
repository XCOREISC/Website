/*
		jQuery.extend(verge);
		var w = verge.viewportW() - $('#menu').width() ;
		var h = verge.viewportH() ;
		var header=$('header');
		header.css({'height': $('#logo-xcoreisc').height()+"px"});
		var tb=$(".seven_container").sevenslider({
			width: w ,
			height: h ,
			fullwidth:true,
            animation:59,
            automation:true,
            autointerval:10,
            progress:false,
            progresstype:"linear",
            bullet:true,
            carousel:false,
            circular:true,
            responsive:true,
            swipe:true,
            keyboard:true,
            skin:"fullwidth",
            lightbox:false
        });

		$('.bullet').attr('checked',true);
	    $('.fullwidth').attr('checked',true);
	    $('.responsive').attr('checked',true);
	    $('.circular').attr('checked',true);
	    $('.swipe').attr('checked',true);
	    $('.keyboard').attr('checked',true);
	    $('.automate').attr('checked',true);
	    $('.lightbox').attr('checked',true);
	    $('.p_type').attr('checked',true);

*/
angular.module('xcoreisc', ['ngRoute', 'ngAnimate'],
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/info', {
      templateUrl: 'info.html',
      controller: InfoCntl,
      controllerAs: 'info'
    });
    $routeProvider.when('/blog', {
      templateUrl: 'blog.html',
      controller: BlogCntl,
      controllerAs: 'blog'
    });
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});

function MainCntl($route, $routeParams, $location) {
  this.$route = $route;
  this.$location = $location;
  this.$routeParams = $routeParams;
}

function BlogCntl($routeParams) {
  this.name = "BlogCntl";
  this.params = $routeParams;
}
function InfoCntl($routeParams) {
  this.name = "InfoCntl";
  this.params = $routeParams;
}
