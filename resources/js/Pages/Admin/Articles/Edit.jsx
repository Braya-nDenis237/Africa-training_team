import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Edit({ article }) {
    const [preview, setPreview] = useState(
        article.image ? `/storage/${article.image}` : null,
    );

    const { data, setData, post, processing, errors } = useForm({
        title: article.title || "",
        content: article.content || "",
        type: article.type || "article",
        image: null,
        meta_title: article.meta_title || "",
        meta_description: article.meta_description || "",
        meta_keywords: article.meta_keywords || "",
        status: article.status || "draft",
        _method: "put",
    });

    const submit = (e) => {
        e.preventDefault();
        post(`/admin/articles/${article.id}`, {
            forceFormData: true,
        });
    };

    const publishArticle = (id) => {
        Swal.fire({
            title: "Publier cet article ?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Oui, publier",
            cancelButtonText: "Annuler",
        }).then((result) => {
            if (result.isConfirmed) {
                router.put(`/admin/articles/${id}/publish`, {
                    preserveScroll: true,
                });
            }
        });
    };

    const unpublishArticle = (id) => {
        Swal.fire({
            title: "Repasser en brouillon ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Oui",
        }).then((result) => {
            if (result.isConfirmed) {
                router.put(`/admin/articles/${id}/unpublish`, {
                    preserveScroll: true,
                });
            }
        });
    };

    return (
        <AdminLayout>
            <Head title="Modifier publication" />

            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">
                    Modifier la publication
                </h1>

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label className="block mb-2 font-semibold">
                            Titre
                        </label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border rounded p-3"
                        />
                    </div>

                    <div className="mt-8 p-6 border rounded bg-gray-50">
                        <h2 className="text-lg font-bold mb-4">SEO</h2>

                        <div className="mb-4">
                            <label className="block mb-2">Meta Title</label>
                            <input
                                type="text"
                                value={data.meta_title}
                                onChange={(e) =>
                                    setData("meta_title", e.target.value)
                                }
                                className="w-full border rounded p-3"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2">
                                Meta Description
                            </label>
                            <textarea
                                value={data.meta_description}
                                onChange={(e) =>
                                    setData("meta_description", e.target.value)
                                }
                                rows="3"
                                className="w-full border rounded p-3"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">Meta Keywords</label>
                            <input
                                type="text"
                                value={data.meta_keywords}
                                onChange={(e) =>
                                    setData("meta_keywords", e.target.value)
                                }
                                className="w-full border rounded p-3"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Contenu
                        </label>
                        <ReactQuill
                            value={data.content}
                            onChange={(value) => setData("content", value)}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Image de couverture
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                setData("image", file);
                                setPreview(URL.createObjectURL(file));
                            }}
                            className="w-full border rounded p-3"
                        />

                        {preview && (
                            <img
                                src={preview}
                                className="mt-4 w-64 rounded shadow"
                            />
                        )}
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-6 py-3 rounded"
                        >
                            Mettre à jour
                        </button>

                        {article.status === "draft" && (
                            <button
                                type="button"
                                onClick={() => publishArticle(article.id)}
                                className="bg-blue-600 text-white px-6 py-3 rounded"
                            >
                                Publier
                            </button>
                        )}

                        {article.status === "published" && (
                            <button
                                type="button"
                                onClick={() => unpublishArticle(article.id)}
                                className="bg-yellow-600 text-white px-6 py-3 rounded"
                            >
                                Repasser en brouillon
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
