import PublicLayout from "@/Layouts/PublicLayout";
import { useEffect, useRef, useState } from "react";
import { usePage, Link, Head } from "@inertiajs/react";
import activites from "@/data/activites";

export default function Welcome() {
    const { posts } = usePage().props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const sectionRef = useRef(null);
    const aboutRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);

    //pour la section about fade-in and qui nous sommes nous, on utilise Intersection Observer pour déclencher l'animation quand la section entre dans le viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);
    // pareil pour la section about pour son apparition
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAboutVisible(true);
                }
            },
            { threshold: 0.2 },
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    //use pour les posts de la page d'accueil, pour faire un carousel automatique
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === posts.length - 1 ? 0 : prev + 1,
            );
        }, 4000); // 🔥 1 par 1 toutes les 4 secondes

        return () => clearInterval(interval);
    }, [isHovered, posts.length]);

    return (
        <PublicLayout>
            <Head title="Welcome" />
            {/* HERO SECTION */}
            <section
                className="relative min-h-[40vh] nav:min-h-[40vh] flex items-center bg-green-500/60"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay gradient premium */}
                {/* <div className="absolute inset-0 bg-green-400/60"></div> */}

                {/* Contenu */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 text-white mb-2">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl ty:text-2xl tx:text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Équipe{" "}
                            <span className="bg-white text-green-500 px-3 sm:px-4 py-1 rounded-xl">
                                de formation
                            </span>{" "}
                            Afrique
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl opacity-95 mb-4 leading-relaxed">
                            Africanisation des réponses sécuritaires par l'appui
                            à la Formation et à l'Entrainement.
                        </p>

                        <button
                            onClick={() => {
                                document
                                    .getElementById("savoir-faire")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="bg-white text-gray-800 px-6 sm:px-8 ty:px-4 py-3 sm:py-4 ty:py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Notre savoir-faire
                        </button>
                    </div>
                </div>
            </section>
            {/* ARTICLES SECTION */}
            <section className="py-2 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-10">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 ">
                            Articles
                        </span>{" "}
                        & Actualités
                    </h2>

                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative h-[450px] flex items-center justify-center overflow-visible"
                    >
                        {posts.map((post, index) => {
                            let position = index - currentIndex;

                            // 🔥 Correction circulaire
                            if (position > posts.length / 2) {
                                position -= posts.length;
                            }
                            if (position < -posts.length / 2) {
                                position += posts.length;
                            }

                            return (
                                <Link
                                    key={post.id}
                                    href={`/articles/${post.slug}`}
                                    className="absolute transition-all duration-700 ease-in-out"
                                    style={{
                                        transform: `translateX(${position * 420}px) scale(${position === 0 ? 1.1 : 0.9})`,
                                        opacity: position === 0 ? 1 : 0.6,
                                        filter:
                                            position === 0
                                                ? "blur(0px)"
                                                : "blur(2px)",
                                        zIndex: position === 0 ? 30 : 10,
                                        pointerEvents:
                                            position === 0 ? "auto" : "none",
                                        display:
                                            Math.abs(position) > 2
                                                ? "none"
                                                : "block",
                                        transition:
                                            "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                >
                                    <div className="w-[310px] tx:w-[360px] bg-white rounded-2xl shadow-xl">
                                        {post.image && (
                                            <img
                                                src={`/storage/${post.image}`}
                                                className="h-56 w-full object-cover rounded-t-2xl"
                                            />
                                        )}

                                        <div className="p-6">
                                            <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400  uppercase mb-2">
                                                {post.type}
                                            </p>

                                            <h3 className="font-bold text-lg mb-3">
                                                {post.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm line-clamp-3">
                                                {post.meta_description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Indicateurs */}
                    <div className="flex justify-center mt-8 gap-3 relative z-40">
                        {posts.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index
                                        ? "w-8 bg-gradient-to-r from-green-400 to-teal-400"
                                        : "w-2 bg-gray-300"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Boutons */}
                    <div className="flex justify-center gap-10 mt-4 relative z-40">
                        <button
                            onClick={() =>
                                setCurrentIndex(
                                    currentIndex === 0
                                        ? posts.length - 1
                                        : currentIndex - 1,
                                )
                            }
                            className="bg-white/50 hover:bg-white transition px-6 py-3 rounded-full shadow"
                        >
                            ←
                        </button>

                        <button
                            onClick={() =>
                                setCurrentIndex(
                                    currentIndex === posts.length - 1
                                        ? 0
                                        : currentIndex + 1,
                                )
                            }
                            className="bg-white/50 hover:bg-white transition px-6 py-3 rounded-full shadow"
                        >
                            →
                        </button>
                    </div>
                </div>
            </section>
            {/* AUTRES SECTIONS (À compléter) */}
            <section ref={sectionRef} className="py-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    {/* TITRE */}
                    <div
                        className={`text-center mb-20 transition-all duration-1000 ease-out ${
                            visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800/90">
                            Africanisation des réponses{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 ">
                                sécuritaires
                            </span>{" "}
                            par l'appui à la Formation et à l'Entrainement
                        </h2>

                        <p className="mt-8 text-gray-600 mx-auto leading-relaxed text-lg">
                            À l'observation, la carte des interventions de l'ONU
                            dans la résolution des conflits en Afrique fait
                            paraître une double tendance lourde : le déficit
                            criard des résultats probants d'une part et d'autre
                            part leurs coûts exorbitants et leurs durées
                            interminables. Pour répondre à ces défis, Africa
                            Training Team (ATT) propose trois axes d'opération
                            visant à atteindre une autonomie stratégique :
                        </p>
                    </div>

                    {/* AXES */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            "S’approprier la prévention et la résolution des conflits en Afrique à la lumière des déterminants culturels propres à l’Afrique.",
                            "Penser la paix et la stabilité en Afrique à rebours des paradigmes importés.",
                            "S’appuyer sur les leviers de formation, d’entraînement et de réflexion stratégique à partir d’un noyau d’Experts-chercheurs africains compétents.",
                        ].map((text, index) => (
                            <div
                                key={index}
                                className={`flex items-start gap-4 transition-all duration-1000 ease-out ${
                                    visible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                                style={{
                                    transitionDelay: `${index * 200}ms`,
                                }}
                            >
                                <div className="bg-gradient-to-r from-green-400 to-teal-400 text-white pt-2 pb-2 pr-3 pl-3 rounded-lg font-bold">
                                    ✓
                                </div>

                                <p className="text-black leading-relaxed font-bold">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AUTRES SECTIONS qui nous sommes */}
            <section
                ref={aboutRef}
                className="relative py-12 text-white overflow-hidden"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay sombre premium */}
                <div className="absolute inset-0 bg-black/75"></div>

                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <h2
                        className={`text-3xl md:text-5xl font-bold mb-10 transition-all duration-1000 ${
                            aboutVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        Qui sommes-{" "}
                        <span className="bg-gradient-to-r from-green-400 to-teal-400 text-white px-4 py-1 rounded-lg">
                            nous
                        </span>{" "}
                        ?
                    </h2>

                    <p
                        className={`text-lg md:text-xl leading-relaxed text-gray-200 transition-all duration-1000 delay-200 ${
                            aboutVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        ATT est un Think-Tank d'expertise en Sécurité et
                        Défense. Il est constitué d'un groupe d'experts
                        Formateurs-chercheurs en Stratégie, Défense, Sécurité et
                        Gestion des Conflits ; Officiers supérieurs à la
                        retraite aguerris, chevronnés et expérimentés. Sa force
                        réside dans sa capacité innovante à africaniser les
                        réponses sécuritaires aux Crises et Conflits du
                        continent. ATT est une entreprise privée de droit
                        camerounais.
                    </p>
                </div>
            </section>
            {/* À compléter : section activités, rédaction, contact, etc. */}
            <section id="savoir-faire" className="pt-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {/* TITRE */}
                    <h2 className="text-4xl font-bold text-center mb-20">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 ">
                            Domaines
                        </span>{" "}
                        d'action
                    </h2>

                    {/* DOMAINES */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-10">
                        {activites.map((item) => (
                            <Link
                                key={item.id}
                                href={route("activites.show", item.slug)}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group flex items-center justify-between"
                            >
                                {/* LEFT */}
                                <div className="flex items-center gap-5">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-14 h-14 object-contain"
                                    />

                                    <p className="text-gray-700 leading-relaxed text-sm max-w-[250px]">
                                        {item.title}
                                    </p>
                                </div>

                                {/* FLÈCHE */}
                                <div className="flex-shrink-0 w-12 aspect-square rounded-full bg-gradient-to-r from-green-400 to-teal-400 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-green-600 group-hover:scale-110">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 12h14M13 6l6 6-6 6"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* PÔLES */}
                    <h2 className="text-4xl font-bold text-center mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 ">
                            Pôles
                        </span>{" "}
                        d'activité
                    </h2>

                    <div className="flex lg:flex-row flex-col lg:mt-10 mt-6">
                        {[
                            {
                                title: "Formation",
                                text: "Accompagnement à la formation et au recyclage des personnels des niveaux stratégique, opératif et tactique.",
                            },
                            {
                                title: "Entrainement",
                                text: "Soutien au processus de planification et de conduite des opérations.",
                            },
                            {
                                title: "Études et Conseils",
                                text: "Études opérationnelles & Conseils militaires plongeurs.",
                            },
                        ].map((pole, index) => (
                            <div
                                key={index}
                                className="flex flex-1 pt-10 rounded-2xl"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-full flex items-center justify-center mb-6 font-bold mr-5 p-5">
                                    {index + 1}
                                </div>
                                <div className="flex flex-col mx-5">
                                    <h3 className="text-xl font-bold mb-4">
                                        {pole.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {pole.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Section câbles */}
            <section className="py-12 bg-white overflow-hidden">
                <div className="mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10">
                        Nos{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400 ">
                            câbles
                        </span>
                    </h2>

                    {/* LIGNE 1 : TEXTES */}
                    <div className="overflow-hidden bg-black/5">
                        <div className="flex w-max animate-scroll-left h-20">
                            {/* bloc dupliqué */}
                            {[...Array(2)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex gap-20 px-10 shrink-0 px10"
                                >
                                    {[
                                        "Les Etats",
                                        "Les Etats-Majors",
                                        "Les Ecoles",
                                        "Ecoles de Formation Initiale et Continue",
                                        "Les Mécanismes de Paix et de Sécurité",
                                        "Union africaine",
                                        "Mécanismes Régionaux",
                                    ].map((text, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 text-xl font-semibold whitespace-nowrap"
                                        >
                                            <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-teal-400 rounded-full shrink-0"></span>
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* LIGNE 2 : DRAPEAUX */}
                <div className="overflow-hidden mt-2">
                    <div className="flex w-max animate-scroll-right">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-16 px-10">
                                <img
                                    src="/images/flag1.png"
                                    className="h-20 rounded-xl"
                                />
                                <img
                                    src="/images/flag2.png"
                                    className="h-20 rounded-xl"
                                />
                                <img
                                    src="/images/flag3.png"
                                    className="h-20 rounded-xl"
                                />
                                <img
                                    src="/images/flag4.jpg"
                                    className="h-20 rounded-xl"
                                />
                                <img
                                    src="/images/flag5.png"
                                    className="h-20 rounded-xl"
                                />
                                <img
                                    src="/images/flag6.png"
                                    className="h-20 rounded-xl"
                                />
                                <img
                                    src="/images/flag7.png"
                                    className="h-20 rounded-xl"
                                />
                                <img
                                    src="/images/flag8.png"
                                    className="h-20 rounded-xl"
                                />
                                <img
                                    src="/images/flag9.png"
                                    className="h-20 rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
