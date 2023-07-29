import {
  BrowserRouter as Router, // Apenas renomeando BrowserRouter para Router
  Routes,
  Route
} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Toolbar from './components/Toolbar/Toolbar'
import Model1 from './pages/Model1/Model1'
import Model2 from './pages/Model2/Model2'
import Model3 from './pages/Model3/Model3'
import Model4 from './pages/Model4/Model4'
import './App.css'

function App() {

  // const { isLoggedIn } = useContext(AuthContext)

  // mude a variavel abaixo para false e entre na rota /login para simular o layout
  // seu funcionamento simula o const { isLoggedIn } = useContext(AuthContext)
  const isAuthenticated = false;

  return (
    <div className='container-fluid p-0'>

      {isAuthenticated &&
        (<div className='toolbar-area'>
          <Toolbar />
        </div>)}


      <div className='d-flex content-area'>
        {isAuthenticated &&
          (<div className='sidebar-area'>
            <Sidebar />
          </div>)}

        <div className={isAuthenticated ? 'route-area' : 'route-area full-component'}>
          <Router>
            <Routes>
              <Route path='/' exact element={<Model1 />} />              
              <Route path='/modelo1' element={<Model1 />} />
              <Route path='/modelo2' element={<Model2 />} />
              <Route path='/modelo3' element={<Model3 />} />
              <Route path='/login' element={<Model4 />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  )
}

export default App
