document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const chatWindow = document.getElementById("chat-window");
  const userInput = document.getElementById("user-input");

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const message = userInput.value.trim();
    if (!message) return;

    appendMessage("user", message);
    userInput.value = "";

    setTimeout(() => {
      const fakeResponse = getFakeAIResponse(message);
      appendMessage("ai", fakeResponse);
    }, 500); // Simulate AI thinking time
  });

  function appendMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.textContent = text;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function getFakeAIResponse(input) {
    return `You asked: "${input}". I’m here to help — let's study together! 📘`;
  }
});
