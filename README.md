# Shopping Cart Application

A modern shopping cart application built with React, Redux Toolkit, and TypeScript. This application allows users to add products to their cart and automatically calculates special offers and discounts.

## Features

- Add and remove products from the shopping cart
- Real-time price calculations with special offers
- Responsive design for mobile and desktop
- Clean and intuitive user interface

## Special Offers

The application implements three special offers:

1. **Cheese Offer**: Buy one, get one free (every 2nd cheese is free)
2. **Soup & Bread Offer**: When you buy soup, bread gets 50% off
3. **Butter Offer**: Get 1/3 off on all butter purchases

## Tech Stack

- **React 19** - UI library
- **Redux Toolkit** - State management
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── app/           # Redux store configuration
├── components/    # React components
├── constants/     # Application constants
├── features/      # Redux slices
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
