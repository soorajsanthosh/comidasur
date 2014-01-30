
var cat = angular.module('cat', ['ngResource']);

cat.factory('menuBycat', ['$resource',function($resource){
     var menuByCat =  $resource('/restaurantapp/index.php/home/show_menulist_ByCat/', {},{
       query: {method:'GET', isArray:true}
     });
     return menuByCat;
  }
  ]);

// angular.module('myApp', [])
//     .service('shareScope', function () {

//         return {
//             get: function () {
//                 return value;
//             },
//             set: function(data) {
//                 value = data;
//             }
//         };
//     });

// $resource('/users/:userId/transactions/:transactionId',
//     // todo: default user for now, change it
//     {userId: 'bd675d42-aa9b-11e2-9d27-b88d1205c810', transactionId: '@uuid'},
//     {
//         getRecent: {method: 'GET', params: {recent: true}, isArray: true},
//         getForMonthAndYear: {method: 'GET', isArray: true}
//     });
