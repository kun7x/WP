var app = angular.module('myApp', ['ngRoute']);
 
app.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'pages/first.html',

})
 
.when('/second', {
templateUrl : 'pages/second.html',
controller : 'SecondController'
})
 
.when('/third', {
templateUrl : 'pages/third.html',
controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});

app.controller('FirstController', function($scope) {

});
 
app.controller('SecondController', function($scope) {
  
        $scope.studentdetails = [
            {Rollno: 1,Name:"xyz",Subject :"Web programming",marks:100},
            {Rollno: 2,Name:"abc",Subject :"Computer Networks",marks:100},
            {Rollno: 3,Name:"uvw",Subject :"Data Structures",marks:100}
        ]});



 
app.controller('ThirdController', function($scope) {
 $scope.Result = function (nm, m1,m2, m3) {
              var name=nm;
        	  var s2=m2;
              var s3=m3;
              var s1=m1;
             var percentage=(s1+s2+s3)/3;
              if(percentage>50)
                alert(""+name +" : you have pass with "+percentage +" Percentage");
              else
                alert(""+name +" : you have failed with " +percentage + " Percentage");
              
            } 
});