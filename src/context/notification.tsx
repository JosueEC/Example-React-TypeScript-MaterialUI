/* eslint-disable react-refresh/only-export-components */
import { useState, useContext, createContext } from 'react'
import { AlertColor } from '@mui/material'
import { Notification } from "../components";

type ContextProps = {
  getError: (message: string) => void
}

// Primero creamos un contexto a traves de la funcion createContext de React
// Este contexto recibe un generico, el cual estara definido por un type que
// contendra todas las variables y funciones que podran ser accedidas en el
// contexto
const NotificationContext = createContext<ContextProps | null>(null);

// Segundo, debemos crear un provider del contexto, este provider por defecto
// recibe un children, el cual seran los componentes que llegan al contexto
// y pueden acceder a los estados y a las funciones
export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  // Dentro del provider podemos manejar estados y funciones que podran ser accedidas
  // por los componentes que estan dentro del contexto
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)
  
  // Aqui definimos que hara la funcion que agregamos en el type de nuestro contexto
  const getError = (message: string) => {
    setSeverity('error')
    setOpen(true);
    setMessage(message);
  }

  // Y asi mismo podemos crear funciones que manipulen los estados
  const handleClose = () => {
    setOpen(false);
  }

  const value = {
    getError
  }

  return (
    // Creamos una etiqueta del contexto y accedemos a su provider, este recibe
    // un value, el cual es un objeto con las propiedades que previamente
    // definimos en el type
    <NotificationContext.Provider value={value}>
      {/* Ahora podemos pasar el valor de los estados a los componentes que estan
      dentro del contexto, ya sea desde aqui en el provider o siendo recibidos
      a traves de las funciones del contexto */}
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        message={message}
      />
      {/* El children son los componentes que llegan al englobarlos en el Provider
      que en este caso nos estaria llegando toda la app ya que estamos englobando el
      App.tsx en el provider */}
        {children}
    </NotificationContext.Provider>
  )
}

// Por ultimo exportamos el customHook, para poder usarlo en los componentes donde queremos
// acceder al contexto
export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('No existe contexto');
  }

  return context;
}

//* NOTA: No olvidar englobar el BrowserRouter con el NotificationProvider para que los componentes
//* puedan acceder al contexto