'use strict';

var items = [
  {name: 'Dango', category_id: 1},
  {name: 'Forest Gump', category_id: 1}
];

app.controller('itemIndex', function($scope){

})
.controller('itemList', function($scope){
  $scope.items = items;
})
.controller('itemCreate', function($scope){
})
.controller('itemRemove', function($scope){});
