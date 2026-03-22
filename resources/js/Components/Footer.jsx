import {
    MailIcon,
    WhatsAppIcon,
    TwitterIcon,
    LocationIcon,
    SocialLink,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
} from "@/Components/Icons";
export default function Footer() {
    return (
        <div>
            {/* Section footer */}
            <footer className="relative text-white">
                {/* SECTION PRINCIPALE */}
                <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#064e3b] pt-10 pb-8">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
                        {/* CONTACT */}
                        <div className="lg:border-r lg:border-[rgba(255,255,255,.2)] max-lg:border-b max-lg:border-[rgba(255,255,255,.2)] max-lg: pb-1">
                            <h3 className="text-xl font-bold mb-8">Contact</h3>

                            <div className="space-y-6 text-gray-300">
                                {/* WhatsApp 1 */}
                                <a
                                    href="https://wa.me/237696532736"
                                    target="_blank"
                                    className="flex items-center gap-4 hover:text-green-400 transition"
                                >
                                    <WhatsAppIcon />
                                    <div>
                                        <p className="font-semibold text-white">
                                            (+237) 696 53 27 36
                                        </p>
                                        <p className="text-sm">WhatsApp</p>
                                    </div>
                                </a>

                                {/* WhatsApp 2 */}
                                <a
                                    href="https://wa.me/237675681284"
                                    target="_blank"
                                    className="flex items-center gap-4 hover:text-green-400 transition"
                                >
                                    <WhatsAppIcon />
                                    <div>
                                        <p className="font-semibold text-white">
                                            (+237) 675 68 12 84
                                        </p>
                                        <p className="text-sm">WhatsApp</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:direction@africa-trainingteam.com"
                                    className="flex items-center gap-4 hover:text-green-400 transition"
                                >
                                    <MailIcon />
                                    <span className="font-semibold text-white hover:text-green-400 transition">
                                        direction@africa-trainingteam.com
                                    </span>
                                </a>

                                {/* Adresse */}
                                <div className="flex items-center gap-4">
                                    <LocationIcon />
                                    <span>BP : 424 Yaoundé-Cameroun</span>
                                </div>
                            </div>
                        </div>

                        {/* LIENS RAPIDES */}
                        <div className="lg:border-r lg:border-[rgba(255,255,255,.2)] max-lg:border-b max-ty:border-[rgba(255,255,255,.2)] max-lg: pb-1">
                            <h3 className="text-xl font-bold mb-8">
                                Lien rapide
                            </h3>

                            <div className="space-y-5 text-gray-300">
                                {/* <a
                                    href="#"
                                    className="block hover:text-green-400 transition"
                                >
                                    Paramètres et confidentialité
                                </a> */}
                                <a
                                    href={route("contact")}
                                    className="block hover:text-green-400 transition"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>

                        {/* NEWSLETTER */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">Bulletin</h3>

                            <p className="text-gray-300 mb-6">
                                Abonnez-vous à notre bulletin afin de recevoir
                                nos dernières parutions, offres et promotions
                            </p>

                            <div className="flex bg-white rounded-full overflow-hidden shadow-lg max-tx:w-72">
                                <input
                                    type="email"
                                    placeholder="Adresse email"
                                    className="flex-1 px-5 py-3 text-gray-800 outline-none max-tx:pr-0"
                                />
                                <button className="bg-gradient-to-r from-green-400 to-teal-400 px-6 text-white font-semibold hover:bg-green-600 transition max-tx:pl-2">
                                    S'abonner
                                </button>
                            </div>
                            <p>Indisponible pour l'instant!!</p>
                        </div>
                    </div>
                </div>

                {/* BANDE VERTE BAS */}
                <div className="bg-gradient-to-r from-green-400 to-teal-400 py-4">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Réseaux */}
                        <div className="flex gap-4">
                            <SocialLink href="https://twitter.com">
                                <TwitterIcon />
                            </SocialLink>

                            <SocialLink href="https://facebook.com">
                                <FacebookIcon />
                            </SocialLink>

                            <SocialLink href="https://linkedin.com">
                                <LinkedinIcon />
                            </SocialLink>

                            <SocialLink href="https://instagram.com">
                                <InstagramIcon />
                            </SocialLink>
                        </div>

                        <p className="text-white text-sm text-center">
                            © Copyright {new Date().getFullYear()} par{" "}
                            <span className="text-black font-bold">
                                Africa Training Team
                            </span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
