// Define SVG area dimensions
var svgWidth = 1800;
var svgHeight = 700;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 70
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Add chart title
d3.select('body')
  .append('h2')
  .text("Average Median Price per City")


// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);



// Retrieve data from the CSV file and execute everything below
d3.csv("Clean_Growth_Coords.csv", function(err, averagePrices) {
  if (err) throw err;

  // parse data
  averagePrices.forEach(function(data) {
    data.Avg_Median_2010_12 = +data.Avg_Median_2010_12;
    data.Avg_Median_2013_15 = +data.Avg_Median_2013_15;
    data.Avg_Median_2016_18 = +data.Avg_Median_2016_18;
  });

  // menu list items
  var menu_list = d3.nest()
    .key(function(d){
      return d.Median_Filter;
    })
    .entries(averagePrices)

    console.log(menu_list);

  // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
  var xBandScale = d3.scaleBand()
    .domain(averagePrices.map(d => d.City))
    .range([0, chartWidth])
    .padding(0.1);

  // Create a linear scale for the vertical axis.
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(averagePrices, d => d.Avg_Median_2010_12)])
    .range([chartHeight, 0]);

  // Create two new functions passing our scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xBandScale);
  var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

  // Append two SVG group elements to the chartGroup area,
  // and create the bottom and left axes inside of them
  chartGroup.append("g")
    .call(leftAxis);

  chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);

  // Create one SVG rectangle per piece of Data
  // Use the linear and band scales to position each rectangle within the chart
  chartGroup.selectAll(".bar")
    .data(averagePrices)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xBandScale(d.City))
    .attr("y", d => yLinearScale(d.Avg_Median_2010_12))
    .attr("width", xBandScale.bandwidth())
    .attr("height", d => chartHeight - yLinearScale(d.Avg_Median_2010_12));

  // Create axes labels
  // chartGroup.append("text")
  //   .attr("transform",)
  //   .attr("y", 0 - chartMargin.left + 40)
  //   .attr("x", 0 - (chartHeight / 2))
  //   .attr("dy", "1em")
  //   .attr("class", "axisText")
  //   .text("City");

  // chartGroup.append("text")
  //   .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + chartMargin.top + 30})`)
  //   .attr("class", "axisText")
  //   .text("Average Median Price");

    var dropdownmenu = d3.select("#yearDropdown")

    dropdownmenu
		.append("select")
		.selectAll("option")
        .data(menu_list)
        .enter()
        .append("option")
        .attr("value", function(d){
            return d.key;
        })
        .text(function(d){
            return d.key;
        })
        
  // update plot on change
  var updateBars = function(data) {
    // First update the y-axis domain to match data
    yLinearScale.domain( d3.extent(data) );
    yAxisHandleForUpdate.call(yAxis);

    var bars = canvas.selectAll(".bar").data(data);

    // Add bars for new data
    bars.enter()
      .append("rect")
        .attr("class", "bar")
        .attr("x", function(d,i) { return xScale( nutritionFields[i] ); })
        .attr("width", xScale.rangeBand())
        .attr("y", function(d,i) { return yScale(d); })
        .attr("height", function(d,i) { return height - yScale(d); });

    // Update old ones, already have x / width from before
    bars
        .transition().duration(250)
        .attr("y", function(d,i) { return yScale(d); })
        .attr("height", function(d,i) { return height - yScale(d); });

    // Remove old ones
    bars.exit().remove();
};

});
