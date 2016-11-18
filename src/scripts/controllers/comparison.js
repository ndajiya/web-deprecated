(function () {
  angular
      .module("app")
      .controller("ComparisonCtrl", ComparisonCtrl);

  function ComparisonCtrl($scope, $stateParams, $window, comparisonData) {
    var vm = this;
    $scope.page = "comparison";

    $scope.project = {
      id: $stateParams.id,
      slug: $stateParams.slug,
      artboardId: $stateParams.artboardId
    };

    $scope.loading = false;

    vm.comparisonData = {};
    vm.project = {};

    vm.comparisonData.pages = comparisonData.data;
    vm.comparisonData.setOriginalScreen = setOriginalScreen;
    vm.comparisonData.setImplementedScreen = setImplementedScreen;

    function setOriginalScreen(index) {
      $scope.img1 = vm.comparisonData.pages[index].implementedImagePath;
      if($scope.img2 === undefined) {
        $scope.img2 = vm.comparisonData.pages[index].implementedImagePath;
      }
      $(window).trigger("resize");
    }
    function setImplementedScreen(index) {
      $scope.img2 = vm.comparisonData.pages[index].implementedImagePath;
      if($scope.img1 === undefined) {
        $scope.img1 = vm.comparisonData.pages[index].implementedImagePath;
      }
      $(window).trigger("resize");
    }
  }
})();