

/**
 * Customization, put your URL here
 */
LATENCYMON_WIDGET_URL = ((typeof LATENCYMON_EXTERNAL_WIDGET_URL == 'undefined') ? "" : LATENCYMON_EXTERNAL_WIDGET_URL);

/**
 * Initialize Latencymon on Window
 */
window.atlas = window.atlas || {};
window.atlas._widgets = window.atlas._widgets || {};
window.atlas._widgets.latencymon = window.atlas._widgets.latencymon || {};
window.atlas._widgets.latencymon.urls = window.atlas._widgets.latencymon.urls || {
        libs: LATENCYMON_WIDGET_URL + "libs/",
        env: LATENCYMON_WIDGET_URL + "environment/",
        connector: LATENCYMON_WIDGET_URL + "connector/",
        model: LATENCYMON_WIDGET_URL + "model/",
        view: LATENCYMON_WIDGET_URL + "view/",
        controller: LATENCYMON_WIDGET_URL + "controller/",
        filter: LATENCYMON_WIDGET_URL + "filter/",
        session: LATENCYMON_WIDGET_URL + "session/"
    };
window.atlas._widgets.latencymon.instances = window.atlas._widgets.latencymon.instances || {
        requested: [],
        running: {},
        callbacks: {}
    };


if (!window.atlas._widgets.widgetInjectorRequested) { // Only one injector
    window.atlas._widgets.widgetInjectorLoaded = false;
    window.atlas._widgets.widgetInjectorRequested = true;
    window.atlas._widgets.latencymon.tmp_scripts = document.getElementsByTagName('script');
    window.atlas._widgets.latencymon.tmp_scrip = window.atlas._widgets.latencymon.tmp_scripts[window.atlas._widgets.latencymon.tmp_scripts.length - 1];
    window.atlas._widgets.injectorScript = document.createElement('script');
    window.atlas._widgets.injectorScript.async = false;
    window.atlas._widgets.injectorScript.src = window.atlas._widgets.latencymon.urls.libs + 'require.min.js';
    window.atlas._widgets.latencymon.tmp_scrip.parentNode.appendChild(window.atlas._widgets.injectorScript);
}

function initLatencymon(domElement, instanceParams, queryParams){
    var run;

    run = function(){
        var instances, instance;

        instances = window.atlas._widgets.latencymon.instances;
        instance = instances.requested.shift();

        while (instance){
            (function(instances, instance){
                if (instance.instanceParams.src) { // Load src version
                    require([LATENCYMON_WIDGET_URL + 'latencymon.js'], function(Latencymon){
                        instances.running[instance.domElement] = Latencymon(instance);
                    });
                } else { // Load deployed version
                    require([LATENCYMON_WIDGET_URL + 'latencymon.min.js'], function () {
                        require(['latencymon'], function(Latencymon){
                            instances.running[instance.domElement] = Latencymon(instance);
                        });
                    });
                }
            })(instances, instance);


            instance = instances.requested.shift();
        }
    };

    window.atlas._widgets.latencymon.instances.requested
        .push({domElement: domElement, instanceParams: instanceParams, queryParams: queryParams, callbacks: {}});

    if (document.readyState == 'complete'){
        window.atlas._widgets.widgetInjectorLoaded = true;
    }
    if (window.atlas._widgets.widgetInjectorLoaded === false){
        window.atlas._widgets.injectorScript.onload = function(){
            window.atlas._widgets.widgetInjectorLoaded = true;
            run();
        };
    } else {
        run();
    }

    return {
        shell: function(){
            var instance = window.atlas._widgets.latencymon.instances.running[domElement];

            if (instance) {
                return instance;
            } else {
                throw "Loading, try again in a few seconds..."
            }
        }
    };
}
