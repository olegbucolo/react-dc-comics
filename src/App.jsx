import './App.css';
import { HeaderMain } from './components/HeaderMain';
import { MainMain } from './components/MainMain';
import { FooterMain } from './components/FooterMain';
import { JumboMain } from './components/JumboMain';
import { BannerMain} from './components/BannerMain'

function App() {
  
  return (
    <>
      <HeaderMain />
      <JumboMain />
      <MainMain />
      <BannerMain />
      <FooterMain />
    </>
  )
}

export default App
