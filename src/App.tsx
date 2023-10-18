import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'
import { NotificationProvider } from './context/notification'

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
