# General Coding Guidelines

## 📜 Core Philosophy
1. **Simplicity:** Favor clear, maintainable solutions; avoid over-engineering.  
2. **Iterate:** Improve working code unless a new approach is crucial.  
3. **Focus:** Address the assigned task without expanding scope.  
4. **Quality:** Keep code clean, well-tested, and secure.  
5. **Collaboration:** These guidelines apply to both human developers and AI.

## 📚 Project Context & Documentation
1. **Documentation First:**  
   - Check project docs (PRDs, `README.md`, `.roo/docs/architecture.md`, `.roo/docs/tasks.md`, and task-specific `.md` files) before coding.  
   - If details conflict or are missing, ask for clarification.
2. **Architecture Adherence:**  
   - Follow `.roo/docs/architecture.md` to respect system boundaries, data flow, and dependencies.  
   - Comply with architecture or propose a new compliant approach if necessary.
3. **Pattern & Tech Stack Awareness:**  
   - Leverage existing patterns used in the code.  
   - Refer to `README.md` or `.roo/docs/architecture.md` for standard practices.  
   - Avoid new libraries unless essential.

## ⚙️ Task Execution & Workflow
1. **Task Definition:**  
   - Clearly outline requirements and acceptance criteria from `.roo/docs/tasks.md` or task-specific docs.  
2. **Systematic Change Protocol:**  
   - Identify component impacts and dependencies before making changes.  
   - Plan, then proceed in logical steps.  
   - Ensure necessary tests are planned or in place.
3. **Progress Tracking:**  
   - Update `.roo/docs/tasks.md` (and relevant task `.md` files) with changes and completion status.

## 🤖 AI Collaboration & Prompting
1. **Clear Instructions:** Provide explicit goals, constraints, context.  
2. **Context Referencing:** Remind the AI of relevant docs or decisions when tasks span multiple interactions.  
3. **Suggest vs. Apply:** Specify if you want a *suggestion* or an *applied* change.  
4. **Review AI Output:** Validate AI-generated code for correctness, logic, and security.  
5. **Focused Interaction:** Tackle smaller portions of the task to avoid confusion.  
6. **Incremental Steps:** Break complex tasks down and confirm each step.  
7. **Reduce Chatter:** Avoid repeating unchanged goals or details.  
8. **No Diagrams:** Stick to text and Markdown for documentation.  
9. **Standard Check-In:** Begin substantial changes with a quick note verifying the context, goal, and plan.

## 📄 Documentation Maintenance
- Update relevant docs (`README.md`, `.roo/docs/architecture.md`, `.roo/docs/tasks.md`, and task `.md` files) if changes alter architecture, patterns, or tasks.  

## MCP Tool Usage
- Use **Context7** to consult framework references (e.g., Laravel, Vue.js, FilamentPHP) for up-to-date best practices.