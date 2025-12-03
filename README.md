# Lottery Spin App

A React application that simulates a lottery spin with smooth animations and a winning message display.

## Features

- **Six Number Panels**: Vertical slot machine-style panels that rotate independently
- **Spin Animation**: Smooth scrolling animation that gradually slows down to reveal winning numbers
- **Winning Message**: Displays "CONGRATULATION" and "1ST PRIZE" message after the spin completes
- **Animated Text**: "1ST PRIZE" text alternates between white and red colors
- **Modern UI**: Futuristic design with glowing effects, gradients, and circuit board patterns
- **Responsive**: Works on both desktop and mobile devices
- **Optimized**: Modular component structure with performance optimizations

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## How It Works

1. Click the "SPIN" button to start the lottery spin
2. Six number panels rotate independently with staggered timing
3. Each panel scrolls vertically like a slot machine
4. After all panels stop, the winning numbers are revealed
5. A "CONGRATULATION" and "1ST PRIZE" message appears with animated effects

## Project Structure

```
lottery-spin-app/
├── src/
│   ├── components/
│   │   ├── LotterySpin.tsx          # Main container component
│   │   ├── NumberPanel.tsx          # Individual number slot panel
│   │   ├── CongratulationsMessage.tsx # Win message component
│   │   ├── SpinButton.tsx           # Spin button component
│   │   └── BackgroundEffects.tsx    # Background effects component
│   ├── hooks/
│   │   └── useLotterySpin.ts        # Custom hook for spin logic
│   ├── constants/
│   │   └── lotteryConfig.ts         # Configuration constants
│   ├── styles/
│   │   └── animations.css           # CSS animations and keyframes
│   ├── App.tsx                      # Root component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles with Tailwind
├── public/                          # Static assets
└── package.json                     # Dependencies
```

## Architecture

The application is built with a modular, optimized architecture:

### Components
- **LotterySpin**: Main container that orchestrates the spin logic
- **NumberPanel**: Individual slot machine panel with scrolling animation (memoized)
- **CongratulationsMessage**: Win message display (memoized)
- **SpinButton**: Interactive spin button (memoized)
- **BackgroundEffects**: Background gradients and patterns (memoized)

### Custom Hook
- **useLotterySpin**: Encapsulates all spin animation logic, state management, and cleanup

### Constants
- **lotteryConfig**: Centralized configuration for easy customization

### Performance Optimizations
- Components wrapped with `React.memo` to prevent unnecessary re-renders
- Custom hook with `useCallback` for stable function references
- Efficient animation using `requestAnimationFrame`
- Centralized constants to avoid magic numbers

## Customization

You can customize the following in `src/constants/lotteryConfig.ts`:

- `SPIN_DURATION`: Duration of the spin animation (default: 3000ms)
- `FINAL_NUMBERS`: The winning numbers array (default: [1, 2, 3, 4, 5, 6])
- `STAGGER_DELAY`: Delay between each slot start (default: 100ms)
- `WIN_MESSAGE_DELAY`: Delay before showing win message (default: 500ms)

You can also customize:
- Colors and styling using Tailwind classes in components
- Animation timings in `src/styles/animations.css`
- Number panel appearance in `NumberPanel.tsx`

## Code Quality

- **TypeScript**: Full type safety
- **Component Separation**: Each component has a single responsibility
- **Reusability**: Components are designed to be reusable
- **Performance**: Optimized with memoization and efficient animations
- **Maintainability**: Clear structure and well-organized code
