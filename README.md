# Loading Snakes

Three loading dots that turn into a snake game - The elevator music of chatbots

[![npm version](https://img.shields.io/npm/v/loading-snakes.svg)](https://www.npmjs.com/package/loading-snakes)
[![license](https://img.shields.io/npm/l/loading-snakes.svg)](https://github.com/yourusername/loading-snakes/blob/main/LICENSE)

## Installation

```bash
npm install loading-snakes
# or
yarn add loading-snakes
```

## Features

- 🐍 Animated loading dots that transform into a playable snake game
- 🎮 Starts as a simple loading animation, turns into a game on arrow key press
- 💾 Preserves the snake length between sessions using localStorage
- 📱 Responsive design that works on any screen size

## Usage

```jsx
import React from "react";
import LoadingSnakes from "loading-snakes";

function App() {
  return (
    <div className="loading-container">
      <h2>Loading...</h2>
      <LoadingSnakes />
    </div>
  );
}

export default App;
```

```jsx
import React, { useState } from "react";
import LoadingSnakes from "loading-snakes";

function App() {
  return <LoadingSnakes />;
}

export default App;
```

## How to Play

1. The component starts as an animated loading indicator
2. Press any arrow key (↑, ↓, ←, →) to start the game
3. Control the snake using arrow keys
4. Eat the target dots to grow the snake
5. Avoid hitting yourself with the snake
6. The snake wraps around the screen edges

## Development

```bash
# Clone the repository
git clone https://github.com/yourusername/loading-snakes.git

# Install dependencies
npm install

# Build the package
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Shubh Mittal
