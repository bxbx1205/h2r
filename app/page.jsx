import Squares from '../components/Squares.jsx';

export default function Home() {
  return (
<<<<<<< HEAD
    <>
  <h1>hello</h1>
    
    </>
    
=======
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
>>>>>>> a06b6c602f64ff819b36f47792830d137ce8d5e5
  );
}
