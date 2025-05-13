import React from 'react';

const VIDEO_WIDTH  = 'min(81vw, 855px)';
const VIDEO_HEIGHT = 'min(55.8vw, 800px)';
const VIDEO_OFFSET_X = '-2vw';   // push video a bit right
const VIDEO_OFFSET_Y = '-2rem';  // ↓  make this more negative to move the video lower

const Hero = () => (
  <section className="relative min-h-[60vh] h-[60vh] sm:h-screen sm:min-h-screen w-full flex items-end justify-center px-8 overflow-hidden">
    {/* Headline */}
    <div className="absolute left-64 bottom-96 z-50 max-w-2xl">
      <h2 className="text-3xl md:text-5xl font-quicksand font-medium text-white leading-relaxed tracking-wide">
        <span className="block text-cafe-rose mb-4 text-xl md:text-2xl tracking-wider">Experience</span>
        <span className="block">
          Drinks, food, and weekly live entertainment in a former bank building
        </span>
      </h2>
    </div>

    {/* Ambient glow */}
    <div
      className="absolute left-0 bottom-0 w-[60vw] h-[60vw] max-w-none max-h-none pointer-events-none z-10 animate-blueGlowPulse"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 0% 100%, rgba(0,120,255,0.35) 0%, transparent 100%)',
        filter: 'blur(32px)',
      }}
    />

    {/* Black backdrop behind video */}
    <div
      className="absolute"
      style={{
        right: VIDEO_OFFSET_X,
        bottom: VIDEO_OFFSET_Y,
        width: VIDEO_WIDTH,
        height: VIDEO_HEIGHT,
        background: '#000',
        zIndex: 20,
        borderRadius: '2rem',
      }}
    />

    {/* Video container */}
    <div
      className="absolute z-30"
      style={{
        right: VIDEO_OFFSET_X,
        bottom: VIDEO_OFFSET_Y,
        width: VIDEO_WIDTH,
        height: VIDEO_HEIGHT,
        padding: '1rem',
        boxSizing: 'border-box',
        borderRadius: '2rem',
        overflow: 'hidden',
      }}
    >
      <video
        src="/bank-bar-neon-sign1.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          borderRadius: '1.25rem',
          backgroundColor: 'black',
          display: 'block',
        }}
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
