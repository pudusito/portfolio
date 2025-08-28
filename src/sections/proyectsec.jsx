import ParticleCard from "../components/ParticleCard";

// Ahora cada tarjeta puede tener JSX completo, color y clases personalizadas
const cardsData = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-bold">Proyecto 1</h2>
        <p className="text-sm opacity-80">Descripción opcional</p>
        <button className="mt-3 px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition">
          Ver más
        </button>
      </div>
    ),
    glowColor: "255,0,0",
    className: "bg-gradient-to-br from-gray-800/90 to-gray-900/80",
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-bold">Proyecto 2</h2>
        <p className="text-sm opacity-80">Otro ejemplo de tarjeta</p>
      </div>
    ),
    glowColor: "0,255,0",
    className: "bg-gradient-to-br from-gray-700/90 to-gray-800/80",
  },
  {
    id: 3,
    content: (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-bold">Proyecto 3</h2>
        <p className="text-sm opacity-80">Más contenido aquí</p>
      </div>
    ),
    glowColor: "0,200,255",
    className: "bg-gradient-to-br from-gray-800/90 to-gray-900/80",
  },
  // Agrega más proyectos si quieres
];

export default function ProyectSec() {
  return (
    <section className="w-full py-12">
      <div className="flex justify-center mb-12">
        <h1 className="text-[2.5rem] md:text-[4rem] font-serif text-white font-bold drop-shadow-lg">
          Mis Proyectos
        </h1>
      </div>

      {/* Grid responsivo */}
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cardsData.map((card) => (
          <ParticleCard
            key={card.id}
            className={`rounded-2xl shadow-xl flex items-center justify-center text-white p-8 transition-transform hover:scale-105 hover:shadow-2xl ${card.className || "bg-gray-800"}`}
            glowColor={card.glowColor || "132,0,255"}
          >
            {card.content}
          </ParticleCard>
        ))}
      </div>
    </section>
  );
}
