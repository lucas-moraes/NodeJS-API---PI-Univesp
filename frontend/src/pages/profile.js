import React from "react";
import icon from "../assets/icon.png";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Auth } from "../services/api";
import { Link } from "react-router-dom";
import crypto from "crypto-js";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Leaflet from "leaflet";
import myPin from "../assets/pin_my_loc.png";

const pin_ong_location = new Leaflet.icon({
  iconUrl: myPin,
  iconSize: [25, 25],
});

export default function Login() {
  const [dados, setDados] = React.useState({
    nome: "",
    pass: "",
    lat: -23.5502001,
    lng: -46.6342571,
    zoom: 12,
  });
  const [granted, setGranted] = React.useState(false);

  function Encrypt(value) {
    let data = crypto.SHA256(value);
    data = data.toString(crypto.enc.Hex);
    setDados({ ...dados, pass: data });
  }

  async function Authenticate() {
    const hash = await Auth(dados.nome).then((response) => response.data);
    setDados({
      nome: hash.nome,
      ṕass: "",
      endereco: hash.endereco,
      cidade: hash.cidade,
      estado: hash.estado,
      lat: hash.latitude,
      lng: hash.longitude,
      zoom: 17,
    });
    if (hash.pwd === dados.pass) {
      setGranted(true);
    }
  }

  function MyMap() {
    const map = useMap();
    map.flyTo([dados.lat, dados.lng]);
    map.setZoom(dados.zoom);
  }

  return (
    <>
      <div className="bg-gradient-to-l from-teal-500 to-green-500 absolute h-full w-full flex items-center justify-center py-12">
        {granted ? (
          <div className="bg-gradient-to-l to-green-300 from-teal-300 rounded-lg shadow-lg border-dotted border-2 border-gray-300  p-4 max-w-2xl w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src={icon} alt="Workflow" />
              <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
                Perfil
              </h2>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <div
                  className="p-3 mt-2"
                  style={{ with: "30vw", height: "30vh" }}
                >
                  <MapContainer
                    center={[dados.lat, dados.lng]}
                    zoom={dados.zoom}
                    style={{ with: "100%", height: "100%" }}
                  >
                    <MyMap />
                    <TileLayer
                      url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                    />
                    <Marker
                      position={[dados.lat, dados.lng]}
                      icon={pin_ong_location}
                    >
                      <Popup>{dados.nome}</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
              <div className="p-4 rounded-md w-full space-y-px">
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
                      setDados({
                        ...dados,
                        nome: e.target.value.toLowerCase(),
                      });
                    }}
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    name="endereco"
                    className="mt-1 focus:ring-lime-500 focus:border-lime-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={dados.endereco}
                    onChange={(e) => {
                      setDados({
                        ...dados,
                        endereco: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cidade
                  </label>
                  <input
                    type="text"
                    name="cidade"
                    className="mt-1 focus:ring-lime-500 focus:border-lime-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={dados.cidade}
                    onChange={(e) => {
                      setDados({
                        ...dados,
                        cidade: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="estado"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Estado
                  </label>
                  <input
                    type="text"
                    name="cidade"
                    className="mt-1 focus:ring-lime-500 focus:border-lime-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={dados.cidade}
                    onChange={(e) => {
                      setDados({
                        ...dados,
                        estado: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex justify-end">
                  <Link
                    to="/"
                    onClick={() =>
                      setDados({
                        nome: "",
                        pass: "",
                        lat: -23.5502001,
                        lng: -46.6342571,
                        zoom: 12,
                      })
                    }
                    className="whitespace-nowrap my-3 text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sair
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src={icon} alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Acesse se já tiver cadastro
              </h2>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Nome
                </label>
                <input
                  id="email-address"
                  name="Nome"
                  type="text"
                  autoComplete="Nome"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                  placeholder="Nome"
                  onChange={(e) => {
                    setDados({ ...dados, nome: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => {
                    Encrypt(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
                onClick={() => Authenticate()}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-lime-500 group-hover:text-lime-400"
                    aria-hidden="true"
                  />
                </span>
                Autenticar
              </button>
            </div>
            <div className="flex justify-end">
              <Link
                to="/"
                className="whitespace-nowrap my-3 text-base font-medium text-gray-200 hover:text-gray-900"
              >
                Voltar
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
