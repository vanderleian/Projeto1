type Service = {
  icon: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "🛁",
    title: "Banho e Tosa",
    description: "Higiene e estilo com produtos de qualidade e muito carinho.",
  },
  {
    icon: "🩺",
    title: "Veterinário",
    description: "Consultas, vacinas e exames com profissionais experientes.",
  },
  {
    icon: "🏠",
    title: "Hotelzinho",
    description: "Seu pet bem cuidado e feliz enquanto você viaja.",
  },
  {
    icon: "🦴",
    title: "Loja e Rações",
    description: "Rações, petiscos, brinquedos e acessórios para todas as idades.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
      <h2 className="text-center text-3xl font-bold">Nossos serviços</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-black/10 p-6 transition-shadow hover:shadow-lg dark:border-white/10"
          >
            <div className="text-4xl" aria-hidden="true">
              {service.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
