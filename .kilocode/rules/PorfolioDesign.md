# Vite + Vue 3 Portfolio Prompt

## Goal
Build a **modern, clean, and scalable portfolio** using **Vue 3 + Vite** as a **Single Page Application (SPA)**, following **Atomic Design principles** and using **shadcn-vue** for UI components.

---

## Technical Stack
- Vue 3 (Composition API)
- Vite
- SPA architecture
- shadcn-vue for UI components
- Clean, readable, and maintainable code
- Responsive and accessible design
- Production-ready structure

---

## Design Principles
- Follow **Atomic Design**:
  - Atoms
  - Molecules
  - Organisms
  - Layouts
  - Pages
- Components should be reusable and composable
- UI consistency using shadcn design system
- Minimal, professional, portfolio-focused design
- Proper separation of concerns

---

## Portfolio Sections
The portfolio should contain the following sections, in this order:

1. Navigation  
   - Sticky
   - Clean
   - Accessible
   - Responsive

2. Hero Section  
   - Name
   - Role / Title
   - Short description
   - Call-to-action buttons

3. Education / School Section  
   - School name
   - Degree / Field
   - Dates

4. Experience Section  
   - Job title
   - Company
   - Duration
   - Responsibilities / achievements

5. Projects Section  
   - Project cards
   - Description
   - Tech stack
   - Links (GitHub / Live demo)

6. Footer  
   - Social links
   - Copyright
   - Minimal design

---

## Folder Structure (Atomic Design)


src/
├─ assets/
│ └─ images/
│
├─ components/
│ ├─ atoms/
│ │ ├─ BaseButton.vue
│ │ ├─ BaseHeading.vue
│ │ └─ BaseText.vue
│ │
│ ├─ molecules/
│ │ ├─ NavItem.vue
│ │ ├─ ProjectCard.vue
│ │ └─ ExperienceItem.vue
│ │
│ ├─ organisms/
│ │ ├─ Navbar.vue
│ │ ├─ HeroSection.vue
│ │ ├─ EducationSection.vue
│ │ ├─ ExperienceSection.vue
│ │ ├─ ProjectsSection.vue
│ │ └─ Footer.vue
│
├─ layouts/
│ └─ DefaultLayout.vue
│
├─ pages/
│ └─ Home.vue
│
├─ router/
│ └─ index.ts
│
├─ composables/
│ └─ useProjects.ts
│
├─ App.vue
└─ main.ts


---

## Component Guidelines
- Atoms wrap shadcn-vue components (Button, Card, Badge, etc.)
- Molecules combine atoms into meaningful UI pieces
- Organisms represent full sections of the page
- Pages assemble organisms into a full layout
- Avoid logic in UI components when possible
- Use composables for reusable logic

---

## Best Practices
- Use Vue 3 Composition API
- Keep components small and focused
- Use props and emits properly
- Avoid hardcoded data where possible
- Ensure accessibility (ARIA, keyboard navigation)
- Keep styles consistent and minimal

---

## Expected Outcome
A **clean, professional, and modern portfolio** that:
- Looks polished
- Is easy to maintain
- Is easy to extend
- Demonstrates strong frontend architecture skills
- Uses Vue 3 and shadcn-vue effectively
