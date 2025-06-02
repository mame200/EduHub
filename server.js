const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

app.post("/api/ask-ai", async (req, res) => {
  const { question } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: question }],
    });

    const reply = completion.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Error from AI assistant." });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
app.post("/api/explain", async (req, res) => {
  const { text } = req.body;

  const completion = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Explain this concept with visuals and clarity." },
      { role: "user", content: text },
    ],
  });

  const explanation = completion.data.choices[0].message.content;
  res.json({ explanation });
});
