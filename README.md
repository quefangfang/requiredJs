### required js 配置方法

本例提供了2种方式

第一种方式：

`<script data-main="js/demo1" src="lib/require/require.min.js"></script>`

demo1.js代码如下

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

这种方式  demo1是程序的主模块，主模块里面引入了lib下面的demo.js,然后 require引入所需要的依赖后调用demo,如果有多个页面，需要引入每个页面的js，然后调用。

第二种方式：

`<script src="lib/require/app.js"></script>`
`<script data-main="js/demo2" src="lib/require/require.min.js"></script>`

app.js 代码如下：定义了config配置文件

    
    var config = {
        baseUrl: 'lib',
        paths: {
            domReady: 'require/domReady',
            jquery: 'jquery/jquery-1.10.2.min',
            jquery_ui: 'jquery/jquery-ui.min',
            icheck: 'icheck/icheck.min',
            layer: 'layer/layer',
            swiper2: 'swiper/idangerous.swiper.min'
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
    };
demo2.js代码如下：

```javascript
require.config(config);
define([
	'jquery',
	'domReady'
],function($,domReady){
	$('button').on('click',function(){
		alert('我是button')
	});
});
```

这里每个js文件需要引入config配置。

