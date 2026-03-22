import { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import Swal from "sweetalert2";

// import axios from "axios";

export default function PacksPublic() {
    const [packs, setPacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { auth } = usePage().props;
    // const isAuthenticated = auth?.user !== null;

    const subscribe = (packId) => {
        if (!auth?.user) {
            router.visit("/login");
        } else {
            router.post(`/subscribe/${packId}`);
        }
    };
    useEffect(() => {
        if (auth?.user?.role === "admin") {
            Swal.fire({
                icon: "info",
                title: "Compte administrateur",
                text: "Vous n’avez pas besoin d’abonnement.",
            });
            return null;
        }
    }, [auth]);

    useEffect(() => {
        fetch("/api/packs")
            .then((res) => res.json())
            .then((data) => {
                setPacks(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur API :", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Chargement...</p>;

    return (
        <PublicLayout>
            {/* HERO PREMIUM */}
            <section
                className="relative pt-28 pb-4 px-6 overflow-hidden bg-green-500/60"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* overlay blur */}
                {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> */}

                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-bold mb-6 tracking-tight">
                        Nos Packs
                    </h1>

                    <p className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                        Choisissez le pack adapté à vos besoins
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 py-14 px-6">
                <div className="max-w-7xl mx-auto text-center px-4 sm:px-6">
                    {/* <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        Nos Packs
                    </h1>
                    <p className="text-gray-600 mb-12">
                        Choisissez le pack adapté à vos besoins
                    </p> */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packs.map((pack, index) => {
                            const isRecommended = pack.name
                                .toLowerCase()
                                .includes("premium"); // pack recommandé

                            return (
                                <div
                                    key={pack.id}
                                    className={`relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition transform hover:-translate-y-2 hover:shadow-2xl ${
                                        isRecommended
                                            ? "border-2 border-green-600 scale-105"
                                            : ""
                                    }`}
                                >
                                    {isRecommended && (
                                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                                            Recommandé
                                        </span>
                                    )}

                                    <h2 className="text-2xl font-bold mb-4">
                                        {pack.name}
                                    </h2>

                                    <p className="text-gray-500 mb-6">
                                        {pack.description}
                                    </p>

                                    <div className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
                                        {pack.price} FCFA
                                    </div>

                                    <ul className="m-4">
                                        {Array.isArray(pack.features)
                                            ? pack.features.map(
                                                  (feature, index) => (
                                                      <li key={index}>
                                                          ✔ {feature}
                                                      </li>
                                                  ),
                                              )
                                            : typeof pack.features === "string"
                                              ? JSON.parse(pack.features).map(
                                                    (feature, index) => (
                                                        <li key={index}>
                                                            ✔ {feature}
                                                        </li>
                                                    ),
                                                )
                                              : null}
                                    </ul>

                                    {auth?.user?.role !== "admin" && (
                                        <button
                                            onClick={() => subscribe(pack.id)}
                                            className={`w-full py-3 rounded-lg font-semibold text-sm sm:text-base transition ${
                                                isRecommended
                                                    ? "bg-green-600 text-white hover:bg-green-700"
                                                    : "bg-gray-800 text-white hover:bg-black"
                                            }`}
                                        >
                                            Souscrire
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
