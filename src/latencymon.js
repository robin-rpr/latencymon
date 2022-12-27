// Load Web App JavaScript Dependencies/Plugins
define([
    "latencymon.env.utils",
    "latencymon.env.config",
    "latencymon.env.languages.en",
    "latencymon.lib.jquery-amd",
    "latencymon.controller.main",
], function(utils, config, _, $, main){

    console.log('Required plugins loaded...');

    var Latencymon = function(instance){
        var env, instanceParams, queryParams, parentDom, styleDownloads;

        /*
         * Access to the instance
         */
        instanceParams = instance.instanceParams;
        queryParams = instance.queryParams;
        parentDom = instance.domElement;

        /*
         * Initialize Dependency Injection Vector
         */
        env = {
            "version": "1.0.0",
            "widgetUrl": LATENCYMON_WIDGET_URL + "src/",
            "autoStart": (instanceParams.autoStart != undefined) ? instanceParams.autoStart : config.autoStart,
            "dataApiResults": instanceParams.dataApiResults || config.dataAPIs.results,
            "dataApiMeta": instanceParams.dataApiMeta || config.dataAPIs.meta,
            "streamingUrl": instanceParams.streamingHost || config.streamingUrl,
            "syncWithRealTimeData": (instanceParams.syncWithRealTimeData != undefined) ? instanceParams.syncWithRealTimeData : config.syncWithRealTimeData,
            "autoStartGrouping": (instanceParams.autoStartGrouping != undefined) ? instanceParams.autoStartGrouping : config.autoStartGrouping,
            "groupingType": instanceParams.groupingType,
            "onlyChartMode": instanceParams.onlyChartMode,
            "onTimeRangeChange": instanceParams.onTimeRangeChange,
            "onTimeSelection": instanceParams.onTimeSelection,
            "permalinkEnabled": (instanceParams.permalinkEnabled != undefined) ? instanceParams.permalinkEnabled : config.permalinkEnabled,
            "groupingLabelReplace": (instanceParams.groupingLabelReplace != undefined) ? instanceParams.groupingLabelReplace : {},
            "parentDom": $(parentDom),
            "showMinimumByDefault": (instanceParams.showMinimumByDefault != undefined) ? instanceParams.showMinimumByDefault : config.showMinimumByDefault,
            "queryParams": queryParams
        };

        if (!env.parentDom || env.parentDom.length == 0){
            throw "Parent Element is not defined! Please define a 'parentDom' to be populated.";
        }

        if (!instanceParams.dev){
            styleDownloads = [
                "src/view/css/style-lib.min.css"
                // "src/view/css/style-compiled.css"
                // "src/libs/bootstrap-datetimepicker.css"
            ];
        } else {
            styleDownloads = [
                "src/view/css/style.css",
                "src/view/css/bootstrap-datetimepicker.css",
                "src/view/css/jquery-ui.min.css",
                "src/libs/bootstrap/css/bootstrap.min.css",
                "src/libs/bootstrap/css/bootstrap-theme.min.css",
                "src/libs/bootstrap-table/bootstrap-table.min.css"
            ];
        }

        /**
         * Expose Methods
         */
        var methods = {};

        utils.loadStylesheets(styleDownloads, function() {
            env.main = new main(env);

            if (env.autoStart){
                env.main.init();
            }

            function exposeMethod(name) {
                methods[name] = function () {
                    env.main[name].apply(env.main, arguments);
                }
            }

            for (var i = 0; i < env.main.exposedMethods.length; i++) {
                exposeMethod(env.main.exposedMethods[i]);
            }
        });

        return methods;
    };

    return Latencymon;
});
