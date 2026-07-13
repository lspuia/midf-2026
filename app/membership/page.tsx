'use client';

export default function Membership() {
  return (
    <div className="page-wrapper">
      {/* PAGE HEAD */}
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
            Membership
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
            MIDF Membership
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
            Interior Design lama zirna leh thiamna nei, MIDF-a inziahlut duh te
            tan.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: 'clamp(48px, 7vw, 100px) clamp(20px, 5vw, 72px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(32px, 5vw, 72px)',
            alignItems: 'flex-start',
          }}
        >
          {/* Main Content */}
          <div style={{ flex: '2 1 460px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 16,
                marginBottom: 26,
              }}
            >
              <span
                className="font-bodoni"
                style={{ color: '#C5975B', fontSize: 15 }}
              >
                01
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
                Registration Tur
              </h6>
            </div>
            <p
              style={{
                margin: '0 0 34px',
                fontSize: 'clamp(15px, 1.1vw, 18px)',
                lineHeight: 1.8,
                color: '#2b3a35',
              }}
            >
              MIDF member atana registration ti tur te chu Interior Design ah
              Diploma chin leh a chunglam{' '}
              <strong style={{ color: '#033A37' }}>UGC Recognised</strong>{' '}
              Certificate/Degree a nei ngei te leh International/Overseas zirna a
              Certificate/Degree nei te chauh pawm tur a ni. Member registration
              ti te chuan registration no. neih theuh bawk tur a ni.
            </p>

            {/* Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 2,
                background: '#d8d2c4',
                border: '1px solid #d8d2c4',
              }}
            >
              <div style={{ background: '#ffffff', padding: '26px 24px' }}>
                <div
                  className="font-bodoni"
                  style={{
                    fontSize: 34,
                    color: '#C5975B',
                    lineHeight: 1,
                    marginBottom: 14,
                  }}
                >
                  01
                </div>
                <h4
                  style={{
                    margin: '0 0 8px',
                    fontWeight: 700,
                    fontSize: 16,
                    color: '#033A37',
                  }}
                >
                  Zirna & Certificate
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: '14.5px',
                    lineHeight: 1.65,
                    color: '#4a5a55',
                  }}
                >
                  Interior Design ah Diploma chin leh a chunglam UGC Recognised
                  Certificate/Degree, emaw International/Overseas zirna
                  Certificate/Degree.
                </p>
              </div>
              <div style={{ background: '#ffffff', padding: '26px 24px' }}>
                <div
                  className="font-bodoni"
                  style={{
                    fontSize: 34,
                    color: '#C5975B',
                    lineHeight: 1,
                    marginBottom: 14,
                  }}
                >
                  02
                </div>
                <h4
                  style={{
                    margin: '0 0 8px',
                    fontWeight: 700,
                    fontSize: 16,
                    color: '#033A37',
                  }}
                >
                  Registration No.
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: '14.5px',
                    lineHeight: 1.65,
                    color: '#4a5a55',
                  }}
                >
                  Member registration ti te chuan registration no. neih theuh bawk
                  tur a ni.
                </p>
              </div>
            </div>
          </div>

          {/* FEE CARD */}
          <aside
            style={{
              flex: '1 1 300px',
              alignSelf: 'flex-start',
              border: '2px solid #033A37',
              background: '#033A37',
              color: '#F4F0E8',
            }}
          >
            <div
              style={{
                padding: '26px 26px 6px',
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C5975B',
                fontWeight: 700,
              }}
            >
              Annual Fee
            </div>
            <div
              style={{
                padding: '0 26px 8px',
                display: 'flex',
                alignItems: 'baseline',
                gap: 8,
              }}
            >
              <span
                className="font-bodoni"
                style={{
                  fontSize: 'clamp(52px, 8vw, 72px)',
                  lineHeight: 1,
                  color: '#F4F0E8',
                }}
              >
                ₹2,000
              </span>
              <span style={{ color: '#9cb5ae', fontSize: 15 }}>/ kum</span>
            </div>
            <div
              style={{
                padding: '0 26px 26px',
                color: '#bcd0ca',
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Sawrkar Financial Year mil in kum khat atan ₹.2,000/-
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '22px 26px',
              }}
            >
              <div style={{ fontSize: 13, color: '#9cb5ae', lineHeight: 1.6 }}>
                midf.mizoram@gmail.com
                <br />
                87943 15532 · 96121 47337
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
