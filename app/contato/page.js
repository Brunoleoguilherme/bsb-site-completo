import { ArrowRight, Mail, MessageCircle, Instagram } from 'lucide-react';
import { PageShell } from '@/components/SiteChrome';
import { brand } from '@/components/data';

export default function Contato() {
  return (
    <PageShell>
      <main className="contactPage">
        <section className="contactHero">
          <p className="eyebrow green">Contato</p>
          <h1>Conecte-se com a BSB</h1>
          <p>
            Envie sua demanda e nossa equipe irá avaliar a melhor forma de construir
            uma oportunidade esportiva com você.
          </p>

          <div className="contactActions">
            <a className="primaryBtn" href={brand.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>

            <a className="darkBtn" href={brand.email}>
              <Mail size={18} />
              Enviar e-mail
            </a>

            <a className="darkBtn" href={brand.instagram} target="_blank" rel="noreferrer">
              <Instagram size={18} />
              Instagram
            </a>
          </div>
        </section>

        <section className="contactFormSection">
          <div className="contactFormCard">
            <div>
              <p className="eyebrow green">Briefing inicial</p>
              <h2>Fale sobre sua ideia.</h2>
              <p>
                Projetos, patrocínios, eventos, mídia, ativações, investidores,
                parcerias ou novas oportunidades.
              </p>
            </div>

            <form className="contactForm">
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <input type="tel" placeholder="Telefone / WhatsApp" />

              <select defaultValue="">
                <option value="" disabled>Assunto</option>
                <option>Patrocínio</option>
                <option>Evento</option>
                <option>Marketing esportivo</option>
                <option>Investidores</option>
                <option>Projetos sociais</option>
                <option>Outro assunto</option>
              </select>

              <textarea placeholder="Mensagem" rows="6" />

              <button type="submit">
                Enviar mensagem
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>
    </PageShell>
  );
}