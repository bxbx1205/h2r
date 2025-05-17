import Squares from '../components/Squares.jsx';

export default function Home() {
  return (
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
  );
}
