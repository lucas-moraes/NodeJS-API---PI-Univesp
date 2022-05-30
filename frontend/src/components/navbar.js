/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

export default function Navbar(props) {
  const [value, setValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="hidden md:flex items-center justify-start md:flex-1 lg:w-0">
            <div className="flex">
              <div className="relative">
                <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
                  <input
                    placeholder="Digite seu endereço e município"
                    width={100}
                    name="select"
                    id="select"
                    className="px-4 appearance-none outline-none text-gray-800 w-full"
                    value={value}
                    onChange={(e) => {
                      props.searchOnChange(e.target.value);
                      setValue(e.target.value);
                      setIsOpen(true);
                    }}
                  />

                  <button
                    className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
                    onClick={() => {
                      props.clearAddress("");
                      setValue("");
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
                  <label className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </label>
                </div>

                <input
                  type="checkbox"
                  name="show_more"
                  id="show_more"
                  className="hidden peer"
                  checked={isOpen}
                  onChange={() => {}}
                />
                <div className="absolute rounded shadow bg-white z-40 overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
                  {props.responseSearch &&
                    props.responseSearch.map((item, index) => (
                      <div key={index} className="cursor-pointer group">
                        <div
                          className="block p-2 border-transparent font-light text-sm border-l-4 group-hover:border-lime-600 group-hover:bg-gray-100"
                          value={item.center}
                          onClick={() => {
                            setValue(item.text);
                            setIsOpen(false);
                            props.selectedLocal({
                              lat: item.center[1],
                              lng: item.center[0],
                              zoom: 15,
                            });
                          }}
                        >
                          {item.place_name}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={icon} alt="" />
            </a>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/profile"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Acesso perfil
            </Link>
            <Link
              to="/signup"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lime-600 hover:bg-lime-700"
            >
              Cadastrar
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={icon} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lime-600 hover:bg-lime-700"
                >
                  Acesso ONG
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Quer cadastrar sua ONG?{" "}
                  <a href="#" className="text-lime-600 hover:text-lime-500">
                    Clique aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
