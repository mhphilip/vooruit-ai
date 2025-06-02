# Coding Quality & Best Practices

## ✨ Code Quality & Style

1. **TypeScript First:** Use TypeScript for all code (frontend, backend, shared).
2. **Component Structure:** Organize React components in Single-File Components (`.tsx`), separating UI, logic, and styles where possible.
3. **Keep Files Small:** Keep files under 500 lines; split large components or modules.
4. **No Duplication (DRY):** Reuse existing code and utilities; refactor to remove duplication.
5. **Dependency Management:**  
   - Document all npm dependencies and versions.
   - Avoid adding new dependencies unless necessary and approved.
6. **Linting/Formatting:**  
   - Enforce ESLint and Prettier rules for JS/TS/React.
   - Use project scripts for formatting and linting before committing.
7. **Naming:**  
   - Use descriptive, consistent names for files, variables, and functions.
   - Avoid temporary or unclear names.
8. **Pattern Consistency:**  
   - Follow patterns and conventions established in the codebase.
   - Remove old implementations if replacing patterns.
9. **No One-Time Scripts:** Exclude throwaway utilities from source control.

---

## 🖥️ Frontend Practices

1. **Component Organization:**  
   - Place UI components in `client/src/components/`.
   - Place pages in `client/src/pages/`.
   - Place hooks in `client/src/hooks/`.
   - Place utilities in `client/src/lib/`.
2. **Styling:**  
   - Use Tailwind CSS for styling.
   - Keep styles consistent and utility-first.
3. **Routing:**  
   - Use Wouter for client-side routing.
   - Keep routes simple and RESTful.
4. **State & Data:**  
   - Use TanStack Query for data fetching and caching.
   - Use React context or hooks for local state.
5. **Type Safety:**  
   - Use shared types from `shared/` for API data.
   - Validate props and API responses with Zod where possible.
6. **Accessibility:**  
   - Ensure components are accessible (ARIA, keyboard navigation).
7. **Responsiveness:**  
   - Ensure layouts work on all screen sizes.

---

## 🗄️ Backend Practices

1. **Project Structure:**  
   - Entry point: `server/index.ts`
   - Routes: `server/routes.ts`
   - Utilities and helpers in dedicated modules.
2. **API Design:**  
   - Use RESTful endpoints under `/api`.
   - Validate all input using Zod schemas from `shared/`.
   - Return consistent, typed responses.
3. **Database:**  
   - Define schema in `shared/schema.ts` using Drizzle ORM.
   - Use migrations for schema changes.
   - Keep queries type-safe.
4. **Logging:**  
   - Use built-in logging for API requests and errors.
5. **Error Handling:**  
   - Handle errors gracefully; return clear error messages.
   - Avoid leaking sensitive information in errors.

---

## ♻️ Refactoring

1. **Purposeful Changes:** Refactor to improve clarity, remove duplication, or align with architecture.
2. **Edit In-Place:** Update existing files; do not rename or duplicate unless necessary.
3. **Verify Changes:** Retest routes, API endpoints, and UI after refactoring.

---

## ✅ Testing & Validation

1. **Testing:**  
   - Use appropriate testing frameworks for frontend and backend (e.g., Jest, React Testing Library, or similar).
   - Write tests for components, hooks, API endpoints, and utilities.
2. **Type Checking:**  
   - Ensure TypeScript passes with no errors before committing.
3. **Validation:**  
   - Use Zod schemas for runtime validation of API inputs and outputs.
4. **Manual Checks:**  
   - Manually verify UI and API functionality after changes.

---

## 🐛 Debugging & Troubleshooting

1. **Root Cause Fixes:** Address underlying issues, not just symptoms.
2. **Log Analysis:** Check server logs and browser console for errors.
3. **Targeted Logging:** Use `console.log` (frontend) and server logging judiciously for debugging.
4. **Research:** Consult documentation for React, Express, Drizzle ORM, and Zod as needed.

---

## 🔒 Security

1. **Validation:**  
   - Validate all user input on the server using Zod.
   - Sanitize and escape data as needed.
2. **Authentication & Authorization:**  
   - Protect sensitive API endpoints.
   - Do not expose secrets or sensitive data to the client.
3. **Dependencies:**  
   - Keep dependencies up to date.
   - Avoid insecure or deprecated packages.

---

## 📄 Documentation

- Update `.roo/docs/architecture.md` and related docs if changes alter architecture, patterns, or tasks.
- Document new APIs, components, or utilities as needed.

---

## Summary

Follow these guidelines to ensure code quality, maintainability, and consistency across the React/Express/TypeScript/Drizzle/Zod monorepo.