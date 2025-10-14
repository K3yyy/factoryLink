export interface Link {
    title: string
    url: string
}

interface LinkCollectionProps {
    links: Link[]
    title?: string
}

export function LinkCollection({ links, title = "Links" }: LinkCollectionProps) {
    return (
        <div className="max-w-7xl  mx-auto p-5 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">{title}</h1>

            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border bg-blue-500 rounded-lg hover:bg-accent transition-colors"
                    >
                        <h2 className="font-medium mb-1 text-balance">{link.title}</h2>
                    </a>
                ))}
            </div>
        </div>
    )
}
