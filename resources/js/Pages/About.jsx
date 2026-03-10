import PublicLayout from "@/Layouts/PublicLayout";

const founders = [
    {
        name: "Mr MISS Emmanuel",
        role: "Capitaine de vaisseau, Fondateur & Directeur Général",
        bio: "Expert en stratégie et développement des organisations en Afrique.",
        image: "/images/founders/f1.png",
        cv: "/cv/f1.pdf",
    },
    {
        name: "Mr MABALLY Christian Joli Nguiamba",
        role: "Colonel entré dans la réserve mobilisable depuis le 16 août 2022 ",
        bio: "Spécialiste en ingénierie pédagogique et formation professionnelle.",
        image: "/images/founders/f2.png",
        cv: "/cv/f2.pdf",
    },
    {
        name: "Mr NDONGO MVE Desire",
        role: "Contrôleur des Armées ",
        bio: "Développe des collaborations stratégiques internationales.",
        image: "/images/founders/f3.jpeg",
        cv: "/cv/f3.pdf",
    },
    {
        name: "Mr Guy Romuald JIOTSA TIAGHO",
        role: "Capitaine de vaisseau",
        bio: "Chef Groupement Enseingnemt Operationnel ESIG",
        image: "/images/founders/f4.png",
        cv: "/cv/f4.pdf",
    },
];

export default function About() {
    return (
        <PublicLayout>
            {/* HERO PREMIUM */}
            <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-green-900 via-emerald-700 to-green-500">
                {/* overlay blur */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-bold mb-6 tracking-tight">
                        Qui sommes-nous ?
                    </h1>

                    <p className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                        Africa Training Team accompagne les professionnels,
                        institutions et entreprises dans le développement
                        stratégique des compétences et du leadership en Afrique.
                    </p>
                </div>
            </section>

            {/* FONDATEURS GLASSMORPHISM */}
            <section className="py-28 px-6 bg-gradient-to-b from-white to-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {founders.map((founder, index) => (
                            <div
                                key={index}
                                className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition duration-500"
                            >
                                {/* Photo */}
                                <div className="w-36 h-36 mx-auto mb-6">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover rounded-full border-4 border-green-600 shadow-lg"
                                    />
                                </div>

                                {/* Nom */}
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {founder.name}
                                </h3>

                                {/* Role */}
                                <p className="text-green-600 font-medium mb-4">
                                    {founder.role}
                                </p>

                                {/* Bio */}
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {founder.bio}
                                </p>

                                {/* Bouton */}
                                <a
                                    href={founder.cv}
                                    download
                                    className="inline-block px-5 py-2 text-sm font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition shadow-md"
                                >
                                    Télécharger CV
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION VALEURS PREMIUM */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Notre Vision</h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Devenir une référence panafricaine dans la formation,
                        l’innovation pédagogique et l’accompagnement stratégique
                        des talents et des organisations.
                    </p>
                </div>
            </section>
        </PublicLayout>
    );
}
