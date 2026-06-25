"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  FileText, 
  Search, 
  GraduationCap, 
  CheckCircle2, 
  X,
  Menu,
  ChevronRight,
  BookMarked,
  BrainCircuit,
  Download
} from "lucide-react";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Waitlist form state
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [waitlistError, setWaitlistError] = useState("");

  const handlePremiumClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistError("");
    setWaitlistSuccess(false);

    if (!waitlistName.trim()) {
      setWaitlistError("Le nom est obligatoire.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!waitlistEmail.trim() || !emailRegex.test(waitlistEmail)) {
      setWaitlistError("Une adresse e-mail valide est obligatoire.");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setWaitlistSuccess(true);
      setWaitlistName("");
      setWaitlistEmail("");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-blue-900">DOCUNET</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Fonctionnalités</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Tarifs</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a 
                href="#waitlist" 
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
              >
                Commencer
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none"
                aria-label="Menu principal"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md">Fonctionnalités</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md">Tarifs</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md">FAQ</a>
              <a href="#waitlist" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 mt-4 text-center text-base font-medium bg-blue-600 text-white rounded-md">Commencer</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50 -z-10" />
        <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-blue-100/40 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            La nouvelle norme académique
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Ta bibliothèque académique <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              en un clic.
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 mx-auto mb-10">
            Accédez à des ressources académiques fiables, organisées et adaptées aux étudiants congolais. Étudiez plus intelligemment, pas plus durement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#pricing"
              className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Commencer gratuitement
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#features"
              className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
            >
              Explorer les ressources
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tout ce dont vous avez besoin pour exceller</h2>
            <p className="text-lg text-slate-600">Une suite complète d'outils et de documents conçue spécifiquement pour le parcours universitaire congolais.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Cours et résumés", icon: <BookOpen className="w-6 h-6 text-blue-600" />, desc: "Des cours structurés et des synthèses claires pour chaque filière." },
              { title: "Fiches de révision", icon: <FileText className="w-6 h-6 text-blue-600" />, desc: "L'essentiel à retenir pour vos interrogations et examens." },
              { title: "Sujets d'examens", icon: <GraduationCap className="w-6 h-6 text-blue-600" />, desc: "Anciennes épreuves et corrigés pour vous entraîner efficacement." },
              { title: "Mémoires académiques", icon: <BookMarked className="w-6 h-6 text-blue-600" />, desc: "Accès à des travaux de recherche validés pour vous inspirer." },
              { title: "Guides méthodologiques", icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />, desc: "Apprenez à rédiger vos TFC, mémoires et rapports de stage." },
              { title: "Recherche documentaire", icon: <Search className="w-6 h-6 text-blue-600" />, desc: "Un moteur de recherche puissant pour trouver exactement ce qu'il vous faut." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-200 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Des tarifs adaptés aux étudiants</h2>
            <p className="text-lg text-slate-600">Commencez gratuitement dès aujourd'hui. Passez à la vitesse supérieure quand vous serez prêt.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
            {/* Free Tier */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Gratuit</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-extrabold text-slate-900">0 FCFA</span>
                <span className="text-slate-500 font-medium">/ à vie</span>
              </div>
              <p className="text-slate-600 mb-8">L'essentiel pour démarrer vos études sur de bonnes bases.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Accès aux documents publics",
                  "Consultation de cours",
                  "Fiches de révision",
                  "Recherche de documents"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#waitlist"
                className="block w-full py-4 px-6 bg-blue-50 text-blue-700 font-semibold text-center rounded-xl hover:bg-blue-100 transition-colors"
              >
                Accéder gratuitement
              </a>
            </div>

            {/* Premium Tier */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800 relative overflow-hidden text-white transform md:-translate-y-4">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"></div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-white">Premium</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Bientôt disponible
                </span>
              </div>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-extrabold text-white">1000 FCFA</span>
                <span className="text-slate-400 font-medium">/ mois</span>
              </div>
              <p className="text-slate-400 mb-8">La puissance de l'IA et un accès sans limite pour l'excellence.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  { text: "Accès illimité", icon: <BookOpen className="w-5 h-5 text-blue-400" /> },
                  { text: "Assistance académique IA", icon: <BrainCircuit className="w-5 h-5 text-blue-400" /> },
                  { text: "Mémoires exclusifs", icon: <BookMarked className="w-5 h-5 text-blue-400" /> },
                  { text: "Packs d'examens", icon: <FileText className="w-5 h-5 text-blue-400" /> },
                  { text: "Téléchargements illimités", icon: <Download className="w-5 h-5 text-blue-400" /> }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-slate-200">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={handlePremiumClick}
                disabled
                aria-disabled="true"
                className="block w-full py-4 px-6 bg-slate-800 text-slate-400 font-semibold text-center rounded-xl border border-slate-700 cursor-not-allowed opacity-80"
              >
                Bientôt disponible
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Rejoignez la liste d'attente</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg relative z-10">
              Inscrivez-vous pour être parmi les premiers à découvrir DOCUNET Premium et profiter d'offres exclusives au lancement.
            </p>
            
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto relative z-10">
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Votre nom complet" 
                    value={waitlistName}
                    onChange={(e) => setWaitlistName(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 bg-white border-2 border-transparent focus:border-blue-300 focus:outline-none transition-colors"
                    aria-label="Nom complet"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Votre adresse e-mail" 
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 bg-white border-2 border-transparent focus:border-blue-300 focus:outline-none transition-colors"
                    aria-label="Adresse e-mail"
                  />
                </div>
                
                {waitlistError && (
                  <p className="text-red-200 text-sm font-medium text-left bg-red-900/30 px-3 py-2 rounded-lg">{waitlistError}</p>
                )}
                
                {waitlistSuccess && (
                  <p className="text-green-200 text-sm font-medium text-left bg-green-900/30 px-3 py-2 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Merci, vous serez informé dès l'ouverture du Premium.
                  </p>
                )}
                
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-4 px-6 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                >
                  S'inscrire à la liste d'attente
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions fréquentes</h2>
            <p className="text-slate-600">Tout ce que vous devez savoir sur DOCUNET.</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Qu'est-ce que DOCUNET ?",
                a: "DOCUNET est une bibliothèque numérique conçue pour les étudiants congolais, regroupant des cours, des examens passés, des mémoires et bien plus encore, pour faciliter votre parcours académique."
              },
              {
                q: "Le service est-il vraiment gratuit ?",
                a: "Oui, l'accès de base incluant la consultation de nombreux documents publics est 100% gratuit. Un forfait Premium sera bientôt lancé avec des fonctionnalités avancées (IA, téléchargements illimités)."
              },
              {
                q: "Quand le forfait Premium sera-t-il disponible ?",
                a: "Nous y travaillons activement ! Inscrivez-vous à notre liste d'attente pour être informé en priorité dès son lancement."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="font-bold text-xl text-slate-900">DOCUNET</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-blue-600 transition-colors">Fonctionnalités</a>
              <a href="#pricing" className="hover:text-blue-600 transition-colors">Tarifs</a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} DOCUNET. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900 transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Premium Waitlist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-2 rounded-full transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Premium en préparation</h3>
            <p className="text-slate-600 mb-8">
              Le service Premium est actuellement en préparation. Laissez votre adresse e-mail pour être averti du lancement et bénéficier d'avantages exclusifs.
            </p>
            
            <button 
              onClick={() => {
                setIsModalOpen(false);
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Aller au formulaire d'inscription
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
