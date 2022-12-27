/**
 * Created by mcandela on 23/01/14.
 */


define([], function(){
    return {
        bottomInfoSection: "info",
        startDateLabel: "start Time",
        addLineIcon: "Add probes",
        addGroupIcon: "Add probe groups",
        addMeasurement: "Add measurement",
        forwardTitle: "Get the latest results",
        shiftLeftTitle: "Shift the time window left",
        shiftRightTitle: "Shift the time window right",
        zoomInTitle: "Zoom in",
        zoomOutTitle: "Zoom out",
        addMeasurementHeader: "To add a measurement, write the related ID in the field below",
        selectLineHeaderText: "Select the probes you want to display",
        selectGroupHeaderText: "Select the probes you want to add to the group. NOTE: you can use only probes not participating in other charts",
        streamingInfo: "Samples coming from the probes in real time",
        leftHeaderDefaultInfo: "Use the icons on the top left to add a measurement",
        chartModeTitle: {
            absolute: "Switch to relative values",
            relative: "Switch to absolute values"
        },

        absoluteValuesInfo: "The charts now show absolute values",
        relativeValuesInfo: "The charts now show relative values (the 0 is the minimum of the collected latencies)",

        documentation: "Documentation",
        embedCode: "Embed in your page",
        about:"About LatencyMON",

        leftHeader: {
            noMeasurement: "Add a measurement to start",
            noGroups: "Add probes/groups to see something",
            show: "RIPE Atlas %y measurement #%m to %t",
            multi: "RIPE Atlas measurements to %t"
        },

        deleteIcon: "Delete",
        explodeIcon: "Explode",
        dragIcon: "Drag",

        rightHeader: "From %s to %e",

        titleProbeInfoDialog: "Info about this probe",
        titleSelectTimeRange: "Select a time range to visualise (UTC)",
        alert: {
            notValidGroupName: "The group name can contain only letters and numbers"
        },

        measurementAdded: "Measurement loaded. Add now the probes/groups you want to display",


        
        showOnlySinglePacketTitle: {
            single: "Show all 3 packets received",
            all: "Show only minimum values"
        },

        allValuesInfo: "All the three packets of each ping attempt are shown",
        singlePacketValuesInfo: "Only the minimum value of each ping attempt is shown"

    }
});