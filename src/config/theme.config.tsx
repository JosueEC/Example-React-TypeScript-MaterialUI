import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element
}

// Este enum nos permite definir nuestros colores personalizados
// en un solo lugar y poder acceder a los mismos desde el enum
enum ThemePalette {
  SLATE = '#0f172a',
  CYAN = '#06b6d4',
  FONT_GLOBAL = 'JetBrains Mono, monospace',
  // Alerts
  ERROR_MAIN = '#450a0a',
  BG_ERROR_MAIN = '#dc2626',
  SUCCESS_MAIN = '#66bb6a',
  BG_SUCCESS_MAIN = 'rgba(102, 187, 106, 0.1)', 
}

const theme = createTheme({
  // Palette nos permite customizar toda la paleta de color de
  // los elementos
  palette: {
    mode: 'dark',
    background: {
      // Aqui por ejemplo estamos customizando el color de fondo
      // con el color que definimos en nuestro enum
      default: ThemePalette.SLATE
    },
    primary: {
      main: ThemePalette.CYAN
    }
  },
  // typography nos permite customizar las fuentes de texto, puede
  // ser de forma global o por cada etiqueta, como por ejemplo los
  // h2, p, label, etc
  typography: {
    fontFamily: ThemePalette.FONT_GLOBAL
  },
  // components nos permite customizar cada componente de MUI,
  // en la etiqueta style podemos agregar css y de esta forma
  // customizar el button por defecto de MUI
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '0.5em'
        }
      }
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: '0.8em',
          fontSize: '1em'
        }
      },
      // styleOverrides nos permite sobreescribir los estilos
      // de un componente en especifico, en este caso vamos
      // a modificar los estilos del alert de error
      styleOverrides: {
        standardError: {
          border: `1px solid ${ThemePalette.ERROR_MAIN}`,
          background: ThemePalette.BG_ERROR_MAIN
        },
        standardSuccess: {
          border: `1px solid ${ThemePalette.SUCCESS_MAIN}`,
          background: ThemePalette.BG_SUCCESS_MAIN,
        }
      }
    }
  }
})
// Usamos el objeto 'React' para acceder al tipado de React
// en este caso indicamos que esta funcion devuelve un componente
// de React.

// El FC significa 'Funcional Component', lo que significa que
// indicamos que esta funcion devuelve un componente funcional

// El dato generico nos permite tipar los parametros o props que
// van a llegar a la funcion, de lo contrario tendriamos que 
// hacer lo siguiente:
//? { message }: { message: string }
// solo para tipar las props que llegan. Esto se soluciona creando
// un type con las props que van a llegar y pasando este type como
// generico al tipado de React
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}