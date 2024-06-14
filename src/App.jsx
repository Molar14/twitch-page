import './App.css'
import Aside from './components/Aside'
import NavBar from './components/Navbar'
import Content from './components/Content'

function App() {
  return (
    <main className='w-full min-h-screen grid grid-rows-[6%_1fr]'>
      <NavBar />
      <div className='grid grid-rows-1 grid-cols-[17%_1fr]'>
      <Aside />
      <Content />
      </div>
    </main>
  )
}

export default App
