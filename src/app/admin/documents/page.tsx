"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Edit,
  Trash2,
  Archive,
  EyeOff,
  UploadCloud,
  FileText
} from "lucide-react";

export default function AdminDocumentsPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  // Fake documents data
  const documents = [
    { id: 1, title: "Droit des Sociétés", author: "Pr. Kalonji", category: "Université", subject: "Droit", status: "Publié", type: "Gratuit", views: 1200 },
    { id: 2, title: "Mathématiques Financières", author: "Dr. Banza", category: "Université", subject: "Finance", status: "Brouillon", type: "Premium", views: 0 },
    { id: 3, title: "Physique Quantique", author: "Pr. Mutombo", category: "Lycée", subject: "Sciences", status: "Publié", type: "Premium", views: 450 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Gestion des Documents (CMS)</h1>
          <p className="mt-1 text-sm text-slate-400">Gérez, publiez et organisez le contenu de la bibliothèque.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" /> Ajouter un document
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="Rechercher par titre, auteur..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-500 text-sm"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
        </div>
        <div className="flex gap-2">
          <select className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
            <option>Toutes Catégories</option>
            <option>Lycée</option>
            <option>Université</option>
            <option>Formations</option>
          </select>
          <button className="bg-slate-900 border border-slate-700 p-2 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Documents Table */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-xs uppercase tracking-wider text-slate-400">
                <th className="p-4 font-medium">Titre</th>
                <th className="p-4 font-medium">Catégorie</th>
                <th className="p-4 font-medium">Matière</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Statut</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{doc.title}</div>
                        <div className="text-xs text-slate-500">{doc.author}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-300">{doc.category}</td>
                  <td className="p-4 text-sm text-slate-300">{doc.subject}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${doc.type === 'Premium' ? 'bg-amber-500/10 text-amber-500' : 'bg-slate-800 text-slate-300'}`}>
                      {doc.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${doc.status === 'Publié' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-400'}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="p-4 text-right relative group">
                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                    {/* Fake Dropdown */}
                    <div className="hidden group-hover:block absolute right-4 top-10 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-10 w-36 overflow-hidden">
                      <button className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2"><Edit className="w-3 h-3"/> Modifier</button>
                      <button className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2"><EyeOff className="w-3 h-3"/> Dépublier</button>
                      <button className="w-full text-left px-4 py-2 text-xs text-amber-400 hover:bg-slate-700 flex items-center gap-2"><Archive className="w-3 h-3"/> Archiver</button>
                      <button className="w-full text-left px-4 py-2 text-xs text-red-400 hover:bg-slate-700 flex items-center gap-2"><Trash2 className="w-3 h-3"/> Supprimer</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Document Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-center z-10">
              <h2 className="text-xl font-bold text-white">Ajouter un document</h2>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">
                <Trash2 className="w-5 h-5 hidden" /> {/* Just to keep the icon import */}
                Fermer
              </button>
            </div>
            
            <form className="p-6 space-y-6">
              {/* File Upload Zone */}
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-950 hover:bg-slate-900/80 transition-colors cursor-pointer">
                <UploadCloud className="w-10 h-10 text-slate-500 mb-4" />
                <p className="text-sm font-medium text-white">Cliquez ou glissez un fichier PDF ici</p>
                <p className="text-xs text-slate-500 mt-1">Maximum 50 Mo</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Titre du document *</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Auteur *</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:outline-none" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Catégorie *</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:outline-none">
                    <option>Université</option>
                    <option>Lycée</option>
                    <option>Formations</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Matière *</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Description</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:border-blue-500 focus:outline-none"></textarea>
              </div>

              <div className="flex items-center gap-6 p-4 bg-slate-950 border border-slate-800 rounded-xl">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="access" defaultChecked className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-700" />
                  <span className="text-sm text-slate-300">Accès Gratuit</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="access" className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-700" />
                  <span className="text-sm text-slate-300">Accès Premium (✨)</span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  Annuler
                </button>
                <button type="button" className="px-5 py-2.5 text-sm font-medium bg-slate-800 text-white rounded-lg hover:bg-slate-700 border border-slate-700 transition-colors">
                  Sauvegarder Brouillon
                </button>
                <button type="button" onClick={() => setShowAddModal(false)} className="px-5 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                  Publier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
