import './App.css'
import Header from './components/Header'
import Contacts from './pages/Contacts'
import Enter from './pages/Enter'
import Logged from './pages/Logged'
import RegisterContact from './pages/RegisterContact'

function App() {

  return (
    <div>
      <Header/>
      {/* <Contacts/> */}
      {/* <Logged/> */}
      <RegisterContact/>
      {/* <Enter/> */}
    </div>
  )
}

export default App
