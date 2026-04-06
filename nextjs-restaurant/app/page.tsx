import Image from "next/image";

const menuItems = [
  {
    name: "Camarón al Ajillo",
    description: "Camarones frescos salteados en mantequilla y ajo con toque de limón.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pescado Frito Caribeño",
    description: "Filete crujiente con salsa picante y guarnición de ensalada fresca.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pulpo a la Parrilla",
    description: "Tentáculos tiernos con aceite de oliva, ajo y hierbas aromáticas.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mariscada Especial",
    description: "Plato mixto de mariscos con camaron, almejas y pulpo al estilo artesanal.",
    image:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-100 to-rose-100 text-slate-900">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-orange-600">La Costa</p>
          <h1 className="text-3xl font-bold md:text-4xl">Mariscos & Sabores</h1>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#menu" className="transition hover:text-orange-600">Menú</a>
          <a href="#about" className="transition hover:text-orange-600">Nosotros</a>
          <a href="#contact" className="transition hover:text-orange-600">Reservas</a>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 md:px-12">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-orange-200">
              Restaurante de mariscos • Diseño de presentación
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Bienvenido a La Costa</p>
              <h2 className="max-w-xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Sabores del mar para disfrutar en cada plato.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-slate-700">
                Un restaurante de mariscos ideal para tu portafolio. Ingredientes frescos, estilo caribeño y presentación limpia para una experiencia sabrosa y memorable.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700">
                Ver menú
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-orange-600 px-6 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50">
                Reservar mesa
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-2xl shadow-orange-200/30">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="Plato de mariscos en una mesa elegante"
              width={900}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section id="menu" className="mt-20 space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-600">Menú destacado</p>
              <h3 className="text-3xl font-semibold text-slate-950">Nuestros favoritos del mar</h3>
            </div>
            <p className="max-w-xl text-sm text-slate-600">
              Platos inspirados en recetas costeras para disfrutar en un ambiente relajado y con sabor auténtico.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {menuItems.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-3xl border border-white bg-white/90 shadow-lg shadow-slate-200">
                <div className="relative h-64 w-full">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="space-y-3 p-6">
                  <h4 className="text-xl font-semibold text-slate-950">{item.name}</h4>
                  <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                  <div className="flex items-center justify-between text-sm font-semibold text-orange-600">
                    <span>Desde $12.99</span>
                    <span className="rounded-full bg-orange-50 px-3 py-1">Nuevo</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white shadow-2xl shadow-slate-900/10">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Sobre nosotros</p>
            <h3 className="mt-4 text-3xl font-semibold">El mejor sabor del mar en cada bocado.</h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              En La Costa creamos platillos frescos con recetas inspiradas en la cocina costera. Desde camarones al ajillo hasta pescados fritos con salsa especial, cada detalle está pensado para tu experiencia.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              <li>• Ingredientes locales y mariscos frescos</li>
              <li>• Ambiente moderno para compartir</li>
              <li>• Presentación cuidada y estilo profesional</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-xl shadow-orange-200/20">
            <Image
              src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1000&q=80"
              alt="Variedad de mariscos servidos en plato"
              width={900}
              height={900}
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-[2rem] bg-white/90 px-8 py-12 shadow-2xl shadow-slate-200/50">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-600">Reserva</p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-950">Listos para tu próxima visita</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Crea una sección de contacto inicial perfecta para mostrar en tu portafolio. Agrega más detalles reales cuando quieras llevarlo a producción.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-orange-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">Teléfono</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">+1 (555) 123-4567</p>
              </div>
              <div className="rounded-3xl bg-orange-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">Dirección</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">Calle Mar 24, Ciudad Costera</p>
              </div>
              <div className="rounded-3xl bg-orange-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">Horario</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">Lun - Dom: 12:00 - 22:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
