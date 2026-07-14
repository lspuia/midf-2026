import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership',
  description: 'MIDF member nih dan - Interior Design lama zirna leh thiamna nei, MIDF-a inziahluh duh te tan.',
  openGraph: {
    title: 'Membership | MIDF',
    description: 'MIDF member nih dan - Interior Design lama zirna leh thiamna nei, MIDF-a inziahluh duh te tan.',
  },
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
