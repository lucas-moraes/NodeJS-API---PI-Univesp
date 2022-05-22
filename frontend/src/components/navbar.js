/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    MenuIcon,
    XIcon,
    SearchIcon
} from "@heroicons/react/outline";

import icon from '../assets/icon.png';

export default function Navbar () {
    return (
        <Popover className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                    <div className="flex-1 w-12 justify-center">
                        <div className="flex">
                            <input
                                type="text"
                                name="first-name"
                                placeholder="Digite o endereço"
                                id="first-name"
                                autoComplete="given-name"
                                className="focus:ring-lime-500 focus:border-lime-500 block w-60 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />

                            <button
                                type="submit"
                                className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lime-600 hover:bg-lime-700"
                            >
                                <SearchIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                    </div>

                    <div className="flex justify-center lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src={ icon }
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a
                            href="#"
                            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Acesso perfil
                        </a>
                        <a
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lime-600 hover:bg-lime-700"
                        >
                            Cadastrar
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={ Fragment }
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src={ icon }
                                        alt="Workflow"
                                    />
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
                                    Quer cadastrar sua ONG?{ " " }
                                    <a href="#" className="text-lime-600 hover:text-lime-500">
                                        Clique aqui
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover >
    );
}
