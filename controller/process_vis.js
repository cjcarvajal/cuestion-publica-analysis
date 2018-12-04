const retrieveData = async (dataUrl) => {
    let data = [];
    return await (await fetch(dataUrl)).json();
}

// Define the div for the tooltip
const div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("opacity", 0);

var averageColors = ["#01B8AA", "#F52749", "#6B134F"];
var congressmanColor = ['#F52749','#6B134F','#F1F74C','#F9742C','#C10185','#01B8AA','#AD281F','#A2F06D'];

const formatDecimalComma = d3.format(",.2f");

var lineConsecutiveId = 0;

var svgAverage = d3.select("#principalAverage"),
    margin = { top: 20, right: 80, bottom: 30, left: 90 },
    averageChartWidth = svgAverage.attr("width") - margin.left - margin.right,
    averageChartHeight = svgAverage.attr("height") - margin.top - margin.bottom,
    averageG = svgAverage.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
    averageY = d3.scaleLinear().range([averageChartHeight, 0]),
    averageZ = d3.scaleOrdinal().range(averageColors);

var svgEarns = d3.select("#principalEarns"),
    earnsChartWidth = svgEarns.attr("width") - margin.left - margin.right,
    earnsChartHeight = svgEarns.attr("height") - margin.top - margin.bottom,
    earnsG = svgEarns.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
    earnsY = d3.scaleLinear().range([earnsChartHeight, 0]),
    earnsZ = d3.scaleOrdinal().range(congressmanColor);

var svgLegendAverage = d3.select("#legendAverage").style("font", "10px sans-serif");
var svgLegendEarns = d3.select("#legendEarns").style("font", "10px sans-serif");

/*
 * Average values congress
 */
retrieveData('https://cjcarvajal.github.io/cuestion-publica/data/financial.json').then(response => {
    drawMultiLineChart(response, averageY, averageG, averageZ, svgLegendAverage, averageChartWidth, averageChartHeight,0);
    animatePath();
});

/*
 * Assets by congressman
 */
retrieveData('https://cjcarvajal.github.io/cuestion-publica/data/earns.json').then(response => {
    //Precalculated
    var averageLineValue = 552820746.7;
    drawMultiLineChart(response, earnsY, earnsG, earnsZ, svgLegendEarns, earnsChartWidth, earnsChartHeight,averageLineValue);
    animatePath();
});