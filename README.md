# Tectonika

A modern Next.js landing page for Tectonika - Building the foundation for modern development.

## Features

- 🎨 Dark theme with clean typography
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 and React 19
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS v4
- 📧 Email signup section (frontend only)
- 🚀 Deploy-ready for Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
.
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── Hero.tsx
│   ├── WhatIsTectonika.tsx
│   ├── CoreIdea.tsx
│   ├── Features.tsx
│   ├── Philosophy.tsx
│   ├── EmailSignup.tsx
│   └── Footer.tsx
└── public/              # Static assets
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/):

1. Push your code to a Git repository
2. Import the project to Vercel
3. Vercel will automatically detect Next.js and deploy

## Sections

- **Hero**: Eye-catching header with gradient title and CTA buttons
- **What is Tectonika**: Product introduction
- **Core Idea**: Key principles (Simplicity First, Developer-Centric)
- **Features**: Six feature cards with icons
- **Philosophy**: Three core values
- **Email Signup**: Newsletter subscription form (no backend)
- **Footer**: Links and copyright information

## License

MIT
