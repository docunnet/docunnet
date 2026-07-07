"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Files, 
  Users, 
  BarChart3, 
  BrainCircuit, 
  Settings, 
  LogOut,
  FolderTree,
  Menu,
  X
} from "lucide-react";
import { logoutAdmin } from "./actions";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: "Documents", href: "/admin/documents", icon: <Files className="w-5 h-5" /> },
  { name: "Catégories", href: "/admin/categories", icon: <FolderTree className="w-5 h-5" /> },
  { name: "Utilisateurs", href: "/admin/users", icon: <Users className="w-5 h-5" /> },
  { name: "Statistiques", href: "/admin/statistics", icon: <BarChart3 className="w-5 h-5" /> },
  { name: "Assistant IA", href: "/admin/ai-assistant", icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "Paramètres", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    const formData = new FormData();
    await logoutAdmin();
    router.push("/admin/login");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      
      {/* Mobile Sidebar Backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-slate-950 border-r border-slate-800 flex flex-col transition-transform duration-300 ease-in-out
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        lg:static lg:flex-shrink-0
      `}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">DOCUNET <span className="text-blue-500 text-xs align-top">ADMIN</span></span>
          </Link>
          <button className="lg:hidden text-slate-400 hover:text-white" onClick={() => setIsMobileOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href + '/') && item.href !== '/admin');
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative
                  ${isActive 
                    ? "text-white font-semibold" 
                    : "text-slate-400 hover:text-white font-medium hover:bg-slate-800/50"}
                `}
              >
                {isActive && (
                  <motion.div 
                    layoutId="admin-sidebar-active" 
                    className="absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className={`${isActive ? "text-blue-500" : "text-slate-500 group-hover:text-blue-400"} transition-colors`}>
                  {item.icon}
                </div>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          {/* Admin info */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <div className="h-8 w-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">Super Admin</p>
              <p className="text-xs text-slate-500 truncate">okomba500@gmail.com</p>
            </div>
          </div>

          {/* Logout */}
          <button
            id="admin-logout-btn"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <LogOut className="w-4 h-4" />
            {isLoggingOut ? "Déconnexion..." : "Se déconnecter"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-30 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-slate-400 hover:text-white focus:outline-none"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-bold text-white hidden sm:block">Panneau d&apos;administration</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-right">
              <span className="text-sm font-bold text-white">Super Admin</span>
              <span className="text-xs text-slate-400">okomba500@gmail.com</span>
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-900">
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
