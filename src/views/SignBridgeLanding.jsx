// SignBridgeLanding.jsx
// Landing page principal para SignBridge – Traductor de LSC
// Conecta con: React Router (usa <Link> si está disponible) o <a href>

import React from 'react'
import '../stylies/SignBridgeLanding.css'

/* ── SVG animado: par de manos firmando ── */
const HandsSVG = () => (
  <svg
    viewBox="0 0 420 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: '100%' }}
  >
    {/* Glow de fondo */}
    <circle cx="210" cy="210" r="170" fill="url(#glowGrad)" />

    {/* ── MANO IZQUIERDA ── */}
    <g style={{ animation: 'signLeft 3.2s ease-in-out infinite', transformOrigin: '160px 260px' }}>
      {/* Palma */}
      <rect x="118" y="220" width="85" height="95" rx="20" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="2"/>
      {/* Dedo índice extendido */}
      <rect x="165" y="155" width="18" height="72" rx="9" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="2"/>
      {/* Dedo medio levemente curvado */}
      <rect x="145" y="165" width="16" height="62" rx="8" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.8"/>
      {/* Dedos anular y meñique doblados */}
      <rect x="127" y="190" width="14" height="40" rx="7" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.5"/>
      <rect x="110" y="200" width="13" height="30" rx="6.5" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.4"/>
      {/* Pulgar */}
      <rect x="196" y="220" width="14" height="48" rx="7" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="1.5" transform="rotate(25 196 220)"/>
      {/* Brillo en nudillos */}
      <circle cx="165" cy="220" r="3" fill="#4ECDC4" opacity="0.6"/>
      <circle cx="148" cy="224" r="2.5" fill="#4ECDC4" opacity="0.4"/>
    </g>

    {/* ── MANO DERECHA ── */}
    <g style={{ animation: 'signRight 3.2s ease-in-out infinite', transformOrigin: '265px 260px' }}>
      {/* Palma */}
      <rect x="215" y="220" width="85" height="95" rx="20" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="2"/>
      {/* Dedo índice doblado (diferente seña) */}
      <rect x="222" y="175" width="16" height="52" rx="8" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="2"/>
      {/* Dedo medio extendido */}
      <rect x="240" y="160" width="18" height="67" rx="9" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="2"/>
      {/* Anular */}
      <rect x="259" y="175" width="15" height="52" rx="7.5" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.75"/>
      {/* Meñique */}
      <rect x="275" y="188" width="13" height="40" rx="6.5" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.5"/>
      {/* Pulgar */}
      <rect x="202" y="228" width="14" height="44" rx="7" fill="#1E2E2D" stroke="#4ECDC4" strokeWidth="1.5" transform="rotate(-25 202 228)"/>
      {/* Brillo en nudillos */}
      <circle cx="250" cy="220" r="3" fill="#4ECDC4" opacity="0.6"/>
      <circle cx="267" cy="222" r="2.5" fill="#4ECDC4" opacity="0.4"/>
    </g>

    {/* Partículas flotantes */}
    {[
      { cx: 95,  cy: 140, r: 3,   delay: '0s',    dur: '3s' },
      { cx: 330, cy: 155, r: 2,   delay: '0.8s',  dur: '3.5s' },
      { cx: 180, cy: 105, r: 2.5, delay: '1.5s',  dur: '2.8s' },
      { cx: 295, cy: 115, r: 2,   delay: '0.3s',  dur: '4s' },
      { cx: 210, cy: 80,  r: 3.5, delay: '1.2s',  dur: '3.2s' },
      { cx: 130, cy: 340, r: 2,   delay: '2s',    dur: '3s' },
      { cx: 305, cy: 345, r: 2.5, delay: '1.8s',  dur: '2.6s' },
    ].map((p, i) => (
      <circle
        key={i}
        cx={p.cx} cy={p.cy} r={p.r}
        fill="#4ECDC4"
        opacity="0.5"
        style={{ animation: `float ${p.dur} ease-in-out ${p.delay} infinite` }}
      />
    ))}

    {/* Arco de señal entre manos */}
    <path
      d="M 175 215 Q 210 170 245 215"
      stroke="#4ECDC4"
      strokeWidth="1.5"
      strokeDasharray="5 4"
      fill="none"
      opacity="0.4"
    />

    {/* Gradientes */}
    <defs>
      <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.08"/>
        <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
);

/* ── Componente principal ── */
export default function SignBridgeLanding() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="container nav__inner">
          <a href="/" className="nav__logo">
            <span className="nav__logo-icon" aria-hidden="true">🤟</span>
            SignBridge
          </a>
          <ul className="nav__links">
            <li><a href="#como-funciona">Cómo funciona</a></li>
            <li><a href="#funcionalidades">Funciones</a></li>
            <li><a href="#acerca">Acerca de</a></li>
            <li><a href="#comenzar" className="nav__cta">Comenzar gratis</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section className="hero">
          <div className="container hero__inner">
            {/* Copy */}
            <div>
              <p className="hero__eyebrow animate-fade-up">
                <span className="hero__eyebrow-dot" aria-hidden="true"/>
                LSC · Lengua de Señas Colombiana
              </p>
              <h1 className="hero__title animate-fade-up animate-fade-up--delay-1">
                La voz que hablan<br/>
                <span>las manos</span>
              </h1>
              <p className="hero__subtitle animate-fade-up animate-fade-up--delay-2">
                SignBridge traduce en tiempo real entre Lengua de Señas Colombiana
                y texto/voz, acercando a la comunidad sorda con el mundo.
              </p>
              <div className="hero__actions animate-fade-up animate-fade-up--delay-3">
                <a href="#comenzar" className="btn btn--primary">
                  Probar ahora
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#como-funciona" className="btn btn--ghost">
                  Ver demo
                  <span aria-hidden="true">▶</span>
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="hero__visual" aria-hidden="true">
              <div className="hero__hand-wrapper">
                <div className="hero__glow"/>
                <HandsSVG />
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="stats" aria-label="Estadísticas de impacto">
          <div className="container">
            <div className="stats__grid">
              <div className="stat">
                <p className="stat__number"><span>+500K</span></p>
                <p className="stat__label">personas sordas en Colombia</p>
              </div>
              <div className="stat">
                <p className="stat__number"><span>1</span> intérprete</p>
                <p className="stat__label">por cada 8.000 personas sordas</p>
              </div>
              <div className="stat">
                <p className="stat__number"><span>24/7</span></p>
                <p className="stat__label">disponibilidad con SignBridge</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section id="como-funciona" className="how">
          <div className="container">
            <header className="section-header">
              <p className="section-header__tag">Proceso</p>
              <h2 className="section-header__title">Tres pasos, cero barreras</h2>
              <p className="section-header__desc">
                Sin instalaciones complicadas. Solo abre, señas y SignBridge hace el resto.
              </p>
            </header>

            <div className="how__steps">
              {[
                {
                  num: '01',
                  icon: '📷',
                  title: 'Activa la cámara',
                  desc: 'SignBridge usa la cámara de tu dispositivo para capturar tus señas en tiempo real con precisión de 30 fps.',
                },
                {
                  num: '02',
                  icon: '🤖',
                  title: 'IA reconoce la seña',
                  desc: 'Nuestro modelo analiza posición de manos, movimiento y expresión facial para identificar cada seña de LSC.',
                },
                {
                  num: '03',
                  icon: '💬',
                  title: 'Traduce al instante',
                  desc: 'El resultado aparece como texto y puede leerse en voz alta, o bien el texto de otros se convierte en señas animadas.',
                },
              ].map((step) => (
                <article key={step.num} className="step">
                  <p className="step__num">{step.num}</p>
                  <div className="step__icon" aria-hidden="true">{step.icon}</div>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__desc">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE ── */}
        <section className="quote-section" aria-label="Testimonio">
          <div className="container">
            <blockquote className="quote">
              <p className="quote__text">
                SignBridge no es solo una app — es la primera vez que puedo hablar
                con mi médico sin necesitar a alguien más en la sala.
              </p>
              <footer className="quote__author">
                <div className="quote__avatar" aria-hidden="true">ML</div>
                <div className="quote__meta">
                  <p className="quote__name">María Luisa Cárdenas</p>
                  <p className="quote__role">Usuario beta · Bogotá, Colombia</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── FUNCIONALIDADES ── */}
        <section id="funcionalidades" className="features">
          <div className="container">
            <header className="section-header">
              <p className="section-header__tag">Funcionalidades</p>
              <h2 className="section-header__title">Diseñado desde adentro<br/>de la comunidad</h2>
            </header>

            <div className="features__grid">
              {[
                {
                  icon: '🎯',
                  iconClass: 'feature-card__icon--teal',
                  title: 'Reconocimiento en tiempo real',
                  desc: 'Latencia menor a 200ms usando modelos de visión computacional optimizados para LSC.',
                  wide: false,
                },
                {
                  icon: '🔊',
                  iconClass: 'feature-card__icon--coral',
                  title: 'Salida de voz natural',
                  desc: 'Las señas traducidas se convierten en voz con síntesis de texto en español colombiano.',
                  wide: false,
                },
                {
                  icon: '🤝',
                  iconClass: 'feature-card__icon--purple',
                  title: 'Modo conversación bidireccional',
                  desc: 'Oyentes escriben o hablan → SignBridge convierte a señas animadas en pantalla. La comunidad sorda seña → texto en pantalla para el oyente. Sin intermediarios.',
                  wide: true,
                },
                {
                  icon: '📚',
                  iconClass: 'feature-card__icon--gold',
                  title: 'Diccionario de LSC integrado',
                  desc: 'Más de 2.000 señas catalogadas con video de referencia y contexto cultural.',
                  wide: false,
                },
                {
                  icon: '🔒',
                  iconClass: 'feature-card__icon--teal',
                  title: 'Privacidad desde el diseño',
                  desc: 'El video jamás sale de tu dispositivo. Todo el procesamiento es local. Ley 1581 de 2012.',
                  wide: false,
                },
              ].map((f, i) => (
                <div key={i} className={`feature-card${f.wide ? ' feature-card--wide' : ''}`}>
                  <div className={`feature-card__icon ${f.iconClass}`} aria-hidden="true">
                    {f.icon}
                  </div>
                  <div className="feature-card__body">
                    <h3 className="feature-card__title">{f.title}</h3>
                    <p className="feature-card__desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="comenzar" className="cta-section">
          <div className="container">
            <div className="cta-box">
              <h2 className="cta-box__title">
                Empieza a comunicarte<br/>sin límites hoy
              </h2>
              <p className="cta-box__desc">
                Acceso gratuito durante la fase beta. Sé parte del puente
                que conecta a Colombia.
              </p>
              <div className="cta-box__actions">
                <a href="/register" className="btn btn--primary">
                  Crear cuenta gratuita
                  <span aria-hidden="true">🤟</span>
                </a>
                <a href="/demo" className="btn btn--ghost">
                  Ver demo en vivo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer" id="acerca">
        <div className="container footer__inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} SignBridge · Bogotá, Colombia · SENA ADSO
          </p>
          <ul className="footer__links">
            <li><a href="/privacy">Privacidad</a></li>
            <li><a href="/terms">Términos</a></li>
            <li><a href="/accessibility">Accesibilidad</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
