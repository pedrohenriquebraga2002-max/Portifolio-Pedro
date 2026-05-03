import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pedro from "@/assets/pedro.png";
import logoGrao from "@/assets/logo-grao.png";
import logoDs from "@/assets/logo-dsturismo.png";
import logoSerra from "@/assets/logo-serramar.png";
import logoEstrela from "@/assets/logo-estrela.png";
import logoYuan from "@/assets/logo-yuanware.png";
import diego from "@/assets/client-diego.png";
import samuka from "@/assets/client-samuka.png";
import davi from "@/assets/client-davi.png";
import sabrina from "@/assets/client-sabrina.png";

export const Route = createFileRoute("/")({ component: Index });

const logos = [
  { src: logoGrao, alt: "Grão Consultoria" },
  { src: logoDs, alt: "DS Turismo" },
  { src: logoSerra, alt: "Serra & Mar Fondue" },
  { src: logoEstrela, alt: "Estrela da Manhã" },
  { src: logoYuan, alt: "Yuanware" },
];

const clients = [
  { img: diego, name: "Diego Franco", role: "Personal Trainer · Newark/NJ", quote: "De $8k para $20k em 2 meses. O funil qualificou os leads para alto poder aquisitivo." },
  { img: samuka, name: "Samuka Fitness", role: "Mentor · Miami/FL", quote: "Do zero a $50k+ mensais. Fazia bico de garçom, hoje tenho a agenda lotada e escalabilidade." },
  { img: davi, name: "Davi Nascimento", role: "CEO · Grão Consultoria", quote: "De 1 cliente de R$2k para contratos B2B de R$5k+ por semana, consistentes." },
  { img: sabrina, name: "Sabrina Zanatta", role: "CEO · DS Turismo", quote: "De 100 seguidores para mais de R$60 mil faturados em apenas 50 dias de operação." },
];

function InteractiveBg() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (x: number, y: number) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((x - rect.left) / rect.width) * 100}%`);
      el.style.setProperty("--my", `${((y - rect.top) / rect.height) * 100}%`);
    };
    const m = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const t = (e: TouchEvent) => { const tt = e.touches[0]; if (tt) onMove(tt.clientX, tt.clientY); };
    const o = (e: DeviceOrientationEvent) => {
      const x = ((e.gamma ?? 0) + 45) / 90; const y = ((e.beta ?? 0) + 45) / 90;
      el.style.setProperty("--mx", `${x * 100}%`); el.style.setProperty("--my", `${y * 100}%`);
    };
    window.addEventListener("mousemove", m);
    window.addEventListener("touchmove", t, { passive: true });
    window.addEventListener("deviceorientation", o);
    return () => { window.removeEventListener("mousemove", m); window.removeEventListener("touchmove", t); window.removeEventListener("deviceorientation", o); };
  }, []);
  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(212,175,55,0.18), transparent 60%), radial-gradient(900px circle at calc(100% - var(--mx,50%)) calc(100% - var(--my,50%)), rgba(80,60,200,0.12), transparent 65%), #000`,
      }}>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    </div>
  );
}

function Gateway({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 min-h-screen w-full grid lg:grid-cols-2 gap-10 items-center px-6 md:px-16 py-16">
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold-gradient">
          <span className="h-px w-8 bg-gold/60" /> Pedro Braga · Estrategista Digital
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          Você está a um passo de acessar a <span className="text-gold-gradient">arquitetura</span> das operações digitais mais lucrativas do mercado.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg text-muted-foreground max-w-xl">
          Inteligência Artificial, Growth e Previsibilidade de Caixa para negócios de alto rendimento.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.8 }}>
          <button onClick={onEnter}
            className="gold-border group relative inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm md:text-base font-medium tracking-wide transition-all duration-500 hover:scale-[1.02]">
            <span className="text-gold-gradient">Acessar Portfólio Confidencial</span>
            <svg className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 1 }}
        className="relative w-full max-w-md lg:max-w-lg ml-auto aspect-[3/4]">
        <img src={pedro} alt="Pedro Braga" className="relative w-full h-full object-contain" />
      </motion.div>
    </motion.section>
  );
}

function Portfolio() {
  const loop = [...logos, ...logos];
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
      className="relative z-10">
      <div className="py-10 border-y border-white/5 bg-black/40 backdrop-blur">
        <p className="text-center text-xs tracking-[0.4em] text-muted-foreground mb-6">PARCEIROS ESTRATÉGICOS</p>
        <div className="overflow-hidden relative" style={{ maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)" }}>
          <div className="flex gap-16 animate-marquee w-max">
            {loop.map((l, i) => (
              <div key={i} className="h-16 w-40 flex items-center justify-center shrink-0">
                <img src={l.src} alt={l.alt} className="max-h-16 max-w-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="px-6 md:px-16 py-24 md:py-32 max-w-5xl mx-auto">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-xs tracking-[0.4em] text-gold-gradient mb-6">SOBRE</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight mb-10">
          Quem é <span className="text-gold-gradient">Pedro Braga?</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.8 }}
          className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-light">
          Com uma visão que une <span className="text-foreground">disciplina tática</span> e <span className="text-foreground">rigor analítico</span>, sou o estrategista por trás de operações digitais que escalam negócios reais. Minha jornada passa pelo esporte de alto rendimento na Europa até a liderança da <span className="text-foreground">PB Gestão</span>. Hoje, combino automação avançada com Inteligência Artificial, engenharia de tráfego e visão de negócios para criar <span className="text-gold-gradient">ecossistemas de vendas à prova de falhas.</span>
        </motion.p>
      </section>

      <section className="px-6 md:px-16 pb-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs tracking-[0.4em] text-gold-gradient">ENGENHARIA DE RESULTADOS</p>
          <h2 className="font-display text-4xl md:text-5xl">O que <span className="text-gold-gradient">eu faço</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {[
            { t: "Aquisição em Escala", d: "Tráfego pago avançado focado na redução de CAC e aumento de LTV.",
              icon: <><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></> },
            { t: "Automação com IA", d: "Implementação de Agentes de IA para otimização operacional.",
              icon: <><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M8 6V3M16 6V3M9 13h.01M15 13h.01M9 17h6"/></> },
            { t: "Arquitetura de Funis", d: "Mapeamento e construção de processos High-Ticket.",
              icon: <><path d="M3 4h18l-7 9v7l-4-2v-5z"/></> },
            { t: "Posicionamento Premium", d: "Direção de arte e branding para elevação de percepção de valor.",
              icon: <><path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17.5 6.5 21 8 13.5 3 9l6.5-.5z"/></> },
          ].map((s, i) => (
            <motion.div key={s.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="glass rounded-2xl p-7 md:p-8 hover:-translate-y-1 transition-transform duration-500 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 ring-1 ring-[#D4AF37]/30 bg-black/40">
                <svg className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.15] pb-2">Resultados <span className="text-gold-gradient">Validados</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Cases reais de operações que migraram do improviso para a previsibilidade de caixa.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {clients.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="glass rounded-2xl p-6 md:p-8 flex gap-5 md:gap-7 items-start hover:-translate-y-1 transition-transform duration-500">
              <div className="shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden ring-1 ring-[#D4AF37]/30">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl md:text-2xl">{c.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#D4AF37]/80">{c.role}</p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">"{c.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="px-6 md:px-16 pb-20 pt-10 text-center max-w-3xl mx-auto space-y-8">
        <h3 className="font-display text-3xl md:text-5xl">Assuma o controle da sua <span className="text-gold-gradient">receita.</span></h3>
        <a href="https://wa.me/5547991938144?text=Quero%20contratar%20os%20seus%20servi%C3%A7os" target="_blank" rel="noopener"
          className="animate-gold-pulse inline-flex items-center gap-3 rounded-full px-10 py-5 text-base md:text-lg font-medium text-black"
          style={{ background: "linear-gradient(135deg, #f4d97a, #D4AF37 60%, #8a6f1f)" }}>
          Quero contratar seus serviços
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0012.05 0C5.5 0 .2 5.3.2 11.85c0 2.1.55 4.15 1.6 5.95L0 24l6.35-1.65a11.85 11.85 0 005.7 1.45h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.15-1.25-6.15-3.41-8.45zM12.06 21.8h-.01a9.9 9.9 0 01-5.05-1.4l-.36-.21-3.77.98 1-3.67-.24-.38a9.9 9.9 0 01-1.5-5.27c0-5.45 4.45-9.9 9.93-9.9 2.65 0 5.15 1.04 7.02 2.92a9.86 9.86 0 012.91 7.02c0 5.45-4.45 9.91-9.93 9.91z"/></svg>
        </a>
        <div className="flex justify-center pt-6">
          <a href="https://www.instagram.com/_pedrobraga02/" target="_blank" rel="noopener" aria-label="Instagram"
            className="w-12 h-12 rounded-full gold-border flex items-center justify-center hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60 pt-8">© {new Date().getFullYear()} Pedro Braga — Estrategista Digital</p>
      </footer>
    </motion.section>
  );
}

function Index() {
  const [entered, setEntered] = useState(false);
  useEffect(() => { if (entered) window.scrollTo({ top: 0, behavior: "smooth" }); }, [entered]);
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-foreground">
      <InteractiveBg />
      <AnimatePresence mode="wait">
        {!entered ? <Gateway key="g" onEnter={() => setEntered(true)} /> : <Portfolio key="p" />}
      </AnimatePresence>
    </main>
  );
}
