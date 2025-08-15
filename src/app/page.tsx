import Deslizador from '@/components/Deslizador';
import Quien from "@/components/Quien"
import Herramientas from '@/components/Herramientas';

export default function Home() {
  return (
    <div className='flex flex-col font-sans max-w-screen'>
      <Deslizador></Deslizador>
      <Herramientas></Herramientas>
      <Quien></Quien>
    </div>
  );
}
