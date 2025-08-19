import Presentacion from "@/components/Presentacion"
import Quien from "@/components/Quien"

export default function About() {
    return (
      <div className="p-6">
        <div className='gap-20'>
          <h1 className="font-bold text-2xl">¿Quién soy?</h1>
          <br></br>
          <Quien></Quien>
          <div>
            <Presentacion></Presentacion>
          </div>
        </div>        
      </div>
    );
  }
  