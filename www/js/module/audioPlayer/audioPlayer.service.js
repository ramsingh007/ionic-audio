playerMod
.factory('AudioSvc', [function($ionicLoading) {
	var source = null;
	var mediaTimer = null;

	var currentIndex = null;

	function setCurrentIndex($index){
		currentIndex = $index;
	}

	function getCurrentIndex(){
		return currentIndex;
	}

	function playAudio(src,callback){
		stopAudio();

		source = new Media(src, onSuccess, onError);
		source.play();

		if(mediaTimer == null){
			mediaTimer = setInterval(function(){
				source.getCurrentPosition(function(position){
					callback(position, source.getDuration());
				}, function(error){
					console.log('Error getting current position : ',error);
				});
			}, 100);
		}

		function onSuccess() {
			console.log("Playing Success");
		}

		function onError(error) {
			var code = error.code;
			var msg = error.message;
			console.error('Playing Error! Code : ', code, 'Msg : ', msg);

			$ionicLoading.show({
				template: 'Playing Error!'
			});
			setTimeout(function() {
				$ionicLoading.hide();
			}, 1000);
			// we forcefully stop
		}
	}

	function pauseAudio(){
		if(source){
			source.pause();
		}
	}

	function resumeAudio(){
		if(source){
			source.play();
		}
	}

	function stopAudio(){
		if(source){
			source.stop();
			source.release();
		}

		if(mediaTimer){
			clearInterval(mediaTimer);
			mediaTimer = null;
		}
	}

	return {
		setCurrentIndex : setCurrentIndex,
		getCurrentIndex : getCurrentIndex,
		playAudio : playAudio,
		pauseAudio : pauseAudio,
		resumeAudio : resumeAudio,
		stopAudio : stopAudio
	}
}]);