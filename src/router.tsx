import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/home"
import { LoginPage } from "./pages/login"
import { RouterLayout } from "./common/RouterLayout"

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<RouterLayout />}>
        {/* Esta es la forma en la que agruapamps rutas
        estas rutas seran recibidas en el outlet del
        componente RouterLayout. De esta forma, todos
        los componentes que esten en RouterLayout
        tambien se mostraran en la ruta Home y Login
        y todas las rutas que esten por fuera de esta
        anidada no mostrarn los componentes que tiene
        RouterLayout */}
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}