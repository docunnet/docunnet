"use client";

import React from "react";
import { 
  Search, 
  Filter, 
  MoreVertical,
  ShieldCheck,
  Ban,
  Trash2,
  Crown,
  UserCheck
} from "lucide-react";

export default function AdminUsersPage() {
  
  const users = [
    { 
      id: 1, 
      name: "Jean Dupont", 
      email: "jean.dupont@email.com", 
      date: "02 Jul 2026", 
      isPremium: true,
      stats: { downloads: 45, viewed: 120, aiSummaries: 12, quizzes: 8 }
    },
    { 
      id: 2, 
      name: "Marie Kasongo", 
      email: "marie.k@email.com", 
      date: "28 Jun 2026", 
      isPremium: false,
      stats: { downloads: 5, viewed: 23, aiSummaries: 1, quizzes: 3 }
    },
    { 
      id: 3, 
      name: "Patient Ilunga", 
      email: "patient.ilunga@email.com", 
      date: "15 Jun 2026", 
      isPremium: false,
      stats: { downloads: 12, viewed: 45, aiSummaries: 4, quizzes: 0 }
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Gestion des Utilisateurs</h1>
          <p className="mt-1 text-sm text-slate-400">Gérez les comptes, les abonnements Premium et analysez l'engagement.</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Rechercher un utilisateur (nom, email)..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 text-sm"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
        </div>
        <div className="flex gap-2">
          <select className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
            <option>Tous les statuts</option>
            <option>Premium Uniquement</option>
            <option>Gratuit Uniquement</option>
            <option>Suspendus</option>
          </select>
          <button className="bg-slate-900 border border-slate-700 p-2 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400">
                <th className="p-4 font-medium">Utilisateur</th>
                <th className="p-4 font-medium text-center">Statut</th>
                <th className="p-4 font-medium text-center">Téléchargements</th>
                <th className="p-4 font-medium text-center">Vues</th>
                <th className="p-4 font-medium text-center">Résumés IA</th>
                <th className="p-4 font-medium text-center">Quiz</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center text-white font-bold text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-white flex items-center gap-1">
                          {user.name}
                          {user.isPremium && <Crown className="w-3.5 h-3.5 text-amber-500" />}
                        </div>
                        <div className="text-xs text-slate-400">{user.email}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Inscrit le {user.date}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${user.isPremium ? 'bg-amber-500/10 text-amber-500' : 'bg-slate-800 text-slate-400'}`}>
                      {user.isPremium ? "Premium" : "Gratuit"}
                    </span>
                  </td>
                  <td className="p-4 text-center text-sm text-slate-300 font-mono">{user.stats.downloads}</td>
                  <td className="p-4 text-center text-sm text-slate-300 font-mono">{user.stats.viewed}</td>
                  <td className="p-4 text-center text-sm text-slate-300 font-mono">{user.stats.aiSummaries}</td>
                  <td className="p-4 text-center text-sm text-slate-300 font-mono">{user.stats.quizzes}</td>
                  <td className="p-4 text-right relative group">
                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                    {/* Fake Dropdown */}
                    <div className="hidden group-hover:block absolute right-4 top-10 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-10 w-44 overflow-hidden">
                      <button className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2"><UserCheck className="w-3 h-3"/> Voir Profil</button>
                      {!user.isPremium ? (
                        <button className="w-full text-left px-4 py-2 text-xs text-amber-400 hover:bg-slate-700 flex items-center gap-2"><Crown className="w-3 h-3"/> Rendre Premium</button>
                      ) : (
                        <button className="w-full text-left px-4 py-2 text-xs text-slate-400 hover:bg-slate-700 flex items-center gap-2"><Crown className="w-3 h-3"/> Retirer Premium</button>
                      )}
                      <div className="h-px bg-slate-700 my-1"></div>
                      <button className="w-full text-left px-4 py-2 text-xs text-orange-400 hover:bg-slate-700 flex items-center gap-2"><Ban className="w-3 h-3"/> Suspendre</button>
                      <button className="w-full text-left px-4 py-2 text-xs text-red-400 hover:bg-slate-700 flex items-center gap-2"><Trash2 className="w-3 h-3"/> Supprimer</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
