import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events Gallery',
  description: "MIDF Designers' Meet & events photo gallery - Inaugural Meet 2022 at Aijal Club.",
  openGraph: {
    title: 'Events Gallery | MIDF',
    description: "MIDF Designers' Meet & events photo gallery - Inaugural Meet 2022 at Aijal Club.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
