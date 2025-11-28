"use client";

import Link from "next/link";

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        color: "white",
        padding: "10rem 2rem 6rem",
        textAlign: "center",
        marginTop: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements - Mais presentes */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "8%",
          fontSize: "12rem",
          opacity: 0.15,
          transform: "rotate(15deg)",
        }}
      >
        🥝
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "8%",
          fontSize: "10rem",
          opacity: 0.15,
          transform: "rotate(-15deg)",
        }}
      >
        🥝
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          fontSize: "6rem",
          opacity: 0.08,
          transform: "rotate(25deg)",
        }}
      >
        🥝
      </div>
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "15%",
          fontSize: "5rem",
          opacity: 0.08,
          transform: "rotate(-25deg)",
        }}
      >
        🥝
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="animate-fade-in-up">
          {/* Logo/Brand - MAIOR e mais marcante */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              background: "rgba(255,255,255,0.2)",
              padding: "1.2rem 3rem",
              borderRadius: "60px",
              marginBottom: "2.5rem",
              backdropFilter: "blur(15px)",
              border: "2px solid rgba(255,255,255,0.3)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ fontSize: "3rem" }}>🥝</span>
            <span
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                letterSpacing: "2px",
                textShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              KIWI
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              marginBottom: "2rem",
              lineHeight: 1.1,
              fontWeight: 900,
              textShadow: "0 2px 20px rgba(0,0,0,0.1)",
            }}
          >
            Transforme Compras em
            <br />
            <span
              style={{
                background: "linear-gradient(to right, #fff, #d1fae5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Clientes Fiéis
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              marginBottom: "1.5rem",
              opacity: 0.95,
              maxWidth: "750px",
              margin: "0 auto 1.5rem",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            Sistema completo de pontos e recompensas que faz seu cliente voltar
            sempre.
          </p>

          {/* Destaque do plano grátis */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              background: "rgba(255,255,255,0.25)",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              marginBottom: "3rem",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(255,255,255,0.4)",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              fontWeight: 700,
            }}
          >
            <span style={{ fontSize: "1.8rem" }}>🎉</span>
            <span>GRÁTIS até 50 clientes • Sem cartão</span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "5rem",
            }}
          >
            <button
              onClick={onRegisterClick}
              style={{
                background: "white",
                color: "#059669",
                padding: "1.5rem 3.5rem",
                borderRadius: "60px",
                fontWeight: 800,
                border: "none",
                fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                cursor: "pointer",
                boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
                transition: "all 0.3s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,0.25)";
              }}
            >
              <span>Criar Conta Grátis</span>
              <span style={{ fontSize: "1.5rem" }}>→</span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("como-funciona")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "transparent",
                color: "white",
                padding: "1.5rem 3rem",
                borderRadius: "60px",
                fontWeight: 700,
                border: "2px solid rgba(255,255,255,0.5)",
                fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                cursor: "pointer",
                transition: "all 0.3s",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.borderColor = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              }}
            >
              Ver Como Funciona
            </button>
          </div>

          {/* Value Props Cards - Melhorados */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2rem",
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "0 1rem",
            }}
          >
            {[
              {
                icon: "⚡",
                title: "Setup em 5min",
                desc: "Pronto pra usar hoje",
              },
              {
                icon: "🎯",
                title: "Qualquer Negócio",
                desc: "Restaurante a academia",
              },
              {
                icon: "📱",
                title: "100% Web",
                desc: "Sem app, sem hardware",
              },
              {
                icon: "💰",
                title: "Grátis até 50",
                desc: "Zero custo pra começar",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(15px)",
                  padding: "2.5rem 2rem",
                  borderRadius: "25px",
                  border: "2px solid rgba(255,255,255,0.3)",
                  textAlign: "center",
                  transition: "all 0.3s",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.1)";
                }}
              >
                <div
                  style={{
                    fontSize: "3.5rem",
                    marginBottom: "1.2rem",
                    filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "0.6rem",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    opacity: 0.95,
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
              opacity: 0.9,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  marginBottom: "0.3rem",
                }}
              >
                5min
              </div>
              <div style={{ fontSize: "0.95rem", opacity: 0.9 }}>
                Para configurar
              </div>
            </div>
            <div
              style={{
                width: "1px",
                height: "40px",
                background: "rgba(255,255,255,0.3)",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  marginBottom: "0.3rem",
                }}
              >
                100%
              </div>
              <div style={{ fontSize: "0.95rem", opacity: 0.9 }}>
                Sem código
              </div>
            </div>
            <div
              style={{
                width: "1px",
                height: "40px",
                background: "rgba(255,255,255,0.3)",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  marginBottom: "0.3rem",
                }}
              >
                R$ 0
              </div>
              <div style={{ fontSize: "0.95rem", opacity: 0.9 }}>
                Pra começar
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
