import React from "react";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div>
              <img className="mx-auto h-12 w-auto" src={icon} alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Cadastro
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      className="mt-1 focus:ring-lime-500 focus:border-lime-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Endereço
                    </label>
                    <input
                      type="text"
                      name="endereco"
                      id="endereco"
                      className="mt-1 focus:ring-lime-500 focus:border-lime-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="flex col-span-6 justify-between sm:col-span-4">
                    <button
                      type="submit"
                      className="relative flex justify-center py-2 px-4 w-50 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    >
                      Registrar
                    </button>
                    <Link
                      to="/"
                      className="whitespace-nowrap my-3 text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Voltar
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
