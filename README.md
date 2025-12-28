# Tectonika

A modern landing page for Tectonika - Inner tectonics of the human mind and body.

## Overview

Tectonika is a Next.js-based landing page featuring a clean, dark theme design with smooth scrolling and responsive layout. The page showcases Tectonika as a personal system for understanding your inner tectonics – the slow, deep processes inside your body and mind that shape how you feel, think and behave on the surface.

## Features

- 🎨 **Dark Theme**: Modern dark color scheme with clean typography
- 📱 **Responsive Design**: Fully responsive layout optimized for all devices
- ⚡ **Next.js 16**: Built with the latest Next.js 16 and React 19
- 🎭 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 📝 **TypeScript**: Type-safe code for better development experience
- 🚀 **Vercel Ready**: Optimized for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── WhatIs.tsx        # What is Tectonika section
│   ├── CoreIdea.tsx      # Core Concepts section
│   ├── Features.tsx      # Features showcase
│   ├── Philosophy.tsx    # Philosophy section
│   ├── EmailSignup.tsx   # Email signup form
│   └── Footer.tsx        # Footer
├── public/               # Static assets
└── vercel.json          # Vercel deployment configuration
```

## Sections

1. **Hero** - Eye-catching introduction with tagline "See what moves you beneath the surface"
2. **What is Tectonika** - Explanation of the personal inner tectonics system
3. **Core Concepts** - Three key concepts: Inner Tectonics, Silent Signals, State Graph
4. **Key Features** - Seven features including State Check-ins, Sense Notebook, Tectonic Timeline, State Graph, Context Layer, Signals & Warnings, and Conditions for Deep Work
5. **Philosophy** - Mission statement focused on understanding, not optimization
6. **Email Signup** - Waitlist form (frontend-only, no backend)
7. **Footer** - Links and copyright information

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Technologies Used

- **Next.js 16.1.1** - React framework with app router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Vercel** - Deployment platform

## License

All rights reserved © 2025 Tectonika
