import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'contact',
    description: 'contacts',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section>
    )
}
