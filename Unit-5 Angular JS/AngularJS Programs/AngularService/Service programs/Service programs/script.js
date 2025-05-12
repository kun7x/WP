// create the module and name it myApp
var app = angular.module("myApp", ['ngRoute']);
// configure routes
app.config(function($routeProvider){
    $routeProvider
    .when("/", {template:"<p>AngularJS Single Page Application(SPA).</p>"})
    .when("/about", {templateUrl : "about.html"})
    .when("/services", {templateUrl : "services.html"})
    .when("/projects", {templateUrl : "projects.html"})
    });