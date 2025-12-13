import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/layout.jsx";
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function validate() {
    let newErrors = {};
    if (!form.fullname.trim()) {
      newErrors.fullname = "Le nom complet est obligatoire.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email est obligatoire.";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Email invalide.";
    }
    if (!form.password.trim()) {
      newErrors.password = "Le mot de passe est obligatoire.";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 caractères.";
    }
    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }
    return newErrors;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    navigate("/");
  }
  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">Créer un compte</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <input name="fullname" type="text" placeholder="Nom complet" className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:text-white"onChange={handleChange}/>
            {errors.fullname && (
<p className="text-red-600 text-sm">{errors.fullname}</p>
            )}
          </div>
          <div>
            <input name="email" type="email" placeholder="Email" className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:text-white"onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:text-white"
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirmer le mot de passe"
              className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:text-white"
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <button className="w-full bg-customBlue text-white p-3 rounded-lg font-medium hover:bg-customGrey transition">S’inscrire</button>
        </form>

        <p className="text-center mt-4 dark:text-gray-300">Déjà un compte ?<a href="/login" className="text-customGrey hover:underline">Se connecter</a>
        </p>
      </div>
    </div>
    </Layout>
  );
}
