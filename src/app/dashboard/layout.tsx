"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  LayoutDashboard, 
  Library, 
  Star, 
  BrainCircuit, 
  Download, 
  HelpCircle, 
  User, 
  Settings, 
  Search, 
  Bell, 
  Moon,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { name: "Tableau de bord", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: "Bibliothèque", href: "/dashboard/library", icon: <Library className="w-5 h-5" /> },
  { name: "Favoris", href: "/dashboard/favorites", icon: <Star className="w-5 h-5" /> },
  { name: "Assistant IA", href: "/dashboard/ai-assistant", icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "Téléchargements", href: "/dashboard/downloads", icon: <Download className="w-5 h-5" /> },
  { name: "Quiz", href: "/dashboard/quizzes", icon: <HelpCircle className="w-5 h-5" /> },
  { name: "Profil", href: "/dashboard/profile", icon: <User className="w-5 h-5" /> },
  { name: "Paramètres", href: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
];

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      
      {/* Mobile Sidebar Backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        lg:static lg:flex-shrink-0
      `}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-blue-900">DOCUNET</span>
          </Link>
          <button className="lg:hidden text-slate-500 hover:text-slate-700" onClick={() => setIsMobileOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative
                  ${isActive 
                    ? "bg-blue-50 text-blue-700 font-semibold" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600 font-medium"}
                `}
              >
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-active" 
                    className="absolute inset-0 bg-blue-50 rounded-xl border border-blue-100/50 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className={`${isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-500"} transition-colors`}>
                  {item.icon}
                </div>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-30 sticky top-0">
          <div className="flex items-center gap-4 flex-1">
            <button 
              className="lg:hidden text-slate-500 hover:text-slate-700 focus:outline-none"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="hidden sm:block text-lg font-bold text-slate-800">
              Bonjour Jean 👋
            </div>
          </div>
          
          <div className="flex-1 flex justify-center max-w-lg w-full px-4 hidden md:flex">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-full leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all sm:text-sm"
                placeholder="Rechercher un cours, un mémoire, une matière..."
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
            <button className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-slate-100">
              <Moon className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-blue-600 transition-colors relative p-2 rounded-full hover:bg-slate-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-9 w-9 rounded-full bg-blue-600 border-2 border-blue-200 flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 transition-all shadow-sm">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-7xl mx-auto"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
