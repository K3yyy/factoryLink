"use client"

import { useState } from "react"
import {fixedLabels} from "../../../data/flowData";

interface Label {
    id: string
    x: number
    y: number
    text: string
    link?: string
}

interface AnnotationCanvasProps {
    backgroundUrl: string
}

export default function AnnotationCanvas({ backgroundUrl }: AnnotationCanvasProps) {
    const [labels, setLabels] = useState<Label[]>([])
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editingText, setEditingText] = useState("")
    const [editingLink, setEditingLink] = useState("")
    const [isAdding, setIsAdding] = useState(false)
    const [newX, setNewX] = useState(700)
    const [newY, setNewY] = useState(400)

    const handleAddLabel = () => {
        if (!editingText.trim()) return

        const newLabel: Label = {
            id: Date.now().toString(),
            x: newX,
            y: newY,
            text: editingText,
            link: editingLink || undefined,
        }

        setLabels([...labels, newLabel])
        setEditingText("")
        setEditingLink("")
        setIsAdding(false)
        setNewX(700)
        setNewY(400)
    }

    const handleUpdateLabel = (id: string, text: string, link: string) => {
        setLabels(labels.map((label) => (label.id === id ? { ...label, text, link: link || undefined } : label)))
    }

    const handleDeleteLabel = (id: string) => {
        setLabels(labels.filter((label) => label.id !== id))
        setEditingId(null)
    }

    const handleClearAll = () => {
        setLabels([])
        setEditingId(null)
    }

    // Fixed labels positioned below each yellow line based on the diagram



    return (
        <div className="w-full h-full flex flex-col bg-gray-100">
            {/* Controls */}

            {/* Canvas Container */}
            <div className="flex-1 overflow-auto bg-gray-50 flex items-center justify-center p-4">
                <div className="relative bg-white shadow-lg" style={{ width: "1400px", height: "800px" }}>
                    {/* Background Image */}
                    <img
                        src={backgroundUrl || "/placeholder.svg"}
                        alt="Process flow diagram"
                        className="w-full h-full object-cover"
                    />

                    {/* Labels overlaid on image */}
                    {labels.map((label) => (
                        <div
                            key={label.id}
                            className="absolute flex items-center justify-center"
                            style={{
                                left: `${label.x}px`,
                                top: `${label.y}px`,
                                transform: "translateX(-50%)",
                            }}
                        >
                            <div
                                className="bg-yellow-100 border-2   border-yellow-400 rounded px-3 py-2 text-xs font-medium text-gray-800 shadow-md hover:shadow-lg transition-shadow group"
                                onClick={() => {
                                    setEditingId(label.id)
                                    setEditingText(label.text)
                                    setEditingLink(label.link || "")
                                }}
                            >
                                {label.link ? (
                                    <a
                                        href={label.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline cursor-pointer  "
                                    >
                                        {label.text}
                                    </a>
                                ) : (
                                    <span>{label.text}</span>
                                )}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleDeleteLabel(label.id)
                                    }}
                                    className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Edit Panel */}
                            {editingId === label.id && (
                                <div className="absolute bottom-full mb-2 bg-white border-2 border-gray-300 rounded shadow-lg p-3 whitespace-nowrap z-10">
                                    <div className="flex flex-col gap-2 w-64">
                                        <input
                                            type="text"
                                            value={editingText}
                                            onChange={(e) => {
                                                setEditingText(e.target.value)
                                                handleUpdateLabel(label.id, e.target.value, editingLink)
                                            }}
                                            placeholder="Label text"
                                            className="px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <input
                                            type="text"
                                            value={editingLink}
                                            onChange={(e) => {
                                                setEditingLink(e.target.value)
                                                handleUpdateLabel(label.id, editingText, e.target.value)
                                            }}
                                            placeholder="Link (optional)"
                                            className="px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <button
                                            onClick={() => {
                                                handleDeleteLabel(label.id)
                                                setEditingId(null)
                                            }}
                                            className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {fixedLabels.map((label) => (
                        <div
                            key={label.id}
                            className="absolute flex items-center justify-center"
                            style={{
                                left: `${label.x}px`,
                                top: `${label.y}px`,
                                transform: "translateX(-50%)",
                            }}
                        >
                            <a
                                href={label.href}
                                target="_blank"
                                className="bg-yellow-100 border-2 cursor-pointer hover:bg-yellow-300 border-yellow-400 rounded px-3 py-2 text-xs font-medium text-gray-800 shadow-md"
                            >
                                {label.text}

                            </a>

                        </div>
                    ))}
                </div>
            </div>

            {/* Info Panel */}
            <div className="bg-white shadow-sm p-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                    Labels added: <span className="font-semibold text-gray-900">{labels.length}</span>
                </p>
            </div>
        </div>
    )
}
