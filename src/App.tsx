import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import { NotificationProvider } from './context/notification.context'

/**
 * * <NotificationProvider>
 * Es el componente que creamos en nuestro context, el cual nos
 * permite dar acceso al contexto a los componentes que estan
 * dentro del componente NotificationProvider, que en este caso
 * es toda la aplicacion
 */
function App() {
  return (
    <div>
      <NotificationProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </NotificationProvider>
    </div>
  )
}

export default App
