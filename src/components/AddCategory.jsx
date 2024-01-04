import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    // Con este useState estamos manejando el estado del input, el input value es el valor, y el setInputValue es el que genera del cambio al pulsar una tecla
    const [inputValue, setInputValue] = useState('')
    
    // con esta función manejamos el cambio del "value" del input, la funcion recive el (e)vento por parametros, y dentro se ejecuta el "setInputValue" del useState anterior, y el e.target.value vienen del objeto "e", que viene siendo el value del target del evento. 
    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    // handleSubmit se encarga de manejar el evento de envío del formulario, evitando que la página se actualice y mostrando un mensaje en la consola.
    const handleSubmit = (e) => {
        e.preventDefault(); // Quita el refresh del formulario

        if ( inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats, ]);
            setInputValue('');
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <h1>{ inputValue}</h1>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}