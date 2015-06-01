module.exports = {
	ex : {
		files : ['src/exif.js'],
		tasks : [ 'newer:uglify:ex' ],
		options : {
			spawn : false,
	        livereload: true
		}
	},
	je : {
		files : ['src/jquery.exif.js'],
		tasks : [ 'newer:uglify:je' ],
		options : {
			spawn : false,
	        livereload: true
		}
	}
};