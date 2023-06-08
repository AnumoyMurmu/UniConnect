// Sample contact data
const contacts = [
  { id: 1, name: 'Arup Sankar Roy' },
  { id: 2, name: 'Bikash Dutta' },
  { id: 3, name: 'Tathagata banerjee' },
  { id: 3, name: 'Birattam Rajak' },
  { id: 3, name: 'Benito Musolini' },


];

populateContactList();
selectContact();
displayChatMessages();
sendMessage();

// Function to populate contact list
function populateContactList() {
  const contactList = document.getElementById('contact-list');
  contactList.innerHTML = '';
  contacts.forEach(contact => {
    const li = document.createElement('li');
    li.textContent = contact.name;
    li.setAttribute('data-contact-id', contact.id);
    li.addEventListener('click', selectContact);
    contactList.appendChild(li);
  });
}


// Function to select a contact and display chat messages
function selectContact() {
  // Get the selected contact ID from the attribute
  const contactId = this.getAttribute('data-contact-id');
  // Fetch chat messages for the selected contact from the server
  fetch(`/messages?contactId=${contactId}`)
    .then(response => response.json())
    .then(messages => displayChatMessages(messages));
}


// Function to display chat messages
function displayChatMessages(messages) {
  const chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML = '';
  messages.forEach(message => {
    const div = document.createElement('div');
    div.textContent = message.text;
    chatMessages.appendChild(div);
  });
}

// Function to send a message to the server
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;
  const contactId = // Get the selected contact ID;
  // Send the message to the server
  fetch('/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contactId, message })
  })
    .then(response => response.json())
    .then(newMessage => {
      // Update the chat messages on the client side
      const chatMessages = document.getElementById('chat-messages');
      const div = document.createElement('div');
      div.textContent = newMessage.text;
      chatMessages.appendChild(div);
    });
}

// Fetch contacts from the server
fetch('/contacts')
  .then(response => response.json())
  .then(contacts => {
    // Populate contact list
    populateContactList(contacts);
  });

// Add event listener for send button
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);
