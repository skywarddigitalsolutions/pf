"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const url = `https://api.whatsapp.com/send?phone=${phone}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-green-500 hover:bg-green-600
        text-white flex items-center justify-center
        shadow-lg transition-colors
        cursor-pointer
      "
    >
      <FaWhatsapp size={28} />
    </Link>
  );
}
