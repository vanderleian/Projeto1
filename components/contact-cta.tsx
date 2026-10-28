export function ContactCta() {
  return (
    <section id="contato" className="scroll-mt-16 px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-brand px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Agende uma visita</h2>
        <p className="mt-4 text-lg">Seu pet merece o melhor. Fale com a gente!</p>
        <address className="mt-6 text-sm not-italic leading-7">
          Rua dos Pets, 123 — Centro
          <br />
          Seg a Sáb, das 8h às 18h
        </address>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand-dark transition-colors hover:bg-surface"
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
