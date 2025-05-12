myApp.controller( "mathController", function($scope, mathService) {
    $scope.x = 10;
    $scope.y = 30;
    $scope.result = 0;
    $scope.calcAdd = function() {
        $scope.result = mathService.add($scope.x, $scope.y)
    }
    $scope.calcSub = function() {
        $scope.result = mathService.sub($scope.x, $scope.y)
    }
    $scope.calcMul = function() {
        $scope.result = mathService.mul($scope.x, $scope.y)
    }
    $scope.calcDiv = function() {
        $scope.result = mathService.div($scope.x, $scope.y)
    }
})