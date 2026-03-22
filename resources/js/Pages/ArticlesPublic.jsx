import PublicLayout from "@/Layouts/PublicLayout";
import { useEffect, useState } from "react";
import { usePage, Link, Head } from "@inertiajs/react";

export default function ArticlesPublic() {
    const { posts } = usePage().props;
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
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
            <Head title="Redactions" />
            {/* HERO PREMIUM */}
            <section
                className="relative pt-32 pb-2 px-6 overflow-hidden bg-green-500/60"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* overlay blur */}
                {/* <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div> */}

                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-3xl font-bold mb-10">
                        <span className="text-green-400 ">Articles</span> &
                        Actualités
                    </h1>

                    {/* <p className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                        Choisissez le pack adapté à vos besoins
                    </p> */}
                </div>
            </section>
            {/* ARTICLES SECTION */}
            <section className="pt-32 pb-4 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    {/* <h2 className="text-3xl font-bold mb-10">
                        <span className="text-green-400 ">Articles</span> &
                        Actualités
                    </h2> */}
                    {/* <input
                        type="text"
                        placeholder="Rechercher..."
                        value={filters.search || ""}
                        onChange={(e) =>
                            router.get(
                                "/articles",
                                { search: e.target.value },
                                { preserveState: true },
                            )
                        }
                    /> */}

                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative h-[420px] flex items-center justify-center overflow-visible"
                    >
                        {posts.map((post, index) => {
                            let position = index - currentIndex;

                            //  Correction circulaire
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
                                            <p className="text-xs text-green-600 uppercase mb-2">
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
                    <div className="flex justify-center mt-12 gap-3 relative z-40">
                        {posts.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index
                                        ? "w-8 bg-green-600"
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
        </PublicLayout>
    );
}
