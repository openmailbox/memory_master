MemoryMaster.controller('ModalInstanceCtlr', ['$scope', '$modalInstance', 'Analytics', function($scope, $modalInstance, Analytics) {
  $scope.allowTracking = Analytics.isEnabled();

  $scope.close = function() {
    $modalInstance.close();
  }

  $scope.dismiss = function() {
    $modalInstance.dismiss();
  }

  $scope.$watch('allowTracking', function(newValue, oldValue) {
    if (newValue !== oldValue) {
      Analytics.setEnabled(newValue);
    }
  });
}]);
