angular.module("site-app", []).controller("site-controller", ["$scope", "$http", "$location", "$anchorScroll", function ($scope, $http, $location, $anchorScroll) {
    $scope.scrollTo = function (loc) {
        $location.hash(loc);
        $anchorScroll();
    }
    $scope.navTo = function (loc)
    {
        window.location = loc;
    }
}]);