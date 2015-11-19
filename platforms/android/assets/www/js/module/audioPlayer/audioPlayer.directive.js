playerMod.directive('audioPlayback', function(AudioSvc, $ionicPlatform){
	return {
		restrict : 'E',
		scope : {
			option : "=",
			index : "="
		},
		templateUrl : 'templates/audioPlayer/directive/audioPlayback.html',
		link : function(scope, element, attr) {
			

		},
		controller : function($scope){
			$scope.position = 0;
			
			$scope.playAudio = function(){
				
				AudioSvc.playAudio($scope.option.track, function(a, b) {
	            	var tempP = (a/b) * 100;
					$scope.position = tempP.toFixed(2);

	            	if (a < 0) {
	            		$scope.stopAudio();
	                	$scope.position = 0;
	              	}
	              
	              	if (!$scope.$$phase) $scope.$apply();
	            });
				
	            $scope.loaded = true;
	            $scope.isPlaying = true;
	            AudioSvc.setCurrentIndex($scope.index);

			};

			$scope.pauseAudio = function() {
				AudioSvc.pauseAudio();
				$scope.isPlaying = false;
				if (!$scope.$$phase) $scope.$apply();
            };
            $scope.resumeAudio = function() {
				AudioSvc.resumeAudio();
				$scope.isPlaying = true;
				if (!$scope.$$phase) $scope.$apply();
            };
            $scope.stopAudio = function() {
            	if(AudioSvc.getCurrentIndex() == $scope.index){
					AudioSvc.stopAudio();
					$scope.loaded = false;
					$scope.isPlaying = false;
					$scope.position = 0;
					if (!$scope.$$phase) $scope.$apply();
				}
            };
		}
	}
});