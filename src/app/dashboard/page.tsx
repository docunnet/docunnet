import React from "react";
import { 
  BookOpen, 
  Download, 
  Star, 
  BrainCircuit, 
  HelpCircle,
  FileText,
  Clock
} from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    { name: "Documents consultés", value: "24", icon: <BookOpen className="w-5 h-5 text-blue-500" />, bg: "bg-blue-50" },
    { name: "Documents téléchargés", value: "8", icon: <Download className="w-5 h-5 text-emerald-500" />, bg: "bg-emerald-50" },
    { name: "Documents favoris", value: "12", icon: <Star className="w-5 h-5 text-amber-500" />, bg: "bg-amber-50" },
    { name: "Résumés IA générés", value: "3", icon: <BrainCircuit className="w-5 h-5 text-purple-500" />, bg: "bg-purple-50" },
    { name: "Quiz réalisés", value: "5", icon: <HelpCircle className="w-5 h-5 text-indigo-500" />, bg: "bg-indigo-50" },
  ];

  const activities = [
    { 
      title: "Introduction à l'Analyse Mathématique", 
      type: "Document consulté", 
      time: "Aujourd'hui, 10:23",
      icon: <BookOpen className="w-4 h-4 text-blue-500" />,
      color: "bg-blue-500"
    },
    { 
      title: "Sujet d'examen : Droit Constitutionnel 2023", 
      type: "Document téléchargé", 
      time: "Hier, 14:30",
      icon: <Download className="w-4 h-4 text-emerald-500" />,
      color: "bg-emerald-500"
    },
    { 
      title: "Résumé IA : Méthodologie de rédaction", 
      type: "Résumé généré", 
      time: "Il y a 2 jours",
      icon: <BrainCircuit className="w-4 h-4 text-purple-500" />,
      color: "bg-purple-500"
    },
    { 
      title: "Quiz IA : Marketing Digital Fondamentaux", 
      type: "Quiz terminé (Score: 8/10)", 
      time: "Il y a 3 jours",
      icon: <HelpCircle className="w-4 h-4 text-indigo-500" />,
      color: "bg-indigo-500"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Vue d'ensemble</h1>
          <p className="mt-1 text-sm text-slate-500">Suivez votre progression académique et votre utilisation de l'IA.</p>
        </div>
        <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm">
          Générer un rapport
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              </div>
            </div>
            <p className="text-xs font-medium text-slate-500 mt-3 leading-tight">{stat.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Section - Recent Documents */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-slate-400" /> Documents recommandés
              </h2>
              <a href="/dashboard/library" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                Parcourir la bibliothèque
              </a>
            </div>
            <div className="p-5 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="group border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-full h-32 bg-slate-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
                      <BookOpen className="w-8 h-8 text-slate-400 group-hover:scale-110 group-hover:text-blue-500 transition-all" />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mb-2 inline-block">Droit</span>
                        <h3 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">Droit des Sociétés</h3>
                        <p className="text-xs text-slate-500 mt-1">L3 • Pr. Kasongo</p>
                      </div>
                      <button className="text-slate-400 hover:text-amber-500 transition-colors">
                        <Star className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Section - Activity Timeline */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-400" /> Activité récente
              </h2>
            </div>
            
            <div className="relative pl-6 space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-slate-100">
              {activities.map((activity, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[30px] w-6 h-6 rounded-full flex items-center justify-center bg-white border-2 border-white ring-1 ring-slate-200 shadow-sm z-10`}>
                    {activity.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-slate-900">{activity.title}</h4>
                    <span className="text-xs font-medium text-slate-500 mt-0.5">{activity.type}</span>
                    <span className="text-[11px] text-slate-400 mt-1">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-100 text-center">
              <button className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                Voir tout l'historique
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
