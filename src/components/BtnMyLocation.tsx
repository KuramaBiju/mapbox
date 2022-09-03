import { useContext } from "react"
import { PlacesContext } from "../context";
import { MapContext } from '../context/map/MapContext';

export const BtnMyLocation = () => {
  
  const {map, isMapReady} = useContext(MapContext)
  const {userLocation} = useContext(PlacesContext)

  const onClick = () => {
    if(!isMapReady) throw new Error('Mapa no listo')
    if(!userLocation) throw new Error('No hay ubicación del usuario')
    map?.flyTo({
      zoom:14,
      center: userLocation
    })
  }
  return (
    <button
    style={{
     position:'fixed',
     top:'20px',
     right:'20px',
     zIndex:'999'
    }}
    onClick={onClick}
    className='btn btn-primary'>
      Mi ubicacion
    </button>
  )
}
