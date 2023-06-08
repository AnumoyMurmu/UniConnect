function initMap() {
    const mapOptions = {
      center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
      zoom: 12
    };
  
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    // Add markers for accommodation listings
    accommodationListings.forEach(listing => {
      const marker = new google.maps.Marker({
        position: { lat: listing.latitude, lng: listing.longitude },
        map: map,
        title: listing.title
      });
  
      // Add click event listener to show more details for the accommodation listing
      marker.addListener("click", function() {
        // Display accommodation details or navigate to a separate page
      });
    });
  }
  