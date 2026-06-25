import React from "react";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center min-h-[50vh] flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-6">
        <Settings className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Paramètres du Compte</h1>
      <p className="text-slate-600 max-w-md">Gérez vos informations personnelles, votre abonnement et vos préférences de notification.</p>
    </div>
  );
}
