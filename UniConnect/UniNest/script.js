// JavaScript logic for UniNest page

const accommodationListings = [
    // Example data for accommodation listings
    {
      title: "Accommodation 1",
      location: "Location 1",
      price: "$1000",
      description: "Description 1",
      image: "image1.jpg",
      contact: {
        name: "John Doe",
        phone: "123-456-7890",
        email: "john@example.com"
      },
      reviews: [
        {
          author: "User1",
          rating: 4,
          comment: "Great place to stay!"
        },
        {
          author: "User2",
          rating: 3,
          comment: "Decent accommodation, could be better."
        }
      ]
    },
    // Add more accommodation listings
  ];
  
  displayAccommodationListings(listings);
  updateAccommodationListings(location, priceRange);

  function displayAccommodationListings(listings) {
    const listingsContainer = document.getElementById("accommodation-listings");
    listingsContainer.innerHTML = "";
  
    listings.forEach(listing => {
      const accommodation = document.createElement("div");
      accommodation.classList.add("accommodation");
  
      const title = document.createElement("h3");
      title.textContent = listing.title;
      accommodation.appendChild(title);
  
      const location = document.createElement("p");
      location.textContent = "Location: " + listing.location;
      accommodation.appendChild(location);
  
      const price = document.createElement("p");
      price.textContent = "Price: " + listing.price;
      accommodation.appendChild(price);
  
      const description = document.createElement("p");
      description.textContent = listing.description;
      accommodation.appendChild(description);
  
      const image = document.createElement("img");
      image.src = listing.image;
      image.alt = "Accommodation Image";
      accommodation.appendChild(image);
  
      const contactInfo = document.createElement("div");
      contactInfo.classList.add("contact-info");
  
      const contactName = document.createElement("p");
      contactName.textContent = "Contact: " + listing.contact.name;
      contactInfo.appendChild(contactName);
  
      const contactPhone = document.createElement("p");
      contactPhone.textContent = "Phone: " + listing.contact.phone;
      contactInfo.appendChild(contactPhone);
  
      const contactEmail = document.createElement("p");
      contactEmail.textContent = "Email: " + listing.contact.email;
      contactInfo.appendChild(contactEmail);
  
      accommodation.appendChild(contactInfo);
  
      const reviewsSection = document.createElement("div");
      reviewsSection.classList.add("reviews");
  
      listing.reviews.forEach(review => {
        const reviewContainer = document.createElement("div");
        const reviewAuthor = document.createElement("p");
        reviewAuthor.textContent = "Author: " + review.author;
        reviewContainer.appendChild(reviewAuthor);
  
        const reviewRating = document.createElement("p");
        reviewRating.textContent = "Rating: " + review.rating;
        reviewContainer.appendChild(reviewRating);
  
        const reviewComment = document.createElement("p");
        reviewComment.textContent = "Comment: " + review.comment;
        reviewContainer.appendChild(reviewComment);
  
        reviewsSection.appendChild(reviewContainer);
      });
  
      accommodation.appendChild(reviewsSection);
  
      const saveButton = document.createElement("button");
      saveButton.classList.add("save-button");
      saveButton.textContent = "Save";
      accommodation.appendChild(saveButton);
  
      listingsContainer.appendChild(accommodation);
    });
  }
  
  function updateAccommodationListings(location, priceRange) {
    // Logic for updating the accommodation listings based on search criteria
    // You can filter the accommodationListings array based on location and priceRange
    // and then call the displayAccommodationListings function with the filtered results
    const filteredListings = accommodationListings.filter(listing => {
      // Example logic: Filter by location and price range
      return listing.location === location && listing.price <= price;
    
    })}