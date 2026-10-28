export function Hero() {
  return (
    <section className="bg-surface dark:bg-white/5">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Carinho e cuidado para o seu <span className="text-brand">melhor amigo</span>
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Banho e tosa, veterinário, hotelzinho e tudo para o seu pet em um só lugar.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="rounded-full bg-brand px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Agendar horário
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-brand px-6 py-3 text-center font-semibold text-brand-dark transition-colors hover:bg-brand/10 dark:text-brand"
            >
              Ver serviços
            </a>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="flex h-64 items-center justify-center rounded-3xl bg-brand/15 text-8xl md:h-80"
        >
          🐶🐱
        </div>
      </div>
    </section>
  );
}
