'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const galleryImages = [
    '/assets/gallery/00001-midf-meet-2022.jpeg',
    '/assets/gallery/00006-midf-meet-2022.jpeg',
    '/assets/gallery/00010-midf-meet-2022.jpeg',
    '/assets/gallery/00034-midf-meet-2022.jpg',
  ];

  return (
    <div className="page-wrapper">
      {/* ===== HERO ===== */}
      <section style={{ display: 'flex', flexWrap: 'wrap', background: '#033A37' }}>
        {/* Left Column */}
        <div
          style={{
            flex: '1 1 400px',
            padding: 'clamp(36px, 6vw, 84px) clamp(24px, 5vw, 72px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 'clamp(18px, 2.2vw, 26px)',
            animation: 'midfRise .7s ease both',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              color: '#C5975B',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: 34,
                height: 2,
                background: '#C5975B',
                display: 'inline-block',
              }}
            />
            Est. 2022 · Aizawl, Mizoram
          </div>

          {/* H1 */}
          <h1
            className="font-bodoni"
            style={{
              margin: 0,
              fontWeight: 500,
              color: '#F4F0E8',
              fontSize: 'clamp(38px, 5.6vw, 74px)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
            }}
          >
            Mizoram Interior
            <br />
            Designers Forum
          </h1>

          {/* Paragraph */}
          <p
            style={{
              margin: 0,
              maxWidth: '44ch',
              color: '#cfe0da',
              fontSize: 'clamp(15px, 1.15vw, 18px)',
              lineHeight: 1.65,
            }}
          >
            Mizoram chhunga Interior Designer te insuihkhawmna pawl — mumal zawka
            designing hna thawh.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 6 }}>
            <Link
              href="/membership"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#C5975B',
                color: '#0b2e2a',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '15px 26px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#d8b47e')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#C5975B')}
            >
              Member Nih Dan <span className="font-bodoni">→</span>
            </Link>
            <Link
              href="/gallery"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                color: '#F4F0E8',
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '15px 24px',
                border: '1px solid rgba(255, 255, 255, 0.24)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C5975B';
                e.currentTarget.style.color = '#C5975B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)';
                e.currentTarget.style.color = '#F4F0E8';
              }}
            >
              Gallery
            </Link>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div
          style={{
            flex: '1.35 1 460px',
            minHeight: 'clamp(320px, 52vh, 600px)',
            position: 'relative',
          }}
        >
          <Image
            src="/assets/gallery/00019-midf-meet-2022.jpeg"
            alt="MIDF Designers' Meet, Aijal Club"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #033A37 0%, transparent 22%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              background: '#C5975B',
              color: '#0b2e2a',
              padding: '12px 20px',
              fontWeight: 600,
              fontSize: '11.5px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            Designers' Meet · 24.09.2022
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: 'clamp(48px, 8vw, 110px) clamp(20px, 5vw, 72px)',
        }}
      >
        {/* Section Head */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 20,
            marginBottom: 'clamp(28px, 4vw, 48px)',
          }}
        >
          <span
            className="font-bodoni"
            style={{ color: '#C5975B', fontSize: 'clamp(24px, 3vw, 36px)' }}
          >
            01
          </span>
          <h2
            className="font-bodoni"
            style={{
              margin: 0,
              fontWeight: 500,
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              letterSpacing: '-0.01em',
              color: '#033A37',
            }}
          >
            About the Forum
          </h2>
        </div>

        {/* Two Columns */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(32px, 5vw, 72px)',
          }}
        >
          {/* Main Content */}
          <div style={{ flex: '2 1 440px' }}>
            <p
              style={{
                margin: '0 0 22px',
                fontSize: 'clamp(15px, 1.05vw, 17.5px)',
                lineHeight: 1.75,
                color: '#2b3a35',
              }}
            >
              Mizoram Interior Designer's Forum (MIDF) hi Mizoram chhunga
              Interior Designer te insuihkhawmna pawl niin ni 31.07.2022 khan din
              tan a ni a, a hmasa ber atan ni 24.9.2022 khan Aijal Club ah
              hruaitu thlanna leh MIDF meet vawi 1 na neih a ni a, hetah hian mi
              paruk kan thlang chhuaka, an ni kaihhruaina hnuaiah hian MIDF
              committee te inruatin hma lak chhoh tan nghal a ni.
            </p>
            <p
              style={{
                margin: '0 0 28px',
                fontSize: 'clamp(15px, 1.05vw, 17.5px)',
                lineHeight: 1.75,
                color: '#2b3a35',
              }}
            >
              MIDF hian kan eizawnna Interior Designing a kan huang chin humhalh
              ngai te, mumal zawka Designer te kan insuihkhawm nan te, client te
              nena kan thubuai hlabuai rem kawngah te, rate in ang tlang leh
              mumal zawka kan neih theih nan te leh kan designer puite chhiatni
              thatni a kan in tawiawmna tur kawngah te hma a la thin a ni.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                borderLeft: '3px solid #C5975B',
                padding: '6px 0 6px 16px',
                fontWeight: 600,
                fontSize: 14,
                color: '#033A37',
                letterSpacing: '0.02em',
              }}
            >
              Registration No. MSR 1573 of 02.02.2023
            </div>
          </div>

          {/* Contact Card */}
          <aside
            style={{
              flex: '1 1 300px',
              alignSelf: 'flex-start',
              border: '2px solid #033A37',
              background: '#ffffff',
            }}
          >
            <div
              className="font-bodoni"
              style={{
                background: '#033A37',
                color: '#F4F0E8',
                padding: '18px 22px',
                fontSize: 20,
              }}
            >
              Contact Details
            </div>
            <div
              style={{
                padding: 22,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#8a7a5c',
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:midf.mizoram@gmail.com"
                  style={{ fontSize: '15.5px', color: '#033A37', fontWeight: 600 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C5975B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#033A37')}
                >
                  midf.mizoram@gmail.com
                </a>
              </div>
              <hr style={{ border: 0, borderTop: '1px solid #d8d2c4', margin: 0 }} />
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#8a7a5c',
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  Phone
                </div>
                <div style={{ fontSize: '15.5px', color: '#033A37', fontWeight: 600 }}>
                  87943 15532
                  <br />
                  96121 47337
                </div>
              </div>
              <hr style={{ border: 0, borderTop: '1px solid #d8d2c4', margin: 0 }} />
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#8a7a5c',
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  Location
                </div>
                <div style={{ fontSize: '15.5px', color: '#033A37', fontWeight: 600 }}>
                  Aizawl, Mizoram
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ===== FACTS BAND ===== */}
      <section style={{ background: '#033A37', color: '#F4F0E8' }}>
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: 'clamp(36px, 4vw, 60px) clamp(20px, 5vw, 72px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: 2,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ background: '#033A37', padding: '24px clamp(16px, 2vw, 28px)' }}>
            <div
              className="font-bodoni"
              style={{
                fontSize: 'clamp(30px, 3.2vw, 44px)',
                color: '#C5975B',
                lineHeight: 1,
              }}
            >
              2022
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: '12.5px',
                letterSpacing: '0.06em',
                color: '#bcd0ca',
              }}
            >
              Din tan — 31.07.2022
            </div>
          </div>
          <div style={{ background: '#033A37', padding: '24px clamp(16px, 2vw, 28px)' }}>
            <div
              className="font-bodoni"
              style={{
                fontSize: 'clamp(30px, 3.2vw, 44px)',
                color: '#C5975B',
                lineHeight: 1,
              }}
            >
              Meet I
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: '12.5px',
                letterSpacing: '0.06em',
                color: '#bcd0ca',
              }}
            >
              Aijal Club — 24.09.2022
            </div>
          </div>
          <div style={{ background: '#033A37', padding: '24px clamp(16px, 2vw, 28px)' }}>
            <div
              className="font-bodoni"
              style={{
                fontSize: 'clamp(30px, 3.2vw, 44px)',
                color: '#C5975B',
                lineHeight: 1,
              }}
            >
              MSR 1573
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: '12.5px',
                letterSpacing: '0.06em',
                color: '#bcd0ca',
              }}
            >
              Society Registration
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY TEASER ===== */}
      <section
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: 'clamp(48px, 7vw, 100px) clamp(20px, 5vw, 72px)',
        }}
      >
        {/* Head Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 20,
            marginBottom: 'clamp(24px, 3vw, 40px)',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 16,
                marginBottom: 14,
              }}
            >
              <span
                className="font-bodoni"
                style={{ color: '#C5975B', fontSize: 15 }}
              >
                02
              </span>
              <h6
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#4a5a55',
                }}
              >
                Kan Insuihkhawmna
              </h6>
            </div>
            <h2
              className="font-bodoni"
              style={{
                margin: 0,
                fontWeight: 500,
                fontSize: 'clamp(26px, 3.2vw, 42px)',
                lineHeight: 1.1,
                color: '#033A37',
              }}
            >
              Designers' Meet & Gallery
            </h2>
          </div>
          <Link
            href="/gallery"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontWeight: 700,
              fontSize: '12.5px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#033A37',
              borderBottom: '2px solid #C5975B',
              paddingBottom: 6,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C5975B')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#033A37')}
          >
            Gallery →
          </Link>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 14,
          }}
        >
          {galleryImages.map((src, index) => (
            <div
              key={index}
              style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}
            >
              <Image
                src={src}
                alt="MIDF meet"
                fill
                style={{
                  objectFit: 'cover',
                  transition: 'transform .5s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
