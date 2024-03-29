import React, {useState, useEffect} from 'react'
import './App.css'
import { AboutMe } from './components/aboutMe/AboutMe'
import { Cover } from './components/cover/Cover'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Slider }  from './components/slider/Slider'


function App() {

  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollHeight(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  },[scrollHeight])


  return (
    <div className='App'>
        <Navbar isScrolling={scrollHeight}/>
        <Cover />
        <AboutMe />
        <Slider />
        <Footer />
    </div>
  );
}

export default App;
