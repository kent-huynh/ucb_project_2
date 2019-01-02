var cities = ["New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "San Antonio",
    "Philadelphia",
    "Phoenix",
    "Las Vegas",
    "San Diego",
    "Dallas"
    ];
var movingGrowth2010_12 = [-1, -1, -2, 0, 0, 0, -1, -2, -1, 0];

var movingGrowth2013_15 =  [3, 3, 2, 4, 2, 1, 3, 3, 2, 2];

var movingGrowth2016_18 = [1, 1, 1,  0,  0, 3, 1, 2, 1, 2];

var size_2010_2012 = [10, 10, 20, 5, 5, 5, 10, 20, 10, 5];

var size_2013_2015 = [30, 40, 20, 40, 20, 10, 30, 30, 20, 20];

var size_2016_2018 = [10, 10, 10, 5, 5, 30, 10, 20, 10, 20];

function init() {
var data = {
    x: cities,
    y: movingGrowth2010_12,
    mode: "markers",
    type: "scatter",
    name: "Median Housing Price (2010-2012)",
    marker: {
        color: "#2077b4",
        symbol: "circle",
        size: size_2010_2012
    }
};

var layout = {
    title: "Housing Price Growth Per City",
    xaxis: { title: "Cities" },
    yaxis: { title: "% Price Growth over Two Years" }
    };

var trace = [data];

    Plotly.newPlot("plot", trace, layout);
};

function updatePlotly(newdata) {
    var SCATTER = document.getElementById("plot");
    console.log("ScatterPlot Updated");
    Plotly.restyle(SCATTER, "y", [newdata]);
}
function getData(dataset) {
    var data = [];
    switch (dataset) {
    case "dataset1":
        console.log( movingGrowth2010_12);
        data = movingGrowth2010_12;
        break;
    case "dataset2":
        console.log(movingGrowth2013_15);
        data = movingGrowth2013_15;
        break;
    case "dataset3":
        console.log(movingGrowth2016_18);
        data = movingGrowth2016_18;
        break;
    default:
        data = movingGrowth2010_12;
    }
    updatePlotly(data);
}

init()