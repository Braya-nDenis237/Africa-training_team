import { useEffect, useRef, useState } from "react";
import { usePage, Link } from "@inertiajs/react";
import activites from "@/data/activites";
export default function Navbar() {
    const { auth } = usePage().props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    // scroll lock pour le menu mobile
    useEffect(() => {
        if (mobileOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    //pour le menu mobile, fermer si clic en dehors
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                mobileOpen &&
                navRef.current &&
                !navRef.current.contains(event.target)
            ) {
                setMobileOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //activites

    const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);

    const [showDropdown, setShowDropdown] = useState(false);
    let timeout;

    const handleMouseEnter = () => {
        clearTimeout(timeout);
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        timeout = setTimeout(() => {
            setShowDropdown(false);
        }, 200);
    };

    return (
        <div>
            {/* NAVBAR */}
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled || mobileOpen
                        ? "bg-white/70 backdrop-blur-md shadow-md text-gray-800"
                        : "bg-transparent text-white"
                }`}
            >
                <div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
                    {/* LOGO */}
                    <Link
                        className="flex items-center gap-3 font-bold text-lg"
                        href="/"
                    >
                        <img
                            src="/images/logo_att.png"
                            alt="ATT"
                            className="h-16"
                        />
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center gap-8 font-medium">
                        <Link
                            href={route("about")}
                            className="hover:text-green-300 transition text-xl"
                        >
                            Qui sommes-nous ?
                        </Link>

                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="hover:text-green-300 transition text-xl">
                                Activités
                            </button>

                            {/* Dropdown */}

                            <div
                                className={`absolute top-full left-0 mt-6 w-[520px] bg-white shadow-2xl rounded-2xl p-6 z-50 transition-all duration-300 ease-out ${
                                    showDropdown
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-3 pointer-events-none"
                                }`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="grid gap-4">
                                    {activites.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={route(
                                                "activites.show",
                                                item.slug,
                                            )}
                                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 transition"
                                        >
                                            <div className="flex items-center justify-center text-xl font-bold text-white mr-5 p-5 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full hover:bg-white">
                                                {item.id}
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">
                                                {item.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            href={route("PacksPublic")}
                            className="hover:text-green-300 transition text-xl"
                        >
                            Packs
                        </Link>

                        <Link
                            href={route("articles.publics")}
                            className="hover:text-green-300 transition text-xl"
                        >
                            Rédactions
                        </Link>

                        <Link
                            href={route("contact")}
                            className="hover:text-green-300 transition text-xl"
                        >
                            Contact
                        </Link>

                        {!auth?.user ? (
                            <Link
                                href="/login"
                                className="ml-4 bg-gradient-to-r from-green-400 to-teal-400 text-white px-6 py-2 rounded-full hover:scale-105 hover:bg-green-700 transition-all duration-300 shadow-lg"
                            >
                                Se connecter
                            </Link>
                        ) : (
                            <Link
                                href="/dashboard"
                                className="ml-4 bg-gradient-to-r from-green-400 to-teal-400 text-white px-6 py-2 rounded-full hover:scale-105 hover:bg-green-700 transition-all duration-300 shadow-lg"
                            >
                                Dashboard
                            </Link>
                        )}
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden z-50 relative rounded-md p-2 m-2 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white-100 shadow"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            {mobileOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* MOBILE MENU */}
                    <div
                        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
                            mobileOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                    >
                        <div className="bg-white shadow-xl rounded-b-3xl px-8 py-10 space-y-8 text-xl text-gray-800">
                            <Link
                                href={route("about")}
                                onClick={() => setMobileOpen(false)}
                                className="block hover:text-green-600 transition"
                            >
                                Qui sommes-nous ?
                            </Link>

                            <div>
                                <button
                                    onClick={() =>
                                        setMobileActivitiesOpen(
                                            !mobileActivitiesOpen,
                                        )
                                    }
                                    className="flex justify-between items-center w-full font-semibold"
                                >
                                    Activités
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-300 ${
                                            mobileActivitiesOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        mobileActivitiesOpen
                                            ? "max-h-[600px] mt-4"
                                            : "max-h-0"
                                    }`}
                                >
                                    <div className="space-y-4 pl-4 mt-2">
                                        {activites.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={route(
                                                    "activites.show",
                                                    item.slug,
                                                )}
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    setMobileActivitiesOpen(
                                                        false,
                                                    );
                                                }}
                                                className="flex items-start gap-3 text-gray-700 hover:text-green-600 transition"
                                            >
                                                <div className="flex items-center justify-center text-xl font-bold text-white mr-3 p-3 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full hover:bg-white">
                                                    {item.id}
                                                </div>
                                                <span className="text-sm">
                                                    {item.title}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link
                                href={route("PacksPublic")}
                                onClick={() => setMobileOpen(false)}
                                className="block hover:text-green-600 transition"
                            >
                                Packs
                            </Link>

                            <Link
                                href={route("articles.publics")}
                                onClick={() => setMobileOpen(false)}
                                className="block hover:text-green-600 transition"
                            >
                                Rédactions
                            </Link>

                            <Link
                                href={route("contact")}
                                onClick={() => setMobileOpen(false)}
                                className="block hover:text-green-600 transition"
                            >
                                Contact
                            </Link>

                            {!auth?.user ? (
                                <Link
                                    href="/login"
                                    className="block mt-4 bg-gradient-to-r from-green-400 to-teal-400 text-white px-8 py-3 rounded-full text-center shadow-md hover:scale-105 transition-all duration-300"
                                >
                                    Se connecter
                                </Link>
                            ) : (
                                <Link
                                    href="/dashboard"
                                    className="block mt-4 bg-gradient-to-r from-green-400 to-teal-400 text-white px-8 py-3 rounded-full text-center shadow-md hover:scale-105 transition-all duration-300"
                                >
                                    Dashboard
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
