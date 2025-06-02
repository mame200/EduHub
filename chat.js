document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");
  const users = document.getElementById("chat-users").getElementsByTagName("li");
  const chatTitle = document.getElementById("chat-title");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    appendMessage("You", text);
    input.value = "";

    // Simulated response from bot/peer
    setTimeout(() => {
      appendMessage(chatTitle.textContent, "Got your message!");
    }, 700);
  });

  Array.from(users).forEach((user) => {
    user.addEventListener("click", () => {
      Array.from(users).forEach((u) => u.classList.remove("active"));
      user.classList.add("active");
      chatTitle.textContent = user.textContent;
      messages.innerHTML = ""; // Clear messages
    });
  });

  function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add("chat-msg");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }
});
async function askAI(message) {
  // Simulated API call to backend AI
  const response = await fetch("/api/ask-ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: message }),
  });

  const data = await response.json();
  return data.reply || "I'm not sure how to help with that yet.";
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  appendMessage("You", text);
  input.value = "";

  const reply = await askAI(text);
  appendMessage("AI Assistant", reply);
});
