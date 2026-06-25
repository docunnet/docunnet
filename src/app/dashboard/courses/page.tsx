import React from "react";
import { BookOpen } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center min-h-[50vh] flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
        <BookOpen className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Mes Cours</h1>
      <p className="text-slate-600 max-w-md">Retrouvez ici tous les cours de votre filière. La bibliothèque complète est en cours d'indexation.</p>
    </div>
  );
}
