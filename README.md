# AI-Based Email Reply Generator

## Introduction

This project involves building an AI-powered email reply generator that consists of a web application, a backend system, and a Chrome extension that integrates with Gmail. The system utilizes Google's Gemini API to generate AI-based responses to emails based on user-defined tone settings.

## Project Components

- **Backend**: Built using Spring Boot, exposing REST APIs.
- **Frontend**: Developed using React for an intuitive user interface.
- **Chrome Extension**: Injects the reply generator into Gmail’s UI.
- **AI API Integration**: Uses Google’s Gemini API to generate responses.

## Features

- **AI-Powered Reply Generation**: Leverages Google's Gemini API for generating intelligent email replies.
- **Tone Customization**: Choose a tone for your reply (e.g., formal, casual, friendly).
- **Chrome Extension for Gmail**: Injects an “AI Reply” button within Gmail’s reply interface.
- **Real-Time Suggestions**: Instantly fetch and display AI-generated replies in the Gmail compose box.
- **Clipboard Copy**: Easily copy AI-generated replies for quick use.
- **Responsive UI**: Clean and intuitive interface using React and Material UI.

## System Architecture
Frontend (React) → Backend (Spring Boot) → Gemini API <br/>
Chrome Extension → Backend (Spring Boot) → Gemini API

## Demo

### Chrome Extension in Action
<a href="https://github.com/salamafazlul">
    <img align="center" src="https://github.com/salamafazlul/email-generator/blob/main/email-generator-ext/demo.gif" alt="Chrome Extension Demo"/>
</a>

### Chrome Extension Screenshot
<a href="https://github.com/salamafazlul">
    <img align="center" src="https://github.com/salamafazlul/email-generator/blob/main/email-generator-ext/extension.png" alt="Chrome Extension Screenshot"/>
</a>

### Frontend Screenshot
<a href="https://github.com/salamafazlul">
    <img align="center" src="https://github.com/salamafazlul/email-generator/blob/main/email-generator-ext/frontend-demo.png" alt="Frontend Screenshot"/>
</a>
