import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "../layout/layout.jsx";
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function validate() {
    let newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = "Email obligatoire.";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Email invalide.";
    }
    if (!form.password.trim()) {
      newErrors.password = "Mot de passe obligatoire.";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 caractères.";
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
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Se connecter
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <input name="email" type="email" placeholder="Email" className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:text-white" onChange={handleChange}/>
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input name="password" type="password" placeholder="Mot de passe" className="w-full border rounded-lg p-3 dark:bg-gray-700 dark:text-white" onChange={handleChange}/>
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
          </div>

          <button className="w-full bg-customBlue text-white p-3 rounded-lg font-medium hover:bg-customGrey transition">Se connecter</button>
        </form>
        <p className="text-center mt-4 dark:text-gray-300">Pas encore inscrit ?<a href="/register" className="text-customGrey hover:underline">Créer un compte</a>
        </p>
      </div>
    </div>
    </Layout>
  );
}

