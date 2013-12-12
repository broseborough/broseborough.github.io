$(document).ready(function() {
    var videobackground = new $.backgroundVideo($('body'), {
		"videoid": "sharp",
		"align": "",
		"width": 1280,
		"height": 720,
		"position": "absolute",
		"display": "block",
		"autoplay": false,
		"loop": false,
		"path": "",
		"filename": "cloudy",
		"types": ["mp4", "webm", "ogg"]
    });
    var videobackgroundblur = new $.backgroundVideo($('.blur'), {
		"videoid": "blur",
		"align": "",
		"width": 1280,
		"height": 720,
		"position": "absolute",
		"display": "block",
		"autoplay": false,
		"loop": false,
		"path": "",
		"filename": "cloudyblur",
		"types": ["mp4", "webm", "ogg"]
    });

    var sharpBuffered = blurBuffered = false;
    var sharpStopped = blurStopped = false;
    $("#sharp").on('canplaythrough', function(){
    	sharpBuffered = true;
    	if(sharpBuffered && blurBuffered) {
    		playBG()
    	}
    }).on('ended', function(){
    	sharpStopped = true;
    	if(sharpStopped && blurStopped) {
    		playBG();
    	}
    });
    $("#blur").on('canplaythrough', function(){

    	blurBuffered = true;
    	if(sharpBuffered && blurBuffered) {
    		playBG();
    	}
    }).on('ended', function(){
    	blurStopped = true;
    	if(sharpStopped && blurStopped) {
    		playBG();
    	}
    });

    function playBG(){
    	sharpStopped = blurStopped = false;
    	document.getElementById('blur').play();
		document.getElementById('sharp').play();
    }
	});