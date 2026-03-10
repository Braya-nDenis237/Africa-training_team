import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    const user = usePage().props.auth.user;
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white border-b shadow">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo / Nom */}
                    <Link
                        href="/"
                        className="text-xl font-bold text-green-700"
                    >
                        Africa Training Admin
                    </Link>

                    {/* Menu */}
                    <div className="flex gap-6">
                        <Link
                            href={route("admin.dashboard")}
                            className="text-gray-700 hover:text-green-600"
                        >
                            Dashboard
                        </Link>

                        <Link
                            href={route("admin.articles.index")}
                            className="text-gray-700 hover:text-green-600"
                        >
                            Articles
                        </Link>
                    </div>
                    <div className="hidden sm:ms-6 sm:flex sm:items-center">
                        <div className="relative ms-3">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                        >
                                            {user.name}

                                            <svg
                                                className="-me-0.5 ms-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.editAdmin")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="py-8 px-6">{children}</main>
        </div>
    );
}
