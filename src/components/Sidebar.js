import * as Icons from "lucide-react";

export default function Sidebar({ isMenuOpen }) {
  return (
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
  );
}