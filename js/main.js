function initMap() {
  var mapContainer = document.getElementById('map');
  if (!mapContainer) {
    return;
  }
  var options = {
    center: {lat: 30.2672, lng: -97.7431},
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(mapContainer, options);
  var marker1 = new google.maps.Marker({
    position: {lat: 30.2672, lng: -97.7431},
    map: map,
    title: 'Downtown Austin'
  });
  var marker2 = new google.maps.Marker({
    position: {lat: 30.2849, lng: -97.7341},
    map: map,
    title: 'University of Texas at Austin'
  });
  var marker3 = new google.maps.Marker({
    position: {lat: 30.2500, lng: -97.7500},
    map: map,
    title: 'Zilker Park'
  });
  var info1 = new google.maps.InfoWindow({
    content: '<h3>Downtown Austin</h3><p>The heart of Austin, TX</p>'
  });
  var info2 = new google.maps.InfoWindow({
    content: '<h3>UT Austin</h3><p>The University of Texas at Austin</p>'
  });
  var info3 = new google.maps.InfoWindow({
    content: '<h3>Zilker Park</h3><p>A popular park in south Austin</p>'
  });
  marker1.addListener('click', function() {
    info1.open(map, marker1);
  });
  marker2.addListener('click', function() {
    info2.open(map, marker2);
  });
  marker3.addListener('click', function() {
    info3.open(map, marker3);
  });
}
