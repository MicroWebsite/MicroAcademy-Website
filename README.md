---
# 🚀 MicroAcademy

MicroAcademy is a modern, high-performance Next.js application built with cutting-edge technologies and a strong focus on scalability, maintainability, and developer experience.
---

## ✨ Overview

This project follows industry best practices with strict type safety, automated quality checks, optimized performance, and server-side rendering capabilities using the latest full-stack ecosystem.

---

## 🧠 Tech Stack

| Category            | Technology               |
| ------------------- | ------------------------ |
| **Framework**       | Next.js 16               |
| **React**           | React 19 + React DOM 19  |
| **Language**        | TypeScript (Strict Mode) |
| **Styling**         | Tailwind CSS v4          |
| **Linting**         | ESLint (Strict Rules)    |
| **Formatting**      | Prettier                 |
| **Git Hooks**       | Husky + lint-staged      |
| **Package Manager** | npm                      |

---

## 🚀 Features

- 🔒 **Strict Type Safety**
  Fully configured with `strict: true` and advanced TypeScript checks for compile-time safety.

- ⚡ **Blazing Fast Performance**
  Next.js App Router with automatic code splitting, server-side rendering, and optimized image handling.

- 🎨 **Modern Styling System**
  Tailwind CSS v4 with a utility-first and highly efficient compilation approach.

- 🖥️ **Full-Stack Capabilities**
  API routes, server components, and middleware support for complete application development.

- ✅ **Automated Code Quality**
  Pre-commit hooks ensure:
  - No TypeScript errors
  - No unused variables
  - No `any` types
  - Consistent formatting

- 🛠 **Developer-Friendly Workflow**
  Clean structure, reusable components, and scalable architecture with Hot Module Replacement.

---

## 🏁 Getting Started

### 📌 Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

---

### 📥 Installation

```bash
git clone <repository-url>
cd MicroAcademy
npm install
```

---

## 💻 Development

Start the development server:

```bash
npm run dev
```

- Hot Module Replacement (HMR) enabled ⚡
- Access at `http://localhost:3000`
- Instant feedback during development

---

### 📦 Production Build

```bash
npm run build
npm start
```

✔ Includes mandatory TypeScript validation before build

---

## 🧹 Code Quality

Maintain high standards with the following commands:

```bash
npm run lint         # Run ESLint checks
npm run format       # Apply Prettier formatting
npm run type-check   # Run TypeScript validation
npm run lint:fix     # Auto-fix linting issues
```

---

## 🔐 Pre-commit Workflow

Every commit is automatically validated:

- ✅ TypeScript check
- 🎨 Prettier formatting
- 🔍 ESLint fixes
- ❌ Blocks commits on strict violations

---

## 📂 Project Structure

```bash
app/
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── types/           # Global TypeScript types
├── layout.tsx       # Root layout component
├── page.tsx         # Home page
└── globals.css      # Global styles (Tailwind)

public/             # Static assets
```

**Next.js App Router** enables:

- File-based routing
- Server and client components
- API routes in `app/api/`
- Built-in image optimization

## 🎯 Why This Project Stands Out

- 🔥 Production-ready architecture
- 📏 Enforced coding standards
- ⚙️ Scalable and maintainable design
- 🚀 Performance-first approach

---

## 📄 License

This project is **private and proprietary**.

---
