import React from "react";
import { 
  Users, 
  Files, 
  Download, 
  Eye, 
  BrainCircuit, 
  HelpCircle,
  TrendingUp,
  UserPlus
} from "lucide-react";

export default function AdminDashboardOverview() {
  const metrics = [
    { name: "Utilisateurs Totaux", value: "1,248", change: "+12%", icon: <Users className="w-5 h-5 text-blue-500" /> },
    { name: "Utilisateurs Premium", value: "142", change: "+5%", icon: <StarIcon className="w-5 h-5 text-amber-500" /> },
    { name: "Documents Publiés", value: "356", change: "+8", icon: <Files className="w-5 h-5 text-emerald-500" /> },
    { name: "Nouveaux Inscrits (7j)", value: "48", change: "+2", icon: <UserPlus className="w-5 h-5 text-purple-500" /> },
  ];

  const todayStats = [
    { name: "Téléchargements", value: "342", icon: <Download className="w-4 h-4 text-emerald-400" /> },
    { name: "Consultations", value: "1,890", icon: <Eye className="w-4 h-4 text-blue-400" /> },
    { name: "Résumés IA", value: "85", icon: <BrainCircuit className="w-4 h-4 text-purple-400" /> },
    { name: "Quiz IA réalisés", value: "124", icon: <HelpCircle className="w-4 h-4 text-indigo-400" /> },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Vue d'ensemble</h1>
          <p className="mt-1 text-sm text-slate-400">Statistiques globales de la plateforme DOCUNET.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
          Exporter le rapport
        </button>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                {metric.icon}
              </div>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" /> {metric.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-sm text-slate-400">{metric.name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Area (Placeholder) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-sm p-6 h-96 flex flex-col">
            <h2 className="text-lg font-bold text-white mb-6">Évolution des utilisateurs</h2>
            <div className="flex-1 border border-slate-800 border-dashed rounded-xl flex items-center justify-center text-slate-600 bg-slate-900/50">
              <BarChart3Icon className="w-8 h-8 mr-2" /> Graphique d'évolution (Intégration Chart.js/Recharts prévue)
            </div>
          </div>
        </div>

        {/* Today's Activity */}
        <div className="space-y-6">
          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-sm p-6">
            <h2 className="text-lg font-bold text-white mb-6">Activité Aujourd'hui</h2>
            <div className="space-y-4">
              {todayStats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      {stat.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-300">{stat.name}</span>
                  </div>
                  <span className="text-lg font-bold text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline icons for missing ones in the import
function StarIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
}

function BarChart3Icon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;
}
