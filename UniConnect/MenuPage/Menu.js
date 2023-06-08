// Function to handle section visibility
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
  
    // Show the selected section
    var selectedSection = document.querySelector(sectionId);
    selectedSection.style.display = 'block';
  }
  
  // Add event listeners to navigation links
  var navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetSection = this.getAttribute('href');
      showSection(targetSection);
    });
  });
  
  // Show the initial section when the page loads
  showSection('#home');
  