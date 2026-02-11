export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-xl">BuildCode</div>
          <a
            href="#contact"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Programează un call
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Automatizare software & produse digitale pentru companii din România
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Construim aplicații interne și automatizări pentru companii operaționale
          (construcții, accounting, back-office) și dezvoltăm produse proprii
          precum ScanRenderAI și tool-uri de procesare / export de date.
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href="#services"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            Vezi servicii
          </a>
          <a
            href="#products"
            className="rounded-lg border border-black px-5 py-3"
          >
            Vezi produse
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Servicii</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Software custom (intern)</h3>
            <p className="mt-2 text-gray-600">
              Aplicații web/desktop, integrare sisteme, fluxuri operaționale,
              dashboard-uri și tool-uri dedicate.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Automatizare procese</h3>
            <p className="mt-2 text-gray-600">
              Eliminăm munca repetitivă: generare documente, import/export date,
              validări, rapoarte, pipeline-uri și integrare cu API-uri.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Produse</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Produse pe bază de abonament sau licență, construite din experiența reală din proiecte.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">ScanRenderAI</h3>
            <p className="mt-2 text-gray-600">
              Randări generate din obiecte scanate, în scenarii diferite, pe bază de abonament.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Dataset Builder (JSON / CSV / COCO)</h3>
            <p className="mt-2 text-gray-600">
              Tool de antrenare / etichetare și export structurat pentru ML (JSON, CSV, COCO).
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Anexe foto generator</h3>
            <p className="mt-2 text-gray-600">
              Generare automată de anexe foto în Word/PDF din foldere structurate.
            </p>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Plan + Fațade 1:100 (PNG+PGW)</h3>
            <p className="mt-2 text-gray-600">
              Generare plan și fațade la scară din scanări (workflow pentru proiectare).
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-600">
          Spune-ne ce proces vrei să automatizezi și revenim cu o propunere.
        </p>

        <div className="mt-6 rounded-2xl border p-6">
          <p className="text-gray-600">
            (Urmează formular + email @buildcode.ro + link calendar)
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} BuildCode. All rights reserved.
      </footer>
    </main>
  );
}
