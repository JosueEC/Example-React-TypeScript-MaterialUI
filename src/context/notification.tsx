/* eslint-disable react-refresh/only-export-components */
import { useState, useContext, createContext } from 'react'
import { AlertColor } from '@mui/material'
import { Notification } from "../components";

/**
 * Un Context se compone de 3 cosas, un contexto, un provider y un
 * hook.
 * 
 * El contexto define los metodos y variables que seran
 * accedidos desde el contexto
 * 
 * El provider define el cuerpo y comportamiento de las funciones y
 * variables definidas en el contexto
 * 
 * Y el hook es el que nos da acceso al contexto desde los componentes
 */

/**
 * Basicamente el ContextProps, son los valores y funciones que
 * van a poder ser accedidos desde el contexto
 */
type ContextProps = {
  getError: (message: string) => void
}

/**
 * Primero creamos un contexto a traves de la funcion createContext
 * de React. Este contexto recibe un generico, el cual estara definido
 * por un type que contendra las variables y funciones que podran
 * ser accedidas en el contexto.
 */
const NotificationContext = createContext<ContextProps | null>(null);

/**
 * Despues debemos crear el provider del contexto. Este provider por
 * defecto recibe un children, el cual seran los componentes que
 * llegan al contexto y pueden acceder a los estados y las funciones
 * del mismo.
 * 
 * Es como si todo este codigo del provider se agregara a los componentes
 * que acceden al contexto, de esta forma pueden acceder a todos los
 * estados y funciones que estan dentro del mismo.
 */
export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  /**
   * Es asi, que dentro del provider podemos manejar estados y funciones
   * que podran ser accedidos por los componentes que hagan uso del
   * contexto a traves del hook.
   */
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)
  
  /**
   * Como vez, aqui podemos definir el cuerpo de la funcion que definimos
   * en las contextProps. Las contextProps podrian considerarse como
   * una interface y el provider como la implementacion de la interface
   */
  const getError = (message: string) => {
    setSeverity('error')
    setOpen(true);
    setMessage(message);
  }

  /**
   * Y asi mismo, podemos crear funciones que manipulan los estados,
   * pero, si estas funciones no son agregadas a las contextProps,
   * entonces no puden ser accedidas por no estar dentro del contexto
   */
  const handleClose = () => {
    setOpen(false);
  }

  const value = {
    getError
  }

  return (
    /**
     * Creamos una etiqueta del contexto y accedemos a su provider,
     * este recibe un value, el cual es un objeto con las propiedades
     * que previamente definimos en el contextProps, pero solo los
     * nombres de la funciones y estados, no los cuerpos.
     */
    <NotificationContext.Provider value={value}>
      {/*
      Ahora podemos pasar el valor de los estados a los componentes
      que esten dentro del contexto, ya sea desde aqui en el provider
      o siendo recibidos a traves de las funciones del contexto
      */}
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

/**
 * Por ultimo, exportamos el customHook para poder usarlo en los
 * componentes donde querramos acceder al contexto
 */
export const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('No existe contexto');
  }

  return context;
}

//* NOTA: No olvidar englobar el BrowserRouter con el 
//* NotificationProvider para que los componentes
//* puedan acceder al contexto