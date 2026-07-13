'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0b2e2a', color: '#cfe0da' }}>
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: 'clamp(44px, 6vw, 80px) clamp(20px, 5vw, 72px)',
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 40,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Block */}
          <div style={{ flex: '1 1 300px' }}>
            <div
              className="font-bodoni"
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                color: '#C5975B',
                letterSpacing: '0.04em',
                lineHeight: 1,
              }}
            >
              MIDF
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: 12,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: '#8fa8a1',
              }}
            >
              Mizoram Interior Designers Forum
            </div>
            <p
              style={{
                margin: '22px 0 0',
                maxWidth: '36ch',
                fontSize: 14,
                color: '#9cb5ae',
                lineHeight: 1.7,
              }}
            >
              Mumal zawka interior designing kawngah, Mizoram designer te
              awmkhawmna.
            </p>
          </div>

          {/* Right Block - Menu & Contact */}
          <div
            style={{
              flex: '0 1 auto',
              display: 'flex',
              gap: 'clamp(40px, 7vw, 90px)',
              flexWrap: 'wrap',
            }}
          >
            {/* Menu */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C5975B',
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                Menu
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  fontSize: '14.5px',
                }}
              >
                <Link
                  href="/"
                  style={{ color: '#cfe0da' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C5975B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cfe0da')}
                >
                  About
                </Link>
                <Link
                  href="/membership"
                  style={{ color: '#cfe0da' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C5975B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cfe0da')}
                >
                  Membership
                </Link>
                <Link
                  href="/rates"
                  style={{ color: '#cfe0da' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C5975B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cfe0da')}
                >
                  Rates
                </Link>
                <Link
                  href="/gallery"
                  style={{ color: '#cfe0da' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C5975B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cfe0da')}
                >
                  Gallery
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C5975B',
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                Contact
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  fontSize: '14.5px',
                }}
              >
                <a
                  href="mailto:midf.mizoram@gmail.com"
                  style={{ color: '#cfe0da' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C5975B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cfe0da')}
                >
                  midf.mizoram@gmail.com
                </a>
                <span style={{ color: '#cfe0da' }}>87943 15532</span>
                <span style={{ color: '#cfe0da' }}>96121 47337</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(255, 255, 255, 0.12)',
            margin: 'clamp(34px, 4vw, 56px) 0 22px',
          }}
        />

        {/* Legal Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
            fontSize: 12,
            color: '#7d968f',
            letterSpacing: '0.04em',
          }}
        >
          <span>© 2022 Mizoram Interior Designers Forum · Reg. MSR 1573</span>
          <span>Aizawl, Mizoram</span>
        </div>
      </div>
    </footer>
  );
}
