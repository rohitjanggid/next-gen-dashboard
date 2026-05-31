"use client"; 

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import * as Icons from "lucide-react";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Client-side data fetching
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("courses").select("*");
      if (!error && data) {
        setCourses(data);
      } else {
        console.error("Database error:", error?.message);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex overflow-x-hidden relative">
      
      {/* 1. SIDEBAR NAVIGATION */}
      <nav 
        className={`w-64 border-r border-neutral-800 p-6 flex flex-col justify-between fixed md:static inset-y-0 left-0 z-50 bg-neutral-950 transition-transform duration-300 md:translate-x-0 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* TOP CONTAINER: Logo and Navigation Links */}
        <div className="flex flex-col gap-8">
          {/* App Logo and Title */}
          <div className="flex items-center gap-2 px-2">
            <div className="h-6 w-6 rounded-md bg-purple-500 flex items-center justify-center text-xs font-black text-black">
              N
            </div>
            <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              NEXT-LEARN
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest px-2 mb-2">
              Main Menu
            </p>

            {/* Active Link */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800/60 text-white font-medium text-sm cursor-pointer transition-all">
              <Icons.LayoutDashboard size={18} className="text-purple-400" />
              <span>Dashboard</span>
            </div>

            {/* Other Links */}
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 text-sm cursor-pointer transition-all group">
              <Icons.BookOpen
                size={18}
                className="text-neutral-500 group-hover:text-purple-400"
              />
              <span>My Courses</span>
            </div>

            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 text-sm cursor-pointer transition-all group">
              <Icons.BarChart3
                size={18}
                className="text-neutral-500 group-hover:text-purple-400"
              />
              <span>Analytics</span>
            </div>

            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 text-sm cursor-pointer transition-all group">
              <Icons.Settings
                size={18}
                className="text-neutral-500 group-hover:text-purple-400"
              />
              <span>Settings</span>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTAINER: User Profile Quick View */}
        <div className="flex items-center gap-3 p-2 rounded-xl bg-neutral-900/40 border border-neutral-800/40">
          <div className="h-8 w-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center font-bold text-xs text-purple-400">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white">Rohit</span>
            <span className="text-[10px] text-neutral-500">Student Account</span>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU BACKDROP BACKGROUND (Khaali parda) */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)} 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
        />
      )}

      {/* 2. MAIN CONTENT AREA */}
      <section className="flex-1 p-6 md:p-8 min-w-0">
        
        {/* MOBILE HEADER: Sirf mobile screens par dikhega */}
        <header className="flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800 rounded-2xl mb-6 md:hidden">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-purple-500 flex items-center justify-center text-xs font-black text-black">
              N
            </div>
            <span className="font-bold text-base tracking-wider bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              NEXT-LEARN
            </span>
          </div>
          
          {/* Hamburger Menu Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 text-neutral-400 hover:text-white bg-neutral-950 rounded-xl border border-neutral-800/80 transition-all"
          >
            {isMenuOpen ? <Icons.X size={20} /> : <Icons.Menu size={20} />}
          </button>
        </header>

        {/* BENTO GRID WRAPPER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* TILE 1: Hero Card (Welcome Back) */}
          <article className="lg:col-span-2 bg-gradient-to-br from-neutral-900 to-neutral-900/50 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between min-h-[160px]">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Welcome back, Rohit! 👋
              </h2>
              <p className="text-neutral-400 text-sm mt-1">
                Ready to smash today's learning goals?
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-orange-400 bg-orange-500/10 w-fit px-3 py-1 rounded-full border border-orange-500/20">
              🔥 5 Day Streak
            </div>
          </article>

          {/* TILE 2: Activity Card (Consistency Analytics Graph) */}
          <article className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between min-h-[160px]">
            <div>
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Activity Analysis
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Your weekly learning consistency
              </p>
            </div>

            {/* CSS Mock Graph Bars */}
            <div className="mt-4 flex items-end justify-between gap-1 h-16 bg-neutral-950/40 p-2 rounded-xl border border-neutral-800/60">
              <div className="w-full bg-neutral-800 h-[30%] rounded-sm"></div>
              <div className="w-full bg-neutral-800 h-[45%] rounded-sm"></div>
              <div className="w-full bg-purple-500/80 h-[75%] rounded-sm shadow-[0_0_10px_rgba(168,85,247,0.2)]"></div>
              <div className="w-full bg-neutral-800 h-[20%] rounded-sm"></div>
              <div className="w-full bg-neutral-800 h-[60%] rounded-sm"></div>
              <div className="w-full bg-purple-500 h-[90%] rounded-sm shadow-[0_0_10px_rgba(168,85,247,0.3)]"></div>
              <div className="w-full bg-neutral-800 h-[40%] rounded-sm"></div>
            </div>
          </article>

          {/* TILE 3: Dynamic Course Cards (Database Loop) */}
          {courses &&
            courses.map((course) => {
              const IconComponent = Icons[course.icon_name] || Icons.BookOpen;

              return (
                <article
                  key={course.id}
                  className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between min-h-[150px]"
                >
                  <div>
                    <div className="text-purple-400 bg-purple-500/10 p-2 rounded-xl w-fit border border-purple-500/20 mb-3">
                      <IconComponent size={20} />
                    </div>

                    <h4 className="font-bold text-white text-lg leading-snug">
                      {course.title}
                    </h4>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-xs font-medium text-neutral-400 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden border border-neutral-800">
                      <div
                        className="bg-purple-500 h-full rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
        </div>
      </section>
    </main>
  );
}