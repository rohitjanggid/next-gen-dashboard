# 🚀 Next-Learn: Next-Gen Responsive SaaS Dashboard

Next-Learn ek modern, fully responsive aur professional learning management dashboard hai. Is project ko **Next.js 14 (App Router)**, **Tailwind CSS**, aur **Supabase (PostgreSQL)** ka use karke banaya gaya hai. Yeh project desktop par ek standard modern SaaS look deta hai aur mobile par smoothly ek fully functional application me convert ho jata hai.

---

## 🌟 Key Features (Mukhhye Visheshtayein)

- **Dynamic Data Fetching:** Supabase PostgreSQL database se live courses ka data (Title, Progress, Icons) real-time fetch hota hai.
- **Bento Grid Layout:** Modern design standard ke mutabik Bento Grid layout use kiya gaya hai jo har screen size par auto-adjust hota hai.
- **Dynamic Lucide Icons:** Database me save kiye gaye string names (jaise `Code`, `Terminal`, `Database`) ko read karke run-time par real Lucide React icons render hote hain.
- **Premium UI Elements:** Custom mock analytics graph, visual progress bars, aur high-end dark-themed glassmorphism elements.
- **Fully Responsive Navigation Drawer:** Mobile screens par sidebar hidden rehta hai aur Hamburger menu button par click karte hi ek smooth backdrop parda aur dynamic navigation drawer slide-in hota hai.
- **Modular Component Architecture:** Code quality ko high rakhne ke liye components ko split kiya gaya hai (`Sidebar.js`, `CourseCard.js`), jisse code clean aur easily maintainable hai.

---

## 🛠️ Tech Stack Used

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (Modern Dark Theme)
- **Icons:** Lucide React
- **Backend & Database:** Supabase (PostgreSQL)
- **State Management:** React hooks (`useState`, `useEffect`)

---

## 📂 Project Structure (Folder Architecture)

```text
src/
├── app/
│   ├── layout.js
│   └── page.js           # Main entry point (Dashboard Layout)
├── components/
│   ├── Sidebar.js        # Dynamic Sidebar & Mobile Drawer Component
│   └── CourseCard.js     # Modular Card Component for DB Loop
└── lib/
    └── supabase.js       # Supabase Client Initialization