import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function Dashboard({
    user,
    subscription,
    subscriptions,
    packs,
}) {
    const pack = subscription?.pack;
    const availableUpgrades =
        pack && packs ? packs.filter((p) => p.price > pack.price) : [];

    let daysLeft = null;
    let progressPercent = 0;
    let progressColor = "bg-green-600";
    let alertMessage = null;
    let expiryDate = null;
    const upgradePack = (packId) => {
        router.post(`/upgrade/${packId}`);
    };

    const renewSubscription = () => {
        router.post("/renew");
    };
    const hasActive = subscription && subscription.status === "active";
    const isExpired = subscription && subscription.status === "expired";
    const hasNoSubscription = !subscription;

    // Calcul si abonnement actif
    if (subscription) {
        const startDate = new Date(subscription.start_date);
        const endDate = new Date(subscription.end_date);
        const today = new Date();

        const totalDuration = endDate - startDate;
        const elapsed = today - startDate;

        progressPercent = Math.min(
            100,
            Math.max(0, (elapsed / totalDuration) * 100),
        );

        const diffTime = endDate - today;
        daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        expiryDate = endDate.toLocaleDateString();

        // Couleur dynamique
        if (daysLeft <= 5) {
            progressColor = "bg-red-600";
            alertMessage = "⚠️ Votre abonnement expire très bientôt !";
        } else if (daysLeft <= 10) {
            progressColor = "bg-orange-500";
            alertMessage = "⏳ Votre abonnement arrive à expiration.";
        }
    }

    // Badge pack
    let badgeColor = "bg-gray-500";
    let badgeText = pack?.name ?? "Basic";

    if (pack) {
        if (pack.name.toLowerCase().includes("pro")) {
            badgeColor = "bg-green-600";
        } else if (pack.name.toLowerCase().includes("premium")) {
            badgeColor = "bg-purple-600";
        }
    }

    // const safePacks = packs ?? [];
    const safeSubscriptions = subscriptions ?? [];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-8">
                        <h1 className="text-2xl font-bold mb-6">
                            Bienvenue {user.name}
                        </h1>

                        {pack ? (
                            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                                {/* Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold text-green-700">
                                        Pack actif : {pack.name}
                                    </h2>

                                    <span
                                        className={`${badgeColor} text-white px-4 py-1 rounded-full text-sm font-semibold shadow`}
                                    >
                                        {badgeText}
                                    </span>
                                </div>

                                <p className="mb-4">{pack.description}</p>

                                <ul className="mb-6 list-disc list-inside">
                                    {pack.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>

                                {/* Infos abonnement */}
                                <div className="bg-white p-4 rounded border">
                                    <p>
                                        📅 Actif jusqu’au :{" "}
                                        <strong>{expiryDate}</strong>
                                    </p>
                                    <p>
                                        ⏳ Jours restants :{" "}
                                        <strong className="text-green-600">
                                            {daysLeft} jours
                                        </strong>
                                    </p>
                                    <div className="mt-6">
                                        <p className="mb-2 text-sm text-gray-600">
                                            Progression de votre abonnement
                                        </p>

                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full transition-all duration-500 ${progressColor}`}
                                                style={{
                                                    width: `${progressPercent}%`,
                                                }}
                                            ></div>
                                        </div>

                                        <p className="mt-2 text-sm text-gray-500">
                                            {Math.round(progressPercent)}%
                                            utilisé
                                        </p>

                                        {alertMessage && (
                                            <div className="mt-4 p-3 rounded bg-red-100 text-red-700 text-sm font-medium">
                                                {alertMessage}
                                            </div>
                                        )}

                                        <div className="mt-6 gap-4 flex flex-wrap">
                                            {isExpired && (
                                                <button
                                                    onClick={() =>
                                                        router.post("/renew")
                                                    }
                                                    className="bg-green-600 text-white px-4 py-2 rounded mt-4"
                                                >
                                                    Renouveler l’abonnement
                                                </button>
                                            )}

                                            <button
                                                onClick={() =>
                                                    router.post(
                                                        "/toggle-auto-renew",
                                                    )
                                                }
                                                className={`px-4 py-2 rounded text-white ${
                                                    subscription.auto_renew
                                                        ? "bg-green-600"
                                                        : "bg-gray-600"
                                                }`}
                                            >
                                                {subscription.auto_renew
                                                    ? "Auto-Renew activé"
                                                    : "Activer Auto-Renew"}
                                            </button>
                                            {hasActive && (
                                                <button
                                                    onClick={() =>
                                                        router.post(
                                                            "/cancel-subscription",
                                                        )
                                                    }
                                                    className="bg-red-600 text-white px-4 py-2 rounded mt-4"
                                                >
                                                    Annuler l’abonnement
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-red-100 p-6 rounded-lg">
                                <p className="text-lg">
                                    Vous n’avez pas encore de pack actif.
                                </p>

                                {hasNoSubscription && (
                                    <a
                                        href="/packs"
                                        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
                                    >
                                        Voir les packs
                                    </a>
                                )}
                            </div>
                        )}
                        {availableUpgrades.length > 0 && (
                            <div className="mt-8 p-6 border rounded-lg bg-gray-50">
                                <h3 className="text-lg font-semibold mb-4">
                                    Améliorer votre pack
                                </h3>

                                {availableUpgrades.map((p) => (
                                    <div
                                        key={p.id}
                                        className="flex justify-between items-center mb-3"
                                    >
                                        <div>
                                            <p className="font-medium">
                                                {p.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {p.price} FCFA
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => upgradePack(p.id)}
                                            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                                        >
                                            Upgrade
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {safeSubscriptions.length > 0 && (
                            <div className="mt-12">
                                <h2 className="text-xl font-bold mb-4">
                                    Historique des abonnements
                                </h2>

                                <div className="overflow-hidden rounded-lg border border-gray-200">
                                    <table className="w-full text-left">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="p-3">Pack</th>
                                                <th className="p-3">Début</th>
                                                <th className="p-3">Fin</th>
                                                <th className="p-3">Statut</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {safeSubscriptions.map((sub) => (
                                                <tr
                                                    key={sub.id}
                                                    className="border-t"
                                                >
                                                    <td className="p-3">
                                                        {sub.pack?.name}
                                                    </td>
                                                    <td className="p-3">
                                                        {new Date(
                                                            sub.start_date,
                                                        ).toLocaleDateString()}
                                                    </td>
                                                    <td className="p-3">
                                                        {new Date(
                                                            sub.end_date,
                                                        ).toLocaleDateString()}
                                                    </td>
                                                    <td className="p-3">
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-white text-sm 
                                    ${
                                        sub.status === "active"
                                            ? "bg-green-600"
                                            : "bg-gray-500"
                                    }`}
                                                        >
                                                            {sub.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
