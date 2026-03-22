import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useMemo } from "react";

export default function Create() {
    const [preview, setPreview] = useState(null);
    const [previewVideo, setPreviewVideo] = useState(null);
    const [type, setType] = useState(null);
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
        type: "article",
        image: null,
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
        status: "draft",
        file: null,
        file_type: null,
        video_url: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/articles", {
            forceFormData: true,
        });
    };

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ["bold", "italic", "underline"],
                    ["link", "image"],
                ],
                handlers: {
                    image: function () {
                        const input = document.createElement("input");
                        input.type = "file";
                        input.accept = "image/*";
                        input.click();

                        input.onchange = async () => {
                            const file = input.files[0];
                            if (!file) return;

                            const formData = new FormData();
                            formData.append("image", file);

                            const response = await fetch(
                                "/admin/upload-editor-image",
                                {
                                    method: "POST",
                                    body: formData,
                                    headers: {
                                        "X-CSRF-TOKEN": document
                                            .querySelector(
                                                'meta[name="csrf-token"]',
                                            )
                                            .getAttribute("content"),
                                    },
                                },
                            );

                            const result = await response.json();

                            const range = this.quill.getSelection(true);

                            const index = range
                                ? range.index
                                : this.quill.getLength();

                            this.quill.insertEmbed(index, "image", result.url);
                        };
                    },
                },
            },
        }),
        [],
    );

    return (
        <AdminLayout>
            <Head title="Créer une publication" />

            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">
                    Rédiger une publication
                </h1>

                <form onSubmit={submit} className="space-y-6">
                    {/* Titre */}
                    <input type="hidden" name="status" value={data.status} />
                    <div>
                        <label className="block mb-2 font-semibold">
                            Titre *
                        </label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="w-full border rounded p-3"
                        />
                        {errors.title && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.title}
                            </div>
                        )}
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
                                className="w-full border rounded p-3 resize-none"
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

                    {/* Type */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Type *
                        </label>
                        <select
                            value={data.type}
                            onChange={(e) => setData("type", e.target.value)}
                            className="w-full border rounded p-3"
                        >
                            <option value="article">Article</option>
                            <option value="news">Actualité</option>
                        </select>
                    </div>

                    {/* Contenu */}
                    <div>
                        <label className="block mb-2 font-semibold">
                            Contenu *
                        </label>
                        <ReactQuill
                            key="editor"
                            modules={modules}
                            theme="snow"
                            value={data.content || ""}
                            onChange={(value) => setData("content", value)}
                        />
                        {errors.content && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.content}
                            </div>
                        )}
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

                        {errors.image && (
                            <div className="text-red-600 text-sm mt-1">
                                {errors.image}
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Fichier (PDF, Word, PPT, MP4...)
                        </label>

                        <input
                            type="file"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (!file) return;

                                const url = URL.createObjectURL(file);
                                setPreviewVideo(url);

                                setData("file", file);

                                if (file.type.startsWith("video"))
                                    setType("video");
                                else if (file.type === "application/pdf")
                                    setType("pdf");
                                className = "w-full border rounded p-3";
                            }}
                        />

                        {type === "video" && (
                            <video
                                src={previewVideo}
                                controls
                                className="mt-4 w-64 rounded shadow"
                            />
                        )}
                        {type === "pdf" && (
                            <iframe
                                src={previewVideo}
                                className="mt-4 w-64 rounded shadow"
                            />
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold">
                            Lien vidéo (YouTube)
                        </label>

                        <input
                            type="text"
                            value={data.video_url}
                            onChange={(e) =>
                                setData("video_url", e.target.value)
                            }
                            className="w-full border rounded p-3"
                        />
                    </div>

                    {/* Bouton */}
                    <div className="flex gap-4">
                        <button
                            type="Submit"
                            onClick={() => setData("status", "draft")}
                            className="bg-gray-600 text-white px-6 py-3 rounded"
                        >
                            Sauvegarder brouillon
                        </button>

                        <button
                            type="Submit"
                            onClick={() => setData("status", "published")}
                            className="bg-green-600 text-white px-6 py-3 rounded"
                        >
                            Publier
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
