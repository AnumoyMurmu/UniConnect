const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', performSearch);

function performSearch() {
  const searchTerm = searchInput.value.trim();
  
  // Clear previous search results
  searchResults.innerHTML = '';
  
  // Perform search logic
  // You can replace this with your own search functionality
  
  // For demonstration purposes, let's just display the search term as the result
  const result = document.createElement('p');
  result.textContent = `You searched for: ${searchTerm}`;
  searchResults.appendChild(result);
}
