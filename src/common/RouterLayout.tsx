import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"

export const RouterLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      {/* La etiqueta outlet nos sirve para agrupar rutas y compartir
      entre componentes, aqui estaremos compartiendo la NavBar entre
      las rutas '/' y 'login' */}
      <Outlet />
    </div>
  )
}