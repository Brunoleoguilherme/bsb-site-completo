import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { PageShell, CTA } from '@/components/SiteChrome';
import { projects, services, stats } from '@/components/data';

export default function Home() {
  const featured = projects.slice(0, 6);

  return (
    <PageShell>
      <main>

        {/* HERO */}
        <section className="hero">

          <div className="heroBg">
            <Image
              src="/assets/bsb-logo-bandeira.jpeg"
              alt="Bandeira BSB"
              fill
              sizes="100vw"
            />
          </div>

          <div className="heroImage">
            <Image
              src="/assets/college-press.png"
              alt="College Football Brasil"
              fill
              priority
              sizes="(max-width: 1000px) 100vw, 55vw"
            />
          </div>

          <div className="heroContent">

            <p className="eyebrow">
              Brasil Sports Business
            </p>

            <h1>
              Conectamos o Brasil ao{' '}
              <strong>melhor do esporte global.</strong>
            </h1>

            <p className="lead">
              Eventos, patrocínios, propriedades esportivas,
              experiências internacionais, impacto social e
              oportunidades para atletas, marcas e instituições.
            </p>

            <div className="actions">

              <Link
                className="primaryBtn"
                href="/sobre"
              >
                Conheça a BSB
                <ArrowRight size={18}/>
              </Link>

              <Link
                className="darkBtn"
                href="/eventos"
              >
                Nossos eventos
                <ArrowRight size={18}/>
              </Link>

            </div>

          </div>

          <div className="scrollHint">
            scroll
          </div>

        </section>

        {/* STATS */}
        <section className="statsBar">

          {stats.map(([num, label, Icon]) => (

            <div className="stat" key={label}>

              <Icon />

              <b>{num}</b>

              <span>{label}</span>

            </div>

          ))}

        </section>

        {/* TITULO */}
        <section className="section splitTitle">

          <div>

            <p className="eyebrow green">
              Ecossistema BSB
            </p>

            <h2>
              Projetos, eventos e plataformas
            </h2>

          </div>

          <p className="sectionText">
            Um hub de sports business que une esporte,
            entretenimento, cultura, intercâmbio,
            patrocínio, turismo, impacto social
            e desenvolvimento de atletas.
          </p>

        </section>

        {/* CARDS */}
        <section className="cards eventsGrid">

          {featured.map((p) => (

            <Link
              className={`eventCard ${p.color}`}
              key={p.slug}
              href={`/projetos/${p.slug}`}
            >

              <div className="eventVisual">

                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1000px) 100vw, 33vw"
                />

                <span>{p.tag}</span>

              </div>

              <p className="eyebrow green">
                {p.category}
              </p>

              <h3>{p.title}</h3>

              <p>{p.description}</p>

              <b>
                Ver página
                <ArrowRight size={15}/>
              </b>

            </Link>

          ))}

        </section>

        {/* FEATURE PREMIUM */}
        <section className="featureBand">

          <div className="featureMedia">

            <Image
              src="/images/portfolio-real-2.jpg"
              alt="Portfólio BSB"
              fill
              sizes="(max-width: 1000px) 100vw, 50vw"
              style={{ objectFit:'cover' }}
            />

          </div>

          <div className="featureOverlay"></div>

          <div className="featureText">

            <p className="eyebrow green">
              Portfolio real
            </p>

            <h2>
              De ligas nacionais a experiências internacionais.
            </h2>

            <p>
              A BSB criou, operou e desenvolveu projetos como
              College Football Brasil,
              Brasil Flag World Championship,
              Brasil Bowl,
              Taça Brasil,
              MGFL,
              Brasil FA Camp,
              American Fun Fest,
              World Fun Fest
              e Touchdown do Bem.
            </p>

            <Link
              className="primaryBtn"
              href="/projetos"
            >
              Explorar projetos
              <ArrowRight size={18}/>
            </Link>

          </div>

        </section>

        {/* SERVIÇOS */}
        <section className="section">

          <p className="eyebrow green">
            O que fazemos
          </p>

          <h2>
            Marketing esportivo com visão de negócio.
          </h2>

          <div className="serviceGrid">

            {services.map(([title, text, Icon]) => (

              <div className="service" key={title}>

                <Icon />

                <h3>{title}</h3>

                <p>{text}</p>

              </div>

            ))}

          </div>

        </section>

        {/* IMPACTO */}
        <section className="impact">

          <div className="impactImage">

            <Image
              src="/images/touchdown-do-bem.jpg"
              alt="Projeto social BSB"
              fill
              sizes="(max-width: 1000px) 100vw, 50vw"
            />

          </div>

          <div>

            <p className="eyebrow green">
              Impacto social
            </p>

            <h2>
              Impactamos vidas.
              <strong> Transformamos o futuro.</strong>
            </h2>

            <p>
              Através do esporte,
              criamos oportunidades,
              inspiramos gerações e
              construímos legado social
              positivo para o Brasil.
            </p>

            <Link
              className="primaryBtn"
              href="/projetos/touchdown-do-bem"
            >
              Touchdown do Bem
              <ArrowRight size={18}/>
            </Link>

          </div>

        </section>

        <CTA />

      </main>
    </PageShell>
  );
}