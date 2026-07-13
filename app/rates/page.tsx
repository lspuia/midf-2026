export default function Rates() {
  const rateRows = [
    { label: '2D', price: 'Rs.20', bg: '#ffffff' },
    { label: '3D ( +2D )', price: 'Rs.50', bg: '#faf8f3' },
    { label: 'Supervision', price: 'Rs.50', bg: '#ffffff' },
    { label: '2D + Supervision', price: 'Rs.70', bg: '#faf8f3' },
  ];

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
            Fees &amp; Rates
          </div>

          <h1
            className="font-bodoni"
            style={{
              margin: 0,
              fontWeight: 500,
              fontSize: 'clamp(34px, 4.8vw, 66px)',
              lineHeight: 1.03,
              letterSpacing: '-0.01em',
            }}
          >
            Consultation Fees &amp; Rates
          </h1>

          <p
            style={{
              margin: '22px 0 0',
              maxWidth: '60ch',
              color: '#cfe0da',
              fontSize: 'clamp(15px, 1.1vw, 18px)',
              lineHeight: 1.7,
            }}
          >
            A hnuaia mi ang hian MIDF member te chuan Minimum Design Fee/Rate
            kalpui tur a ni.
          </p>
        </div>
      </section>

      {/* Rates Content */}
      <section style={{ background: '#F4F0E8' }}>
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: 'clamp(48px, 7vw, 100px) clamp(20px, 5vw, 72px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(40px, 5vw, 64px)',
          }}
        >
        {/* A */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(20px, 4vw, 56px)',
            borderTop: '2px solid #033A37',
            paddingTop: 'clamp(20px, 3vw, 34px)',
          }}
        >
          <div
            className="font-bodoni"
            style={{
              flex: '0 0 auto',
              fontSize: 'clamp(30px, 3.4vw, 46px)',
              color: '#C5975B',
              lineHeight: 1,
              minWidth: 52,
            }}
          >
            A
          </div>
          <div style={{ flex: '1 1 420px' }}>
            <h3
              style={{
                margin: '0 0 10px',
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.6vw, 22px)',
                color: '#033A37',
              }}
            >
              Board hman zat atanga rate
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(15px, 1.05vw, 17px)',
                lineHeight: 1.75,
                color: '#2b3a35',
                maxWidth: '60ch',
              }}
            >
              Board kan hman zat atanga rate kan chhiar in Carpenter hlawh telin
              a tlem ber ah{' '}
              <strong style={{ color: '#033A37' }}>Rs.200 per sq ft</strong> a
              kalpui tur a ni.
            </p>
          </div>
        </div>

        {/* B */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(20px, 4vw, 56px)',
            borderTop: '2px solid #033A37',
            paddingTop: 'clamp(20px, 3vw, 34px)',
          }}
        >
          <div
            className="font-bodoni"
            style={{
              flex: '0 0 auto',
              fontSize: 'clamp(30px, 3.4vw, 46px)',
              color: '#C5975B',
              lineHeight: 1,
              minWidth: 52,
            }}
          >
            B
          </div>
          <div style={{ flex: '1 1 420px' }}>
            <h3
              style={{
                margin: '0 0 10px',
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.6vw, 22px)',
                color: '#033A37',
              }}
            >
              Floor Area atanga rate
            </h3>
            <p
              style={{
                margin: '0 0 24px',
                fontSize: 'clamp(15px, 1.05vw, 17px)',
                lineHeight: 1.75,
                color: '#2b3a35',
                maxWidth: '60ch',
              }}
            >
              Floor Area atanga rate kan chhiar in a tlem ber ah hetiang hian
              kal pui tur a ni.
            </p>

            {/* Rate Table */}
            <div style={{ border: '2px solid #033A37' }}>
              {rateRows.map((row, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 16,
                    alignItems: 'center',
                    padding: '14px 20px',
                    background: row.bg,
                    borderBottom: '1px solid #e2ddd0',
                  }}
                >
                  <span
                    style={{ fontWeight: 600, fontSize: '15.5px', color: '#1E2A27' }}
                  >
                    {row.label}
                  </span>
                  <span>
                    <span
                      className="font-bodoni"
                      style={{ fontSize: 20, color: '#033A37' }}
                    >
                      {row.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Archivo'",
                        fontSize: 12,
                        color: '#8a7a5c',
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                        marginLeft: 4,
                      }}
                    >
                      / sq ft
                    </span>
                  </span>
                </div>
              ))}

              {/* Emphasized Last Row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 16,
                  alignItems: 'center',
                  padding: '16px 20px',
                  background: '#033A37',
                }}
              >
                <span
                  style={{ fontWeight: 700, fontSize: '15.5px', color: '#F4F0E8' }}
                >
                  2D + 3D + Supervision
                </span>
                <span>
                  <span
                    className="font-bodoni"
                    style={{ fontSize: 22, color: '#C5975B' }}
                  >
                    Rs.100
                  </span>
                  <span
                    style={{
                      fontFamily: "'Archivo'",
                      fontSize: 12,
                      color: '#cfe0da',
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                      marginLeft: 4,
                    }}
                  >
                    / sq ft
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* C */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(20px, 4vw, 56px)',
            borderTop: '2px solid #033A37',
            paddingTop: 'clamp(20px, 3vw, 34px)',
          }}
        >
          <div
            className="font-bodoni"
            style={{
              flex: '0 0 auto',
              fontSize: 'clamp(30px, 3.4vw, 46px)',
              color: '#C5975B',
              lineHeight: 1,
              minWidth: 52,
            }}
          >
            C
          </div>
          <div style={{ flex: '1 1 420px' }}>
            <h3
              style={{
                margin: '0 0 10px',
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.6vw, 22px)',
                color: '#033A37',
              }}
            >
              Total Expenditure atanga rate
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(15px, 1.05vw, 17px)',
                lineHeight: 1.75,
                color: '#2b3a35',
                maxWidth: '60ch',
              }}
            >
              Total expenditure atanga rate lak a nih in a tlem berah{' '}
              <strong style={{ color: '#033A37' }}>20%</strong> lak tur a ni.
            </p>
          </div>
        </div>

        {/* D */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(20px, 4vw, 56px)',
            borderTop: '2px solid #033A37',
            paddingTop: 'clamp(20px, 3vw, 34px)',
          }}
        >
          <div
            className="font-bodoni"
            style={{
              flex: '0 0 auto',
              fontSize: 'clamp(30px, 3.4vw, 46px)',
              color: '#C5975B',
              lineHeight: 1,
              minWidth: 52,
            }}
          >
            D
          </div>
          <div style={{ flex: '1 1 420px' }}>
            <h3
              style={{
                margin: '0 0 10px',
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.6vw, 22px)',
                color: '#033A37',
              }}
            >
              Consultation Fee
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(15px, 1.05vw, 17px)',
                lineHeight: 1.75,
                color: '#2b3a35',
                maxWidth: '60ch',
              }}
            >
              Consultation Fee hi Vawi 1 visit ah{' '}
              <strong style={{ color: '#033A37' }}>Rs.1000</strong> a nia a, kan
              awm rei dan a zir in darkar tin ah{' '}
              <strong style={{ color: '#033A37' }}>Rs.500</strong> tih pun theih
              ani.
            </p>
          </div>
        </div>

        {/* E */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(20px, 4vw, 56px)',
            borderTop: '2px solid #033A37',
            paddingTop: 'clamp(20px, 3vw, 34px)',
          }}
        >
          <div
            className="font-bodoni"
            style={{
              flex: '0 0 auto',
              fontSize: 'clamp(30px, 3.4vw, 46px)',
              color: '#C5975B',
              lineHeight: 1,
              minWidth: 52,
            }}
          >
            E
          </div>
          <div style={{ flex: '1 1 420px' }}>
            <h3
              style={{
                margin: '0 0 10px',
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.6vw, 22px)',
                color: '#033A37',
              }}
            >
              Work Experience Kum 2 la nei tlinglo
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(15px, 1.05vw, 17px)',
                lineHeight: 1.75,
                color: '#2b3a35',
                maxWidth: '60ch',
              }}
            >
              MIDF member Kum 2 Work Experience la nei tlinglo tan 2D+3D Drawing
              fee atan{' '}
              <strong style={{ color: '#033A37' }}>Rs.25 per sq ft</strong> (
              Floor Area atanga) lak tur a ni.
            </p>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
