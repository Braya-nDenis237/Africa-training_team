import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

export default function AdminDashboard({
    totalUsers,
    activeSubs,
    expiredSubs,
    totalRevenue,
    monthlyRevenue,
    revenueByMonth,
    totalVisits,
    uniqueVisitors,
    visitsByCountry,
    conversionRate,
    totalArticles,
    totalNews,
    pendingArticles,
    articlesThisMonth,
}) {
    const data = [
        { name: "Users", value: totalUsers },
        { name: "Active", value: activeSubs },
        { name: "Expired", value: expiredSubs },
    ];
    const safeCountries = visitsByCountry ?? [];
    const safeRevenue = Array.isArray(revenueByMonth) ? revenueByMonth : [];
    // console.log(conversionRate);
    return (
        <AdminLayout>
            <Head title="Admin|Dashboard" />

            <div className="p-8">
                <h1 className="text-2xl font-bold mb-8">Dashboard Admin</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <StatCard title="Utilisateurs" value={totalUsers} />

                    <StatCard title="Abonnements actifs" value={activeSubs} />

                    <StatCard title="Abonnements expirés" value={expiredSubs} />

                    <StatCard
                        title="Revenus totaux"
                        value={`${totalRevenue ?? 0} FCFA`}
                    />

                    <StatCard
                        title="Revenus mensuels"
                        value={`${monthlyRevenue ?? 0} FCFA`}
                    />
                    <StatCard
                        title="Taux de conversion"
                        value={`${conversionRate ?? 0}%`}
                    />
                    <StatCard title="Articles" value={totalArticles ?? 0} />

                    <StatCard title="Actualités" value={totalNews ?? 0} />

                    <StatCard
                        title="Articles en attente"
                        value={pendingArticles ?? 0}
                    />

                    <StatCard
                        title="Articles ce mois"
                        value={articlesThisMonth ?? 0}
                    />
                </div>
                <h2 className="text-xl font-bold mt-8 mb-4">
                    Statistiques Visiteurs
                </h2>

                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="text-gray-500">Visites totales</h3>
                        <p className="text-3xl font-bold">{totalVisits ?? 0}</p>
                    </div>

                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="text-gray-500">Visiteurs uniques</h3>
                        <p className="text-3xl font-bold">
                            {uniqueVisitors ?? 0}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12 bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-6">Gestion du contenu</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a
                        href="/admin/articles/create"
                        className="bg-green-600 text-white p-6 rounded-lg shadow hover:bg-green-700 transition"
                    >
                        ✍️ Rédiger une publication
                    </a>

                    <a
                        href="/admin/articles"
                        className="bg-gray-800 text-white p-6 rounded-lg shadow hover:bg-gray-900 transition"
                    >
                        📚 Gérer les publications
                    </a>
                </div>
            </div>
            <div className="mt-12 bg-white p-6 rounded shadow">
                <h2 className="text-lg font-semibold mb-4">Revenus par mois</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={safeRevenue}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" fill="#16a34a" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </AdminLayout>
    );
}

function StatCard({ title, value }) {
    return (
        <div className="bg-white shadow rounded-lg p-6 border">
            <h2 className="text-gray-600 text-sm mb-2">{title}</h2>
            <p className="text-2xl font-bold text-green-700">{value}</p>
        </div>
    );
}
