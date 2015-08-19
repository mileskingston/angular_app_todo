var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
	$http.get("http://www.w3schools.com/angular/customers.php")
    	.success(function (data) { $scope.names = data.records; })
   		.error(function (data) { console.log('error'); });
});

app.config(['$httpProvider', function($httpProvider) { // For Chrome
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);