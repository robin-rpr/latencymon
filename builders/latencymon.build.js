/**
 * This file contains the config for require.js. 
 * If you change the directory structure this needs to match.
 */

({
    baseUrl : "../.tmp",
    name: "latencymon",
    findNestedDependencies: true,
    preserveLicenseComments: false,
    paths:{
        /* Environment Paths */
        "latencymon.env": "environment/environment",
        "latencymon.env.utils": "environment/utils",
        "latencymon.env.config": "environment/config",
        "latencymon.env.params-manager": "environment/ParamsManager",
        "latencymon.env.history-manager": "environment/HistoryManager",
        "latencymon.env.languages.en": "environment/languages/language.eng",
        /* Lib Paths */
        "latencymon.lib.jquery": "libs/jquery/jquery-1.11.1.min",
        "latencymon.lib.jquery-ui": "libs/jquery/jquery-ui.min",
        "latencymon.lib.tree-map": "libs/TreeMap",
        "latencymon.lib.date-format": "libs/dateFormat",
        "latencymon.lib.bootstrap": "libs/bootstrap/js/bootstrap.min",
        "latencymon.lib.socket-io": "libs/socket.io",
        "latencymon.lib.bootstrap-table": "libs/bootstrap-table/bootstrap-table.min",
        "latencymon.lib.jquery-amd": "libs/jquery-libs-amd.min",
        "latencymon.lib.jquery-libs": "libs/jquery-libs.min",
        "latencymon.lib.pathseg": "libs/pathseg",
        "latencymon.lib.d3-amd": "libs/d3/js/d3.v3.amd",
        "latencymon.lib.d3-magnetic-cursor": "libs/d3-magnetic-cursor",
        /* View Paths */
        "latencymon.view.main": "view/MainView",
        "latencymon.view.chart.singleProbe": "view/ChartSingleProbeView",
        "latencymon.view.chart.multiProbe": "view/ChartMultiProbeView",
        "latencymon.view.chart.comparison": "view/ChartComparisonView",
        "latencymon.view.viewport": "view/ViewPort",
        "latencymon.view.chartManager": "view/ChartManager",
        "latencymon.view.templateManager": "view/TemplateManagerView",
        "latencymon.view.timeOverview": "view/TimeOverviewView",
        "latencymon.view.svg.chart": "view/svg/SvgChartView",
        /* Model Paths */
        "latencymon.model.group": "model/Group",
        /* Controller Paths */
        "latencymon.controller.gesture-manager": "controller/GesturesManager",
        "latencymon.controller.group-manager": "controller/GroupManager",
        "latencymon.controller.url-manager": "controller/UrlManager",
        "latencymon.controller.main": "controller/main",
        /* Filter Paths */
        "latencymon.filter.relative-rtt": "filter/RelativeRTTFilter",
        "latencymon.filter.natural-rtt": "filter/NaturalRTTFilter",
        /* Connector Paths */
        "latencymon.connector.facade": "connector/ConnectorFacade",
        "latencymon.connector.history-auto": "connector/HistoryConnectorAutoResolution",
        "latencymon.connector.live": "connector/LiveConnector",
        "latencymon.connector.translate-to-ping": "connector/TranslateToPing",
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
