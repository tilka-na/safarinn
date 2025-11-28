import React from "react";
import { ArrowLeft, Plus } from "lucide-react";

export default function Apropos() {
  return (
    <div className="bg-white text-safari-dark font-sans">

      {/* RETOUR */}
      <div className="p-6">
        <a
          href="/lister"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-safari-slate transition"
        >
          <ArrowLeft className="w-4 h-4" /> Retour
        </a>
      </div>

      {/* TITRE */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-center">
        <h1 className="font-serif text-5xl font-bold mb-6">Notre Processus</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comment Safarinn transforme l'hospitalité à Meknès, étape par étape.
          Une approche transparente inspirée par l'excellence.
        </p>
      </section>

      {/* PROCESSUS */}
      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-6">

        {/* Étape 01 */}
        <div className="bg-safari-light border-2 border-safari-dark rounded-[30px] p-8 shadow-[0_5px_0_0_#191A23] hover:translate-y-1 hover:shadow-none transition-all duration-200 cursor-pointer group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="text-4xl font-serif font-bold text-safari-dark">01</span>
              <h3 className="text-xl md:text-2xl font-bold">Audit de votre propriété</h3>
            </div>
            <div className="bg-white border border-safari-dark w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-safari-dark group-hover:text-white transition">
              <Plus className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </div>
          </div>
          <div className="mt-4 pl-14 text-gray-600 hidden group-hover:block transition-all">
            Nous visitons votre Riad ou Appartement à Meknès pour évaluer son potentiel et prendre des photos professionnelles.
          </div>
        </div>

        {/* Étape 02 */}
        <div className="bg-safari-dark text-white border-2 border-safari-dark rounded-[30px] p-8 shadow-[0_5px_0_0_#546A7B] hover:translate-y-1 hover:shadow-none transition-all duration-200 cursor-pointer group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="text-4xl font-serif font-bold text-safari-gold">02</span>
              <h3 className="text-xl md:text-2xl font-bold">Mise en ligne stratégique</h3>
            </div>
            <div className="bg-gray-700 border border-gray-600 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-safari-dark transition">
              <Plus className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </div>
          </div>
          <div className="mt-4 pl-14 text-gray-300 hidden group-hover:block transition-all">
            Création d'une annonce multilingue et diffusion sur nos réseaux partenaires exclusifs.
          </div>
        </div>

        {/* Étape 03 */}
        <div className="bg-safari-light border-2 border-safari-dark rounded-[30px] p-8 shadow-[0_5px_0_0_#191A23] hover:translate-y-1 hover:shadow-none transition-all duration-200 cursor-pointer group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="text-4xl font-serif font-bold text-safari-dark">03</span>
              <h3 className="text-xl md:text-2xl font-bold">Accueil des voyageurs</h3>
            </div>
            <div className="bg-white border border-safari-dark w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-safari-dark group-hover:text-white transition">
              <Plus className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </div>
          </div>
          <div className="mt-4 pl-14 text-gray-600 hidden group-hover:block transition-all">
            Check-in, conciergerie et assistance 24/7 pour garantir des avis 5 étoiles.
          </div>
        </div>

      </section>

      {/* Bandeau image */}
      <div className="w-full h-64 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1590418606746-018840f9cd0f?auto=format&fit=crop&q=80&w=1200"
          className="w-full h-full object-cover opacity-80"
          alt="Meknes Pattern"
        />
        <div className="absolute inset-0 bg-safari-slate/40 flex items-center justify-center">
          <span className="text-white font-serif text-3xl font-bold">Safarinn. Quality Living.</span>
        </div>
      </div>
    </div>
  );
}
