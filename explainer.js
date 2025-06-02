document.getElementById("explain-btn").addEventListener("click", async () => {
  const input = document.getElementById("book-input").value;
  const output = document.getElementById("explanation-output");

  output.innerHTML = "Thinking...";

  const res = await fetch("/api/explain", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input }),
  });

  const data = await res.json();
  output.innerHTML = `<p>${data.explanation}</p>`;
});
