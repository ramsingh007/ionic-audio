var playerMod = angular.module('player.module', []);

playerMod.config(function($stateProvider){
	$stateProvider

    .state('app.player', {
        url: "/player",
        views: {
        	'menuContent' : {
        		templateUrl: "templates/audioPlayer/audioPlayer.html",
        		controller: 'AudioPlayer'
        	}
        }
    })
});