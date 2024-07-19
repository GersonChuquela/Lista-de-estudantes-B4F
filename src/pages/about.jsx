import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const About = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full sm:max-w-md">
              <h1 className="text-2xl font-bold mb-4">Contacte-nos</h1>
              <form className="space-y-4">

                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome:</label>
                  <input
                    id="name"
                    type="text"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
                  <input
                    id="email"
                    type="email"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    placeholder="Seu email"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem:</label>
                  <textarea
                    id="message"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 h-32 resize-none"
                    placeholder="Sua mensagem"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
                  Enviar Mensagem
                  </button>
                  
              </form>
            </div>
        </main>
    
      <Footer />
    </>
  );
};


