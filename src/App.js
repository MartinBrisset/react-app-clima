import { useEffect, useState } from "react";
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Error from "./components/Error";

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
  })

  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})
  const [error, setError] = useState(false)

  const { ciudad, pais } = busqueda

  useEffect(() => {
    const consultarAPI = async () => {

      if (consultar) {
                
        const appId = '70a1b063f237d00672b1751c2a5f1b08'
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        
        const resp = await fetch(url)
        
        const res = await resp.json()
        
        setResultado(res)
        setConsultar(false)

        if (resultado.cod === '404') {
          setError(true)
        } else {
          setError(false)
        }
        
      }

    }
    consultarAPI()
  }, [consultar, ciudad, pais])

  let componente
  if (error) {
    componente = <Error 
      msg='No hay resultados'
    />
  } else {
    componente = <Clima 
      resultado={resultado}
    />
  }
  

  return (
    <>
      <Header 
        titulo='Clima React App'
      /> 

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario 
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className='col m6 s12'>
              {componente}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
