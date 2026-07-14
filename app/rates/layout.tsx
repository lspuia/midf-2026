import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultation Fees & Rates',
  description: 'MIDF member te chuan Minimum Design Fee/Rate - 2D, 3D, Supervision rates per sq.ft.',
  openGraph: {
    title: 'Consultation Fees & Rates | MIDF',
    description: 'MIDF member te chuan Minimum Design Fee/Rate - 2D, 3D, Supervision rates per sq.ft.',
  },
};

export default function RatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
