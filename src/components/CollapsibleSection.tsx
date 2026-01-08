"use client";

import { useState } from "react";

export default function CollapsibleSection({
                                               title,
                                               children,
                                           }: {
    title: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded-xl mb-4 shadow-md overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-5 py-3 font-semibold bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 transition-colors duration-300 focus:outline-none relative"
            >
                <span className="text-gray-800">{title}</span>
                {/* CSS arrow */}
                <span
                    className={`inline-block transform transition-transform duration-300 text-gray-600`}
                    style={{
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                >
          ▼
        </span>
            </button>

            {/* Animated collapse */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    open ? "max-h-[1000px] p-5" : "max-h-0 p-0"
                }`}
            >
                {children}
            </div>
        </div>
    );
}
