/**
 * This file contains the config for require.js. 
 * If you change the directory structure this needs to match.
 */

({
    baseUrl : "..",
    name: "main",
    findNestedDependencies: true,
    preserveLicenseComments: false,
    paths:{
        /* Environment Paths */
        "latencymon.env": ".tmp/environment/environment",
        "latencymon.env.utils": ".tmp/environment/utils",
        "latencymon.env.config": ".tmp/environment/config",
        "latencymon.env.params-manager": ".tmp/environment/ParamsManager",
        "latencymon.env.history-manager": ".tmp/environment/HistoryManager",
        "latencymon.env.languages.en": ".tmp/environment/languages/language.eng",
        /* Lib Paths */
        "latencymon.lib.jquery": ".tmp/libs/jquery/jquery-1.11.1.min",
        "latencymon.lib.jquery-ui": ".tmp/libs/jquery/jquery-ui.min",
        "latencymon.lib.tree-map": ".tmp/libs/TreeMap",
        "latencymon.lib.date-format": ".tmp/libs/dateFormat",
        "latencymon.lib.bootstrap": ".tmp/libs/bootstrap/js/bootstrap.min",
        "latencymon.lib.socket-io": ".tmp/libs/socket.io",
        "latencymon.lib.bootstrap-table": ".tmp/libs/bootstrap-table/bootstrap-table.min",
        "latencymon.lib.jquery-amd": ".tmp/jquery-libs-amd.min",
        "latencymon.lib.jquery-libs": ".tmp/jquery-libs.min",
        "latencymon.lib.pathseg": ".tmp/libs/pathseg",
        "latencymon.lib.d3-amd": ".tmp/libs/d3/js/d3.v3.amd",
        "latencymon.lib.d3-magnetic-cursor": ".tmp/libs/d3-magnetic-cursor",
        /* View Paths */
        "latencymon.view.main": ".tmp/view/MainView",
        "latencymon.view.chart.singleProbe": ".tmp/view/ChartSingleProbeView",
        "latencymon.view.chart.multiProbe": ".tmp/view/ChartMultiProbeView",
        "latencymon.view.chart.comparison": ".tmp/view/ChartComparisonView",
        "latencymon.view.viewport": ".tmp/view/ViewPort",
        "latencymon.view.chartManager": ".tmp/view/ChartManager",
        "latencymon.view.templateManager": ".tmp/view/TemplateManagerView",
        "latencymon.view.timeOverview": ".tmp/view/TimeOverviewView",
        "latencymon.view.svg.chart": ".tmp/view/svg/SvgChartView",
        /* Model Paths */
        "latencymon.model.group": ".tmp/model/Group",
        /* Controller Paths */
        "latencymon.controller.gesture-manager": ".tmp/controller/GesturesManager",
        "latencymon.controller.group-manager": ".tmp/controller/GroupManager",
        "latencymon.controller.url-manager": ".tmp/controller/UrlManager",
        "latencymon.controller.main": ".tmp/controller/main",
        /* Filter Paths */
        "latencymon.filter.relative-rtt": ".tmp/filter/RelativeRTTFilter",
        "latencymon.filter.natural-rtt": ".tmp/filter/NaturalRTTFilter",
        /* Connector Paths */
        "latencymon.connector.facade": ".tmp/connector/ConnectorFacade",
        "latencymon.connector.history-auto": ".tmp/connector/HistoryConnectorAutoResolution",
        "latencymon.connector.live": ".tmp/connector/LiveConnector",
        "latencymon.connector.translate-to-ping": ".tmp/connector/TranslateToPing",
    },
    shim:{
        "latencymon.lib.d3-magnetic-cursor": {
            deps: ["latencymon.lib.d3-amd"]
        },
        "latencymon.lib.socket-io": {
            exports: "io"
        },
        "latencymon.lib.jquery.cookie": {
            deps: ["latencymon.lib.jquery"]
        },
        "latencymon.lib.jquery-ui.timepicker": {
            deps: ["latencymon.lib.jquery-ui"]
        }
    },
    optimize: "uglify2",
    wrapShim: true,
    generateSourceMaps: true,
    out: "../.tmp/latencymon.min.js"
})
