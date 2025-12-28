# Tectonika

A modern landing page for Tectonika - Building the foundation for tomorrow's digital infrastructure.

## Overview

Tectonika is a Next.js-based landing page featuring a clean, dark theme design with smooth scrolling and responsive layout. The page showcases the product through multiple sections including hero, features, philosophy, and email signup.

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
│   ├── CoreIdea.tsx      # Core Idea section
│   ├── Features.tsx      # Features showcase
│   ├── Philosophy.tsx    # Philosophy section
│   ├── EmailSignup.tsx   # Email signup form
│   └── Footer.tsx        # Footer
├── public/               # Static assets
└── vercel.json          # Vercel deployment configuration
```

## Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **What is Tectonika** - Product description and value proposition
3. **Core Idea** - Three pillars: Foundational, Dynamic, Universal
4. **Features** - Six key features with icons and descriptions
5. **Philosophy** - Mission statement and core values
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
