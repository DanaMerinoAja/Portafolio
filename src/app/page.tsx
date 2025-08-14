import Deslizador from '@/components/Deslizador';
import Presentacion from '@/components/Presentacion';
import About from './about/page';
import Herramientas from '@/components/Herramientas';

export default function Home() {
  return (
    <div className='flex flex-col font-mono max-w-screen'>
      <Deslizador></Deslizador>
      <Herramientas></Herramientas>
      <About></About>
    </div>
  );
}
