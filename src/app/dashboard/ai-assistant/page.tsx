"use client";

import React, { useState } from "react";
import { BrainCircuit, FileText, HelpCircle, Lock, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AIAssistantPage() {
  const [activeTab, setActiveTab] = useState<"summary" | "quiz">("summary");
  const [isPremium] = useState(false); // Factice for now

  // Factice usage state
  const usage = {
    summary: { used: 1, limit: 1 },
    quiz: { used: 2, limit: 3 }
  };

  const isSummaryLimitReached = usage.summary.used >= usage.summary.limit && !isPremium;
  const isQuizLimitReached = usage.quiz.used >= usage.quiz.limit && !isPremium;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BrainCircuit className="w-8 h-8 text-blue-600" />
          Assistant Académique IA
        </h1>
        <p className="mt-2 text-slate-600">Générez des résumés intelligents ou testez vos connaissances avec des quiz générés par l'IA.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Interface */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[600px]">
            
            {/* Tabs */}
            <div className="flex border-b border-slate-100 p-2 gap-2 bg-slate-50/50">
              <button 
                onClick={() => setActiveTab("summary")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${activeTab === "summary" ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"}`}
              >
                <FileText className="w-4 h-4" /> Résumé IA
              </button>
              <button 
                onClick={() => setActiveTab("quiz")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all ${activeTab === "quiz" ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200" : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"}`}
              >
                <HelpCircle className="w-4 h-4" /> Quiz IA
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 flex flex-col relative">
              
              {/* Feature Content */}
              <div className={`flex-1 flex flex-col transition-opacity ${ (activeTab === "summary" && isSummaryLimitReached) || (activeTab === "quiz" && isQuizLimitReached) ? "opacity-30 pointer-events-none blur-sm" : "" }`}>
                
                {activeTab === "summary" ? (
                  <div className="flex flex-col h-full">
                    <h2 className="text-lg font-bold text-slate-900 mb-4">Générer un Résumé</h2>
                    <p className="text-sm text-slate-500 mb-6">Sélectionnez un document dans votre bibliothèque, et l'IA (Gemini) lira le document pour en extraire un résumé clair et les points importants.</p>
                    
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center flex-1 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <FileText className="w-12 h-12 text-slate-300 mb-4" />
                      <h3 className="text-sm font-bold text-slate-700">Choisir un document</h3>
                      <p className="text-xs text-slate-500 mt-1 max-w-xs">Formats supportés : PDF, Word, TXT (Max 10 Mo)</p>
                      <button className="mt-4 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-blue-300 transition-colors shadow-sm">
                        Parcourir la bibliothèque
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <h2 className="text-lg font-bold text-slate-900 mb-4">Générer un Quiz</h2>
                    <p className="text-sm text-slate-500 mb-6">L'IA va générer un quiz de 10 questions basé sur le document choisi, avec un timer, un score final et une correction détaillée.</p>
                    
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center flex-1 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <HelpCircle className="w-12 h-12 text-slate-300 mb-4" />
                      <h3 className="text-sm font-bold text-slate-700">Choisir une matière ou un document</h3>
                      <button className="mt-4 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:border-blue-300 transition-colors shadow-sm">
                        Sélectionner la source
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
                    <BrainCircuit className="w-5 h-5" />
                    Lancer l'Analyse IA
                  </button>
                </div>
              </div>

              {/* Limit Overlay */}
              {((activeTab === "summary" && isSummaryLimitReached) || (activeTab === "quiz" && isQuizLimitReached)) && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-slate-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Limite atteinte</h3>
                    <p className="text-sm text-slate-600 mb-6">
                      Vous avez utilisé tous vos {activeTab === "summary" ? "résumés" : "quiz"} gratuits pour cette semaine.
                    </p>
                    <button className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl hover:bg-slate-800 transition-colors">
                      Passer Premium
                    </button>
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>

        {/* Sidebar - Limits & Premium */}
        <div className="space-y-6">
          
          {/* Limits Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Votre quota gratuit</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" /> Résumé IA
                  </span>
                  <span className="font-bold text-slate-900">{usage.summary.used} / {usage.summary.limit}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(usage.summary.used / usage.summary.limit) * 100}%` }}
                    className={`h-2 rounded-full ${isSummaryLimitReached ? "bg-red-500" : "bg-blue-600"}`} 
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-2 text-right">Renouvelé la semaine prochaine</p>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-700 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-400" /> Quiz IA
                  </span>
                  <span className="font-bold text-slate-900">{usage.quiz.used} / {usage.quiz.limit}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(usage.quiz.used / usage.quiz.limit) * 100}%` }}
                    className={`h-2 rounded-full ${isQuizLimitReached ? "bg-amber-500" : "bg-blue-600"}`} 
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-2 text-right">Renouvelé la semaine prochaine</p>
              </div>
            </div>
          </div>

          {/* Premium Upsell Card */}
          {!isPremium && (
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-6 text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Premium</h3>
              </div>
              
              <p className="text-sm text-slate-300 mb-6 relative z-10">
                Débloquez toute la puissance de l'IA pour booster vos révisions.
              </p>
              
              <ul className="space-y-3 mb-6 relative z-10">
                {[
                  "Résumé IA illimité",
                  "Quiz IA illimité",
                  "Téléchargements illimités",
                  "Assistant académique 24/7"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-white text-slate-900 font-bold py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors relative z-10">
                Passer Premium
              </button>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
