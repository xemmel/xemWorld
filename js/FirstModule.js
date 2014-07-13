var app = angular.module("FirstModule", []);

app.controller("FirstController",function($scope,$http) {

/*$scope.persons = [
	{id:1,name:"Clara",Born:"2010-07-21"},
	{id:2,name:"Morten",Born:"2010-07-21"},
	{id:3,name:"Mikkel",Born:"2010-07-21"},
	{id:4,name:"Mogens",Born:"2010-07-21"}
];*/

$http.get("data/Persons.html").
	success(function(data) {
		console.log("suc");
		console.log(data);
		
		$scope.persons = data;
	});

console.log($scope.persons);

});