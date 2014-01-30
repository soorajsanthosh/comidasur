'use strict';

/* Controllers */

var spiceUpControllers = angular.module('spiceUpControllers', []);

spiceUpControllers.run(function()	{
	console.log('Hello there');

})

spiceUpControllers.controller('AppCtrl',['$scope', '$location','MenuResponder',
								'MenuService','menuBycat','menuIdPost','catIdPost',
	function($scope, $location, MenuResponder,MenuService,menuBycat,menuIdPost,catIdPost)	{
		$scope.$parent.$root['manuList'] = MenuResponder.query();
		$scope.$parent.$root['menuList'] = MenuService.query();
		$scope.$parent.$root['IdPost'] = menuIdPost.query();
		$scope.$parent.$root['catIdPost'] = catIdPost.query();
		$scope.$parent.$root['CatMenu'] = menuBycat.query({menu_category : 1});

		$scope.triggerAside = function() {
			console.log('triggering aside');
			Lungo.Router.aside('main', 'aside1');
		}
	}
	]);

spiceUpControllers.controller ('DynamicCtrl',['$scope', '$location','MenuResponder',
	function($scope, $location, MenuResponder)	{

		$scope.menuData = $scope.$parent.$root['manuList']
	
	}]);

spiceUpControllers.controller ('DeeplinkCtrl',['$scope', '$routeParams',
	function($scope, $routeParams)	{
		$scope.paramMsg = $routeParams.msg;
	}]);

spiceUpControllers.controller ('menuCtrl',['$scope', '$location','menuBycat',
	function($scope, $location,menuBycat)	{

		$scope.menu_items=$scope.$parent.$root['CatMenu'] 
 		
	}]);


spiceUpControllers.controller('PostCtrl', ['$scope','$location','$routeParams','menuIdPost',
function($scope,$location, $routeParams, menuIdPost) { 
	// $scope.poll=$scope.$parent.$root['IdPost']
          $scope.poll = menuIdPost.query({menu_id: $routeParams.menu_id});
          $scope.$on('menu_id', function(data) {
          console.dir(data);
          if(data.menu_id ==$routeParams.menu_id) {
          $scope.poll = data;
         }});
       }]);
spiceUpControllers.controller('CatCtrl', ['$scope','$location', '$routeParams', 'catIdPost',
  function($scope,$location, $routeParams, catIdPost) {

$scope.ShowmenuByCatId = catIdPost.query({subcategory_id: $routeParams.subcategory_id});
          $scope.$on('subcategory_id', function(data) {
          console.dir(data);
          if(data.subcategory_id ==$routeParams.subcategory_id) {
          $scope.ShowmenuByCatId = data;

 }});
       }]);

// angular.module('clientApp')
//   .controller('ProductCtrl', function ($scope, ProductsFactory, $modal, $log, $stateParams) {
//     var productItems = ProductsFactory.getProducts()
//     $scope.products = productItems.query();
//     $scope.selectedProduct = productItems.get({productId:1});
//   });
// spiceUpControllers.controller ('CatCtrl',['$scope', '$location','menuBycat',
// 	function($scope, $location,menuBycat)	{
		 
// 		$scope.ShowmenuByCat = $scope.$parent.$root['CatMenu']
// 	}]);

// function Ctrl($scope, shareScope) {
//     $scope.prop2 = shareScope.set('data');
//     $scope.both = shareScope.get();
// }