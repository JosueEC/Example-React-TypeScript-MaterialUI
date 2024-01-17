import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"

/**
 * * <Outlet />
 * Este componente de react-router-dom nos sivre para agrupar rutas
 * y compartir componentes entre el grupo. Aqui estaremos
 * compartiendo el componente <NavBar /> entre las rutas '/' y
 * 'login'.
 * 
 * Esto significa que cuando navegemos hacia Home o hacia Login
 * en ambas paginas se mostrara la NavBar
 * 
 * Este componente trabaja en combinacion con una anidacion en el
 * archivo router.tsx
 */
export const RouterLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}