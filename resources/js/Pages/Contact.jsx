import { useForm, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Contact() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/contact", {
            onSuccess: () => reset(),
        });
    };

    return (
        <PublicLayout>
            <section className="">
                <div className="min-h-screen bg-white text-gray-800">
                    <Head title="Contact" />

                    {/* HERO */}
                    <section
                        className="relative h-[40vh] pt-40 pb-16 bg-gray-100"
                        style={{
                            backgroundImage: "url('/images/hero.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 via-green-600/70 to-green-500/60"></div>
                        <div className=" relative max-w-6xl mx-auto px-6">
                            <h1 className="text-4xl font-bold mb-4 md:text-5xl text-black">
                                Contactez-nous
                            </h1>
                            <p className="text-gray-700 max-w-2xl">
                                Pour toute demande d'information ou
                                accompagnement stratégique, notre équipe est
                                disponible pour vous répondre.
                            </p>
                        </div>
                    </section>

                    {/* SECTION CONTACT */}
                    <section className="py-20 px-6 bg-gray-50">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                            {/* INFOS */}
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold mb-6">
                                    Parlons ensemble
                                </h2>

                                <p className="text-gray-600 leading-relaxed">
                                    Notre équipe est disponible pour répondre à
                                    vos besoins stratégiques, institutionnels et
                                    opérationnels.
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <p className="font-semibold">
                                            Téléphone
                                        </p>
                                        <a
                                            href="https://wa.me/237696532736"
                                            target="_blank"
                                            className="text-green-600 hover:underline"
                                        >
                                            (+237) 696 53 27 36
                                        </a>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a
                                            href="mailto:direction@africa-trainingteam.com"
                                            className="text-green-600 hover:underline"
                                        >
                                            direction@africa-trainingteam.com
                                        </a>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Adresse</p>
                                        <p className="text-gray-600">
                                            BP : 424 Yaoundé – Cameroun
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* FORMULAIRE */}
                            <div className="bg-white p-10 rounded-3xl shadow-xl">
                                <form onSubmit={submit} className="space-y-6">
                                    <input
                                        type="text"
                                        placeholder="Votre nom"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full border border-gray-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm">
                                            {errors.name}
                                        </p>
                                    )}

                                    <input
                                        type="email"
                                        placeholder="Votre email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="w-full border border-gray-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.email}
                                        </p>
                                    )}

                                    <input
                                        type="text"
                                        placeholder="Sujet"
                                        value={data.subject}
                                        onChange={(e) =>
                                            setData("subject", e.target.value)
                                        }
                                        className="w-full border border-gray-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm">
                                            {errors.subject}
                                        </p>
                                    )}

                                    <textarea
                                        rows="5"
                                        placeholder="Votre message"
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        className="w-full border border-gray-200 px-5 py-4 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition resize-none"
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm">
                                            {errors.message}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-green-600 text-white py-4 rounded-full font-semibold hover:bg-green-700 transition duration-300 shadow-lg"
                                    >
                                        Envoyer le message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </PublicLayout>
    );
}
