/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
    {
        name: "Analytics",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "#",
        icon: ChartBarIcon,
    },
    {
        name: "Engagement",
        description: "Speak directly to your customers in a more meaningful way.",
        href: "#",
        icon: CursorClickIcon,
    },
    {
        name: "Security",
        description: "Your customers' data will be safe and secure.",
        href: "#",
        icon: ShieldCheckIcon,
    },
    {
        name: "Integrations",
        description: "Connect with third-party tools that you're already using.",
        href: "#",
        icon: ViewGridIcon,
    },
    {
        name: "Automations",
        description:
            "Build strategic funnels that will drive your customers to convert",
        href: "#",
        icon: RefreshIcon,
    },
];
const callsToAction = [
    { name: "Watch Demo", href: "#", icon: PlayIcon },
    { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
    {
        name: "Help Center",
        description:
            "Get all of your questions answered in our forums or contact support.",
        href: "#",
        icon: SupportIcon,
    },
    {
        name: "Guides",
        description:
            "Learn how to maximize our platform to get the most out of it.",
        href: "#",
        icon: BookmarkAltIcon,
    },
    {
        name: "Events",
        description:
            "See what meet-ups and other events we might be planning near you.",
        href: "#",
        icon: CalendarIcon,
    },
    {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
        icon: ShieldCheckIcon,
    },
];
const recentPosts = [
    { id: 1, name: "Boost your conversion rate", href: "#" },
    {
        id: 2,
        name: "How to use search engine optimization to drive traffic to your site",
        href: "#",
    },
    { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames ( ...classes ) {
    return classes.filter( Boolean ).join( " " );
}

export default function Navbar () {
    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a
                            href="#"
                            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Acesso de ONG's
                        </a>
                        <a
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Cadastro de ONG
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
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Acesso ONG
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Quer cadastrar sua ONG?{ " " }
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
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
