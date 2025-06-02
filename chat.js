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
