/**
 * This file contains the config for require.js. 
 * If you change the directory structure this needs to match.
 */

({
    baseUrl : "..",
    findNestedDependencies: true,
    preserveLicenseComments: false,
    wrap: {
        start: "define([], function(){define.amd=true;",
        end: "});"
    },
    include: [
        "latencymon.lib.jquery",
        "latencymon.lib.jquery-ui",
        "latencymon.lib.bootstrap",
        "latencymon.lib.bootstrap.datepicker",
        "latencymon.lib.bootstrap-table"
    ],
    paths:{
        "latencymon.lib.jquery": ".tmp/libs/jquery/jquery-1.11.1.min",
        "latencymon.lib.jquery-ui": ".tmp/libs/jquery/jquery-ui.min",
        "latencymon.lib.bootstrap": ".tmp/libs/bootstrap/js/bootstrap.min",
        "latencymon.lib.bootstrap.datepicker": ".tmp/libs/bootstrap-datetimepicker.min",
        "latencymon.lib.bootstrap-table": ".tmp/libs/bootstrap-table/bootstrap-table.min"
    },
    optimize: "uglify2",
    wrapShim: true,
    out: "../.tmp/libs/jquery-libs-amd.min.js"
})