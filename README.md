# Pallav Technologies - AI Feedback Form (Frontend)

## Project Title

AI Feedback Form using React.js

---

## Overview

This project is the frontend part of the AI Feedback Form assignment for Pallav Technologies.  
It is built using React.js (plain JavaScript) without Next.js or TypeScript, as mentioned in the requirements.

The purpose of this app is to allow users to upload or drag & drop a call recording file (mp3 or wav), play the audio, and generate feedback based on AI analysis.  
Once the audio file is processed, the UI displays evaluation scores, overall feedback, and observations.

The focus of this project was to keep the design simple, clean, and easy to understand while maintaining proper component structure and code organization.

---

## Live Demo

The frontend is deployed and can be accessed here:  
**https://pallav-technologies-frontend.onrender.com/**

---

## Features

- Upload or drag & drop `.mp3` or `.wav` audio files.
- Play and pause audio directly in the browser.
- “Process” button triggers AI-based evaluation through the backend.
- Displays call evaluation scores, overall feedback, and observations.
- Responsive and clean design using CSS Modules.
- Proper folder structure and reusable React components.

---

## Tech Stack

- **React.js (Create React App)**
- **JavaScript (ES6+)**
- **CSS Modules**
- **HTML5 Audio API**
- **Fetch API** for backend communication

---

## Installation and Setup Instructions

Follow the steps below to run the frontend locally.

### Step 1: Clone the repository

bash
git clone <repository_url>

### Step 2: Go into the project directory

cd pallav-technologies-frontend

### Step 3: Install all dependencies

npm i

### Step 4: Start the development server

npm run start

## Once the server starts, open your browser and visit:

### http://localhost:3000

# How It Works

User uploads or drags & drops an audio file.

The file is played through the inbuilt audio player.

On clicking “Process”, the file is sent to the backend API (/api/analyze-call).

The backend transcribes and analyzes the call using AI (Whisper, Gemini, or similar).

The frontend receives structured JSON data containing:

Scores for each evaluation parameter.

Overall feedback.

Observation text.

The results are displayed neatly on the UI.
