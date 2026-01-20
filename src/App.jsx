import './App.css';
import { HeaderMain } from './components/HeaderMain';
import { MainMain } from './components/MainMain';
import { FooterMain } from './components/FooterMain';
import { JumboMain } from './components/main/JumboMain';
import { BannerMain} from './components/main/BannerMain'

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
