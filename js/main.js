/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "Countries/home.html", controller: "PageCtrl"})
    // Pages
    .when("/Norway", {templateUrl: "Countries/Norway.html", controller: "PageCtrl"})
    .when("/Denmark", {templateUrl: "Countries/Denmark.html", controller: "PageCtrl"})
    .when("/Sweden", {templateUrl: "Countries/Sweden.html", controller: "PageCtrl"})
    .when("/Iceland", {templateUrl: "Countries/Iceland.html", controller: "PageCtrl"})
    .when("/Finland", {templateUrl: "Countries/Finland.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

// angular.module('app', ['ui.bootstrap']);
// function CarouselCtrl($scope){
//    $scope.slides = [
//     {
//       image: './pictures/Norway.jpg',
//       name: 'Norway'
//     },
//     {
//       image: './pictures/Sweden.jpg',
//       name: 'Sweden'
//     },
//     {
//       image: './pictures/Finland.jpg',
//       name: 'Finland'
//     },
//     {
//       image: './pictures/Iceland.jpg',
//       name: 'Iceland'
//     },
//     {
//       image: './pictures/Denmark.jpg',
//       name: 'Denmark'
//     }
//   ];
// }


angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
}

app.directive('carousel', function($timeout) {
   return {
      restrict: 'E',
      scope: {
        links: '=' 
      },
      templateUrl: 'carousel.html',
      link: function(scope, element) {
        $timeout(function() {
          $('.carousel-indicators li',element).first().addClass('active');
          $('.carousel-inner .item',element).first().addClass('active');
        });
      }
   }
});