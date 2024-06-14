import './App.css'
import Aside from './components/Aside'
import NavBar from './components/Navbar'
import Content from './components/Content'

function App() {
  return (
    <main className='w-full min-h-screen grid grid-rows-[0.8%_1fr] md:grid-rows-[1.2%_1fr] lg:grid-rows-[3%_1fr] xl:grid-rows-[4%_1fr]'>
      <NavBar />
      <div className='grid grid-rows-1 grid-cols-[8%_1fr] md:grid-cols-[5%_1fr] lg:grid-cols-[5%_1fr] xl:grid-cols-[17%_1fr]'>
      <Aside />
      <Content />
      </div>
    </main>
  )
}

export default App
