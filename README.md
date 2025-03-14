# Loading Snakes

A fun, interactive loading component for React that transforms into a playable snake game when arrow keys are pressed.

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
- 🌈 Customizable dot color
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

### With Custom Options

```jsx
import React, { useState } from "react";
import LoadingSnakes from "loading-snakes";

function App() {
  const [dotCount, setDotCount] = useState(3);

  const handleDotCountChange = (count) => {
    console.log(`Snake now has ${count} dots!`);
    setDotCount(count);
  };

  return (
    <div className="loading-container">
      <h2>Loading... (Snake length: {dotCount})</h2>
      <LoadingSnakes
        initialDotCount={5}
        dotColor="#4EB5F1"
        onDotsCountChange={handleDotCountChange}
      />
    </div>
  );
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

## API

### Props

| Prop                | Type       | Default     | Description                                      |
| ------------------- | ---------- | ----------- | ------------------------------------------------ |
| `initialDotCount`   | `number`   | `3`         | Initial number of dots in the snake              |
| `dotColor`          | `string`   | `'white'`   | Color of the dots                                |
| `onDotsCountChange` | `function` | `undefined` | Callback triggered when the snake length changes |

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

MIT © Your Name
