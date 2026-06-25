import React from "react";
import { BookOpen, FileText, GraduationCap, ArrowRight, Clock, Award } from "lucide-react";
import Link from "next/link";

export default function DashboardOverview() {
  const stats = [
    { name: "Cours suivis", value: "12", icon: <BookOpen className="w-6 h-6 text-blue-500" /> },
    { name: "Documents consultés", value: "48", icon: <FileText className="w-6 h-6 text-purple-500" /> },
    { name: "Examens réussis", value: "5", icon: <GraduationCap className="w-6 h-6 text-green-500" /> },
    { name: "Points d'excellence", value: "1250", icon: <Award className="w-6 h-6 text-yellow-500" /> },
  ];

  const recentActivities = [
    { title: "Introduction à l'Analyse Mathématique", type: "Cours", time: "Il y a 2 heures" },
    { title: "Sujet d'examen : Droit Constitutionnel 2023", type: "Document", time: "Hier à 14h30" },
    { title: "Méthodologie de rédaction du TFC", type: "Guide", time: "Il y a 3 jours" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Bonjour, Jean 👋</h1>
        <p className="mt-2 text-slate-600">Bienvenue sur votre tableau de bord académique. Voici un résumé de votre activité.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="p-3 bg-slate-50 rounded-xl">
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-500 mt-1">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900">Reprendre l'étude</h2>
              <Link href="/dashboard/courses" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                Voir tout <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <div className="w-24 h-24 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-10 h-10 text-blue-600" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="text-xs font-bold tracking-uppercase text-blue-600 mb-1 uppercase">Licence 2 • Droit</div>
                  <h3 className="text-lg font-bold text-slate-900">Droit Administratif Général</h3>
                  <div className="mt-3 flex items-center gap-2 justify-center sm:justify-start">
                    <div className="w-full bg-slate-200 rounded-full h-2 max-w-[200px]">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <span className="text-sm font-medium text-slate-600">45%</span>
                  </div>
                </div>
                <Link 
                  href="/dashboard/courses" 
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Continuer
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Activité récente</h2>
            <div className="space-y-6">
              {recentActivities.map((activity, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full ring-4 ring-blue-50"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{activity.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{activity.type}</span>
                      <span className="flex items-center text-xs text-slate-500"><Clock className="w-3 h-3 mr-1" /> {activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
