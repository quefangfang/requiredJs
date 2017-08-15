require.config(config);
define([
	'jquery',
	'domReady'
],function($,domReady){
	$('button').on('click',function(){
		alert('我是button')
	});
});

