'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  // Generate meet-2023 images (1-4) and meet-2022 images (1-30)
  const meet2023Images = Array.from({ length: 4 }, (_, i) => ({
    src: `/assets/gallery/meet-2023-${i + 1}.jpg`,
    caption: 'MIDF Inaugural Meet · Aijal Club, 24.09.2022',
  }));

  const meet2022Images = Array.from({ length: 30 }, (_, i) => ({
    src: `/assets/gallery/meet-2022-${i + 1}.jpg`,
    caption: 'MIDF Inaugural Meet · Aijal Club, 24.09.2022',
  }));

  const inauguralImages = [...meet2023Images, ...meet2022Images];

  const registrationImage = {
    src: '/assets/gallery/society-registration.jpg',
    caption: 'MIDF Society Registration Certificate',
  };

  const closeLightbox = () => setLightbox(null);

  return (
    <main>
      {/* Page Head */}
      <section style={{ background: '#033A37', color: '#F4F0E8' }}>
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: 'clamp(40px, 6vw, 88px) clamp(20px, 5vw, 72px)',
          }}
        >
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
              marginBottom: 20,
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
            Gallery
          </div>

          <h1
            className="font-bodoni"
            style={{
              margin: 0,
              fontWeight: 500,
              fontSize: 'clamp(38px, 5.4vw, 72px)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
            }}
          >
            Kan Insuihkhawmna
          </h1>

          <p
            style={{
              margin: '22px 0 0',
              maxWidth: '56ch',
              color: '#cfe0da',
              fontSize: 'clamp(15px, 1.1vw, 18px)',
              lineHeight: 1.7,
            }}
          >
            MIDF Designers' Meet leh insuihkhawmna hmanlai lem te.
          </p>
        </div>
      </section>

      {/* Content Section with Paper Background */}
      <section style={{ background: '#F4F0E8' }}>
        {/* Inaugural Meet */}
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: 'clamp(44px, 6vw, 84px) clamp(20px, 5vw, 72px) clamp(20px, 3vw, 32px)',
          }}
        >
          {/* Section Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 16,
              flexWrap: 'wrap',
              marginBottom: 'clamp(20px, 3vw, 32px)',
              borderBottom: '2px solid #033A37',
              paddingBottom: 14,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
              <span
                className="font-bodoni"
                style={{ color: '#C5975B', fontSize: 15 }}
              >
                01
              </span>
              <h2
                className="font-bodoni"
                style={{
                  margin: 0,
                  fontWeight: 500,
                  fontSize: 'clamp(24px, 2.8vw, 36px)',
                  color: '#033A37',
                }}
              >
                Inaugural Meet 2022
              </h2>
            </div>
            <span
              style={{
                fontSize: 12,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#8a7a5c',
                fontWeight: 600,
              }}
            >
              Aijal Club · 24.09.2022
            </span>
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 10,
            }}
          >
            {inauguralImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setLightbox(image)}
                style={{
                  aspectRatio: '1 / 1',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#e6e1d5',
                  border: 'none',
                  padding: 0,
                  position: 'relative',
                }}
              >
                <Image
                  src={image.src}
                  alt="MIDF Inaugural Meet 2022"
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                {/* Temporary number overlay for identification */}
                <span
                  style={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: '#fff',
                    padding: '4px 10px',
                    fontSize: 16,
                    fontWeight: 700,
                    zIndex: 10,
                  }}
                >
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Society Registration */}
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: 'clamp(28px, 4vw, 48px) clamp(20px, 5vw, 72px) clamp(48px, 7vw, 100px)',
          }}
        >
          {/* Section Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 16,
              marginBottom: 'clamp(20px, 3vw, 32px)',
              borderBottom: '2px solid #033A37',
              paddingBottom: 14,
            }}
          >
            <span
              className="font-bodoni"
              style={{ color: '#C5975B', fontSize: 15 }}
            >
              02
            </span>
            <h2
              className="font-bodoni"
              style={{
                margin: 0,
                fontWeight: 500,
                fontSize: 'clamp(24px, 2.8vw, 36px)',
                color: '#033A37',
              }}
            >
              Society Registration
            </h2>
          </div>

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Certificate Image */}
            <button
              onClick={() => setLightbox(registrationImage)}
              style={{
                flex: '1 1 360px',
                maxWidth: 520,
                overflow: 'hidden',
                cursor: 'pointer',
                border: '2px solid #033A37',
                background: '#fff',
                padding: 0,
              }}
            >
              <Image
                src={registrationImage.src}
                alt="MIDF Society Registration Certificate"
                width={520}
                height={700}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </button>

            {/* Text */}
            <div style={{ flex: '1 1 280px' }}>
              <p
                style={{
                  margin: '0 0 16px',
                  fontSize: 'clamp(15px, 1.1vw, 18px)',
                  lineHeight: 1.75,
                  color: '#2b3a35',
                }}
              >
                Mizoram Interior Designers Forum hi Society ah official-in
                registered a ni.
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  borderLeft: '3px solid #C5975B',
                  padding: '6px 0 6px 16px',
                  fontWeight: 600,
                  fontSize: 15,
                  color: '#033A37',
                }}
              >
                Registration No. MSR 1573 of 02.02.2023
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === 'Escape' && closeLightbox()}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(11, 46, 42, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(16px, 4vw, 48px)',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: 20,
              right: 24,
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#F4F0E8',
              width: 46,
              height: 46,
              fontSize: 22,
              cursor: 'pointer',
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#C5975B';
              e.currentTarget.style.color = '#C5975B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.color = '#F4F0E8';
            }}
          >
            ✕
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            style={{
              margin: 0,
              maxWidth: '92vw',
              maxHeight: '88vh',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              alignItems: 'center',
            }}
          >
            <Image
              src={lightbox.src}
              alt="MIDF"
              width={1200}
              height={900}
              style={{
                maxWidth: '92vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                width: 'auto',
                height: 'auto',
              }}
            />
            <figcaption
              style={{
                color: '#C5975B',
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {lightbox.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
