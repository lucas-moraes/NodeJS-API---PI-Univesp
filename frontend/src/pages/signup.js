import React from "react";
import icon from "../assets/icon.png";
import { ChangeSearchLocation, CreateOng } from "../services/api";
import { Link } from "react-router-dom";
import crypto from "crypto-js";

export default function SignUp() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState("hidden");
  const [respAddresses, setRespAddresses] = React.useState("");
  let todayDate = new Date().toISOString().slice(0, 10);
  const [dados, setDados] = React.useState({
    data_registro: todayDate, // "YYYY-MM-DD",
    nome: "", // "Nome",
    pwd: "", //"Pass",
    endereco: "", //"Rua Alguma coisa nº 777",
    complemento: "", //"something / Can be Null",
    cep: "", //"12345678",
    cidade: "", //"São Paulo",
    estado: "", //"SP",
    latitude: "", //10.123456,
    longitude: "", //-99.999999,
  });

  function SearchOnChange() {
    if (dados.endereco.length > 7) {
      ChangeSearchLocation(dados.endereco)
        .then((response) => response.data)
        .then((data) => {
          setRespAddresses(data?.features);
        });
      setIsOpen(true);
    }
  }

  function Reviewer() {
    let pass = crypto.SHA256(dados.pwd);
    dados.pwd = pass.toString(crypto.enc.Hex);

    CreateOng(dados)
      .then((response) => response.data)
      .then((data) => console.log(data));
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div>
              <img className="mx-auto h-12 w-auto" src={icon} alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Cadastro de ONG's
              </h2>
            </div>
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
                    className="mt-1 focus:ring-lime-500 focus:border-lime-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={dados.nome}
                    onChange={(e) => {
                      setDados({ ...dados, nome: e.target.value });
                    }}
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Endereço
                  </label>
                  <div className="relative">
                    <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                      <input
                        placeholder="Digite seu endereço e município"
                        width={100}
                        name="select"
                        className="px-4 appearance-none outline-none text-gray-800 w-full"
                        value={dados.endereco}
                        onChange={(e) => {
                          SearchOnChange(e.target.value);
                          setDados({ ...dados, endereco: e.target.value });
                        }}
                      />

                      <button
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
                        onClick={() => {
                          setDados({
                            ...dados,
                            endereco: "",
                            cep: "",
                            cidade: "",
                            estado: "",
                            latitude: "",
                            longitude: "",
                          });
                          setIsVisible("hidden");
                        }}
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>

                    <input
                      type="checkbox"
                      name="show_more"
                      id="show_more"
                      className="hidden peer"
                      checked={isOpen}
                      onChange={() => {}}
                    />
                    <div className="absolute border-transparent rounded shadow bg-white z-40 overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border-l border-r border-b border-gray-200">
                      {respAddresses &&
                        respAddresses.map((item, index) => (
                          <div key={index} className="cursor-pointer group">
                            <div
                              className="block p-2 border-transparent font-light text-sm border-l-4 group-hover:border-lime-600 group-hover:bg-gray-100"
                              value={item.center}
                              onClick={() => {
                                dados.endereco = item.text;
                                setIsOpen(false);
                                setDados({
                                  ...dados,
                                  endereco: item.text,
                                  cep: item.context[0].text,
                                  cidade: item.context[2].text,
                                  estado: item.context[3].text,
                                  latitude: item.center[1],
                                  longitude: item.center[0],
                                });
                                setIsVisible("block");
                              }}
                            >
                              {item.place_name}
                            </div>
                          </div>
                        ))}
                    </div>
                    <div
                      className={`${isVisible} mt-4 text-sm transition duration-700 ease-in-out`}
                    >
                      <div className="col-span-6 sm:col-span-4 underline">
                        <span className="font-bold">Endereço: </span>
                        <span>{dados["endereco"]}</span>
                      </div>
                      <div className="col-span-6 sm:col-span-4 underline">
                        <span className="font-bold">Cidade: </span>
                        <span>{dados["cidade"]}</span>
                      </div>
                      <div className="col-span-6 sm:col-span-4 underline">
                        <span className="font-bold">Estado: </span>
                        <span>{dados["estado"]}</span>
                      </div>
                      <div className="mt-4 col-span-6 sm:col-span-4">
                        <label
                          htmlFor="nome"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Senha
                        </label>
                        <input
                          type="password"
                          name="nome"
                          className="mt-1 focus:ring-lime-500 focus:border-lime-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={dados.pwd}
                          onChange={(e) => {
                            setDados({ ...dados, pwd: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex col-span-6 justify-between sm:col-span-4">
                  <button
                    className="relative h-10 flex justify-center py-2 px-4 w-50 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                    onClick={() => Reviewer()}
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
          </div>
        </div>
      </div>
    </>
  );
}
