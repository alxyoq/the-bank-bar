import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Fullscreen Hero Image */}
      <Image
        src="/images/uploads/woodburystationcafe_476094583_17917628130052842_7696605554359016994_n.jpg"
        alt="Woodbury Station Cafe Hero"
        fill
        priority
        className="object-cover"
      />
      {/* Optional overlay (darken slightly) */}
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
};

export default Hero;
