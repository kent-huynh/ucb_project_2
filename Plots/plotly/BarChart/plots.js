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

    var medianHousingPrice2010_12 = [430851.0833,
        401714.5556,
        233959.3889,
        150295.1111,
        153897.8611,
        147563.8889,
        125285.4444,
        132420.4167,
        394210.1528,
        207617.8333
        
        ];
    
    var medianHousingPrice2013_15 = [519426.1944,
        575669.4167,
        244374.2778,
        222898.3889,
        200503.125,
        149647.1528,
        216282.1667,
        189434.0833,
        510162.1389,
        266451.9444
        
        ];
    
    var medianHousingPrice2016_18 = [797143.5882,
        737534.8676,
        294250.6912,
        295898.5441,
        234468.4559,
        183938.2353,
        268950.0588,
        265974.8971,
        638314.1618,
        376205.8824
        
        ];
    
// var layout = {
//     title: "Average Median Housing Prices Per City",
//     xaxis: { title: "Cities" },
//     yaxis: { title: "Average Median Price" }
// };

// var trace1 = {x: cities,
//     y: medianHousingPrice2010_12,
//     type: "bar",
//     color: "red"
// };

// var data = [trace1];

function init() {
    var data = [{
        x: cities,
        y: medianHousingPrice2010_12,
        type: "bar"
    }];
    var layout = {
        title: "Average Median Housing Prices Per City",
        xaxis: { title: "Cities" },
        yaxis: { title: "Average Median Price" }
    };

    Plotly.plot("bar-plot",data,layout);
};

function updatePlotly(newdata) {
    var BAR = document.getElementById("bar-plot");
    console.log("BarChart Updated");
    Plotly.restyle(BAR, "y", [newdata]);
}

function getData(dataset) {
    var data = [];
    switch (dataset) {
    case "dataset1":
        console.log(medianHousingPrice2010_12);
        data = medianHousingPrice2010_12;
        break;
    case "dataset2":
        console.log(medianHousingPrice2013_15);
        data = medianHousingPrice2013_15;
        break;
    case "dataset3":
        console.log(medianHousingPrice2016_18);
        data = medianHousingPrice2016_18;
        break;
    default:
        data = medianHousingPrice2010_12;
    }
    updatePlotly(data);
}

init();