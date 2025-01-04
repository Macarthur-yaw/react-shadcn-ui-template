import bgPic from './assets/bgImage.jpg'
import Footer from './Components/Footer'

import Navbar from './Components/Navbar'

import Homepage from './Pages/Homepage'
import SermonByTopic from './Pages/SermonByTopic'
import Sermons from './Pages/Sermons'

function App() {


  return (
    <>
    <div className='h-[70vh] w-full bg-black bg-opacity-50 absolute top-0'>

    </div>
    <img src={bgPic} alt="background" className='h-[70vh] w-full  object-cover'/>
    <Navbar/>
    <Homepage/>
    <Sermons/>
    <SermonByTopic/>
    <Footer/>
    </>
  )
}

export default App
