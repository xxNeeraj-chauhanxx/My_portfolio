
import './App.css'
import Header from './Components/Header/Header'
import About from './Components/about/About'
import Home from './Components/home/Home'
import Skills from './Components/skills/Skills'
import Footer from './Components/footer/Footer'
import Scroll from './Components/scroll/Scroll'
import Contact from './Components/contact/Contact'
import '@iconscout/unicons/css/line.css';
import Qualification from './Components/qualification/Qualification'
import Portfolio from './Components/projects/Portfolio'



function App() {
  

  return (
    <>
      <Header/>
      
        <Home />
        < About/>
        <Skills />
        <Qualification/>
        <Portfolio/>
        <Contact />
    
      <Footer />
      <Scroll />
    </>
  )
}

export default App
