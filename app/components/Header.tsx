'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: 'About', href: '/' },
    { label: 'Membership', href: '/membership' },
    { label: 'Rates', href: '/rates' },
    { label: 'Gallery', href: '/gallery' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#F4F0E8',
        borderBottom: '2px solid #033A37',
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '20px clamp(16px, 4vw, 40px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        <Link href="/" style={{ display: 'block', flex: '0 0 auto' }}>
          <Image
            src="/assets/New-LOGO.png"
            alt="MIDF — Mizoram Interior Designers Forum"
            width={200}
            height={95}
            style={{
              height: 'clamp(54px, 6vw, 72px)',
              width: 'auto',
              display: 'block',
            }}
            priority
          />
        </Link>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(14px, 2.6vw, 34px)',
            flexWrap: 'wrap',
            fontWeight: 600,
            fontSize: '12.5px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: isActive ? '#033A37' : '#4a5a55',
                  padding: '6px 0',
                  borderBottom: isActive ? '2px solid #C5975B' : '2px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#033A37';
                    e.currentTarget.style.borderBottom = '2px solid #C5975B';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#4a5a55';
                    e.currentTarget.style.borderBottom = '2px solid transparent';
                  }
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
