// Creating map object
var mapboxAccessToken = API_KEY;

var MetaData = {'type': 'FeatureCollection',
'metadata': {'generated': 1592516142000,
 'url': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
 'title': 'USGS Significant Earthquakes, Past Week',
 'status': 200,
 'api': '1.10.0',
 'count': 4},
'features': {'type': 'Feature',
 'properties': {'mag': 7.4,
  'place': 'south of the Kermadec Islands',
  'time': 1592484593747,
  'updated': 1592515219397,
  'tz': 'null',
  'url': 'https://earthquake.usgs.gov/earthquakes/eventpage/us6000ae4n',
  'detail': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000ae4n.geojson',
  'felt': 41,
  'cdi': 6.6,
  'mmi': 7.131,
  'alert': 'green',
  'status': 'reviewed',
  'tsunami': 1,
  'sig': 870,
  'net': 'us',
  'code': '6000ae4n',
  'ids': ',at00qc4gz1,pt20170001,us6000ae4n,',
  'sources': ',at,pt,us,',
  'types': ',dyfi,general-text,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,',
  'nst': 'null',
  'dmin': 4.037,
  'rms': 0.81,
  'gap': 23,
  'magType': 'mww',
  'type': 'earthquake',
  'title': 'M 7.4 - south of the Kermadec Islands'},
 'geometry': {'type': 'Point', 'coordinates': [-177.8383, -33.2938, 10]},
 'id': 'us6000ae4n'}}

 var Metadata_geometry = {'type': 'Point', 'coordinates': [-177.8383, -33.2938, 10]}

 var Metadata_features = {'type': 'Feature',
 'properties': {'mag': 7.4,
  'place': 'south of the Kermadec Islands',
  'time': 1592484593747,
  'updated': 1592515219397,
  'tz': 'null',
  'url': 'https://earthquake.usgs.gov/earthquakes/eventpage/us6000ae4n',
  'detail': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000ae4n.geojson',
  'felt': 41,
  'cdi': 6.6,
  'mmi': 7.131,
  'alert': 'green',
  'status': 'reviewed',
  'tsunami': 1,
  'sig': 870,
  'net': 'us',
  'code': '6000ae4n',
  'ids': ',at00qc4gz1,pt20170001,us6000ae4n,',
  'sources': ',at,pt,us,',
  'types': ',dyfi,general-text,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,',
  'nst': 'null',
  'dmin': 4.037,
  'rms': 0.81,
  'gap': 23,
  'magType': 'mww',
  'type': 'earthquake',
  'title': 'M 7.4 - south of the Kermadec Islands'},
 'geometry': {'type': 'Point', 'coordinates': [-177.8383, -33.2938, 10]},
 'id': 'us6000ae4n'}

var Earthquake_geometry = [{'type': 'Point', 'coordinates': [-121.7625, 37.414, 8.23]},
{'type': 'Point', 'coordinates': [70.3817, 23.3871, 10]},
{'type': 'Point', 'coordinates': [128.2621, 28.9386, 159.62]}]

var Earthquake = [{'type': 'Feature',
'properties': {'mag': 3.36,
 'place': '8km NE of Alum Rock, CA',
 'time': 1592415302600,
 'updated': 1592515379070,
 'tz': 'null',
 'url': 'https://earthquake.usgs.gov/earthquakes/eventpage/nc73410846',
 'detail': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73410846.geojson',
 'felt': 4191,
 'cdi': 4.8,
 'mmi': 4.05,
 'alert': 'null',
 'status': 'reviewed',
 'tsunami': 0,
 'sig': 654,
 'net': 'nc',
 'code': '73410846',
 'ids': ',nc73410846, us6000adln,',
 'sources': ',nc,us,',
 'types': ',dyfi,focal-mechanism,moment-tensor,nearby-cities,origin,phase-data,scitech-link,shakemap,',
 'nst': 183,
 'dmin': 0.04136,
 'rms': 0.09,
 'gap': 30,
 'magType': 'mw',
 'type': 'earthquake',
 'title': 'M 3.4 - 8km NE of Alum Rock, CA'},
'geometry': {'type': 'Point', 'coordinates': [-121.7625, 37.414, 8.23]},
'id': 'nc73410846'},
{'type': 'Feature',
'properties': {'mag': 5.1,
 'place': '10 km NNE of Bhach?u, India',
 'time': 1592145788290,
 'updated': 1592500322647,
 'tz': 'null',
 'url': 'https://earthquake.usgs.gov/earthquakes/eventpage/us6000abp7',
 'detail': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000abp7.geojson',
 'felt': 434,
 'cdi': 5.4,
 'mmi': 6.697,
 'alert': 'yellow',
 'status': 'reviewed',
 'tsunami': 0,
 'sig': 884,
 'net': 'us',
 'code': '6000abp7',
 'ids': ',us6000abp7,',
 'sources': ',us,',
 'types': ',dyfi,losspager,origin,phase-data,shakemap,',
 'nst': 'null',
 'dmin': 11.175,
 'rms': 0.65,
 'gap': 40,
 'magType': 'mb',
 'type': 'earthquake',
 'title': 'M 5.1 - 10 km NNE of Bhach?u, India'},
'geometry': {'type': 'Point', 'coordinates': [70.3817, 23.3871, 10]},
'id': 'us6000abp7'},
{'type': 'Feature',
'properties': {'mag': 6.6,
 'place': '135 km WNW of Naze, Japan',
 'time': 1592063483368,
 'updated': 1592430579414,
 'tz': 'null',
 'url': 'https://earthquake.usgs.gov/earthquakes/eventpage/us6000abcq',
 'detail': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000abcq.geojson',
 'felt': 136,
 'cdi': 4.6,
 'mmi': 4.377,
 'alert': 'green',
 'status': 'reviewed',
 'tsunami': 1,
 'sig': 733,
 'net': 'us',
 'code': '6000abcq',
 'ids': ',at00qbvg1n,pt20165054,us6000abcq,',
 'sources': ',at,pt,us,',
 'types': ',dyfi,ground-failure,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,',
 'nst': 'null',
 'dmin': 2.094,
 'rms': 0.99,
 'gap': 30,
 'magType': 'mww',
 'type': 'earthquake',
 'title': 'M 6.6 - 135 km WNW of Naze, Japan'},
'geometry': {'type': 'Point', 'coordinates': [128.2621, 28.9386, 159.62]},
'id': 'us6000abcq',
'bbox': [-177.8383, -33.2938, 8.23, 128.2621, 37.414, 159.62]}]

console.log(Earthquake[0]);
console.log(Earthquake_geometry[0]);
console.log(Metadata_geometry["coordinates"][0]);

var countQuakes = Earthquake.length;
console.log("Total Earthquakes " + countQuakes)

var latitude = [];
var longitude = [];
var elevation = [];
var title = [];
var timeStamp = [];
var magnitude = [];


//GPS coordinates of San Andreas Fault, United States. 
//Latitude: 35.1167 Longitude: -119.6500.

var map = L.map('map').setView([35.1167, -119.6500], 1);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
  id: 'mapbox/light-v10',
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);




// Create a new marker cluster group
var markers = L.markerClusterGroup();

for (var i=0; i < countQuakes; i++){

  var lng = Earthquake_geometry[i]["coordinates"][0];
  var lat = Earthquake_geometry[i]["coordinates"][1];
  var height = Earthquake_geometry[i]["coordinates"][2];
  var place = Earthquake[i]["properties"]["title"];
  var time = Earthquake[i]["properties"]["time"];
  var mag = Earthquake[i]["properties"]["mag"];


  latitude.push(lat);
  longitude.push(lng);
  title.push(place);
  timeStamp.push(time);
  magnitude.push(mag);
  elevation.push(height);

  console.log(latitude)
  console.log(title);
}

  for (var i=0; i < countQuakes; i++){
      var lat = latitude[i];
      var lng = longitude[i];
      var place = title[i];
      var mag = magnitude[i];
      //%c - date and time, as "%a %b %e %H:%M:%S %Y".
      var time = timeStamp[i];
      var height = elevation[i];

      var marker = L.marker([lat, lng], {elevation: height, title: place});
      marker.bindPopup(`<h3>${place}</h3>
                        <hr>
                        <p>Magnitude: ${mag}</p>
                        <p>Time: ${time}</p>
                      `);
      markers.addLayer(marker);
      // Add our marker cluster layer to the map
      map.addLayer(markers)

      var circleCenter = [lat, lng];
      var circleOptions = {
                            color: 'red',
                            fillColor: 'red',
                            fillOpacity: 2
                          }
      var bigcircleOptions = {
                            color: 'yellow',
                            fillColor: 'yellow',
                            fillOpacity: 1
                          }
    
    
      var circle = L.circle(circleCenter, mag*5000, circleOptions);
      var bigcircle = L.circle(circleCenter, 50000, bigcircleOptions);
      bigcircle.addTo(map);
      circle.addTo(map);
    
}








/*
d3.json(weekData).then(quakes => {
  var markers = L.markerClusterGroup();
  //for (var i = 0, len = arr.length; i < len; i++) 
  for (var quake = 1, len = quakes.length; quake < len; quake++)  {
    var quakeType = type[quake];
    console.log(quakeType);
    const isFeature = "Feature";
    if (quakeType === isFeature) {
      var quakeLat = geometry[quake].coordinates[1];
      var quakeLng = geometry[quake].coordinates[0];
      console.log(properties[quake].title);
      var marker = L.marker([quakeLat, quakeLng]);
      marker.bindPopup(`<h3>${properties[quake].title}</h3>
          <hr>
          <p>Magnitude: ${properties[quake].mag}</p>
          <p>Place: ${properties[quake].place}</p>
      `);
      markers.addLayer(marker);
    }

    // Add our marker cluster layer to the map
    map.addLayer(markers)
  }
}).catch(error => console.log(error))


      var elevatedMarker = L.marker([37.7952, -122.4028], {
        elevation: 260.0,
        title: "Transamerica Pyramid"
      }).addTo(map);


  var circleCenter = [40.72, -74.00];
  var circleOptions = {
                        color: 'red',
                        fillColor: '#f03',
                        fillOpacity: 0
                      }


  var circle = L.circle(circleCenter, 50000, circleOptions);
  circle.addTo(map);


format specifier	resulting formatted number
d3.time.format("%Y-%m-%d")	1986-01-28
d3.time.format("%m/%d/%Y")	01/28/1986
d3.time.format("%H:%M")	11:39
d3.time.format("%H:%M %p")	11:39 AM
d3.time.format("%B %d")	January 28
d3.time.format("%d %b")	28 Jan
d3.time.format("%d-%b-%y")	28-Jan-86
d3.time.format("%S s")	13 s
d3.time.format("%M m")	39 m
d3.time.format("%H h")	11 h
d3.time.format("%a")	Tue
*/

