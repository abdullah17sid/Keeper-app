# 🗒️ Keeper App

A sleek, minimal, and responsive note-taking web application built using **React JS** and **Tailwind CSS**.

---

## 🔗 Live Demo

**Netlify:** [https://your-netlify-site.netlify.app](https://your-netlify-site.netlify.app)  
**Vercel:** [https://your-vercel-site.vercel.app](https://your-vercel-site.vercel.app)

---

## ✅ Features

- Add, edit, and delete notes
- Responsive UI for mobile, tablet, desktop
- Tailwind CSS styling (no inline styles)
- Reusable component-based architecture
- Alert on empty fields
- Built with React hooks and arrow functions

---

## 🧰 Tech Stack

- React JS (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- JSX
- Git & GitHub
- Netlify & Vercel for hosting

---

## 🛠️ Challenges Faced

### 1. **Tailwind setup with Vite**
   - Problem: `tailwindcss init` command not working
   - Solution: Manually created `tailwind.config.js` and `postcss.config.js`

### 2. **Deployment directory issue**
   - Problem: Vite builds into `dist` not `build`
   - Solution: Set publish directory as `dist` in Netlify/Vercel

### 3. **Component re-renders on edit**
   - Problem: Notes were resetting on every edit
   - Solution: Used `useState` with `editIndex` logic to update

---

## 📂 How to Run Locally

```bash
git clone https://github.com/YOUR_USERNAME/keeper-app.git
cd keeper-app
npm install
npm run dev
