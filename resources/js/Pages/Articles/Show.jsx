import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import { useMemo } from "react";
import {
    WhatsAppIcon,
    TwitterIcon,
    FacebookIcon,
    CopyIcon,
} from "@/Components/Icons";

export default function Show({ article, related, tags = [] }) {
    const [progress, setProgress] = useState(0);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            setProgress((window.scrollY / totalHeight) * 100);

            const newScale = 1 + window.scrollY * 0.0003; // zoom subtil
            setScale(newScale);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const readingTime = Math.ceil(
        article.content.replace(/<[^>]+>/g, "").split(" ").length / 200,
    );

    const currentUrl =
        typeof window !== "undefined" ? window.location.href : "";

    const [copied, setCopied] = useState(false);

    const copyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
    // Sticky share horizontale
    const shareRef = useRef(null);
    const [showSticky, setShowSticky] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowSticky(!entry.isIntersecting);
            },
            { threshold: 0 },
        );

        if (shareRef.current) {
            observer.observe(shareRef.current);
        }

        return () => {
            if (shareRef.current) {
                observer.unobserve(shareRef.current);
            }
        };
    }, []);

    // Extraction des titres pour la table des matières

    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = article.content;

        const elements = tempDiv.querySelectorAll("h2, h3");

        const extracted = Array.from(elements).map((el, index) => {
            const id = `heading-${index}`;
            el.id = id;

            return {
                id,
                text: el.innerText,
                level: el.tagName,
            };
        });

        setHeadings(extracted);
    }, [article.content]);
    // Traitement du contenu pour ajouter des classes aux premiers paragraphes
    const processedContent = useMemo(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(article.content, "text/html");

        // Trouver le premier vrai paragraphe
        const firstParagraph = doc.querySelector("p");

        if (firstParagraph) {
            firstParagraph.classList.add("dropcap", "relative", "pl-6");
        }

        return doc.body.innerHTML;
    }, [article.content]);

    return (
        <PublicLayout>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content={article.meta_description} />
            </Head>

            {/* Progress bar */}
            <div
                className="fixed top-0 left-0 h-[2px] bg-green-700 z-[9999]"
                style={{ width: `${progress}%` }}
            />

            {/* HERO */}
            <section
                className="relative h-[75vh] flex items-end overflow-hidden"
                style={{
                    backgroundImage: `url(/storage/${article.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: `scale(${scale})`,
                    transition: "transform 0.2s ease-out",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 text-white">
                    <p className="uppercase tracking-widest text-green-400 mb-4 text-sm">
                        {article.type}
                    </p>
                    <div className="text-sm text-gray-300 mb-6 max-ta:text-[10px]">
                        <Link href="/" className="hover:text-white transition">
                            Accueil
                        </Link>
                        <span className="mx-2">›</span>
                        <span className="text-white font-medium">
                            {article.slug.replace(/-/g, " ")}
                        </span>
                    </div>

                    <h1 className="font-editorial text-sm da:text-2xl tt:text-3xl to:text-6xl  font-bold leading-tight mb-6">
                        <Link
                            href={route("articles.publics")}
                            className="text-sm text-gray-500 hover:text-green-700 transition flex items-center gap-2 py-2"
                        >
                            ← Retour aux publications
                        </Link>

                        {article.title}
                    </h1>

                    {/* DESCRIPTION (CHAPEAU) */}
                    {article.meta_description && (
                        <p className="text-[10px] da:text-xs md:text-sm tt:text-lg text-gray-200 mb-8 max-w-3xl">
                            {article.meta_description}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-6 text-[10px] da:text-sm text-gray-300">
                        <span className="font-semibold">
                            Par {article.author_name ?? "Africa Training Team"}
                        </span>
                        <span>
                            {new Date(article.created_at).toLocaleDateString()}
                        </span>
                        <span>{readingTime} min lecture</span>
                    </div>
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-5">
                            {tags.map((tag, index) => (
                                <Link
                                    key={index}
                                    href={`/articles?tag=${tag}`}
                                    className="px-4 py-1 text-[8px] md:text-xs uppercase tracking-wide 
                           bg-white/10 backdrop-blur-sm border border-white/30 
                           rounded-full hover:bg-green-600 
                           hover:border-green-600 transition duration-300"
                                >
                                    #{tag}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            {/* STICKY SHARE DESKTOP */}
            {showSticky && (
                <div className="hidden lg:flex flex-col gap-4 fixed left-10 top-1/2 -translate-y-1/2 z-40 animate-fadeIn">
                    <a
                        href={`https://twitter.com/intent/tweet?url=${currentUrl}`}
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition"
                    >
                        <TwitterIcon />
                    </a>

                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition"
                    >
                        <FacebookIcon />
                    </a>

                    <a
                        href={`https://wa.me/?text=${article.title} ${currentUrl}`}
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition"
                    >
                        <WhatsAppIcon />
                    </a>
                </div>
            )}

            {headings.length > 0 && (
                <div className="mb-16 p-6 bg-gray-50 rounded-xl border">
                    <h3 className="font-bold mb-4 uppercase text-sm tracking-wider">
                        Table des matières
                    </h3>

                    <ul className="space-y-2 text-sm">
                        {headings.map((item) => (
                            <li
                                key={item.id}
                                className={`${
                                    item.level === "H3"
                                        ? "ml-4 text-gray-600"
                                        : ""
                                }`}
                            >
                                <a
                                    href={`#${item.id}`}
                                    className="hover:text-green-700 transition"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* CONTENT */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    {/* SHARE SECTION */}
                    <div
                        ref={shareRef}
                        className="max-sm:grid max-sm:grid-cols-1 flex flex-wrap items-center gap-4 mb-14"
                    >
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Partager
                        </span>

                        {/* Twitter */}
                        <a
                            href={`https://twitter.com/intent/tweet?url=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95"
                        >
                            <TwitterIcon />
                            Twitter
                        </a>

                        {/* Facebook */}
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1877F2] text-white text-sm hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95"
                        >
                            <FacebookIcon />
                            Facebook
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/?text=${article.title} ${currentUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm hover:scale-105 hover:shadow-lg transition-all duration-300 active:scale-95"
                        >
                            <WhatsAppIcon />
                            WhatsApp
                        </a>

                        {/* Copy */}
                        <div className="relative max-sm:grid max-sm:grid-cols-1">
                            <button
                                onClick={copyLink}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm
                   active:scale-95 transition-all duration-150 "
                            >
                                <CopyIcon />
                                Copier
                            </button>

                            {copied && (
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded shadow-md animate-fadeIn">
                                    Lien copié ✓
                                </div>
                            )}
                        </div>
                    </div>

                    {/* DROP CAP */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:font-bold animate-fadeInContent"
                        dangerouslySetInnerHTML={{ __html: processedContent }}
                    />

                    {/* CITATION STYLISÉE */}
                    <blockquote className="border-l-4 border-green-600 pl-6 my-12 italic text-lg text-gray-700">
                        "La transformation stratégique passe par la formation et
                        l'excellence."
                    </blockquote>

                    {/* BIO AUTEUR */}
                    <div className="mt-20 p-8 bg-gray-50 rounded-xl">
                        <h3 className="font-bold mb-3">À propos de l’auteur</h3>
                        <p className="text-gray-600">
                            {article.author_name ?? "Africa Training Team"} est
                            spécialisé dans l’analyse stratégique et la
                            formation en sécurité et défense.
                        </p>
                    </div>
                </div>
            </section>

            {/* RELATED */}
            <section className="py-24 bg-gray-50 border-t">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="font-editorial text-3xl font-bold mb-14 text-center">
                        À lire également
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {related.map((item) => (
                            <Link
                                key={item.id}
                                href={`/articles/${item.slug}`}
                                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                            >
                                {item.image && (
                                    <img
                                        src={`/storage/${item.image}`}
                                        className="h-52 w-full object-cover"
                                    />
                                )}

                                <div className="p-6">
                                    <h3 className="font-semibold mb-3 group-hover:text-green-700 transition">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {item.meta_description}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {new Date(
                                            item.created_at,
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
