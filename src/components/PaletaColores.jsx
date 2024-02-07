import {useState} from 'react';
import CrearCardColor from './CrearCardColor';


const PaletaColores = () => {
  const [nuevoColor, setNuevoColor]= useState("")
    const [colores, setColores] = useState([]);
    
    

    function añadirColor() {
      const color = nuevoColor;
      let nombreColor = color.toString()
      
      setColores([...colores, { color: nuevoColor,color, nombreColor }]);
      setNuevoColor('');
    }
  
    function eliminarColor(index) {
      let colorAñadido = colores.slice();
      colorAñadido.splice(index, 1);
      setColores(colorAñadido);
    }
  
    return (
      <div className="container-fluid text-center">
        <h1 className="text-light mt-3">Administrar colores</h1>
        <div className="row mb-3 justify-content-center">
          <label htmlFor="color-input col-12  ">Agregar nuevo color:</label>
          <input
            type="color"
            className="form-control form-control-color col-9 ms-4 px-5 py-4"
            id="color-input"
            onChange={(e) => setNuevoColor(e.target.value)}
            value={nuevoColor}
          />
          <button className="btn btn-warning col-3 ms-3" onClick={añadirColor}>
            Añadir
          </button>
        </div>
        <div className="row">
          
        {colores.map((color, index) => (
         
          <CrearCardColor color={color.color} nombrecolor={color.nombreColor} key={index} eliminarColor={eliminarColor}/> 
          
        ))}
        </div>
      </div>
    );
  };
  
  export default PaletaColores;