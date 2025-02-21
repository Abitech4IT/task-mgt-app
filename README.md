# Task Management Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A modern, responsive task management application built with React, TypeScript, and styled-components.

## Features

- ✨ Add, complete, and delete tasks
- 🔍 Filter tasks by status (All, Active, Completed)
- 💾 Persistent storage using localStorage
- 📱 Responsive design for all devices
- 🎨 Modern and clean UI with smooth animations
- 🔒 Type-safe implementation with TypeScript

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Abitech4IT/task-mgt-app.git
```

2. Navigate to the project directory:

```bash
cd task-mgt-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Technical Implementation

### State Management

- Uses React's built-in `useState` hook for component-level state
- Implements a custom `useLocalStorage` hook for persistent storage
- Efficient state updates with proper React patterns

### Styling

- Styled-components for component-specific styling
- Responsive design with mobile-first approach
- Consistent color scheme and spacing
- Smooth transitions and hover effects

### Type Safety

- Full TypeScript implementation
- Strict type checking enabled
- Type definitions for all components and hooks

## Project Structure

```
src/
├── components/          # React components
│   ├── Input.tsx       # Task creation component
│   ├── TaskList.tsx    # Task display component
│   └── Filter.tsx      # Task filtering component
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts
├── types/              # TypeScript type definitions
├── App.tsx            # Main application component
└── index.tsx          # Application entry point
```

## Assumptions Made

1. **Task Structure**: Tasks contain:

   - Unique ID (generated using crypto.randomUUID())
   - Description (non-empty string)
   - Completion status (boolean)
   - Creation timestamp

2. **Data Persistence**:

   - Tasks are stored in localStorage
   - Data persists across page reloads
   - No server-side storage required

3. **User Interface**:
   - Single-page application
   - No authentication required
   - Mobile-first design approach

## Additional Features

1. **Enhanced UX**:

   - Smooth transitions and animations
   - Hover effects for interactive elements
   - Clear visual feedback for task status

2. **Task Counter**:

   - Real-time count of total, active, and completed tasks
   - Updates automatically with task changes

3. **Responsive Design**:

   - Works seamlessly on mobile, tablet, and desktop
   - Optimized layout for different screen sizes

4. **Error Prevention**:
   - Empty task validation
   - Duplicate task prevention
   - Safe local storage implementation
