# Accuknox Project

This Node.js application uses the Vite, Tailwind, Typescript.

## Features

- Search widget.
- Remove widget from homescreen.
- Shows all categories of widgets.
- Can add removed widgets back from the sidepanel.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository or create a new directory for this project.

2. Initialize the project:
   ```
   npm install
   ```

## Usage

1. Start the vite server:
   ```
   npm run dev
   ```

## Data

### widgetStore.ts

This file provides all the widgets that are available to user and an array of active widgets which will be placed on the home screen on first render.
