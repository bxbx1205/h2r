"use client";
import Squares from '../components/Squares.jsx';
import DiscordLanding from '../components/DiscordLanding.jsx';
import LandingPage from '../components/LandingPage.jsx';
import InstagramLanding from '../components/InstagramLanding';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden'
        }}
        aria-hidden="true"
      >
        <Squares
          speed={0.5}
          squareSize={40}
          direction='down'
          borderColor='#fff'
          hoverFillColor='#ffa500'
        />
      </div>

      <div
        className="app"
        style={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
        }}
      >
        <div
          style={{
            scrollSnapAlign: 'start',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <LandingPage />
        </div>
        <div style={{ height: '40px', background: 'transparent' }} />
        <div
          style={{
            scrollSnapAlign: 'start',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <DiscordLanding />
        </div>
        <div
          style={{
            scrollSnapAlign: 'start',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <InstagramLanding />
          <Footer />
        </div>
      </div>
    </>
  );
}
