"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const AdminNavbar: FC = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link href="/public" className="flex items-center gap-3">
                            <Image
                                src="/Logo.jpg"
                                alt="Dintsun Logo"
                                width={50}
                                height={50}
                                className="rounded-md shadow-sm"
                            />
                            <span className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                Dintsun
              </span>
                        </Link>
                    </div>

                    {/* Admin Icon */}
                    <div className="flex items-center">
                        <Link
                            href="/admin"
                            className="p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            aria-label="Admin dashboard"
                        >
                            <svg
                                className="h-8 w-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.8}
                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
