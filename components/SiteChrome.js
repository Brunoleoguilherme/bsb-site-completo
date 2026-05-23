import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Camera, Mail, MessageCircle } from 'lucide-react';
import { nav, brand } from '@/components/data';

export function Header() {
  return (
    <header className="header">
      <Link className="brand" href="/">
        <Image
          src="/assets/bsb-logo-bandeira.jpeg"
          alt="Brasil Sports Business"
          width={74}
          height={74}
        />

        <span>
          Brasil
          <br />
          Sports
          <br />
          Business
        </span>
      </Link>

      <nav>
        {nav
          .filter(([label, href]) => href !== '/newsroom' && label.toLowerCase() !== 'newsroom')
          .filter(([label, href]) => href !== '/projetos' && label.toLowerCase() !== 'projetos')
          .map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
      </nav>

      <a
        className="outlineBtn"
        href={brand.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        Fale conosco
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">

        <Link className="brand footerBrand" href="/">
          <Image
            src="/assets/bsb-logo-bandeira.jpeg"
            alt="BSB"
            width={72}
            height={72}
          />

          <span>
            Brasil
            <br />
            Sports
            <br />
            Business
          </span>
        </Link>

        <p>
          Conectamos paixão, negócios e oportunidades para elevar o
          esporte brasileiro ao cenário global.
        </p>

        <div className="footerActions">

          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={20} />
            Instagram
          </a>

          <a href={brand.email}>
            <Mail size={20} />
            E-mail
          </a>

          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>

        </div>
      </div>

      <div className="footerBottom">
        <span>
          © 2026 BSB — Brasil Sports Business.
        </span>

        <span>
          Sports • Events • Sponsorship • Global Opportunities
        </span>
      </div>
    </footer>
  );
}

export function PageShell({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function CTA({
  title = 'Vamos construir algo grande no esporte?',
  text = 'Conecte sua marca, projeto ou instituição ao ecossistema premium da Brasil Sports Business.',
}) {
  return (
    <section className="ctaPanel section">
      <div>
        <p className="eyebrow green">
          Conectar com a BSB
        </p>

        <h2>
          {title}
        </h2>

        <p>
          {text}
        </p>
      </div>

      <div className="actions">
        <a
          className="primaryBtn"
          href={brand.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          Conectar agora
          <ArrowRight size={18} />
        </a>

        <Link
          className="darkBtn"
          href="/contato"
        >
          Enviar briefing
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export function HeroPage({
  eyebrow,
  title,
  text,
  image = '/assets/mockup-home.png',
}) {
  return (
    <section className="pageHero">
      <div className="pageHeroBg">
        <Image
          src={image}
          alt="BSB"
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className="pageHeroOverlay" />

      <div className="pageHeroContent">
        <p className="eyebrow">
          {eyebrow}
        </p>

        <h1 dangerouslySetInnerHTML={{ __html: title }} />

        <p>
          {text}
        </p>
      </div>
    </section>
  );
}