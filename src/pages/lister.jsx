import React, { useRef } from "react";
import {
  Star,
  Globe,
  CalendarCheck,
  TrendingUp,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Lister() {
  const formSectionRef = useRef(null);
  const successMessageRef = useRef(null);

  const handleScrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    successMessageRef.current?.classList.remove("hidden");
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="bg-safari-light text-safari-dark font-sans overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="bg-safari-slate text-white px-6 py-5 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="font-serif text-3xl font-bold tracking-wider">
            Safarinn<span className="text-safari-gold text-4xl">.</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="/lister" className="border-b-2 border-safari-gold pb-1">
            Devenir Hôte
          </a>
          <a href="/apropos" className="hover:text-safari-gold transition">
            Notre Approche
          </a>
          <a href="/contact" className="hover:text-safari-gold transition">
            Contact
          </a>
        </div>
      </nav>

      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            Valorisez votre <br />
            <span className="bg-safari-slate text-white px-2 rounded-lg transform -rotate-1 inline-block">
              Riad à Meknès
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
            De la place Lahdim aux collines de Volubilis, nous connectons votre
            propriété d'exception avec une clientèle internationale exigeante.
          </p>
          <button
            onClick={handleScrollToForm}
            className="bg-safari-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-safari-slate transition transform hover:scale-105 shadow-xl"
          >
            Lister mon établissement
          </button>
        </div>

        <div
          className="relative h-[500px] w-full animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="absolute inset-0 bg-safari-dark rounded-[40px] transform rotate-3 opacity-10"></div>
          <img
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800"
            className="absolute inset-0 w-full h-full object-cover rounded-[40px] shadow-2xl border-4 border-white"
            alt="Riad Meknes"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse">
            <div className="bg-safari-gold text-white p-2 rounded-full">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-safari-dark">Top Agence</p>
              <p className="text-xs text-gray-500">Meknès & Fès</p>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="bg-safari-gold text-white px-3 py-1 rounded text-xl font-serif">
            Pourquoi Safarinn ?
          </h2>
          <p className="text-gray-500">L'expertise locale, le standard international.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-safari-dark p-8 rounded-[30px] text-white shadow-card hover:-translate-y-2 transition duration-300 group cursor-default">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-medium bg-white/10 px-3 py-1 rounded-lg">Visibilité</h3>
              <Globe className="w-8 h-8 text-safari-gold group-hover:rotate-12 transition" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Vos annonces optimisées pour les voyageurs de luxe cherchant l'authenticité marocaine.
            </p>
          </div>

          <div className="bg-safari-slate p-8 rounded-[30px] text-white shadow-card hover:-translate-y-2 transition duration-300 group">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-medium bg-white/10 px-3 py-1 rounded-lg">Gestion</h3>
              <CalendarCheck className="w-8 h-8 text-safari-gold group-hover:scale-110 transition" />
            </div>
            <p className="text-gray-100 leading-relaxed">
              Un calendrier synchronisé et une gestion des réservations sans stress pour les propriétaires.
            </p>
          </div>

          <div className="bg-safari-dark p-8 rounded-[30px] text-white shadow-card hover:-translate-y-2 transition duration-300 group">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-medium bg-white/10 px-3 py-1 rounded-lg">Revenus</h3>
              <TrendingUp className="w-8 h-8 text-safari-gold group-hover:translate-x-1 transition" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Maximisez votre taux d'occupation grâce à nos algorithmes de tarification dynamique.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section ref={formSectionRef} className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-safari-light border-2 border-safari-dark rounded-[40px] p-10 md:p-14 relative shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-safari-slate rounded-bl-[100px] opacity-20"></div>

            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold mb-2">Commencez l'aventure</h2>
              <p className="text-gray-500">Remplissez ce formulaire, notre équipe à Hamria vous recontactera.</p>
            </div>

            <form
              id="listingForm"
              className="space-y-6 relative z-10"
              onSubmit={handleFormSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider pl-2">Nom du Riad / Hôtel</label>
                  <input
                    type="text"
                    placeholder="Ex: Riad Zitoune"
                    className="w-full bg-white border border-gray-300 rounded-full px-6 py-4 focus:outline-none focus:border-safari-slate focus:ring-2 focus:ring-safari-slate/20 transition shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider pl-2">Type de bien</label>
                  <select className="w-full bg-white border border-gray-300 rounded-full px-6 py-4 focus:outline-none focus:border-safari-slate appearance-none transition shadow-sm">
                    <option>Riad Traditionnel</option>
                    <option>Appartement Moderne</option>
                    <option>Villa avec Piscine</option>
                    <option>Maison d'Hôtes</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider pl-2">Adresse à Meknès</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ex: 12 Derb El-Cadi, Médina"
                    className="w-full bg-white border border-gray-300 rounded-full px-6 py-4 focus:outline-none focus:border-safari-slate transition shadow-sm"
                  />
                  <MapPin className="absolute right-6 top-4 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-safari-dark text-white font-bold text-lg py-5 rounded-full hover:bg-safari-slate transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3"
              >
                <span>Envoyer ma candidature</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* SUCCESS MESSAGE */}
            <div
              ref={successMessageRef}
              className="hidden absolute inset-0 bg-safari-slate/95 rounded-[40px] z-20 flex flex-col items-center justify-center text-white text-center p-8 animate-fade-in-up"
            >
              <CheckCircle className="w-20 h-20 text-safari-gold mb-4" />
              <h3 className="text-3xl font-serif mb-2">Marhba !</h3>
              <p className="text-lg opacity-90">
                Votre dossier est entre de bonnes mains.
                <br />
                Nous vous appellerons sous 24h.
              </p>
              <button
                onClick={handleReload}
                className="mt-8 bg-white text-safari-dark px-6 py-2 rounded-full font-bold text-sm hover:bg-safari-gold hover:text-white transition"
              >
                Retour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-safari-dark text-white py-8 text-center border-t border-gray-800">
        <p className="font-serif italic text-safari-gold mb-2">Safarinn Meknès</p>
        <p className="text-xs text-gray-400">Conçu avec passion au cœur du Maroc. © 2025</p>
      </footer>
    </div>
  );
}

