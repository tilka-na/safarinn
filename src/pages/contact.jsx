import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Layout from "../layout/layout.jsx";
export default function Contact() {
  return (
    <Layout>
    <div className="bg-safari-light dark:bg-customBlue font-sans min-h-screen flex items-center justify-center p-4">
      <div className="bg-white max-w-5xl w-full rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-dark:bg-customGrey">

        {/* LEFT SIDE */}
        <div className="bg-safari-slate p-12 text-white md:w-5/12 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-safari-gold opacity-20 rounded-full blur-xl"></div>

          <h2 className="font-serif text-4xl mb-6 relative z-10">Contactez Safarinn</h2>
          <p className="text-blue-100 mb-10 relative z-10">
            Besoin d'aide pour votre réservation à Meknès ou envie de collaborer ?
          </p>

          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-safari-gold mt-1" />
              <div>
                <h4 className="font-bold">Bureau Principal</h4>
                <p className="text-sm opacity-80">
                  Av. des Forces Armées Royales,<br />
                  Immeuble Belle Vue, Hamria,<br />
                  50000 Meknès
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-safari-gold mt-1" />
              <div>
                <h4 className="font-bold">Téléphone</h4>
                <p className="text-sm opacity-80">+212 5 35 00 00 00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-safari-gold mt-1" />
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-sm opacity-80">contact@safarinn.ma</p>
              </div>
            </div>
          </div>

          <a href="/" className="absolute bottom-8 left-12 text-sm underline opacity-60 hover:opacity-100 transition">
            Retour à l'accueil
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-12 md:w-7/12 bg-white">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-safari-dark mb-2">Prénom</label>
                <input type="text" className="w-full bg-safari-light border-0 rounded-lg p-3 focus:ring-2 focus:ring-safari-slate transition" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-safari-dark mb-2">Nom</label>
                <input type="text" className="w-full bg-safari-light border-0 rounded-lg p-3 focus:ring-2 focus:ring-safari-slate transition" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-safari-dark mb-2">Email</label>
              <input type="email" className="w-full bg-safari-light border-0 rounded-lg p-3 focus:ring-2 focus:ring-safari-slate transition" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-safari-dark mb-2">Message</label>
              <textarea rows="4" className="w-full bg-safari-light border-0 rounded-lg p-3 focus:ring-2 focus:ring-safari-slate transition resize-none"></textarea>
            </div>

            <div className="flex justify-end">
              <button className="bg-safari-dark text-white px-8 py-3 rounded-lg font-bold hover:bg-safari-gold transition duration-300 shadow-lg hover:shadow-xl">
                Envoyer
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
    </Layout>
  );
}
