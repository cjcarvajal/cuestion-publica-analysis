
//SVG setup
/*const margin = {top: 10, right: 30, bottom: 30, left: 30},
      width = 700 - margin.left - margin.right,
      height = 550 - margin.top - margin.bottom;*/


var svgDDR = d3.select("#chartDDRs"),
    margin = { top: 10, right: 30, bottom: 30, left: 60 },
    chartWidth = svgDDR.attr("width") - margin.left - margin.right,
    chartHeight = svgDDR.attr("height") - margin.top - margin.bottom,
    ddrG = svgDDR.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//x scales
const x = d3.scaleLinear()
    .rangeRound([margin.left, chartWidth])
    .domain([2003, 2016]);

//set up svg
/*const svg = d3.select("body")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
            `translate(${margin.left}, ${margin.top})`);*/
  
//tooltip
const tooltip = d3.select("#chart1")
  .append("div")
    .attr("class", "tooltip_ddr")
    .style("opacity", 0);

//snapshot
const snapshot = d3.select("#chart1")
  .append("div")
    .attr("class", "snapshot")
    .style("opacity", 0);

//select
var goBackButton = d3.select('#chart1')
  .append('button')
    .attr('class','myButton')
    .text("Volver a ver todos")
    .style('visibility','hidden')
    .on('click',backToAll)




//title
//var title = d3.select('#chartDDRs')

var selection = "All";


const t = d3.transition()
      .duration(1000);

const dataFile = "https://raw.githubusercontent.com/cjcarvajal/cjcarvajal.github.io/master/cuestion-publica/data/ddr.json"
const dataImg = "https://raw.githubusercontent.com/cjcarvajal/cjcarvajal.github.io/master/cuestion-publica/data/congressimages.json"
//number of bins for histogram
const nbins = 14;


function update(){
  // Get the data
d3.json(dataFile).then(function(allData) {
    allData.forEach(function(d) {
        d.Name = d.Name
        d.Year = d.Year;
        d.colour = d.colour;
    });
    var allNames = [];
    allData.forEach(function(d){allNames.push(d.Name)});
    uniqueNames = [...new Set(allNames)];
    uniqueNames.unshift("All");

    //histogram binning
    const histogram = d3.histogram()
      .domain(x.domain())
      .thresholds(x.ticks(nbins))
      .value(function(d) { return d.Year;} )


  //binning data
  var bins;
    
    if(selection != "All"){
           bins = histogram(allData.filter(function(d){
      return d.Name == selection;}));
      goBackButton.style('visibility','visible');}
          else{
           bins = histogram(allData);
           goBackButton.style('visibility','hidden');}


    let binContainer = svgDDR.selectAll(".gBin")
      .data(bins)

    //g container for each bin
    

    binContainer.exit().remove()

    let binContainerEnter = binContainer.enter()
      .append("g")
        .attr("class", "gBin")
        .attr("transform", d => `translate(${x(d.x0)}, ${chartHeight})`)

    //need to populate the bin containers with data the first time
    binContainerEnter.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Year,
                  colour: p.colour,
                  radius: 17
                }
        }))
      .enter()
      .append("circle")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
            return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", (d => ""+d.colour))
        .style("opacity","0.8")
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .on("click", onchange)
        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })

    binContainerEnter.merge(binContainer)
        .attr("transform", d => `translate(${x(d.x0)}, ${chartHeight})`)

    //enter/update/exit for circles, inside each container
    let dots = binContainer.selectAll("circle")
        .data(d => d.map((p, i) => {
          return {idx: i,
                  name: p.Name,
                  value: p.Year,
                  colour: p.colour,
                  radius: 17
                }
        }))

    //EXIT old elements not present in data
    dots.exit()
      .attr("class", "exit")
      .transition(t)
      .attr("r", 0)
      .remove();

    //UPDATE old elements present in new data.
    dots.attr("class", "update")
        .style("fill", (d => ""+d.colour))
        .transition()
          .duration(200);

    //ENTER new elements present in new data.
    dots.enter()
      .append("circle")
        .attr("cx", 0) //g element already at correct x pos
        .attr("cy", function(d) {
            return - d.idx * 2 * d.radius - d.radius; })
        .attr("r", 0)
        .style("fill", (d => ""+d.colour))
        .style("opacity","0.8")
        .on("mouseover", tooltipOn)
        .on("mouseout", tooltipOff)
        .on("click", onchange)

        .transition()
          .duration(500)
          .attr("r", function(d) {
          return (d.length==0) ? 0 : d.radius; })
});//d3.json
};//update

function tooltipOn(d) {
  //x position of parent g element
  let gParent = d3.select(this.parentElement)
  let translateValue = gParent.attr("transform")

  let gX = translateValue.split(",")[0].split("(")[1]
  let gY = chartHeight + (+d3.select(this).attr("cy")-50)

  d3.select(this)
    .classed("selected", true)
  tooltip.transition()
       .duration(200)
       .style("opacity", .9);
  tooltip.html("<b>"+d.name + "</b><br/> (" + d.value + ") <br/>"+"Has click para focus...")
    .style("left", gX + "px")
    .style("top", gY + "px");
}//tooltipOn

function tooltipOff(d) {
  d3.select(this)
      .classed("selected", false);
    tooltip.transition()
         .duration(500)
         .style("opacity", 0);
}//tooltipOff

function snapshotOn(d) {
  ourName = d.name;
  d3.json(dataImg).then(function(imgData){
    imgData.forEach(function(d) {
        d.Name = d.Name;
        d.img = d.img;
    });

  var index = imgData.findIndex(x => x.Name==ourName);

  let gX = chartWidth/2
  let gY = chartHeight/2 - 15

  var str = "<img class =\"photo_congressman\"  src= "+ imgData[index].img  + " </>";


  snapshot.transition()
       .duration(500)
       .style("opacity", .9);
  snapshot.html(str +"<br> <b>"+ d.name + "</b> <br/>"+"Total DDR entregadas : "+ imgData[index].total + " </br>")
    .style("left", gX + "px")
    .style("top", gY + "px");
  });
}

function snapshotOff(d) {
    snapshot.transition()
         .duration(250)
         .style("opacity", 0);
}



function onchange(d) {
    snapshotOn(d);
    selection = d.name;
    update();
  };

function backToAll(d) {
    snapshotOff(d);
    selection = "All";
    update();
  };
// add x axis and title
svgDDR.append("g")
  .attr("class", "axis axis--x")
  .attr("transform", "translate(0," + chartHeight + ")")
  .call(d3.axisBottom(x).tickFormat(d3.format(".4")));;


update();
