import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { PageShell, HeroPage, CTA } from '@/components/SiteChrome';
import { projects } from '@/components/data';

export default function Eventos() {
  return (
    <PageShell>
      <main>
        <HeroPage
          eyebrow="Eventos BSB"
          title={'Experiências que <strong>viram legado</strong>.'}
          text="Eventos esportivos, culturais, sociais, internacionais e comerciais criados para conectar público, marcas e oportunidades."
          image="/images/portfolio-real-2.jpg"
        />

        <section className="section">
          <p className="eyebrow green">Portfolio BSB</p>
          <h2>Eventos, ligas e projetos.</h2>

          <div className="cards eventsGrid full">
            {projects.map((p) => (
              <Link
                className={`eventCard ${p.color}`}
                href={`/projetos/${p.slug}`}
                key={p.slug}
              >
                <div className="eventVisual">
                  <Image src={p.image} alt={p.title} fill />
                  <span>{p.year}</span>
                </div>

                <p className="eyebrow green">{p.category}</p>
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>

                <b>
                  Abrir página <ArrowRight size={15} />
                </b>
              </Link>
            ))}
          </div>
        </section>

        <CTA title="Vamos levar sua marca para dentro de uma experiência esportiva?" />
      </main>
    </PageShell>
  );
}