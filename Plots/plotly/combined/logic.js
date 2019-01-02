// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  Pricing2016to2018: "$797,143.59"
},
{
  location: [34.0522342, -118.2436849],
  name: "Los Angeles",
  Pricing2016to2018: "$737,534.87"
},
{
  location: [41.8781136, -87.6297982],
  name: "Chicago",
  Pricing2016to2018: "$294,250.69"
},
{
  location: [29.7604267, -95.3698028],
  name: "Houston",
  Pricing2016to2018: "$295,898.54"
},
{
  location: [29.4241219, -98.4936282],
  name: "San Antonio",
  Pricing2016to2018: "$234,468.46"
},
{
  location: [39.9525839, -75.1652215],
  name: "Philadelphia",
  Pricing2016to2018: "$183,938.24"
},
{
  location: [33.4483771, -112.0740373],
  name: "Phoenix",
  Pricing2016to2018: "$268,950.06"
},
{
  location: [36.1699412, -115.1398296],
  name: "Las Vegas",
  Pricing2016to2018: "$265,974.90"
},
{
  location: [32.715738, -117.1610838],
  name: "San Diego",
  Pricing2016to2018: "$638,314.16"
},
{
  location: [32.7766642, -96.7969879],
  name: "Dallas",
  Pricing2016to2018: "$376,205.88"
},
{
  location: [37.3382082, -121.8863286],
  name: "San Jose",
  Pricing2016to2018: "$860,229.32"
},
{
  location: [30.267153, -97.7430608],
  name: "Austin",
  Pricing2016to2018: "$384,114.15"
},
{
  location: [30.3321838, -81.655651],
  name: "Jacksonville",
  Pricing2016to2018: "$189,789.71"
},
{
  location: [37.7749295, -122.4194155],
  name: "San Francisco",
  Pricing2016to2018: "$140,723.46"
},
{
  location: [39.768403, -86.158068],
  name: "Indianapolis",
  Pricing2016to2018: "$278,232.22"
},
{
  location: [35.2270869, -80.8431267],
  name: "Charlotte",
  Pricing2016to2018: "$231,473.31"
},
{
  location: [32.7554883, -97.3307658],
  name: "Fort Worth",
  Pricing2016to2018: "$155,526.44"
},
{
  location: [32.4609764, -84.9877094],
  name: "Columbus",
  Pricing2016to2018: "$204,734.32"
},
{
  location: [32.2217429, -110.926479],
  name: "Tucson",
  Pricing2016to2018: "-"
},
{
  location: [38.2526647, -85.7584557],
  name: "Louisville",
  Pricing2016to2018: "$257,703.51"
},
{
  location: [31.7775757, -106.4424559],
  name: "El Paso",
  Pricing2016to2018: "$465,179.99"
},
{
  location: [42.331427, -83.0457538],
  name: "Detroit",
  Pricing2016to2018: "$639,304.06"
},
{
  location: [28.5383355, -81.3792365],
  name: "Orlando",
  Pricing2016to2018: "$92,823.06"
},
{
  location: [39.7392358, -104.990251],
  name: "Denver",
  Pricing2016to2018: "$680,477.76"
},
{
  location: [47.6062095, -122.3320708],
  name: "Seattle",
  Pricing2016to2018: "$555,560.47"
},
{
  location: [35.1495343, -90.0489801],
  name: "Memphis",
  Pricing2016to2018: "$323,371.22"
},
{
  location: [42.3600825, -71.0588801],
  name: "Boston",
  Pricing2016to2018: "$427,028.65"
},
{
  location: [38.9071923, -77.0368707],
  name: "Washington",
  Pricing2016to2018: "$299,782.35"
},
{
  location: [36.1626638, -86.7816016],
  name: "Nashville",
  Pricing2016to2018: "$139,558.66"
},
{
  location: [43.661471, -70.2553259],
  name: "Portland",
  Pricing2016to2018: "$123,397.06"
},
{
  location: [38.5815719, -121.4943996],
  name: "Sacramento",
  Pricing2016to2018: "$215,519.85"
},
{
  location: [39.2903848, -76.6121893],
  name: "Baltimore",
  Pricing2016to2018: "$214,590.09"
},
{
  location: [43.0389025, -87.9064736],
  name: "Milwaukee",
  Pricing2016to2018: "$183,591.32"
},
{
  location: [36.7468422, -119.7725868],
  name: "Fresno",
  Pricing2016to2018: "$326,330.78"
},
{
  location: [41.2523634, -95.9979883],
  name: "Omaha",
  Pricing2016to2018: "$250,118.07"
},
{
  location: [35.0853336, -106.6055534],
  name: "Albuquerque",
  Pricing2016to2018: "$302,623.32"
},
{
  location: [35.4675602, -97.5164276],
  name: "Oklahoma City",
  Pricing2016to2018: "$179,733.09"
},
{
  location: [35.7795897, -78.6381787],
  name: "Raleigh",
  Pricing2016to2018: "$547,331.63"
},
{
  location: [33.4151843, -111.8314724],
  name: "Mesa",
  Pricing2016to2018: "$295,853.82"
},
{
  location: [33.7489954, -84.3879824],
  name: "Atlanta",
  Pricing2016to2018: "$287,527.63"
},
{
  location: [39.114053, -94.6274636],
  name: "Kansas City",
  Pricing2016to2018: "$454,967.65"
},
{
  location: [33.7700504, -118.1937395],
  name: "Long Beach",
  Pricing2016to2018: "$165,054.04"
},
{
  location: [38.8338816, -104.8213634],
  name: "Colorado Springs",
  Pricing2016to2018: "$261,655.15"
},
{
  location: [36.8529263, -75.977985],
  name: "Virginia Beach",
  Pricing2016to2018: "$641,041.71"
},
{
  location: [25.7616798, -80.1917902],
  name: "Miami",
  Pricing2016to2018: "$67,978.65"
},
{
  location: [37.8043637, -122.2711137],
  name: "Oakland",
  Pricing2016to2018: "-"
},
{
  location: [36.1539816, -95.992775],
  name: "Tulsa",
  Pricing2016to2018: "$210,795.54"
},
{
  location: [44.977753, -93.2650108],
  name: "Minneapolis",
  Pricing2016to2018: "$209,595.59"
},
{
  location: [21.3069444, -157.8583333],
  name: "Honolulu",
  Pricing2016to2018: "-"
},
{
  location: [29.9510658, -90.0715323],
  name: "Cleveland",
  Pricing2016to2018: "$155,344.12"
},
{
  location: [29.9510658, -90.0715323],
  name: "New Orleans",
  Pricing2016to2018: "$281,320.15"
},
{
  location: [32.735687, -97.1080656],
  name: "Arlington",
  Pricing2016to2018: "$327,804.78"
},
{
  location: [30.4582829, -91.1403196],
  name: "Baton Rouge",
  Pricing2016to2018: "$406,549.34"
},
// {
//   location: [],
//   name: "San Juan",
//   Pricing2016to2018: "-"
// },
{
  location: [37.688889, -97.336111],
  name: "Wichita",
  Pricing2016to2018: "$191,627.94"
},
{
  location: [35.9606384, -83.9207392],
  name: "Knoxville",
  Pricing2016to2018: "$173,755.13"
},
{
  location: [27.950575, -82.4571776],
  name: "Tampa",
  Pricing2016to2018: "$573,571.96"
},
{
  location: [44.977753, -93.2650108],
  name: "Aurora",
  Pricing2016to2018: "$495,066.31"
},
{
  location: [33.9533487, -117.3961564],
  name: "Riverside",
  Pricing2016to2018: "$353,090.44"
},
{
  location: [35.3732921, -119.0187125],
  name: "Bakersfield",
  Pricing2016to2018: "$336,857.50"
},
{
  location: [40.4406248, -79.9958864],
  name: "Pittsburgh",
  Pricing2016to2018: "208,790.97"
},
{
  location: [39.1031182, -84.5120196],
  name: "Cincinnati",
  Pricing2016to2018: "$141,198.47"
},
{
  location: [33.8352932, -117.9145036],
  name: "Anaheim",
  Pricing2016to2018: "$234,353.32"
},
{
  location: [33.7455731, -117.8678338],
  name: "Santa Ana",
  Pricing2016to2018: "$146,476.03"
},
{
  location: [34.0007104, -81.0348144],
  name: "Columbia",
  Pricing2016to2018: "$180,520.19"
},
{
  location: [37.8043637, -122.2711137],
  name: "Oakland",
  Pricing2016to2018: "-"
},
// {
//   location: [],
//   name: "Islip",
//   Pricing2016to2018: "$79,559.90"
// },
{
  location: [33.952602, -84.5499327],
  name: "Marietta",
  Pricing2016to2018: "$313,318.24"
},
{
  location: [27.8005828, -97.396381],
  name: "Corpus Christi",
  Pricing2016to2018: "$202,199.87"
},
// {
//   location: [],
//   name: "Saint Louis",
//   Pricing2016to2018: "$425,184.72"
// },
// {
//   location: [],
//   name: "Lexington",
//   Pricing2016to2018: "$264,850.68"
// },
{
  location: [41.079273, -85.1393513],
  name: "Fort Wayne",
  Pricing2016to2018: "$192,143.38"
},
{
  location: [36.0726354, -79.7919754],
  name: "Greensboro",
  Pricing2016to2018: "$273,271.09"
},
// {
//   location: [],
//   name: "Silver Spring",
//   Pricing2016to2018: "$369,364.71"
// },
{
  location: [41.6639383, -83.555212],
  name: "Toledo",
  Pricing2016to2018: "$195,616.26"
},
// {
//   location: [61.2180556, -149.9002778],
//   name: "Anchorage",
//   Pricing2016to2018: "$333,559.84"
// },
// {
//   location: [],
//   name: "Saint Paul",
//   Pricing2016to2018: "$216,233.46"
// },
// {
//   location: [],
//   name: "Naples",
//   Pricing2016to2018: "$284,134.97"
// },
{
  location: [35.9940329, -78.898619],
  name: "Durham",
  Pricing2016to2018: "$319,524.19"
},
{
  location: [30.4382559, -84.2807329],
  name: "Tallahassee",
  Pricing2016to2018: "$194,427.50"
},
{
  location: [37.9577016, -121.2907796],
  name: "Stockton",
  Pricing2016to2018: "$482,842.65"
},
{
  location: [33.0198431, -96.6988856],
  name: "Plano",
  Pricing2016to2018: "$388,377.24"
},
{
  location: [40.735657, -74.1723667],
  name: "Newark",
  Pricing2016to2018: "$78,024.54"
},
{
  location: [36.0395247, -114.9817213],
  name: "Henderson",
  Pricing2016to2018: "$263,650.12"
},
{
  location: [40.8257625, -96.6851982],
  name: "Lincoln",
  Pricing2016to2018: "$499,084.12"
},
{
  location: [37.6390972, -120.9968782],
  name: "Modesto",
  Pricing2016to2018: "$186,787.15"
},
{
  location: [33.3061605, -111.8412502],
  name: "Chandler",
  Pricing2016to2018: "$221,215.63"
},
{
  location: [33.5778631, -101.8551665],
  name: "Lubbock",
  Pricing2016to2018: "$162,114.57"
},
{
  location: [40.7281575, -74.0776417],
  name: "Jersey City",
  Pricing2016to2018: "$204,996.76"
},
{
  location: [39.5296329, -119.8138027],
  name: "Reno",
  Pricing2016to2018: "$264,032.35"
},
{
  location: [42.8864468, -78.8783689],
  name: "Buffalo",
  Pricing2016to2018: "$206,656.37"
},
{
  location: [30.6953657, -88.0398912],
  name: "Mobile",
  Pricing2016to2018: "$229,334.78"
},
{
  location: [25.8575963, -80.2781057],
  name: "Hialeah",
  Pricing2016to2018: "$591,918.82"
},
{
  location: [34.1083449, -117.2897652],
  name: "San Bernardino",
  Pricing2016to2018: "$136,052.21"
},
{
  location: [32.6400541, -117.0841955],
  name: "Chula Vista",
  Pricing2016to2018: "$271,862.50"
},
// {
//   location: [],
//   name: "Saint Petersburg",
//   Pricing2016to2018: "$914,277.62"
// },
{
  location: [30.421309, -87.2169149],
  name: "Pensacola",
  Pricing2016to2018: "$183,198.50"
},
// {
//   location: [],
//   name: "Lawrenceville",
//   Pricing2016to2018: "$329,685.29"
// },
{
  location: [36.0998596, -80.244216],
  name: "Winston-Salem",
  Pricing2016to2018: "$317,743.74"
},
{
  location: [47.6587802, -117.4260466],
  name: "Spokane",
  Pricing2016to2018: "$248,371.44"
},
{
  location: [34.6992579, -86.7483318],
  name: "Madison",
  Pricing2016to2018: "$199,245.46"
},
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Median Pricing(2016-18): " + city.Pricing2016to2018 + "</h3>")
    .addTo(myMap);
}
