---
description: Repository Information Overview
alwaysApply: true
---

# Ponraj Portfolio Information

## Summary

Modern portfolio website built with Next.js showcasing a Web Developer & B.Tech IT student. The project features a responsive, component-driven architecture using Radix UI components via shadcn/ui, styled with Tailwind CSS v4, and includes form handling with React Hook Form and Zod validation.

## Structure

**Root Directory Contents:**
- **app/** - Next.js App Router with main portfolio layout and page
- **components/** - Reusable UI components including 40+ shadcn/ui components
- **hooks/** - Custom React hooks (theme and toast notifications)
- **lib/** - Utility functions
- **styles/** - Global CSS and styling
- **public/** - Static assets (images and logos)

## Language & Runtime

**Language**: TypeScript  
**Language Version**: TypeScript 5.x  
**Runtime**: Node.js (via Next.js)  
**Framework**: Next.js 14.2.16  
**UI Library**: React 18.x  
**Build System**: Next.js (built-in bundler and build system)  
**Package Manager**: npm (also supports pnpm - pnpm-lock.yaml present)

## Dependencies

**Main Dependencies**:
- **React Framework**: react, react-dom (v18)
- **UI Components**: @radix-ui/* (comprehensive component suite - accordion, avatar, button, checkbox, dialog, dropdown, form, select, tooltip, tabs, etc.)
- **Styling**: tailwindcss (v4.1.9), @tailwindcss/postcss (v4.1.9), class-variance-authority, clsx, tailwind-merge
- **Form & Validation**: react-hook-form (v7.60.0), @hookform/resolvers, zod (v3.25.67)
- **Charts & Visualization**: recharts (v2.15.4), d3-* (charting utilities)
- **UI Components**: embla-carousel-react, lucide-react (icons), sonner (toasts), vaul (drawer)
- **Date Handling**: date-fns (v4.1.0), react-day-picker
- **Utilities**: next-themes (dark mode), geist (font system), input-otp

**Development Dependencies**:
- @types/node, @types/react, @types/react-dom (TypeScript types)
- tailwindcss, postcss, autoprefixer (styling pipeline)
- tw-animate-css (animation utilities)

## Build & Installation

**Install Dependencies**:
```bash
npm install
```

**Development Server**:
```bash
npm run dev
```
Runs at `http://localhost:3000` with hot reload.

**Production Build**:
```bash
npm run build
```
Generates optimized `.next` directory.

**Start Production Server**:
```bash
npm start
```

**Code Quality**:
```bash
npm run lint
```
Runs Next.js built-in ESLint (currently configured to ignore build errors and TypeScript errors).

## Main Files & Resources

**Application Entry Points**:
- **app/page.tsx** - Main portfolio page with sections: navigation, hero, about, experience, skills, contact
- **app/layout.tsx** - Root layout with metadata, font configuration (Work Sans, Open Sans), theme provider setup

**Configuration Files**:
- **next.config.mjs** - Next.js config (ignores ESLint/TypeScript errors during build, unoptimized images)
- **tsconfig.json** - TypeScript compiler options with path aliases (@/* paths)
- **tailwind.config.js** - Tailwind CSS configuration (Tailwind v4 format)
- **postcss.config.mjs** - PostCSS pipeline with Tailwind CSS PostCSS plugin
- **components.json** - shadcn/ui configuration (Radix UI style, TypeScript, Tailwind setup)

**Static Assets** (**public/**):
- Photo.jpg, placeholder-logo.png/svg, placeholder-user.jpg, placeholder.svg/jpg - Images for portfolio

## Component Library

**Extensive shadcn/ui Components** (40+ components available):
- Layout: accordion, collapsible, scroll-area, separator, tabs, breadcrumb
- Form: checkbox, radio-group, input, label, select, switch, toggle, calendar, input-otp, form wrapper
- Data Display: avatar, badge, card, chart, progress, table
- Dialogs: alert-dialog, dialog, drawer, popover, context-menu, dropdown-menu, hover-card, menubar, tooltip
- Advanced: carousel, command palette, resizable panels

## Styling & Theming

**Tailwind CSS v4**: Modern utility-first CSS framework  
**PostCSS Plugin**: @tailwindcss/postcss for v4 support  
**Dark Mode**: next-themes integration with system preference detection  
**CSS Variables**: Tailwind configured with CSS variable support for theme customization  
**Font System**: Geist font family with custom Google Fonts (Work Sans, Open Sans)  
**Global Styles**: app/globals.css with base styles and animations
