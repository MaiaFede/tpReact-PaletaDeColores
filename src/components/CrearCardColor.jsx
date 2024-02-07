import React from 'react';

const CrearCardColor = (props) => {
    const { color, nombreColor, eliminarColor } = props;
    return (
        
              <div key={nombreColor} className='col-3 mb-3'>
      <div className='card'>
        <div className='card-header text-center py-5' style={{backgroundColor: color}}>
      {nombreColor}
        </div>
        <button className='btn btn-danger' onClick={eliminarColor}>Eliminar color</button>
      </div>
              </div>
   
    );
};

export default CrearCardColor;