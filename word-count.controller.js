(function() {
  angular
    .module('felixsu')
    .controller('WordCountCtrl', WordCountCtrl);

  WordCountCtrl.$inject = [];

  function WordCountCtrl() {
    var vm = this;

    vm.itemList = [''];
    vm.addToList = addToList;

    console.log('hi');
    function addToList() {
      vm.itemList.push('');
    }
  }
}());