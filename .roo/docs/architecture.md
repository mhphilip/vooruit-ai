# Architecture Overview

## Structure

This codebase is a monorepo with three main parts:
- **client/**: Frontend application (React, TypeScript, Vite)
- **server/**: Backend API (Express, TypeScript)
- **shared/**: Shared types and schema (Drizzle ORM, Zod)

---

## Tech Stack

- **Frontend**:  
  - React (with Wouter for routing)
  - TanStack Query for data fetching/caching
  - Tailwind CSS for styling
  - Vite for development/build
  - Modular UI components and hooks

- **Backend**:  
  - Express (TypeScript)
  - Modular routing (see `server/routes.ts`)
  - Uses Vite for dev/build tooling
  - Logging middleware for API requests

- **Shared**:
  - Zod for runtime validation and type inference
  - Types and validation schemas shared between client and server

---

## Data Flow

- **API**:  
  - RESTful endpoints under `/api`
  - Client communicates with server via HTTP requests
  - Data validation and types enforced using shared Zod schemas

- **Type Safety**:  
  - Shared types (`shared/schema.ts`) ensure consistency between client and server
  - Zod schemas used for input validation on both ends

---

## Conventions & Patterns

- **Component Organization**:  
  - UI components in `client/src/components/`
  - Pages in `client/src/pages/`
  - Hooks in `client/src/hooks/`
  - Utilities in `client/src/lib/`

- **Backend Organization**:  
  - Entry point: `server/index.ts`
  - Routes: `server/routes.ts`
  - Static assets and Vite integration handled in `server/vite.ts`

- **Testing & Quality**:  
  - TypeScript throughout for static type checking
  - Linting and formatting via project config (see `package.json`)
  - Follow project coding guidelines in `.roo/rules/`

---

## Extensibility

- Add new API endpoints in `server/routes.ts`
- Add new UI components or pages in `client/src/components/` or `client/src/pages/`

---

## Summary

This architecture enables a type-safe, full-stack workflow with clear separation of concerns, shared validation, and modern tooling for both frontend and backend development.