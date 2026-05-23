import { ArrowRight, CheckCircle2, Globe2, Handshake, TrendingUp } from 'lucide-react';
import { PageShell, HeroPage, CTA } from '@/components/SiteChrome';
import { investorBullets } from '@/components/data';

export default function Investidores() {
  return (
    <PageShell>
      <main>
        <HeroPage
          eyebrow="Investidores & Partners"
          title={'Invista no futuro <strong>do esporte</strong>.'}
          text="A BSB desenvolve propriedades esportivas com potencial de escala, mídia, turismo, patrocínio, experiências, impacto social e expansão internacional."
          image="/assets/college-press.png"
        />

        <section className="section investorPremium">
          <div className="investorIntro">
            <p className="eyebrow green">Oportunidade</p>
            <h2>Projetos com narrativa, mercado, operação e potencial comercial.</h2>
            <p>
              Do College Football Brasil ao Mundial de Flag, da New Players Sports ao
              Touchdown do Bem, a BSB conecta visão estratégica, execução real e
              oportunidades de crescimento no ecossistema esportivo.
            </p>
          </div>

          <div className="investorCards">
            <div className="investorCard">
              <TrendingUp />
              <h3>Potencial de escala</h3>
              <p>Propriedades esportivas com capacidade de crescer em mídia, público, patrocínio e território.</p>
            </div>

            <div className="investorCard">
              <Globe2 />
              <h3>Expansão global</h3>
              <p>Conexões com universidades, marcas, investidores e ecossistemas esportivos internacionais.</p>
            </div>

            <div className="investorCard">
              <Handshake />
              <h3>Parcerias estratégicas</h3>
              <p>Projetos estruturados para marcas, patrocinadores, instituições, governos e investidores.</p>
            </div>
          </div>

          <div className="investorList">
            {investorBullets.map((b) => (
              <span key={b}>
                <CheckCircle2 size={18} />
                {b}
              </span>
            ))}
          </div>

          <div className="investorCallout">
            <div>
              <p className="eyebrow green">BSB Investment Desk</p>
              <h3>Receba projetos, decks e oportunidades disponíveis.</h3>
            </div>

            <a className="primaryBtn" href="/contato">
              Falar com a BSB
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <CTA
          title="Quer avaliar uma parceria ou investimento?"
          text="Entre em contato para receber deck institucional, projetos disponíveis e possibilidades de conexão com o ecossistema BSB."
        />
      </main>
    </PageShell>
  );
}