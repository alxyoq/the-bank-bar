import React from 'react';

const Hero = () => (
  <section
    className="
      relative
      w-full
      h-[calc(100vh-0px)]
      overflow-visible overflow-hidden
      sm:h-[calc(100vh-5px)]
      flex items-end justify-center
      px-8
    "
  >
    {/* Headline */}
    <div
      className="
        absolute z-40
        left-6 top-[15%]
        sm:left-64 sm:bottom-96 sm:top-auto
        max-w-[90%] sm:max-w-2xl
      "
    >
      <h2
        className="
          text-[1.53rem] sm:text-5xl
          font-quicksand font-medium
          text-white leading-relaxed tracking-wide
        "
      >
        <span
          className="
            block text-cafe-rose
            mb-3 sm:mb-4
            text-[0.9rem] sm:text-2xl
            tracking-wider
          "
        >
          Experience
        </span>
        <span className="block">
          Drinks, food, and weekly live entertainment in a former bank building
        </span>
      </h2>
    </div>

    {/* Ambient glow */}
    <div
      className="
        absolute left-0 bottom-0
        w-[60vw] h-[60vw]
        pointer-events-none z-10
        animate-blueGlowPulse
      "
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 0% 100%, rgba(0,120,255,0.35) 0%, transparent 100%)',
        filter: 'blur(32px)',
      }}
    />

    {/* Black backdrop behind video */}
    <div
      className="
        absolute inset-x-0 bottom-0
        h-[90vh]
        bg-black rounded-2xl z-0
        sm:inset-x-auto sm:right-[-2vw] sm:bottom-0
        sm:w-[min(81vw,960px)] sm:h-[min(55.8vw,900px)]
      "
    />

    {/* Video container */}
    <div
      className="
        absolute inset-x-0 bottom-[-70]
        h-[70vh]
        p-1 box-border
        rounded-2xl overflow-hidden z-0
        sm:inset-x-auto sm:right-[-2vw] sm:bottom-0
        sm:w-[min(81vw,960px)] sm:h-[min(55.8vw,900px)]
      "
    >
      <video
        src="/bank-bar-neon-sign1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain rounded-xl bg-black"
      />
    </div>

    <style>{`
      @keyframes blueGlowPulse {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50%      { opacity: 0.8; transform: scale(1.04); }
      }
      .animate-blueGlowPulse {
        animation: blueGlowPulse 6s ease-in-out infinite;
      }
    `}</style>
  </section>
);

export default Hero;
