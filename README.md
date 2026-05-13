# Quiz App

A responsive quiz application built with React, Vite, and Tailwind CSS. Users can choose a quiz category, difficulty, question type, and number of questions, then answer timed trivia questions fetched from the Open Trivia Database.

## Features

- Select quiz category from live API data
- Choose difficulty level: easy, medium, or hard
- Choose question type: multiple choice or true/false
- Set the number of questions
- Timed quiz experience
- Score summary after submission
- Review correct, incorrect, and unanswered questions
- Glassmorphism-style interface using Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- React Toastify
- React Icons
- Open Trivia Database API

## Project Structure

```txt
quizApp/
├── src/
│   ├── api/
│   │   └── quizAPI.jsx
│   ├── components/
│   │   ├── QuizOptions.jsx
│   │   ├── QuizQuestions.jsx
│   │   ├── QuizResult.jsx
│   │   └── QuizTimer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Quiz.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
