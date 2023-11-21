import {
  Snackbar,
  Alert,
  AlertColor,
  Typography
} from '@mui/material'

type NotificationProps = {
  open: boolean,
  message: string,
  /**
   * severity toma el valor de un tipo usado por el componente Alert
   * por eso su tipado es AlertColor o undefinded, porque este puede
   * o no venir
   */
  severity: AlertColor | undefined,
  /**
   * handleClose queda como una funcion que, para este caso, no hace
   * nada, ya que solo queremos que la notificacion desaparezca al
   * cerrarse, si que se ejecute alguna otra accion
   */
  handleClose: () => void
}

export const Notification: React.FC<NotificationProps> = ({ open, message, severity, handleClose }) => {
  return (
    /**
     * Snaclbar es el componente de MaterialUI que nos permite lanzar
     * notificaciones de tipo toast.
     * 
     * Dentro agregamos un Alert para darle un estilado diferente al
     * toast usando el componente Alert
     */
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={4000}
      open={open}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
      >
        <Typography>{message}</Typography>
      </Alert>
    </Snackbar>
  )
}