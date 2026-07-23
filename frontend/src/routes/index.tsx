import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import heroFlowers from "@/assets/hero-flowers.jpg";
import floralAccent from "@/assets/floral.png";
import celebration from "@/assets/celebration.jpg";

export const Route = createFileRoute("/")({
  component: Invitation,
});

const EVENT_DATE = new Date("2026-09-12T19:00:00");

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function fireConfetti() {
  const colors = ["#e08a6b", "#c9704f", "#d4b483", "#8b6b4a", "#f5e6d3"];
  const end = Date.now() + 1500;
  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.7 },
      colors,
      scalar: 1.1,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.7 },
      colors,
      scalar: 1.1,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.5 },
    colors,
    shapes: ["circle", "square"],
    scalar: 1.3,
  });
}

function Invitation() {
  const c = useCountdown(EVENT_DATE);
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const floral1Ref = useRef<HTMLImageElement>(null);
  const floral2Ref = useRef<HTMLImageElement>(null);
  const storyImgRef = useRef<HTMLImageElement>(null);
  const celebrationRef = useRef<HTMLImageElement>(null);
  const rsvpFloral1Ref = useRef<HTMLImageElement>(null);
  const rsvpFloral2Ref = useRef<HTMLImageElement>(null);
  const [rsvpSent, setRsvpSent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.3 },
        colors: ["#e08a6b", "#d4b483", "#8b6b4a", "#f5e6d3"],
      });
    }, 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(h > 0 ? y / h : 0);
        const k = window.innerWidth < 768 ? 0.4 : 1;
        if (heroRef.current)
          heroRef.current.style.transform = `translate3d(0, ${y * 0.4 * k}px, 0) scale(${1 + y * 0.0004})`;
        if (heroContentRef.current) {
          heroContentRef.current.style.transform = `translate3d(0, ${y * 0.25 * k}px, 0)`;
          heroContentRef.current.style.opacity = String(
            Math.max(0, 1 - y / 600),
          );
        }
        if (floral1Ref.current)
          floral1Ref.current.style.transform = `translate3d(${y * -0.15 * k}px, ${y * 0.35 * k}px, 0) rotate(${y * 0.05}deg)`;
        if (floral2Ref.current)
          floral2Ref.current.style.transform = `translate3d(${y * 0.18 * k}px, ${y * 0.3 * k}px, 0) rotate(${45 + y * -0.06}deg)`;

        const applyBg = (el: HTMLElement | null, speed: number) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const offset =
            (rect.top + rect.height / 2 - window.innerHeight / 2) * speed * k;
          el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
        };
        applyBg(storyImgRef.current, -0.15);
        applyBg(celebrationRef.current, -0.2);
        if (rsvpFloral1Ref.current)
          rsvpFloral1Ref.current.style.transform = `translate3d(${y * -0.08 * k}px, ${y * 0.12 * k}px, 0)`;
        if (rsvpFloral2Ref.current)
          rsvpFloral2Ref.current.style.transform = `translate3d(${y * 0.1 * k}px, ${y * -0.1 * k}px, 0) rotate(-45deg)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const handleRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSent(true);
    fireConfetti();
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div
        className="fixed left-0 top-0 z-50 h-1 origin-left"
        style={{
          width: "100%",
          transform: `scaleX(${scrollProgress})`,
          background: "var(--gradient-coral)",
          transition: "transform 0.05s linear",
        }}
      />

      {/* ========== HERO ========== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 -z-10 will-change-transform"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="grain absolute inset-0 -z-10" />

        <img
          ref={floral1Ref}
          src={floralAccent}
          alt=""
          aria-hidden="true"
          width={400}
          height={400}
          className="pointer-events-none absolute -left-16 top-10 w-56 opacity-70 md:w-80 animate-float will-change-transform"
        />
        <img
          ref={floral2Ref}
          src={floralAccent}
          alt=""
          aria-hidden="true"
          width={400}
          height={400}
          className="pointer-events-none absolute -right-20 bottom-16 w-64 rotate-45 opacity-70 md:w-96 animate-float-slow will-change-transform"
        />

        <div
          ref={heroContentRef}
          className="relative z-10 mx-auto max-w-3xl px-5 text-center will-change-transform sm:px-6"
        >
          <p
            className="animate-fade-up text-[10px] uppercase tracking-[0.35em] text-brown sm:text-sm sm:tracking-[0.4em]"
            style={{ animationDelay: "0.1s" }}
          >
            Estás cordialmente invitado a
          </p>
          <div className="mx-auto my-5 w-28 gold-divider sm:my-6 sm:w-40" />
          <h1
            className="animate-fade-up text-5xl leading-[1.05] sm:text-6xl md:text-8xl"
            style={{ animationDelay: "0.3s", fontFamily: "var(--font-script)" }}
          >
            <span className="text-shimmer">Mis Cincuenta</span>
          </h1>
          <p
            className="animate-fade-up mt-4 px-2 text-base italic text-brown-deep sm:text-lg md:text-xl"
            style={{ animationDelay: "0.5s" }}
          >
            Cinco décadas de amor, risas y momentos inolvidables
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col items-center gap-4 sm:mt-10"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 text-brown-deep sm:gap-4">
              <span className="h-px w-8 bg-gold sm:w-12" />
              <span className="text-[10px] uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.3em]">
                12 · Septiembre · 2026
              </span>
              <span className="h-px w-8 bg-gold sm:w-12" />
            </div>
            <button
              onClick={fireConfetti}
              className="animate-pulse-gold group relative overflow-hidden rounded-full px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-white transition-transform hover:scale-105 sm:px-10 sm:py-4 sm:text-sm sm:tracking-[0.25em]"
              style={{
                background: "var(--gradient-coral)",
                boxShadow: "var(--shadow-elegant)",
              }}
            >
              <span className="relative z-10">Celebrar Conmigo</span>
            </button>
          </div>

          <div
            className="animate-fade-up mt-12 text-brown sm:mt-16"
            style={{ animationDelay: "1s" }}
          >
            <span className="text-[10px] uppercase tracking-[0.35em] sm:text-xs sm:tracking-[0.4em]">
              Desliza
            </span>
            <div
              className="mx-auto mt-3 h-10 w-px animate-float sm:h-12"
              style={{
                background:
                  "linear-gradient(to bottom, var(--gold), transparent)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ========== COUNTDOWN ========== */}
      <section
        className="relative overflow-hidden py-12 sm:py-14 md:py-16"
        style={{ backgroundColor: "var(--beige-soft)" }}
      >
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <p className="reveal-on-scroll text-[10px] uppercase tracking-[0.35em] text-coral-deep sm:text-sm sm:tracking-[0.4em]">
            La cuenta regresiva
          </p>
          <h2 className="reveal-on-scroll mt-4 text-3xl text-brown-deep sm:text-4xl md:text-5xl">
            Faltan tan solo…
          </h2>
          <div className="mx-auto my-6 w-24 gold-divider sm:my-8 sm:w-32" />

          <div className="reveal-on-scroll grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {[
              { label: "Días", value: c.days },
              { label: "Horas", value: c.hours },
              { label: "Minutos", value: c.minutes },
              { label: "Segundos", value: c.seconds },
            ].map((u) => (
              <div
                key={u.label}
                className="group relative rounded-lg border border-border bg-card p-4 transition-transform hover:-translate-y-1 sm:p-6"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <div
                  className="pointer-events-none absolute inset-x-4 top-0 h-px"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <div
                  key={u.value}
                  className="countdown-tick text-4xl text-brown-deep sm:text-5xl md:text-6xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {String(u.value).padStart(2, "0")}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
                  {u.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STORY / IMAGE ========== */}
      <section className="relative overflow-hidden py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-2 md:items-center md:gap-12">
          <div
            className="reveal-on-scroll relative overflow-hidden rounded-lg"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div
              className="pointer-events-none absolute -inset-4 rounded-lg opacity-30"
              style={{ background: "var(--gradient-gold)" }}
            />
            <div className="relative aspect-4/3 overflow-hidden rounded-lg">
              <img
                ref={storyImgRef}
                src={heroFlowers}
                alt="Ramo floral de rosas coral y beige"
                loading="lazy"
                width={1536}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover will-change-transform"
              />
            </div>
          </div>
          <div className="reveal-on-scroll">
            <p className="text-[10px] uppercase tracking-[0.35em] text-coral-deep sm:text-sm sm:tracking-[0.4em]">
              Una vida celebrada
            </p>
            <h2 className="mt-4 text-4xl text-brown-deep sm:text-5xl">
              <span
                style={{ fontFamily: "var(--font-script)" }}
                className="text-5xl text-coral sm:text-6xl"
              >
                50
              </span>
              <br />
              años de historias
            </h2>
            <div
              className="my-6 h-px w-24"
              style={{ background: "var(--gradient-gold)" }}
            />
            <p className="text-base leading-relaxed text-brown sm:text-lg">
              Cinco décadas llenas de amor, sueños cumplidos, viajes
              inolvidables y amistades que se han vuelto familia. Ha llegado el
              momento de brindar por todo lo vivido y por lo que aún está por
              venir.
            </p>
            <p className="mt-4 italic text-muted-foreground">
              "La vida no se mide por los años vividos, sino por los momentos
              que nos dejan sin aliento."
            </p>
          </div>
        </div>
      </section>

      {/* ========== DETAILS ========== */}
      <section
        className="relative overflow-hidden py-14 sm:py-16 md:py-20"
        style={{ backgroundColor: "var(--beige)" }}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center">
            <p className="reveal-on-scroll text-[10px] uppercase tracking-[0.35em] text-coral-deep sm:text-sm sm:tracking-[0.4em]">
              Los detalles
            </p>
            <h2 className="reveal-on-scroll mt-4 text-4xl text-brown-deep sm:text-5xl">
              Toma nota
            </h2>
            <div className="mx-auto my-6 w-24 gold-divider sm:w-32" />
          </div>

          <div className="mt-8 grid gap-5 sm:gap-6 md:mt-10 md:grid-cols-3">
            {[
              {
                icon: "📅",
                title: "Cuándo",
                lines: ["Sábado 12 de Septiembre", "2026 · 7:00 pm"],
              },
              {
                icon: "📍",
                title: "Dónde",
                lines: ["Salón Villa Coral", "Av. de los Jardines 250"],
              },
              {
                icon: "👗",
                title: "Etiqueta",
                lines: ["Cóctel elegante", "Tonos coral y dorado"],
              },
            ].map((d) => (
              <div
                key={d.title}
                className="reveal-on-scroll group relative overflow-hidden rounded-lg border border-border bg-card p-6 text-center transition-all duration-500 hover:-translate-y-2 sm:p-10"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "var(--gradient-gold)",
                    mixBlendMode: "overlay",
                  }}
                />
                <div className="text-4xl">{d.icon}</div>
                <h3
                  className="mt-4 text-xl text-coral-deep sm:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {d.title}
                </h3>
                <div className="mx-auto my-4 w-16 gold-divider" />
                {d.lines.map((l) => (
                  <p key={l} className="text-brown">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALLERY / CELEBRATION ========== */}
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] w-full overflow-hidden sm:h-[70vh] md:h-[80vh]">
          <img
            ref={celebrationRef}
            src={celebration}
            alt="Mesa festiva con flores coral y detalles dorados"
            loading="lazy"
            width={1280}
            height={960}
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--brown-deep) 60%, transparent) 100%)",
            }}
          />
          <div className="relative z-10 flex h-full items-end justify-center pb-12 sm:pb-16 md:pb-20">
            <div className="reveal-on-scroll px-5 text-center text-white">
              <p className="text-[10px] uppercase tracking-[0.35em] sm:text-sm sm:tracking-[0.4em]">
                Una noche mágica
              </p>
              <h2
                className="mt-4 text-5xl sm:text-6xl md:text-7xl"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Te espero
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ========== RSVP ========== */}
      <section
        className="relative overflow-hidden py-14 sm:py-16 md:py-20"
        style={{ backgroundColor: "var(--beige-soft)" }}
      >
        <img
          ref={rsvpFloral1Ref}
          src={floralAccent}
          alt=""
          aria-hidden="true"
          width={300}
          height={300}
          className="pointer-events-none absolute -left-10 top-10 w-32 opacity-40 sm:w-40 md:w-56 animate-float will-change-transform"
        />
        <img
          ref={rsvpFloral2Ref}
          src={floralAccent}
          alt=""
          aria-hidden="true"
          width={300}
          height={300}
          className="pointer-events-none absolute -right-10 bottom-10 w-32 -rotate-45 opacity-40 sm:w-40 md:w-56 animate-float-slow will-change-transform"
        />

        <div className="relative mx-auto max-w-xl px-5 text-center sm:px-6">
          <p className="reveal-on-scroll text-[10px] uppercase tracking-[0.35em] text-coral-deep sm:text-sm sm:tracking-[0.4em]">
            Confirma tu asistencia
          </p>
          <h2 className="reveal-on-scroll mt-4 text-4xl text-brown-deep sm:text-5xl">
            Reserva tu lugar
          </h2>
          <div className="mx-auto my-6 w-24 gold-divider sm:w-32" />
          <p className="reveal-on-scroll text-brown">
            Tu presencia es el mejor regalo. Por favor confirma antes del 1 de
            Septiembre.
          </p>

          {rsvpSent ? (
            <div
              className="reveal-on-scroll mt-10 rounded-lg border border-border bg-card p-10"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="text-5xl">💐</div>
              <h3
                className="mt-4 text-2xl text-coral-deep"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ¡Gracias!
              </h3>
              <p className="mt-2 text-brown">Nos vemos el 12 de Septiembre.</p>
            </div>
          ) : (
            <form
              onSubmit={handleRsvp}
              className="reveal-on-scroll mt-10 space-y-4 rounded-lg border border-border bg-card p-8 text-left"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-brown">
                  Nombre
                </label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-coral"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-brown">
                  Acompañantes
                </label>
                <select
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-coral"
                  defaultValue="1"
                >
                  <option value="1">Solo yo</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-brown">
                  Mensaje (opcional)
                </label>
                <textarea
                  rows={3}
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 outline-none focus:border-coral"
                  placeholder="Un deseo especial…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full py-4 text-sm uppercase tracking-[0.25em] text-white transition-transform hover:scale-[1.02]"
                style={{
                  background: "var(--gradient-coral)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Confirmar Asistencia
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer
        className="relative py-10 text-center"
        style={{
          backgroundColor: "var(--brown-deep)",
          color: "var(--beige-soft)",
        }}
      >
        <div className="mx-auto max-w-2xl px-6">
          <div
            className="mx-auto mb-6 w-24 gold-divider"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--gold), transparent)",
            }}
          />
          <h3
            className="text-4xl"
            style={{
              fontFamily: "var(--font-script)",
              color: "var(--gold-soft)",
            }}
          >
            Con amor
          </h3>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] opacity-70">
            Nos vemos en septiembre
          </p>
        </div>
      </footer>
    </main>
  );
}
