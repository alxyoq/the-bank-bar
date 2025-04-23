import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] h-[60vh] sm:h-screen sm:min-h-screen w-full">
      {/* Fullscreen Hero Image */}
      <Image
        src="/images/uploads/woodburystationcafe_476094583_17917628130052842_7696605554359016994_n.jpg"
        alt="Woodbury Station Cafe Hero"
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 640px) 100vw, 100vw"
      />
      {/* Optional overlay (darken slightly) */}
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
};

export default Hero;
