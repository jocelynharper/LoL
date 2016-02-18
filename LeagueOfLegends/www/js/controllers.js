angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.myFunc = function(input){
    console.log(input);
  }
  $scope.submit = function(userInput){
    //if(userInput == )
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('ChampionCtrl', function($scope, $http, $state){

  $http.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image,info,lore,skins&api_key=3cd4a072-2b3f-4169-b308-6af3a44066b9').then(function(result) {
    
    var champs = result.data.data;
    
    $scope.champs = [];
    angular.forEach(champs, function(value, key) {
      this.push(value);

    }, $scope.champs);
    
    $scope.viewChampionInfo = function(champion){
     
      $state.go('tab.champion');
      
    };

  }, 
  function (err){
    console.error('ERR', err);
  })
});
