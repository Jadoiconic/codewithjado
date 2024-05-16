
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Separator from './components/separator/Separator'
import AboutPage from './pages/about/About'
import HomePage from './pages/home/HomePage'
import PortfolioPage from './pages/portifolio/Portifolio'
import ServicePage from './pages/services/Severvice'
import SkillsPage from './pages/skills/skills'

function App() {

  return (
    <div className='w-full px-0 m-0'>
      <Header />
      <HomePage />
      <ServicePage />
      <Separator message={`Contiue`} />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <Footer />
    </div>
  )
}

export default App
