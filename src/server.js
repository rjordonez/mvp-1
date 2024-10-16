const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();

// Configure CORS with options
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// Parse JSON bodies
app.use(express.json());

// Log all incoming requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Initialize OpenAI API with your API key (securely)
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Use environment variable
});
const openai = new OpenAIApi(configuration);

// Handle preflight OPTIONS requests
app.options('*', cors());

// Your route
app.post('/generate-mindmap', async (req, res) => {
  console.log('Received POST request to /generate-mindmap');
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);

  const { topic } = req.body;

  try {
    const prompt = `Create a JSON representation of a mindmap for the topic "${topic}". The mindmap should have nodes and links in the following format:

{
  "nodes": [
    { "id": "Main Topic", "group": 1 },
    { "id": "Subtopic 1", "group": 2 },
    { "id": "Subtopic 2", "group": 2 }
  ],
  "links": [
    { "source": "Main Topic", "target": "Subtopic 1" },
    { "source": "Main Topic", "target": "Subtopic 2" }
  ]
}

Please provide only the JSON data without any additional text.`;

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 500,
      temperature: 0.7,
    });

    // Extract the JSON from the response
    const mindmapData = JSON.parse(response.data.choices[0].text.trim());

    res.json(mindmapData);
  } catch (error) {
    console.error('Error generating mindmap:', error);
    res.status(500).json({ error: 'Failed to generate mindmap' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
