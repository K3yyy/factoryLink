"use client";

import { useState } from "react";
import { systemLink} from "../../data/data";
import {Link} from "@/components/link-collection";

export default function EmployeeLinkProtected() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [linkToOpen, setLinkToOpen] = useState<string | null>(null);

    const handleLinkClick = (url: string) => {
        setShowPassword(true);
        setLinkToOpen(url);
    };

    const handleCheckPassword = () => {
        if (password === "143") {
            if (linkToOpen) window.open(linkToOpen, "_blank");
            setShowPassword(false);
            setPassword("");
            setLinkToOpen(null);
        } else {
            alert("Wrong password!");
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-5 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">Use system</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {systemLink.map((link: Link, index: number) =>
                    link.title === "Employee GMS DL" || link.title === "cutting-system"  ? (
                        <div
                            key={index}
                            onClick={() => handleLinkClick(link.url)}
                            className="p-4 border bg-blue-500 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                        >
                            <h2 className="font-medium mb-1 text-balance">{link.title}</h2>
                        </div>
                    ) : (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 border bg-blue-500 rounded-lg hover:bg-accent transition-colors"
                        >
                            <h2 className="font-medium mb-1 text-balance">{link.title}</h2>
                        </a>
                    )
                )}
            </div>

            {showPassword && (
                <div style={{ marginTop: "10px" }}>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded mr-2"
                    />
                    <button
                        onClick={handleCheckPassword}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
}
