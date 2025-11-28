"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  onRegisterClick: () => void;
}

export default function Header({ onRegisterClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        color: scrolled ? "#1f2937" : "white",
        padding: scrolled ? "0.8rem 0" : "1rem 0",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        boxShadow: scrolled
          ? "0 4px 24px rgba(0, 0, 0, 0.08)"
          : "0 2px 20px rgba(16, 185, 129, 0.3)",
        backdropFilter: "blur(20px)",
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            textDecoration: "none",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {/* Logo Container com efeito */}
          <div
            style={{
              background: scrolled
                ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                : "rgba(255,255,255,0.2)",
              padding: "0.6rem",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: scrolled
                ? "0 4px 12px rgba(16, 185, 129, 0.2)"
                : "0 2px 8px rgba(0,0,0,0.1)",
              border: scrolled ? "none" : "2px solid rgba(255,255,255,0.3)",
              transition: "all 0.3s",
            }}
          >
            <span
              style={{
                fontSize: "1.8rem",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            >
              🥝
            </span>
          </div>

          <div>
            <span
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                letterSpacing: "0.5px",
                color: scrolled ? "#1f2937" : "white",
                transition: "all 0.3s",
              }}
            >
              Kiwi
            </span>
            <div
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "1px",
                color: scrolled ? "#10b981" : "rgba(255,255,255,0.8)",
                marginTop: "-2px",
                textTransform: "uppercase",
              }}
            >
              Fidelização
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          {[
            { href: "#como-funciona", label: "Como Funciona" },
            { href: "#segmentos", label: "Segmentos" },
            { href: "#precos", label: "Preços" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: scrolled ? "#4b5563" : "white",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "0.6rem 1.2rem",
                borderRadius: "12px",
                transition: "all 0.2s",
                position: "relative",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = scrolled
                  ? "rgba(16, 185, 129, 0.1)"
                  : "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = scrolled ? "#10b981" : "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = scrolled ? "#4b5563" : "white";
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "24px",
              background: scrolled
                ? "rgba(0,0,0,0.1)"
                : "rgba(255,255,255,0.3)",
              margin: "0 0.5rem",
            }}
          />

          {/* CTA Button */}
          <Link
            href="/loja/dashboard"
            style={{
              background: scrolled
                ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                : "white",
              color: scrolled ? "white" : "#059669",
              padding: "0.75rem 1.8rem",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: scrolled
                ? "0 4px 16px rgba(16, 185, 129, 0.3)"
                : "0 4px 16px rgba(0,0,0,0.15)",
              transition: "all 0.3s",
              textDecoration: "none",
              display: "inline-block",
              border: scrolled ? "none" : "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = scrolled
                ? "0 8px 24px rgba(16, 185, 129, 0.4)"
                : "0 8px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = scrolled
                ? "0 4px 16px rgba(16, 185, 129, 0.3)"
                : "0 4px 16px rgba(0,0,0,0.15)";
            }}
          >
            Entrar
          </Link>
        </div>
      </nav>

      {/* Decorative gradient bar */}
      {!scrolled && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
            opacity: 0.5,
          }}
        />

        
      )}
    </header>
  );
}
