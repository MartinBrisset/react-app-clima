import PropTypes from 'prop-types'

const Clima = ({resultado}) => {

    const {name, main } = resultado

    if (!name) {
        return null
    }

    const kelvin = 273.15

    return ( 

        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name} es:</h2>
                <p className='temperatura'>
                    { parseInt( main.temp - kelvin ).toFixed(0) } <span> &#x2103; </span>
                </p>
                <p className=''>Temperatura máxima: 
                    { parseInt( main.temp_max - kelvin ).toFixed(0) } <span> &#x2103; </span>
                </p>
                <p className=''>Temperatura mínima: 
                    { parseInt( main.temp_min - kelvin ).toFixed(0) } <span> &#x2103; </span>
                </p>
            </div>
        </div>

    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;