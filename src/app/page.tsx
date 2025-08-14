import Deslizador from '@/components/Deslizador';
import Presentacion from '@/components/Presentacion';

export default function Home() {
  return (
    <div className='flex flex-col font-mono max-w-screen'>
      <Deslizador></Deslizador>
      <Presentacion></Presentacion>
    </div>
  );
}
