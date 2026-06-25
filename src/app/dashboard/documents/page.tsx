import React from "react";
import { FileText } from "lucide-react";

export default function DocumentsPage() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center min-h-[50vh] flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
        <FileText className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Documents et Mémoires</h1>
      <p className="text-slate-600 max-w-md">Consultez des travaux de recherche, thèses et rapports de stage pour vous inspirer.</p>
    </div>
  );
}
