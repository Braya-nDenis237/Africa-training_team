import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";

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
            <Head title="About" />
            {/* HERO PREMIUM */}
            <section
                className="relative pt-24 pb-4 px-6 bg-green-500/60 "
                style={{
                    backgroundImage: "url('/images/hero.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay gradient premium */}
                {/* <div className="absolute inset-0 bg-green-400/60  text-white px-4 py-1 rounded-lg"></div> */}

                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Qui sommes-{" "}
                        <span className="bg-gradient-to-r from-green-400 to-teal-400 text-white px-4 py-1 rounded-lg">
                            nous
                        </span>{" "}
                        ?
                    </h2>

                    {/* <p className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                        Africa Training Team accompagne les professionnels,
                        institutions et entreprises dans le développement
                        stratégique des compétences et du leadership en Afrique.
                    </p> */}
                </div>
            </section>

            {/* presentation */}
            <section className="md:px-6">
                <div className="mx-auto text-center">
                    <h2
                        className="text-xl md:text-3xl font-bold mb-6 bg-green-500/60 text-white px-4 py-1 rounded-b-lg max-w-sm mx-auto"
                        style={{
                            backgroundImage: "url('/images/hero.png')",
                            // backgroundSize: "cover",
                            // backgroundPosition: "center",
                        }}
                    >
                        Présentation Institutionnelle D’ATT
                    </h2>
                    <div className="prose prose-p:m-2 prose-sm md:prose-lg max-w-none lg:max-w-6xl prose-headings:font-bold animate-fadeInContent mx-auto">
                        {/* <p className="dropcap relative pl-6">
                            A
                        </p> */}
                        <p className="font-bold">
                            Africa Training Team (ATT) est un cabinet
                            d’expertise en sécurité, défense et planification
                            opérationnelle constitué :
                        </p>
                        <div className="grid grid-flow-row justify-items-start">
                            <p>
                                • D’officiers supérieurs à la retraite brevetés
                                EMS2
                            </p>
                            <p>• D’experts africains associés</p>
                            <p>
                                • D’officiers supérieurs en activité dans des
                                institutions d’enseignement militaire supérieur
                                ATT intervient dans quatre domaines :
                            </p>
                            <p>
                                • Enseignement stratégique et opératif et
                                appropriation
                            </p>
                            <p>• Entraînement des États-Majors</p>
                            <p>• Études opérationnelles</p>
                            <p>
                                • Conseil stratégique Notre expérience inclut :
                            </p>
                            <p>
                                • Planification d’exercices nationaux et
                                multinationaux
                            </p>
                            <p>
                                • Rédaction de CONOPS/OPLAN stratégiques et
                                opératifs
                            </p>
                            <p>• Conception de curricula EMS2 adaptés </p>
                            <p>• Réforme pédagogique d’écoles de guerre</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FONDATEURS GLASSMORPHISM */}
            <section className="py-2 md:py-20 px-6 bg-gradient-to-b from-white to-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-teal-400 text-white px-4 py-1 rounded-lg max-w-48 mx-auto">
                        Fondateurs
                    </h2>
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
