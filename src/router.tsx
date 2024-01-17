import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/home"
import { LoginPage } from "./pages/login"
import { RouterLayout } from "./common/RouterLayout"
import { CharacterPage } from "./pages/character"

/**
 * * <Route path='/' element={ <RouterLayout /> }>
 * *  ...
 * * </Route>
 * Esta es la forma en la que podemos agrupar rutas en nuestra
 * aplicacion. Esto trabaja en conjunto con el componente
 * <Outlet /> en el RouterLayout.tsx
 * 
 * 1.- Basicamente abrimos y cerramos un componente Route de
 * react-router-dom.
 * 
 * 2.- En la parte element definimos el componente
 * que agrupara las rutas (previemente este componente debe estar
 * usando el componente Outlet en su estructura).
 * 
 * 3.- Ahora, dentro de esta ruta podemos definir cuantas rutas
 * deseemos, todas estas rutas seran representadas en el Outlet
 * de nuestro RouterLayout, por lo que todos los componentes que
 * esten definidos en este seran compoartidos y visibles en las
 * rutas que colocamos dentro de la anidacion.
 */
export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:characterId" element={<CharacterPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}