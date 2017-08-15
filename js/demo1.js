requirejs.config({
	baseUrl: 'lib',
    paths: {
        domReady: 'require/domReady',
        jquery: 'jquery/jquery-1.10.2.min',
        jquery_ui: 'jquery/jquery-ui.min',
        icheck: 'icheck/icheck.min',
        layer: 'layer/layer',
        swiper2: 'swiper/idangerous.swiper.min',
        demoShow: 'demo'
    },
    shim: {
        jquery_ui: {
            deps: ['jquery'],
            exports: 'JqueryUi'
        },
        layer: {
            deps: ['jquery'],
            exports: 'layer'
		},
		icheck: {
		    deps: ['jquery'],
		    exports: 'icheck'
		},
		swiper2: {
            deps   : ['jquery'],
            exports: 'swiper2'
		}

    },
    waitSeconds: 0
});
require(['domReady','jquery'],function(){
	require(['demoShow']);
});
