import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { PageShell, HeroPage, CTA } from '@/components/SiteChrome';
import { projects } from '@/components/data';

const instagramLinks = {
  'college-football-brasil': 'https://www.instagram.com/collegefootball_brasil/',
  'touchdown-do-bem': 'https://www.instagram.com/touchdowndobem/',
  'mgfl': 'https://www.instagram.com/ligamgfl/',
  'taca-brasil': 'https://www.instagram.com/tacabrasilfa/',
  'new-players-showcase': 'https://www.instagram.com/newplayerssports/',
  'brasil-flag-world-championship': 'https://www.instagram.com/brasilflagworldchampionship/',
  'world-fun-fest': 'https://www.instagram.com/worldfunfestbh/',
  'american-fun-fest': 'https://www.instagram.com/americanfunfest/',

  'brasil-fa-camp': 'https://www.instagram.com/brasilsports.business/',
  'brasil-bowl': 'https://www.instagram.com/brasilsports.business/',
  'game-of-dreams': 'https://www.instagram.com/brasilsports.business/',
  'rugby-day': 'https://www.instagram.com/brasilsports.business/',
  'mato-grosso-bowl': 'https://www.instagram.com/brasilsports.business/',
  'brasil-x-argentina': 'https://www.instagram.com/brasilsports.business/',
  'brasil-x-argentina-rugby': 'https://www.instagram.com/brasilsports.business/',
  'festival-brasil-fa': 'https://www.instagram.com/brasilsports.business/',
  'cemig-minas-bowl': 'https://www.instagram.com/brasilsports.business/',
};

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

          <p className="eyebrow green">
            Portfolio BSB
          </p>

          <h2>
            Eventos, ligas e projetos.
          </h2>

          <div className="cards eventsGrid full">

            {projects.map((p) => (

              <a
                className={`eventCard ${p.color}`}
                href={instagramLinks[p.slug] || 'https://www.instagram.com/brasilsports.business/'}
                target="_blank"
                rel="noreferrer"
                key={p.slug}
              >

                <div className="eventVisual">

                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1000px) 100vw, 33vw"
                  />

                  <span>{p.year}</span>

                </div>

                <p className="eyebrow green">
                  {p.category}
                </p>

                <h3>{p.title}</h3>

                <p>{p.subtitle}</p>

                <b>
                  Ver Instagram
                  <ArrowRight size={15} />
                </b>

              </a>

            ))}

          </div>

        </section>

        <CTA title="Vamos levar sua marca para dentro de uma experiência esportiva?" />

      </main>
    </PageShell>
  );
}