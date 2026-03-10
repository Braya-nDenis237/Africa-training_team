import { usePage } from '@inertiajs/react';

export default function Premium() {
    const { auth } = usePage().props;

    if (!auth.subscription) {
        return (
            <div style={{ padding: "40px" }}>
                <h1>Accès refusé</h1>
                <p>Vous devez avoir un pack actif.</p>
            </div>
        );
    }

    return (
        <div style={{ padding: "40px" }}>
            <h1>Contenu Premium</h1>
            <p>Bienvenue membre {auth.user.name} !</p>
        </div>
    );
}