'use client'; // Paso obligatorio en Next.js para usar interactividad
import Image from "next/image";
import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-orange-100 via-amber-100 to-rose-100 text-slate-900">
      <header className="mx-auto flex max-w-7xl items-center justify-between rounded-b-4xl bg-linear-to-r from-orange-400 via-orange-300 to-orange-200 px-6 py-6 shadow-2xl shadow-orange-200/30 backdrop-blur-sm md:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-700">
            Bienvenido a <span className="bg-orange-500/10 px-3 py-1 font-semibold text-orange-700 ">La Costa de Yael</span>
          </p>
          <h1 className="text-3xl font-bold text-slate-950 md:text-4xl">Mariscos & Sabores</h1>
        </div>
        <nav className="hidden items-center gap-6 text-base font-semibold text-slate-700 md:flex">
          <a href="#menu" className="rounded-full px-4 py-2 transition hover:bg-orange-50 hover:text-orange-700">Menú</a>
          <a href="#about" className="rounded-full px-4 py-2 transition hover:bg-orange-50 hover:text-orange-700">Nosotros</a>
          <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-orange-50 hover:text-orange-700">Reservas</a>
        </nav>
      </header>
      
      <br/>
      <br />

      <main className="flex-1 mx-auto max-w-7xl px-6 pb-20 md:px-12">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-orange-200 transition-transform duration-500 hover:-translate-y-0.5 hover:shadow-orange-300/60">
              Restaurante de mariscos • Diseño de presentación
            </div>
            <div className="space-y-4">
              <h2 className="max-w-xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
                Sabores del mar para disfrutar en cada plato.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-slate-700">
                Un restaurante de mariscos ideal para tu portafolio. Ingredientes frescos, estilo caribeño y presentación limpia para una experiencia sabrosa y memorable.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-300/40 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-orange-400/50">
                Ver menú
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-orange-600 bg-white/90 px-6 py-3 text-sm font-semibold text-orange-700 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-50">
                Reservar mesa
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-white/80 shadow-2xl shadow-orange-200/30">
      
          {/* Contenedor de imagen con su propio grupo */}
          <div className="group relative w-full">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              alt="Plato de mariscos en una mesa elegante"
              width={900}
              height={900}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* CONTENEDOR DEL MENÚ LATERAL (fuera del grupo de la imagen)
              - top-1/2 y -translate-y-1/2 lo centran verticalmente.
              - La lógica de translate-x maneja si se esconde o se muestra.
          */}
          <div 
            className={`absolute right-0 top-1/2 z-50 flex -translate-y-1/2 transition-transform duration-500 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-72'
            }`}
          >
            {/* PESTAÑA (Botón de gatillo) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-20 w-12 items-center justify-center rounded-l-2xl border-y border-l border-white/20 bg-slate-950/95 text-orange-400 shadow-2xl backdrop-blur-xl"
              aria-label="Abrir menú"
            >
              <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                ◀
              </span>
            </button>

            {/* CONTENIDO DEL MENÚ (w-72 = 288px) */}
            <div className="w-72 space-y-4 border-l border-white/10 bg-slate-950/95 p-6 text-white shadow-2xl backdrop-blur-xl">
              <h4 className="text-xl font-semibold text-orange-50">Explora con estilo</h4>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="#menu" 
                  className="rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-bold transition hover:bg-orange-600 active:scale-95"
                >
                  Ordena ahora
                </a>
                
                <a 
                  href="#about" 
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-center text-sm font-semibold transition hover:bg-white/10"
                >
                  Ver carta
                </a>
                
                <a 
                  href="#contact" 
                  className="rounded-xl bg-slate-800 px-4 py-3 text-center text-sm font-semibold transition hover:bg-slate-700"
                >
                  Haz tu reserva
                </a>
              </div>
            </div>
          </div>

          </div>
        </section>

        <section id="menu" className="mt-16 space-y-6">
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
              <article key={item.name} className="group overflow-hidden rounded-3xl border border-white bg-white/90 shadow-lg shadow-slate-200 transition duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="transform transition duration-700 group-hover:scale-105" />
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
          <div className="rounded-4xl bg-slate-950 px-8 py-12 text-white shadow-2xl shadow-slate-900/10">
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
          <div className="overflow-hidden rounded-4xl border border-white/70 bg-white/90 p-6 shadow-xl shadow-orange-200/20">
            <Image
              src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1000&q=80"
              alt="Variedad de mariscos servidos en plato"
              width={900}
              height={900}
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </section>
      </main>

      {/* Footer de CONTACTO */}
      <footer id="contact" className="w-full bg-white/90 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-600">Reserva</p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-950">Listos para tu próxima visita</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Crea una sección de contacto inicial perfecta para mostrar en tu portafolio. Agrega más detalles reales cuando quieras llevarlo a producción.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
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
      </footer> {/* Final del footer */}
    </div>
  );
}
