import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 mb-10 text-center text-black dark:text-white/80 ">
      <small className="block mb-2 text-xs">
        &copy; 2024 Utkarsh All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website :</span> built with
        Next.js (App Router & Server Actions), Tailwind CSS,
         Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
