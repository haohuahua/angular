
var myApp = angular.module('myApp', []);
/*myApp.controller('ctr', function ($scope) {
	$scope.m ={
		price:20,
		num:1,
		//total:(this.price*this.num),
		calc:function() {
		   return this.price*this.num
		}
	}
	
})*/

/*myApp.controller('ctr',['$scope','$rootScope',function($scope,$rootScope) {

	$scope.m ={
		price:20,
		num:1,
		//total:(this.price*this.num),
		
	}
	
	$rootScope.calc=function() {
		   return $scope.m.price*$scope.m.num
		}
	
}]);*/


myApp.controller('ctr',['$scope','$rootScope',function($scope,$rootScope) {

	// $scope.title="hello";
	
}]);

myApp.controller('ctr2',['$scope','$rootScope',function($scope,$rootScope) {

	 //$scope.title="hello2222";
	
}]);