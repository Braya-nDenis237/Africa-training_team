import PublicLayout from "@/Layouts/PublicLayout";
import activites from "@/data/activites";

export default function Show({ slug }) {
    const activite = activites.find((a) => a.slug === slug);
    return (
        <PublicLayout>
            <section
                className="relative h-[40vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${activite.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-green-700/70"></div>

                <h1 className="relative z-10 text-white text-3xl md:text-4xl font-bold max-w-4xl text-center px-6">
                    {activite.title}
                </h1>
            </section>
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16 items-start">
                    {/* Bloc gauche */}
                    <div className="bg-[#0f1b2d] text-white p-10 rounded-xl flex flex-col items-center justify-center text-center min-h-[260px]">
                        <h3 className="text-green-400 font-semibold tracking-wide mb-6">
                            DOMAINE D'ACTION
                        </h3>

                        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-xl font-bold">
                            {activite.id}
                        </div>
                    </div>

                    {/* Bloc texte */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6 leading-snug">
                            {activite.title}
                        </h2>

                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p>{activite.description}</p>

                            {/* <p>
                                Ce domaine d’intervention s’inscrit dans une
                                logique d’autonomisation stratégique et de
                                renforcement institutionnel durable.
                            </p> */}
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
