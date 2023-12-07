import Chat from '@/components/chat/chat'
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
      <Chat
        header={['porozmawiajmy', 'o Twoim projekcie']}
        text={['Potrzebujesz doradztwa ekspertów od digital marketingu?']}
        button='bezpłatna konsultacja'
        linkTo='/contact'
      />
    </section>
  )
}
