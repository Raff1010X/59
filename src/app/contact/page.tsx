import type { Metadata } from 'next'

import ProjectList from '@/components/projectList/projectList'

export const metadata: Metadata = {
    description: 'contacts2',
}

export default function Contact() {
    return (
        <main>
            <ProjectList />
        </main>

        )
}