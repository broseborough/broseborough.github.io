$(document).ready(function() {
    var videobackgroundblur = new $.backgroundVideo($('.blur'), {
		"videoid": "blur",
		"align": "",
		"width": 1280,
		"height": 720,
		"position": "absolute",
		"display": "block",
		"autoplay": true,
		"loop": true,
		"path": "video/",
		"filename": "cloudyblur",
		"types": ["mp4", "webm", "ogg"],
        "poster": "images/cloudyblur.jpg"
    });
});