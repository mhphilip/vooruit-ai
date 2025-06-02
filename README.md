# Vooruit AI - Advisory Platform

Modern AI advisory platform built with:
- Frontend: React + TypeScript + Vite + Tailwind CSS
- Backend: Node.js + Express + TypeScript
- Shared TypeScript definitions

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- npm v9+
- Git

```bash
git clone https://github.com/mhphilip/vooruit-ai.git
cd vooruit-ai
```

### 📦 Installation
```bash
# Install all dependencies (monorepo setup)
npm install
```

### 🔧 Environment Setup
Create `.env` files:
```bash
# client/.env
VITE_API_BASE_URL=http://localhost:3000/api

# server/.env
PORT=3000
```

### 🖥️ Running Locally
```bash
# Start backend in one terminal
npm run dev --workspace=server

# Start frontend in another terminal
npm run dev --workspace=client
```

Access the app at `http://localhost:5173`

## 🚢 Deployment

### Production Build
```bash
# Build client and server using workspace commands
npm run build --workspace=client
npm run build --workspace=server
```

### PM2 Process Manager
```bash
# Start server
pm2 start server/dist/index.js --name "vooruit-server"
```

### Docker Deployment
1. Create Dockerfile:
```dockerfile
FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --workspace=client
RUN npm run build --workspace=server

CMD ["npm", "start", "--workspace=server"]
```

2. Create docker-compose.yml:
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

3. Build and start:
```bash
docker-compose up -d --build
```

## 📂 Project Structure
```
├── client/            # Frontend workspace
│   ├── src/           # React components and pages
│   └── vite.config.ts # Vite configuration
├── server/            # Backend workspace
│   ├── routes.ts      # API endpoints
│   └── index.ts       # Server entrypoint
├── shared/            # Shared TypeScript definitions
│   └── schema.ts      # Database schema
├── package.json       # Monorepo root configuration
├── vite.config.ts     # Root build configuration
├── tailwind.config.ts # Shared Tailwind config
└── drizzle.config.ts  # ORM configuration
```

## 📜 Scripts
| Command                               | Description                |
|---------------------------------------|----------------------------|
| `npm install`                         | Install all dependencies   |
| `npm run dev --workspace=client`      | Start frontend dev server  |
| `npm run dev --workspace=server`      | Start backend dev server   |
| `npm run build --workspace=client`    | Build frontend production  |
| `npm run build --workspace=server`    | Build backend production   |
| `npm test`                            | Run all tests              |
| `npm start --workspace=server`        | Start production server    |
