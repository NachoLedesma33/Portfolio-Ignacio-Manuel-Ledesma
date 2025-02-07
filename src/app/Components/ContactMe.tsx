import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactMe: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Por favor llenar todos los campos.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Ingresa un mail valido.");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
    // Despues hago el codigo o busco una API para envio de mail
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-12 text-gray-300 flex flex-col justify-center items-center rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold text-red-500 mb-8">Contactarme via mail</h2>

      <motion.form
        className="w-full max-w-lg space-y-6"
        onSubmit={handleSubmit}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ingrese su nombre"
            className="mt-1 p-3 w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            Mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su mail"
            className="mt-1 p-3 w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="Mensaje"
            className="block text-sm font-medium text-gray-400"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            placeholder="Escriba su mensaje"
            className="mt-1 p-3 w-full bg-gray-800 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:border-gray-400"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {error && (
          <motion.div
            className="text-red-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.div>
        )}

        <motion.button
          type="submit"
          className="w-full p-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactMe;
