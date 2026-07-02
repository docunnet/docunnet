"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  Search, 
  Filter, 
  Download, 
  Star, 
  Eye, 
  ChevronRight,
  GraduationCap,
  Briefcase,
  MonitorPlay
} from "lucide-react";
import { motion } from "framer-motion";

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState<"lycee" | "universite" | "formations">("universite");
  const [activeFilter, setActiveFilter] = useState("Tous");

  const categories = [
    { id: "lycee", label: "Lycée", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "universite", label: "Université", icon: <BookOpen className="w-5 h-5" /> },
    { id: "formations", label: "Formations Pro", icon: <Briefcase className="w-5 h-5" /> }
  ];

  const uniFilters = [
    "Tous", "Droit", "Informatique", "Cybersécurité", "Gestion", "Comptabilité", 
    "Marketing", "Finance", "Communication", "Médecine", "Sciences", "Économie", "RH"
  ];

  const documents = [
    {
      id: 1,
      title: "Introduction au Droit Constitutionnel",
      desc: "Fondements de la constitution et organisation de l'État.",
      category: "Université",
      subject: "Droit",
      author: "Pr. Kalonji",
      date: "12 Oct 2023",
      downloads: 1250,
      views: 3400,
      image: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Architecture des Réseaux Informatiques",
      desc: "Modèle OSI, TCP/IP et protocoles de routage avancés.",
      category: "Université",
      subject: "Informatique",
      author: "Ing. Mutombo",
      date: "05 Nov 2023",
      downloads: 840,
      views: 2100,
      image: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      title: "Comptabilité Analytique",
      desc: "Calcul des coûts et analyse de la rentabilité.",
      category: "Université",
      subject: "Comptabilité",
      author: "Prof. Ilunga",
      date: "22 Sep 2023",
      downloads: 560,
      views: 1800,
      image: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 4,
      title: "Marketing Stratégique en RDC",
      desc: "Analyse du marché local et positionnement.",
      category: "Université",
      subject: "Marketing",
      author: "Dr. Banza",
      date: "18 Dec 2023",
      downloads: 420,
      views: 950,
      image: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Bibliothèque</h1>
          <p className="mt-1 text-sm text-slate-500">Explorez notre vaste collection de documents académiques.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-64">
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          </div>
          <button className="bg-white border border-slate-200 p-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Category Tabs */}
      <div className="flex flex-wrap gap-2 p-1 bg-slate-200/50 rounded-2xl w-fit">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 relative ${activeCategory === cat.id ? "text-blue-700" : "text-slate-600 hover:text-slate-900"}`}
          >
            {activeCategory === cat.id && (
              <motion.div 
                layoutId="activeCategory" 
                className="absolute inset-0 bg-white rounded-xl shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {cat.icon}
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* Sub-filters (Université example) */}
      {activeCategory === "universite" && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {uniFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeFilter === filter ? "bg-slate-800 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {/* Document Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {documents.map((doc) => (
          <motion.div 
            key={doc.id}
            whileHover={{ y: -4 }}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col group hover:shadow-xl hover:border-blue-200 transition-all"
          >
            {/* Thumbnail */}
            <div className={`h-40 w-full ${doc.image} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <BookOpen className="w-16 h-16 opacity-80" />
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="p-1.5 bg-white/80 backdrop-blur-sm rounded-lg text-slate-600 hover:text-amber-500 hover:bg-white transition-colors">
                  <Star className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 px-2.5 py-1 rounded-full text-slate-800">
                  {doc.subject}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-base font-bold text-slate-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                {doc.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-4 flex-1">
                {doc.desc}
              </p>
              
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-4">
                <span>{doc.author}</span>
                <span>{doc.date}</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5" /> {doc.downloads}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {doc.views}</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    Lire
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
