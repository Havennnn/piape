Portfolio Development Workflow
1. Planning (Don’t Skip This)

Goal: Know what you’re building before touching code.

Define sections:

Navigation

Hero

Education

Experience

Projects

Footer

Decide design system:

shadcn-vue

spacing, typography, colors

Choose architecture:

SPA

Atomic Design

✅ Output: mental map or simple sketch

2. Project Setup

Goal: Get a solid foundation.

Create Vite + Vue 3 project

Install dependencies

Setup:

Router

shadcn-vue

Tailwind (if used by shadcn)

Clean default files

✅ Output: empty but ready project

3. Define Folder Structure

Goal: Avoid messy components later.

Create folders:

atoms/

molecules/

organisms/

layouts/

pages/

composables/

Add placeholder files (empty components)

✅ Output: scalable architecture

4. Build Atoms (Design First)

Goal: Design consistency.

Examples:

Button

Heading

Text

Card

Badge

Rules:

No business logic

Only props + styles

Wrap shadcn components

✅ Output: reusable UI building blocks

5. Build Molecules

Goal: Combine atoms into meaning.

Examples:

NavItem (icon + text)

ProjectCard (card + title + tags + buttons)

ExperienceItem

✅ Output: reusable UI patterns

6. Build Organisms (Sections)

Goal: Full sections of the page.

Examples:

Navbar

HeroSection

EducationSection

ExperienceSection

ProjectsSection

Footer

Rules:

Minimal logic

Data comes from props or composables

✅ Output: complete page sections

7. Page Assembly

Goal: Build the actual page.

Use Home.vue

Import organisms in correct order

Wrap with DefaultLayout

✅ Output: working portfolio page

8. Polish & Refactor

Goal: Make it look professional.

Remove duplicate code

Improve naming

Adjust spacing & typography

Add hover states & transitions

Ensure responsiveness

✅ Output: clean, production-ready UI

9. Final Checks

Goal: Ship confidently.

Mobile responsiveness

Accessibility

Code readability

Linting

Build & preview

✅ Output: deploy-ready portfolio