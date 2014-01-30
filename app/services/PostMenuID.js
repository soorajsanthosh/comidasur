var PostMenuID = angular.module('PostMenuID', ['ngResource']);

PostMenuID.factory('menuIdPost', ['$resource',
  function($resource){
    var menuIdPost= $resource('/restaurantapp/index.php/home/show_menudetail/:menu_id', {}, {
      query: {method:'GET',isArray:true, params: {menu_id: 'menu_id'}}
    });
     return menuIdPost;
  }]);

// var Subject = $resource('/api/TestAccounts/:action', { applicationId: 3 }, {
//   'getSelect': { method: 'GET', isArray: true, params: { action: 'GetSelect' } }
// });