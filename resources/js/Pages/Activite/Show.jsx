import PublicLayout from "@/Layouts/PublicLayout";
import activites from "@/data/activites";
import modules from "@/data/modules";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Head } from "@inertiajs/react";

export default function Show({ slug }) {
    const activite = activites.find((a) => a.slug === slug);
    const modulesDomaine = modules.filter(
        (m) =>
            Array.isArray(m.activites_ids) &&
            activite &&
            m.activites_ids.includes(activite.id),
    );
    // console.log(modules.activites_ids, typeof modules.activites_ids);
    // console.log(modules.activites_ids);
    // console.log(modulesDomaine);
    const [openId, setOpenId] = useState(modulesDomaine[0]?.id || null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };
    return (
        <PublicLayout>
            <Head title={activite.slug} />
            <section
                className="relative h-[40vh] flex items-center justify-center bg-green-500/60"
                style={{
                    backgroundImage: `url(${activite.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* <div className="absolute inset-0 bg-green-700/70"></div> */}

                <h1 className="relative z-10 text-white text-2xl pt-12 md:text-4xl sm:pt-10 font-bold max-w-4xl text-center px-6">
                    {activite.title}
                </h1>
            </section>
            <section className="pt-10 pb-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16 items-start">
                    {/* Bloc gauche */}
                    <div className="bg-[#0f1b2d] text-white p-10 rounded-xl flex flex-col items-center justify-center text-center min-h-[260px]">
                        <h3 className="text-green-400 font-semibold tracking-wide mb-6">
                            DOMAINE D'ACTION
                        </h3>

                        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-xl font-bold">
                            {activite.id}
                        </div>
                        <p className="mt-3">{activite.auteur}</p>
                    </div>

                    {/* Bloc texte */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6 leading-snug">
                            {activite.title}
                        </h2>

                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p>{activite.description}</p>

                            <p>{activite.objectif}</p>
                        </div>
                        {/* module */}
                        <div className="space-y-5 max-h-[500px] overflow-y-auto no-scrollbar rounded-2xl border p-2 mt-8">
                            {modulesDomaine.map((module) => {
                                const isOpen = openId === module.id;

                                return (
                                    <div
                                        key={module.id}
                                        className={`rounded-2xl border transition-all duration-300
                        ${
                            isOpen
                                ? "bg-white shadow-xl border-green-500"
                                : "bg-gray-50 hover:bg-white hover:shadow-md"
                        }`}
                                    >
                                        {/* HEADER */}
                                        <button
                                            onClick={() => toggle(module.id)}
                                            className="w-full flex justify-between items-center p-5 text-left"
                                        >
                                            <div>
                                                <h2 className="text-lg font-bold">
                                                    {module.title}
                                                </h2>
                                                <p className="text-sm text-gray-500">
                                                    Cliquez pour voir les
                                                    détails
                                                </p>
                                            </div>

                                            {/* ICON */}
                                            <motion.span
                                                animate={{
                                                    rotate: isOpen ? 180 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="text-gray-500 text-xl"
                                            >
                                                ⌄
                                            </motion.span>
                                        </button>

                                        {/* CONTENT */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.35,
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-5 pb-5 pt-0 space-y-3">
                                                        <p className="text-gray-600 whitespace-pre-line">
                                                            {module.description}
                                                        </p>

                                                        {/* ACTIONS */}
                                                        {/* <div className="flex gap-3">
                                                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                                                                Commencer
                                                            </button>

                                                            <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                                                                Aperçu
                                                            </button>
                                                        </div> */}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

{
    /* <span class="flex items-center justify-center text-xl font-bold text-white mr-5 p-5 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full hover:bg-white">flex */
}
