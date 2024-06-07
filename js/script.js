js.function sendMessage() {
    var userInput = document.getElementById("user-input");
    var chatBox = document.getElementById("chat-box");
  
    
    var userMessage = document.createElement("div");
    userMessage.textContent = userInput.value;
    userMessage.classList.add("chat-message", "user-message");
    chatBox.appendChild(userMessage);
  
   
    userInput.value = "";
  
    
    chatBox.scrollTop = chatBox.scrollHeight;
  }
