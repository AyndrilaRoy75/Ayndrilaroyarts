export default function Home() {
  const artworks = [
    {
      title: "Dreamscape",
      image:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Golden Horizon",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Silent Forest",
      image:
        "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Your Artist Name
        </h1>

        <p className="text-xl text-neutral-300 max-w-2xl mb-10">
          Contemporary artist exploring light, abstraction, texture, and emotion.
        </p>

        <a
          href="#gallery"
          className="bg-white text-black px-8 py-4 rounded-2xl font-semibold"
        >
          Explore Gallery
        </a>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-6 py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-14 text-center">
            Featured Artwork
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {artworks.map((art, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-3xl overflow-hidden"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">{art.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}