export const SocialLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        className="w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 hover:bg-green-500 transition-all duration-300"
    >
        {children}
    </a>
);

export const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-green-400"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.52 5.82L0 24l6.34-1.66A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0zm0 21.82c-1.87 0-3.69-.49-5.3-1.42l-.38-.23-3.76.98.99-3.66-.25-.38A9.82 9.82 0 012.18 12c0-5.43 4.4-9.82 9.82-9.82s9.82 4.4 9.82 9.82-4.4 9.82-9.82 9.82z" />
    </svg>
);

export const LocationIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-green-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
        <circle cx="12" cy="9" r="2" />
    </svg>
);

export const TwitterIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M24 4.56a9.93 9.93 0 01-2.82.77A4.93 4.93 0 0023.34 3a9.86 9.86 0 01-3.13 1.2 4.92 4.92 0 00-8.38 4.48A13.94 13.94 0 011.67 3.15a4.92 4.92 0 001.52 6.56 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.93 4.93 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 21.54 13.94 13.94 0 007.55 24c9.05 0 14-7.5 14-14v-.64A9.93 9.93 0 0024 4.56z" />
    </svg>
);

export const MailIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-green-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path d="M4 4h16v16H4z" />
        <path d="M22 6l-10 7L2 6" />
    </svg>
);

export const FacebookIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.75 8.45-4.91 8.45-9.93z" />
    </svg>
);

export const LinkedinIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM7.12 20H3.56V9h3.56v11zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20 20h-3.56v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V20H8.85V9h3.42v1.5h.05c.48-.9 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.52V20z" />
    </svg>
);

export const InstagramIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 2.69.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.36-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 110 12.32 6.16 6.16 0 010-12.32zm0 10.16a4 4 0 100-8 4 4 0 000 8zm6.41-11.85a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
);

export const CopyIcon = () => {
    return (
        <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
    );
};
