import React from "react";
import { GraduationCap } from "lucide-react";

export default function ExamsPage() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center min-h-[50vh] flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
        <GraduationCap className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Sujets d'Examens</h1>
      <p className="text-slate-600 max-w-md">Entraînez-vous avec les anciennes épreuves des universités congolaises.</p>
    </div>
  );
}
