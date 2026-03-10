import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Index({ articles }) {

    const handleDelete = (id) => {
        Swal.fire({
            title: "Supprimer cet article ?",
            text: "Cette action est irréversible.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Oui, supprimer",
            cancelButtonText: "Annuler",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/admin/articles/${id}`);
            }
        });
    };

    return (
        <AdminLayout>
            <Head title="Gestion des articles" />

            <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Publications</h1>

                    <a
                        href="/admin/articles/create"
                        className="bg-green-600 text-white px-4 py-2 rounded"
                    >
                        + Nouvelle publication
                    </a>
                </div>

                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4">Titre</th>
                                <th className="p-4">Type</th>
                                <th className="p-4">Statut</th>
                                <th className="p-4">Vues</th>
                                <th className="p-4">Auteur</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {articles.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="p-6 text-center text-gray-500"
                                    >
                                        Aucune publication
                                    </td>
                                </tr>
                            )}

                            {articles.map((article) => (
                                <tr key={article.id} className="border-t">
                                    <td className="p-4 font-medium">
                                        {article.title}
                                    </td>

                                    <td className="p-4 capitalize">
                                        {article.type}
                                    </td>

                                    <td className="p-4">
                                        <span
                                            className={`px-3 py-1 rounded text-white text-sm 
                                            ${
                                                article.status === "published"
                                                    ? "bg-green-600"
                                                    : "bg-gray-500"
                                            }
                                        `}
                                        >
                                            {article.status}
                                        </span>
                                    </td>

                                    <td className="p-4">{article.views}</td>

                                    <td className="p-4">
                                        {article.author_name}
                                    </td>

                                    <td className="p-4 space-x-3">
                                        <a
                                            href={`/admin/articles/${article.id}/edit`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Éditer
                                        </a>

                                        <button
                                            onClick={() =>
                                                handleDelete(article.id)
                                            }
                                            className="bg-red-600 text-white px-4 py-2 rounded"
                                        >
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
