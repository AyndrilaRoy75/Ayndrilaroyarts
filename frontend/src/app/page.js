export const metadata = {
  title: "Your Artist Name | Contemporary Artist",
  description:
    "Official portfolio website showcasing paintings, digital artwork, exhibitions, and commissions.",
  keywords: [
    "artist",
    "art portfolio",
    "paintings",
    "digital artist",
    "modern art",
  ],
  openGraph: {
    title: "Your Artist Name",
    description: "Contemporary artist portfolio website",
    images: ["/hero.jpg"],
  },
};

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

export default function Home() {
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

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
          alt="Artist portrait"
          className="rounded-3xl"
        />

        <div>
          <h2 className="text-5xl font-bold mb-6">About</h2>

          <p className="text-neutral-300 leading-relaxed text-lg">
            My artistic journey explores human emotion, memory, and movement.
            Through mixed media and digital expression, I create immersive visual
            narratives.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-6 py-24 bg-neutral-950">
}