import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  const routes = useRoutes()

  return (
    <div className='app'>
      <Router>
        {routes}
      </Router>
      <ToastContainer
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
      />
    </div>
  )
}

export default App
