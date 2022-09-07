import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import Nuevopresupuesto from './Nuevopresupuesto'



const Header = ( { gastos, setGastos, presupuesto, setPresupuesto, isValidPsto, setIsValidPsto} ) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isValidPsto ? (
            <ControlPresupuesto
                gastos={gastos}
                setGastos={setGastos} 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPsto={setIsValidPsto}
            />
        ): (
            <Nuevopresupuesto 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPsto={setIsValidPsto}
            />
        )}


    </header>
  )
}

export default Header