type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "10+", label: "anos de experiência" },
  { value: "5 mil", label: "pets atendidos" },
  { value: "4,9", label: "nota dos clientes" },
];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-16 bg-surface dark:bg-white/5">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Sobre nós</h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Somos apaixonados por animais. Nossa equipe trata cada pet como parte da família,
          com atendimento atencioso e um ambiente seguro e acolhedor.
        </p>
        <dl className="mt-12 grid gap-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-4xl font-bold text-accent">{stat.value}</dt>
              <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
