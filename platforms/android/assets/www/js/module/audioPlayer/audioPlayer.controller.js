playerMod
.controller('AudioPlayer', function($scope, $ionicLoading) {
	
    var currentPath = window.location.pathname;
    var songDirPath = currentPath.substring(0, currentPath.lastIndexOf('/')) + '/songs';

    $scope.tracks = [
    	{
    		'title' : 'Galliyan (Acoustic Cover) - Aakash Gandhi (Jonita Gandhi)',
    		'track' : songDirPath+'/Galliyan (Acoustic Cover) - Aakash Gandhi (Jonita Gandhi).mp3'
    	},
    	{
    		'title' : 'pirates_guitar',
    		'track' : songDirPath+'/pirates_guitar.mp3'
    	},
    	{
    		'title' : 'thegodfatherthe26',
    		'track' : songDirPath+'/thegodfatherthe26.mp3'
    	}
    ];

    $ionicLoading.show({
        template: 'Fetching Media!'
    });
    setTimeout(function() {
        $ionicLoading.hide();
    }, 1000);

});

