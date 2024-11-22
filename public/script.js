// Function to toggle visibility of the chatbot window
function toggleChatWindow() {
    const chatbotWindow = document.getElementById('chatbot-window');
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
}

// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return; // Prevent sending empty messages

    // Display user message
    displayMessage(userInput, 'user');

    // Generate bot response (for now, using a simple static reply)
    const botResponse = getBotResponse(userInput);
    
    // Display bot message
    displayMessage(botResponse, 'bot');
    
    // Clear input field
    document.getElementById('user-input').value = '';
}

// Function to display a message in the chat window
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    
    chatBox.appendChild(messageDiv);
    
    // Scroll to the bottom of the chat window
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Basic response logic for bot (you can expand this)
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hi') || message.includes('hello')) {
        return "Hello! How can I help you today?";
    } else if (message.includes('waste management')) {
        return "Waste management is the process of handling waste from collection to disposal in an environmentally friendly way.";
    } else if (message.includes('bye')) {
        return "Goodbye! Have a nice day!";
    } else {
        return "Sorry, I didn't understand that. Can you ask something else?";
    }
}
