function displayAccommodationListings(listings) {
    const listingsContainer = document.getElementById("accommodation-listings");
    listingsContainer.innerHTML = "";
  
    listings.forEach(listing => {
      const accommodation = document.createElement("div");
      accommodation.classList.add("accommodation");
  
      const title = document.createElement("h3");
      title.textContent = listing.title;
      accommodation.appendChild(title);
  
      // Add other accommodation details like location, price, description, image, etc.
  
      listingsContainer.appendChild(accommodation);
    });
  }
  
  // Usage example:
  const accommodationListings = [
    { title: "Accommodation 1" },
    { title: "Accommodation 2" },
    { title: "Accommodation 3" }
  ];
  
  displayAccommodationListings(accommodationListings);
  