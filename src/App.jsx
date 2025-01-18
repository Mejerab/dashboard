
import './App.css'
import Dash from './Dash'
import Detail from './Detail'
import Charts from './Charts'
import Navbar from './Navbar'

function App() {
  return (
    <div className='px-5'>
      <Navbar />
      <div className='grid grid-cols-5'>
        <Dash />
        <div className='col-span-4 space-y-5'>
          <Detail />
          <Charts />
        </div>
      </div>
    </div>
  )
}

export default App
