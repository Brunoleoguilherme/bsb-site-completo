import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageShell, CTA } from '@/components/SiteChrome';
import { projects, getProject, brand } from '@/components/data';

export async function generateStaticParams(){return projects.map((p)=>({slug:p.slug}))}
export async function generateMetadata({params}){const p=getProject(params.slug); return {title: p ? `${p.title} | Brasil Sports Business` : 'Projeto BSB'}}

export default function ProjectPage({params}){
  const p=getProject(params.slug); if(!p) return notFound(); const Icon=p.icon;
  return <PageShell><main>
    <section className={`projectHero ${p.color}`}>
      <div className="projectHeroBg"><Image src={p.image} alt={p.title} fill priority/></div><div className="projectOverlay"/>
      <div className="projectHeroContent"><p className="eyebrow">{p.category} • {p.year}</p><h1>{p.title}</h1><p>{p.subtitle}</p><div className="actions"><a className="primaryBtn" href={brand.whatsapp} target="_blank" rel="noreferrer">Conectar projeto <ArrowRight size={18}/></a><Link className="darkBtn" href="/contato">Falar com a BSB <ArrowRight size={18}/></Link></div></div>
      <div className="projectBadge"><Icon size={28}/><span>{p.tag}</span></div>
    </section>
    <section className="section twoCol"><div><p className="eyebrow green">Visão geral</p><h2>{p.description}</h2></div><div className="highlightList">{p.highlights.map((h)=><span key={h}><CheckCircle2 size={18}/>{h}</span>)}</div></section>
    <section className="section storyGrid">{p.sections.map(([t,tx])=><article className="storyCard" key={t}><p className="eyebrow green">{t}</p><h3>{t}</h3><p>{tx}</p></article>)}</section>
    <section className="featureBand reverse"><div className="featureText"><p className="eyebrow green">Página conectada</p><h2>Esse projeto faz parte do ecossistema BSB.</h2><p>Cada propriedade é pensada para gerar valor real: relacionamento, mídia, ativações, patrocínio, experiência, impacto e legado.</p><div className="actions"><Link className="primaryBtn" href="/eventos">Ver todos os eventos <ArrowRight size={18}/></Link></div></div><div className="featureMedia"><Image src="/assets/mockup-pages.png" alt="Ecossistema BSB" fill/></div></section>
    <CTA title={`Quer se conectar ao ${p.title}?`} text="Fale com a BSB para patrocínio, parceria, mídia, investimento, operação ou desenvolvimento de novos projetos."/>
  </main></PageShell>
}
