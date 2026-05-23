'use client';

import { useState } from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { PageShell } from '@/components/SiteChrome';
import { brand } from '@/components/data';

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Contato() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const form = e.currentTarget;

    const data = {
      nome: form.nome.value,
      email: form.email.value,
      telefone: form.telefone.value,
      assunto: form.assunto.value,
      mensagem: form.mensagem.value,
    };

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem.');
      }

      setStatus('Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.');
      form.reset();
    } catch (error) {
      setStatus('Não foi possível enviar sua mensagem. Tente novamente ou fale pelo WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

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
              <InstagramIcon size={18} />
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

            <form className="contactForm" onSubmit={handleSubmit}>
              <input name="nome" type="text" placeholder="Nome" required />
              <input name="email" type="email" placeholder="E-mail" required />
              <input name="telefone" type="tel" placeholder="Telefone / WhatsApp" />

              <select name="assunto" defaultValue="" required>
                <option value="" disabled>Assunto</option>
                <option>Patrocínio</option>
                <option>Evento</option>
                <option>Marketing esportivo</option>
                <option>Investidores</option>
                <option>Projetos sociais</option>
                <option>Outro assunto</option>
              </select>

              <textarea name="mensagem" placeholder="Mensagem" rows="6" required />

              <button type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar mensagem'}
                <ArrowRight size={18} />
              </button>

              {status && <p className="formStatus">{status}</p>}
            </form>
          </div>
        </section>
      </main>
    </PageShell>
  );
}