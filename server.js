require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");

const { Configuration, OpenAIApi } = OpenAI;

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.listen(port, () => {
  console.log(`server live on port ${port}`);
});

app.post("/", async (req, res) => {
  const query = req.body?.query;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Pretend you are a business growth specialist, answer or explain ${query}`,
    max_tokens: 256,
    temperature: 0,
  });

  res.send(response.data.choices[0].text);
});
