"use client";
import Squares from '../components/Squares';
import DiscordLanding from '../components/DiscordLanding';
import InstagramLanding from '../components/InstagramLanding';
import Footer from '@/components/Footer';



export default function Home() {
  return (

    <>
       <div className="app">
      <DiscordLanding />
      <InstagramLanding />
      <Footer />
    </div>
    

    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1, // behind other content
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <Squares 
        speed={0.5} 
        squareSize={40}
        direction='down'
        borderColor='#fff'
        hoverFillColor='#ffa500'
      />
    </div>
    </>
  );
}
