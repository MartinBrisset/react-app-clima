import PropTypes from 'prop-types'
import { useState } from "react";
import Error from "./Error";

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {
    
    const [error, setError] = useState(false)

    const { ciudad, pais } = busqueda

    const handleChange = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        //validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        setConsultar(true)

        //pasar al componente principal

    }
    
    return ( 

        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error msg='Todos los campos son requeridos' /> : null}
            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>
                    Ciudad:
                </label>
            </div>

            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handleChange}
                >
                    <option value=''>Seleccione un pais</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">España</option>
                    <option value="MX">México</option>
                    <option value="PE">Perú</option>
                    <option value="UY">Uruguay</option>
                </select>
                <label htmlFor='pais'>
                    Pais:
                </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >
                    Buscar Clima
                </button>
            </div>
        </form>

    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
}
 
export default Formulario;