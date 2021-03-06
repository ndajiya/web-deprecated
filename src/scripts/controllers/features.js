(function () {
  angular
    .module("app")
    .controller("FeaturesCtrl", FeaturesCtrl);

  function FeaturesCtrl() {
    const vm = this;

    function start() {
      vm.loading = true;
    }

    function end() {
      vm.loading = false;
    }

    function fail(err) {
      const errors = err.errors || err.data.errors;
      vm.errors = errors;
    }
  }
})();
