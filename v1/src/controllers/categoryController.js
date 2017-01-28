'use strict'

var categories = [
  {id: 1, name: 'Film'},
  {id: 2, name: 'Film'}
];

app.controller('categoryIndex', function($scope){

})
.controller('categoryList', function($scope){
  $scope.categories = categories
})
.controller('categoryCreate', function($scope){
})
.controller('categoryRemove', function($scope){});
