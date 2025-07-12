# Gemini Chat UI

This is a simple web-based interface that allows users to ask questions and receive responses from Google's Gemini API.

## 🚀 Features

- Ask natural language questions
- Get instant answers powered by Gemini
- Built with plain HTML, CSS, and JavaScript
- Hosted using GitHub Pages

## 🔧 How It Works

The site takes your question input and sends it to the Gemini API using a `fetch()` request. The response is then displayed on the page.

> ⚠️ **Note:** This version uses a direct call to the Gemini API from the frontend. This exposes the API key in the browser and is only safe for testing or private use.

## 📁 Project Structure
.
├── index.html # Main HTML file
├── script.js # JavaScript to handle API calls
├── styles.css # External CSS styles
└── README.md # You're here!

﻿## 📦 How to Use

1. Clone this repository or download the ZIP.
2. Replace `YOUR_API_KEY_HERE` in `script.js` with your actual Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
3. Open `index.html` in a browser, or deploy to GitHub Pages.

## 🛡️ Security Warning

Do **not** use a real API key in public-facing apps. Set up a backend proxy to keep your key secure if deploying in production.
> ⚠️ API key has been removed for security.  
> To test locally, insert your key in `script.js` where noted.


## 🧠 Credits

- Built using [Gemini API](https://ai.google.dev/)
- Project by [Gungun Singhal]
